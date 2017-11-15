<template>
	<div class="container">
		<div class="col-md-12">
			<h3 class="situationsTitle">
				{{situation.tittle}}
			</h3>
		</div>
		<div class="row tableRow">
			<div class="col-md-10 offset-1">
				<!-- TABLE GENERATED -->
				<div class="row">
					<div class="col-md-12">
						<table class="table table-responsive">
							<thead>
								<tr class="trow">
									<th scope="col">
										<!-- EMPTY CORNER IMAGE -->
										<img width="" src="/images/tableSeparator.jpg" >
									</th> 
									<th scope="col" v-for="alt in situation.alternatives">
										{{alt}}
									</th>
								</tr>
								<tr v-for="(scen,y) in situation.scenarios">
									<td scope="row">
										{{scen}}
									</td>
									<td v-for="(alt,x) in situation.alternatives"> 
										<input class="form-control" type="number" 
											name=""  v-model="fields[x][y]">
										<!-- EMPTY INPUTS HERE --> 
									</td>
								</tr>
								<tr v-if="calcular">
									<td>Resultados:</td>
									<td v-for="r in resultados">
										{{r}}
									</td>
								</tr>
							</thead>
						</table>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<!-- NOT ALL THE VALUES SETTED -->
						<h1 class="options" v-if="notAllTheValues">INGRESE TODOS LOS VALORES ANTES DE ELEGIR LA POSTURA</h1>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<h4 class="options">
							Selecciona tu postura para tomar una decision:
						</h4>
					</div>
				</div>
				<!-- OPTIONS SECTION -->
				<div class="row selectAnOption">
					<!-- OPTIMIST -->
					<div class="col-md-2 offset-1">
						<div class="row">
							<div class="col-md-12">
								<button	@click="calculateByOptimist()" 
									class="btn btn-success btn-lg btn-block">
									Optimista
								</button>
							</div>
						</div>
					</div>
					<!-- PESIMIST -->
					<div class="col-md-2">
						<div class="row">
							<div class="col-md-12">
								<button	@click="calculateByPesimist()" 
									class="btn btn-danger btn-lg btn-block">
									Pesimista
								</button>
							</div>
						</div>
					</div>
					<!-- HURWICZ -->
					<div class="col-md-2">
						<div class="row">
							<div class="col-md-12">
								<button	@click="openHurwicz"
									class="btn btn-warning btn-lg btn-block">
									Hurwicz
								</button>
							</div>
						</div>
					</div>
					<!-- LAPLACE -->
					<div class="col-md-2">
						<div class="row">
							<div class="col-md-12">
								<button	@click="calculateByLaplace()"
									class="btn btn-info btn-lg btn-block">
									Laplace
								</button>
							</div>
						</div>
					</div>
					<!-- SAVAGE -->
					<div class="col-md-2">
						<div class="row">
							<div class="col-md-12">
								<button	@click="calculateBySavage()"
										class="btn btn-primary btn-lg btn-block">
									Savage
								</button>
							</div>
						</div>
					</div>
				</div>
				<!-- FOR HURWICZ -->
				<div class="row forHurwicz" id="forHurwicz" v-show="alphaAssign == true">
					<div class="col-md-2 offset-5">
						<div class="row">
							<div class="col-md-12">
								<h6 style="text-align: center;">Ingresa el <strong>α</strong>: 0.</h6>
								<input v-model="alpha" type="number" min="0" class="form-control">
								<button @click="calculateByHurwicz()"
									style="center-align" 
									class="btn btn-warning btn-sm btnAssignAlpha">
									Aceptar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- RESULTS -->
		<div class="row" style="margin-bottom:75px;">
			<div class="col-md-6">
				<div class="row">
					<div class="col-md-12">
						<h3 v-if="decision">Alternativa a elegir:</h3>
						<ul>
							<li v-if="decision">
								<h4>{{decision}}</h4>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-4 offset-1">
				<div class="row">
					<div class="col-md-12">
						<h3 v-if="postura">Postura utilizada:</h3>
						<ul>
							<li v-if="postura">
								<h4>{{postura}}</h4>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import situationService from '../services/situationService.js';

	export default {
		name: 'fdOneSituation',
		data() {
			return {
				situation: {},
				alphaAssign: false,
				alpha: 0,
				fields: [],
				calcular: false,
				resultados: [],
				decision: '',
				postura: '',
				notAllTheValues: false
			}
		},
		computed: {
            Id() {
                return this.$route.params.id;
            }
        },
		methods: {
			calculateByOptimist() {
				if(!this.verifyAllTheFields()){
					this.notAllTheValues = true;
					return;
				}
				this.parser();
				this.notAllTheValues = false;
				this.resultados = [];
				this.decision = '';
				//Searchs the bigger value of each column
				for(let i=0;i<this.situation.alternatives.length;i++){
					let resultado = this.fields[i][0];
					for(let j=0;j<this.situation.scenarios.length;j++){
						if(this.fields[i][j]>resultado){
							resultado = this.fields[i][j];
						}
					}
					this.resultados.push(resultado); 
				}
				//Searchs the bigger from the biggers
				let resultado = this.resultados[0];
				for(let i=0;i<this.resultados.length;i++){
					if(this.resultados[i]>resultado){
						resultado = this.resultados[i];
					}
				}
				this.postura = "Optimista";
				this.calcular = true;
				this.decision = this.situation.alternatives[this.resultados.indexOf(resultado)];
			},
			calculateByPesimist() {
				if(!this.verifyAllTheFields()){
					this.notAllTheValues = true;
					return;
				}
				this.parser();
				this.notAllTheValues = false;
				this.resultados = [];
				this.decision = '';
				//Searchs the lover value of each column
				for(let i=0;i<this.situation.alternatives.length;i++){
					let resultado = this.fields[i][0];
					for(let j=0;j<this.situation.scenarios.length;j++){
						if(this.fields[i][j]<resultado){
							resultado = this.fields[i][j];
						}
					}
					this.resultados.push(resultado); 
				}
				//Searchs the bigger from de lowers
				let resultado = this.resultados[0];
				for(let i=0;i<this.resultados.length;i++){
					if(this.resultados[i]>resultado){
						resultado = this.resultados[i];
					}
				}
				this.postura = "Pesimista";
				this.calcular = true;
				this.decision = this.situation.alternatives[this.resultados.indexOf(resultado)];
			},
			calculateByHurwicz() {
				if(!this.verifyAllTheFields()){
					this.notAllTheValues = true;
					this.alphaAssign = false;
					return;
				}
				this.parser();
				this.notAllTheValues = false;
				this.resultados = [];
				this.decision = '';
				for(let i=0;i<this.situation.alternatives.length;i++){
					//busca el mayor de cada columna
					let mayor = this.fields[i][0];
					for(let j=0;j<this.situation.scenarios.length;j++){
						if(this.fields[i][j]>mayor){
							mayor = this.fields[i][j];
						}
					}
					//Searchs the lower of each column
					let menor = this.fields[i][0];
					for(let j=0;j<this.situation.scenarios.length;j++){
						if(this.fields[i][j]<menor){
							menor = this.fields[i][j];
						}
					}
					//It does alpha calculate
					let valor = this.alpha/10*mayor + (1-this.alpha/10)*menor;
					this.resultados.push(valor); 
				}
				//Searchs the bigger of the results
				let resultado = this.resultados[0];
				for(let i=0;i<this.resultados.length;i++){
					if(this.resultados[i]>resultado){
						resultado = this.resultados[i];
					}
				}
				this.alphaAssign = false;
				this.postura = "Hurwicz con alpha:"+this.alpha/10;
				this.calcular = true;
				this.decision = this.situation.alternatives[this.resultados.indexOf(resultado)];

			},
			calculateByLaplace() {
				if(!this.verifyAllTheFields()){
					this.notAllTheValues = true;
					return;
				}
				this.parser();
				this.notAllTheValues = false;
				this.resultados = [];
				this.decision = '';
				//Average of each column
				let total = 0;
				let cant = 0;
				let promedio = 0;
				for(let i=0;i<this.situation.alternatives.length;i++){
					total = 0;
					cant = 0;
					promedio = 0;
					for(let j=0;j<this.situation.scenarios.length;j++){
						total = total + this.fields[i][j];
						cant = cant + 1;
					}
					promedio = total/cant;
					this.resultados.push(promedio);
				}
				//Searchs the bigger of the results
				let resultado = this.resultados[0];
				for(let i=0;i<this.resultados.length;i++){
					if(this.resultados[i]>resultado){
						resultado = this.resultados[i];
					}
				}
				this.postura = "Laplace";
				this.calcular = true;
				this.decision = this.situation.alternatives[this.resultados.indexOf(resultado)];
			},
			calculateBySavage() {
				if(!this.verifyAllTheFields()){
					this.notAllTheValues = true;
					return;
				}
				this.parser();
				this.notAllTheValues = false;
				this.resultados = [];
				this.decision = '';
				//It generates a new table with values substracted

				let newFields = this.copy2DArray(this.situation.alternatives.length);
				// let newFields = this.fields.concat([]);  NI ESTA NI LA LINEA DE ARRIBA FUNCIONAN PARA QUE NO SE CAMBIEN LOS VALORES DE PANTALLA, NO SE POR QUE
				for(let i=0;i<this.situation.alternatives.length;i++){
					//busca el mayor de cada columna
					let mayor = this.fields[i][0];
					for(let j=0;j<this.situation.scenarios.length;j++){
						if(this.fields[i][j]>mayor){
							mayor = this.fields[i][j];
						}
					}
					//Replace values
					for(let j=0;j<this.situation.scenarios.length;j++){
						newFields[i][j] = mayor - newFields[i][j];
					}
				}
				//It searchs the bigger values of the new table
				for(let i=0;i<this.situation.alternatives.length;i++){
					let resultado = newFields[i][0];
					for(let j=0;j<this.situation.scenarios.length;j++){
						if(newFields[i][j]>resultado){
							resultado = newFields[i][j];
						}
					}
					this.resultados.push(resultado); 
				}
				//Searchs the lower from the biggers
				let resultado = this.resultados[0];
				for(let i=0;i<this.resultados.length;i++){
					if(this.resultados[i]<resultado){
						resultado = this.resultados[i];
					}
				}
				this.postura = "Savage";
				this.calcular = true;
				this.decision = this.situation.alternatives[this.resultados.indexOf(resultado)];
			},
			openHurwicz(){
				this.alphaAssign = true;
			},
			verifyAllTheFields(){
				for (let i=0;i<this.situation.alternatives.length;i++){
            		for(let j=0;j<this.situation.scenarios.length;j++){
            			if(this.fields[i][j] === undefined){
            				return false;
            			}
            		}
            	}
            	return true;
			},
			parser(){
				for(let i=0; i<this.situation.alternatives.length;i++){
					for(let j=0; j<this.situation.scenarios.length;j++){
						this.fields[i][j] = parseInt(this.fields[i][j]);
					}
				}
			},
			Create2DArray(rows) {
				for (let i=0;i<rows;i++) {
				     this.fields[i] = [];
				  }
			},
			copy2DArray(rows){
				let newFields = [];
				for (let i=0;i<rows;i++) {
					newFields[i] = [];
				    newFields[i].push(...this.fields[i]);
				  }
				return newFields;
			}
		},
		watch: {
            '$route.params.id': function() {
                this.situation = situationService.getSituationById(this.Id);
            }
        },
		created(){
			this.situation = situationService.getSituationById(this.Id);
			this.Create2DArray(this.situation.alternatives.length);
		}
	}
</script>

<style>
	.trow {
		padding-left: -300px;
	}
	.situationsTitle {
		margin-top: 50px;
		text-align: center;
		margin-bottom: 25px;
	}
	.noSituations {
		text-align: center;
		margin-top: 200px;
	}
	.tableRow {
		margin-top: 50px;
	}
	.options {
		text-align: center;
		margin-bottom: 30px;
	}
	.selectAnOption {
		margin-bottom: 50px;
	}
	.forHurwicz {
		margin-top: -45px;
	}
	.btnAssignAlpha {
		margin-top: 10px;
		margin-left: 30px;
	}
</style>