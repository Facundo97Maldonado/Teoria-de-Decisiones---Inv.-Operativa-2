<template>
	<div class="container">
		<div class="row">
			<div class="col-md-10 offset-1">
				<div class="row">
					<div class="col-md-12">
						<h2 class="noSituations" v-if="!situations.length">
							No posee situaciones aun
						</h2>
						<table v-for="(sit,i) in situations" class="table">
							<thead>
								<tr class="trow">
									<th scope="col">
										<img width="" src="/images/tableSeparator.jpg" 
										alt=""><!-- ESQUINA VACIA -->
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
										<!--ACA VAN LOS INPUTS --> 
									</td>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'fdSituations',
		props: ['situations'],
		data() {
			return {
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.trow {
		padding-left: -300px;
	}
	.noSituations {
		text-align: center;
		margin-top: 200px;
	}
</style>