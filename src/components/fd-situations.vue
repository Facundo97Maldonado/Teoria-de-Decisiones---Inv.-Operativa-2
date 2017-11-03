<template>
	<div class="container">
		<div class="row" v-if="situations.length">
			<div class="col-md-12">
				<h3 class="situationsTitle">
					Situaciones creadas
				</h3>
			</div>
		</div>
		<div class="row tableRow" v-for="(sit,i) in situations">
			<div class="col-md-10 offset-1">
				<h2 class="noSituations" v-if="!situations.length">
					No posee situaciones aun
				</h2>
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
									<th scope="col" v-for="alt in situations[i].alternatives">
										{{alt}}
									</th>
								</tr>
								<tr v-for="(scen,y) in situations[i].scenarios">
									<td scope="row">
										{{scen}}
									</td>
									<td v-for="(alt,x) in situations[i].alternatives" contenteditable> 
										<!-- EMPTY INPUTS HERE --> 
									</td>
								</tr>
							</thead>
						</table>
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
									@click="calculateByHurwicz"
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
								<h6 style="text-align: center;">Ingresa el <strong>α</strong>: </h6>
								<input type="text" class="form-control">
								<button onclick="this.parentElement.style.display='none';"
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
		name: 'fdSituations',
		data() {
			return {
				situations: [],
				alphaAssign: false
			}
		},
		methods: {
			calculateByOptimist() {

			},
			calculateByPesimist() {

			},
			calculateByHurwicz() {

			},
			calculateByLaplace() {

			},
			calculateBySavage() {

			}
		},
		created(){
			this.situations = situationService.getSituations();
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