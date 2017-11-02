<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<div class="container">
		  	<router-link to="/start"><a class="navbar-brand initTitle">Inicio</a></router-link>
		  	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		  		<ul class="navbar-nav mr-auto">
		  			<li class="nav-item">
		  				<router-link to="/situations">
		  					<a class="nav-link situation initTitle">Situaciones</a>
		  				</router-link>
		  			</li>
		  			<li class="nav-item">
		  				<router-link to="/about">
		  					<a class="nav-link initTitle">Instrucciones</a>
		  				</router-link>
		  			</li>
		  		</ul>
		  	</div>
	  	</div>
	</nav>
</template>

<script>
	export default {
		name: 'fdNavbar',
	}
</script>

<style>
	.situation {
		margin-left: 650px;
	}
	.initTitle {
		color: #d9d9d9 !important;
	}
	.initTitle:hover{
		color: white !important;
	}
</style>