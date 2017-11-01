<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h3 class="title">Ingresa los datos necesarios para crear la situacion</h3>
			</div>
		</div>
		<div class="row addFeatures">
			<div class="col-md-5">
				<div class="row">
					<div class="col-md-12">
						<h4 class="subtitle">Agrega las alternativas:</h4>
						<input v-model="alternative" type="text" class="form-control" 
							placeholder="Construir en zona..">
						<button :disabled="!noAlternative" @click="addAlternative(alternative)"
							class="btn btn-outline-success submitBtn">
							Agregar alternativa
						</button>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<h6>Alternativas agregadas:</h6>
						<p class="noContent" v-if="!alternatives.length">
							No has agregado alternativas aun
						</p>
						<ul>
							<li v-for="alternative in alternatives">
								{{ alternative }}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-5 offset-2">
				<div class="row">
					<div class="col-md-12">
						<h4 class="subtitle">Agrega los escenarios:</h4>
						<input  v-model="escenario" type="text" class="form-control" 
							placeholder="Lluvia torrencial..">
						<a :disabled="!noEscenario" @click="addEscenario(escenario)"
							class="btn btn-outline-warning submitBtn">
							Agregar escenario
						</a>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<h6>Escenarios agregados agregadas:</h6>
						<p class="noContent" v-if="!escenarios.length">
							No has agregado escenarios aun
						</p>
						<ul>
							<li v-for="escenario in escenarios">
								{{ escenario }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="row almostAdd">
			<div class="col-md-6 offset-3">
				<button type="button" class="btn btn-primary btn-block" data-toggle="modal" 
					data-target="#exampleModal">
					Agregar situacion
				</button>
			</div>
		</div>
		<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" 
			aria-labelledby="exampleModalLabel" aria-hidden="true">
		  	<div class="modal-dialog" role="document">
			    <div class="modal-content">
			      	<div class="modal-header">
			        	<h5 class="modal-title" id="exampleModalLabel">Confirmar Accion</h5>
			        	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          		<span aria-hidden="true">&times;</span>
			        	</button>
			      	</div>
			      	<div class="modal-body">
			        	Estas seguro de agregar esta situacion?
			      	</div>
			      	<div class="modal-footer">
			        	<button type="button" class="btn btn-secondary" data-dismiss="modal">
			        		Cancelar
			        	</button>
			        	<button type="button" class="btn btn-primary">Si, estoy seguro</button>
			      	</div>
			    </div>
		  	</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'fdAdd',
		data() {
			return {
				alternative: '',
				alternatives: [],
				escenario: '',
				escenarios: []
			}
		},
		computed: {
			noAlternative() {
				return this.alternative;
			},
			noEscenario() {
				return this.escenario;
			}
		},
		methods: {
			addAlternative(alternative) {
				this.alternatives.push(alternative);
				this.alternative = '';
			},
			addEscenario(escenario) {
				this.escenarios.push(escenario);
				this.escenario = '';
			}
		}
	}
</script>

<style>
	.title {
		margin-top: 55px;
		text-align: center;
	}
	.subtitle {
		margin-top: 15px;
	}
	.addFeatures {
		margin-top: 50px;
	}
	.submitBtn {
		margin-top: 30px;
		margin-bottom: 30px;
	}
	.noContent {
		margin-top: 15px;
		text-align: center;
	}
	.almostAdd {
		margin-top: 30px;
	}
</style>