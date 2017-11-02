<template>
	<div class="container">
		<div class="row title">
			<div class="col-md-6 offset-3">
				<h3>Instrucciones de uso del sistema</h3>
			</div>
		</div>
		<div class="row instruct">
			<div class="col-md-6">
				<div class="row">
					<div class="col-md-12 separator">
						<h4 class="subTitle">Agregar situacion por primera vez</h4>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="row">
					<div class="col-md-12">
						<h4 class="subTitle">Ver una situacion</h4>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="row">
					<div class="col-md-12 separator">
						<ul class="list">
							<li class="element">
								<h6>En la pagina principal, presionar el boton 
									<strong>Agregar Situacion</strong>
								</h6>
							</li>
							<li class="element">
								<h6>Agregar las  
									<strong>alternativas</strong> y <strong>escenarios</strong> correspondientes
								</h6>
							</li>
							<li class="element">
								<h6><strong>Confirmar</strong> que los datos sean correctos</h6>
							</li>
							<li class="element">
								<h6>Continuar con los pasos explicados del lado 
									<strong>derecho</strong> de la pagina
								</h6>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="row">
					<div class="col-md-12">
						<ul class="list">
							<li class="element">
								<h6>
									En la pagina principal, presionar el boton 
									<strong>Mis Situaciones</strong>
								</h6>
								<h6>
									O bien, en el <strong>menu superior</strong> 
									presionar <strong>Situaciones</strong>
								</h6>
							</li>
							<li class="element">
								<h6>
									Seleccionar la <strong>situacion</strong> correspondiente 
								</h6>
							</li>
						</ul>
						<div class="row">
							<div class="col-md-6 subList">
								<div class="row">
									<div class="col-md-12">
										<h5 class="subTitle">
											Sin datos
										</h5>
										<ul class="list">
											<li class="element">
												<h6>
													Presionar <strong>ver situacion</strong>
												</h6>
											</li>
											<li class="element">
												<h6>
													<strong>Agregar</strong> los datos correspondientes
												</h6>
											</li>
											<li class="element">
												<h6>
													Seleccionar <strong>postura</strong> de 
													la decision a tomar
												</h6>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="row">
									<div class="col-md-12">
										<h5 class="subTitle">
											Con datos
										</h5>
										<ul class="list">
											<li class="element">
												<h6>
													Presionar <strong>ver situacion</strong>
												</h6>
											</li>
											<li class="element">
												<h6>
													Seleccionar <strong>postura</strong> de
													la decision a tomar
												</h6>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'fdAbout'
	}
</script>

<style>
	.title {
		margin-top: 75px;
		padding-bottom: 30px;
		border-bottom: 1px solid lightgrey;
	}
	.instruct {
		margin-top: 50px;
	}
	.separator {
		border-right: 1px solid lightgrey;
	}
	.subTitle {
		text-align: center;
	}
	.list {
		margin-top: 25px;
	}
	.element {
		margin-bottom: 10px;
	}
	.subList {
		border-right: 1px solid lightgrey;
	}
</style>