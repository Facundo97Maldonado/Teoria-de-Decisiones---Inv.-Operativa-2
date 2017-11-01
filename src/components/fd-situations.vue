<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<ul>
					<li v-for="sit in situations">
						{{ sit }}
					</li>
				</ul>
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
			getSituations() {
				this.$emit('getSituations');
			}
		}
	}
</script>

<style>
	
</style>