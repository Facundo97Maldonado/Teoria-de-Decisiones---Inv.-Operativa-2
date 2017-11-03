<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<div class="container">
		  	<router-link to="/start"><a class="navbar-brand initTitle">Inicio</a></router-link>
			<button class="navbar-toggler toggler-btn" type="button" data-toggle="collapse" 
					data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" 
					aria-expanded="false" aria-label="Toggle navigation">
			   	<span class="navbar-toggler-icon"></span>
			</button>
		  	<form class="form-inline">
		    	<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
			  		<ul class="navbar-nav mr-auto">
			  			<li class="nav-item">
			  				<router-link to="/about">
			  					<a class="nav-link initTitle">Instrucciones</a>
			  				</router-link>
			  			</li>
			  			<li class="nav-item">
			  				<router-link to="/situations">
			  					<a class="nav-link initTitle">Situaciones</a>
			  				</router-link>
			  			</li>
			  			<li class="nav-item">
			  				<router-link to="/add">
			  					<a class="nav-link initTitle">Agregar</a>
			  				</router-link>
			  			</li>
			  		</ul>
		  		</div>
		  	</form>
	  	</div>
	</nav>
</template>

<script>
	export default {
		name: 'fdNavbar',
	}
</script>

<style>
	.toggler-btn {
		margin-left: 335px;
	}
	.initTitle {
		color: #d9d9d9 !important;
	}
	.initTitle:hover{
		color: white !important;
	}
</style>