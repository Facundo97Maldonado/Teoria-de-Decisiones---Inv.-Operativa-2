<template>
	<div class="container">
		<h2 class="noSituations" v-if="!situations.length">
			No posee situaciones aun
		</h2>
		<div class="row" v-if="situations.length">
			<div class="col-md-12">
				<h3 class="situationsTitle">
					Situaciones creadas
				</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="row tableRow" v-for="(sit,i) in situations">
					<div class="col-md-12">
						<div class="row">
							<div class="col-md-8 offset-2">
								<div class="row">
									<div class="col-md-12">
										<h4 style="text-align: center;margin-bottom: 50px;">
											Situacion: {{ sit.tittle }}
										</h4>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-10 offset-1">
								<div class="row showFeatures">
									<div class="col-md-5 offset-1">
										<div class="row">
											<div class="col-md-12">
												<h6>Alternativas:</h6>
												<ul>
													<li v-for="alternative in sit.alternatives">
														{{ alternative }}
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="col-md-5 offset-1">
										<div class="row">
											<div class="col-md-12">
												<h6>Escenarios:</h6>
												<ul>
													<li v-for="scenario in sit.scenarios">
														{{ scenario }}
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>                
							</div>
						</div>
						<!-- END TABLE -->
						<div class="row">
							<div class="col-md-4 offset-2">
								<router-link :to="{name: 'oneSituation', params: {id: sit.id}}">
					                <button class="btn btn-info toCenter">Ir a la situacion</button>
					            </router-link>
							</div>
							<div class="col-md-4">
								<button @click="removeSituation(sit)" 
									class="btn btn-danger toCenter">
									Eliminar situacion
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
				situations: []
			}
		},
		methods: {
			//Not working, dont know why, need review
			removeSituation(sit) {
				const index = this.situations.indexOf(sit);
				console.log(index);
				this.situations.splice(index, 1);
				console.log(this.situations + " after delete");
			}
		},
		created(){
			this.situations = situationService.getSituations();
		}
	}
</script>

<style>
	.toCenter {
		margin-left: 60px;
	}
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