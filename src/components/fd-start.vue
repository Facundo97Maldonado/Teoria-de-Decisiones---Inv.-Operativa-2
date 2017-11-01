<template>
	<div class="container">
		<div class="row init">
			<div class="col-md-4 offset-1">
				<div class="row">
					<div class="col-md-12">
						<router-link to="/situations">
							<a href="#" class="btn btn-info btn-lg btn-block" role="button">
								Mis situaciones
							</a>
						</router-link>
					</div>
				</div>
			</div>
			<div class="col-md-4 offset-1">
				<div class="row">
					<div class="col-md-12">
						<router-link to="/add">
							<a href="#" class="btn btn-secondary btn-lg btn-block" role="button">
								Agregar situacion
							</a>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'fdStart',
		data() {
			return {

			}
		}
	}
</script>

<style>
	.init {
		margin-top: 20%;
	}
</style>