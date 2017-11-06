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
						<table class="table table-bordered table-responsive">
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
										<input type="number" name=""  v-model="fields[x][y]">
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
						<h3 v-if="decision">Alternativa a elegir: {{decision}}</h3>
						<h3 v-if="postura">Postura utilizada: {{postura}}</h3>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<h4 class="options">
							Selecciona tu postura para tomar una decision
						</h4>
					</div>
				</div>
				<!-- OPTIONS SECTION -->
				<div class="row selectAnOption">
					<!-- OPTIMIST -->
					<div class="col-md-2 offset-1">
						<div class="row">
							<div class="col-md-12">
								<button @click="calculateByOptimist()" 
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
								<button @click="calculateByPesimist" 
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
								<button 
									onclick="document.getElementById('forHurwicz').style.display='block';"
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
								<button @click="calculateByLaplace"
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
								<button @click="calculateBySavage"
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
								<button onclick="this.parentElement.style.display='none';" 
									@click="calculateByHurwicz"
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
				postura: ''
			}
		},
		computed: {
            Id() {
                return this.$route.params.id;
            }/*,
            noAllTheFields(){
            	let isField = true;
            	for (let i=0;i<this.situation.scenarios.length;i++){
            		for(let j=0;j<this.situation.alternatives.length;j++){
            			if(!this.fields[i][j]){
            				isField = false;
            			}
            		}
            		return isField;
            	}
            }*/
        },
		methods: {
			calculateByOptimist() {
				this.resultados = [];
				this.decision = '';
				//busca el mayor de cada columna
				for(let i=0;i<this.situation.alternatives.length;i++){
					let resultado = this.fields[i][0];
					for(let j=0;j<this.situation.scenarios.length;j++){
						if(this.fields[i][j]>resultado){
							resultado = this.fields[i][j];
						}
					}
					this.resultados.push(resultado); 
				}
				//busca el mayor de los mayores
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
				this.resultados = [];
				this.decision = '';
				//busca el menor de cada columna
				for(let i=0;i<this.situation.alternatives.length;i++){
					let resultado = this.fields[i][0];
					for(let j=0;j<this.situation.scenarios.length;j++){
						if(this.fields[i][j]<resultado){
							resultado = this.fields[i][j];
						}
					}
					this.resultados.push(resultado); 
				}
				//busca el mayor de los menores
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
					//busca el menor de cada columna
					let menor = this.fields[i][0];
					for(let j=0;j<this.situation.scenarios.length;j++){
						if(this.fields[i][j]<menor){
							menor = this.fields[i][j];
						}
					}
					//hace la cuenta con el apha
					let valor = this.alpha/10*mayor + (1-this.alpha/10)*menor;
					this.resultados.push(valor); 
				}
				//busca el mayor de los resultados
				let resultado = this.resultados[0];
				for(let i=0;i<this.resultados.length;i++){
					if(this.resultados[i]>resultado){
						resultado = this.resultados[i];
					}
				}
				this.postura = "Hurwicz con alpha:"+this.alpha/10;
				this.calcular = true;
				this.decision = this.situation.alternatives[this.resultados.indexOf(resultado)];

			},
			calculateByLaplace() {
				this.resultados = [];
				this.decision = '';
				//sacar promedio de cada columna
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
				//busca el mayor de los resultados
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
				this.resultados = [];
				this.decision = '';
				//generar nueva tabla con valores restados

				let newFields = Object.assign(this.fields, newFields);
				// let newFields = this.fields.concat([]);  NI ESTA NI LA LINEA DE ARRIBA FUNCIONAN PARA QUE NO SE CAMBIEN LOS VALORES DE PANTALLA, NO SE POR QUE
				for(let i=0;i<this.situation.alternatives.length;i++){
					//busca el mayor de cada columna
					let mayor = this.fields[i][0];
					for(let j=0;j<this.situation.scenarios.length;j++){
						if(this.fields[i][j]>mayor){
							mayor = this.fields[i][j];
						}
					}
					//reemplaza valores
					for(let j=0;j<this.situation.scenarios.length;j++){
						newFields[i][j] = mayor - newFields[i][j];
					}
				}
				//buscar mayores de cada columna en tabla nueva
				for(let i=0;i<this.situation.alternatives.length;i++){
					let resultado = newFields[i][0];
					for(let j=0;j<this.situation.scenarios.length;j++){
						if(newFields[i][j]>resultado){
							resultado = newFields[i][j];
						}
					}
					this.resultados.push(resultado); 
				}
				//buscar el menor de los mayores
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
			Create2DArray(rows) {
			for (let i=0;i<rows;i++) {
			     this.fields[i] = [];
			  }
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