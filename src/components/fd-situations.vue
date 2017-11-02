<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<table v-for="(sit,i) in situations">
					<tr>
						<th></th> <!-- LA ESQUINA VACIA -->"
						<th v-for="alt in situations[i].alternatives">
							{{alt}}
						</th>
					</tr>
					<tr v-for="(scen,y) in situations[i].scenarios">
						<td>
							{{scen}}
						</td>
						<td v-for="(alt,x) in situations[i].alternatives"> <!--ACA VAN LOS INPUTS --> </td>
					</tr>
				</table>
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
	
</style>