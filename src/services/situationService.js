export default {
	getSituations() {
		return JSON.parse(localStorage.getItem('situations')) || [];
	},
	addSituation(arr_alternatives, arr_scenarios) {
		const situations = this.getSituations();
		situations.push({alternatives: arr_alternatives, scenarios: arr_scenarios});
		localStorage.setItem('situations', JSON.stringify(situations));
	}
}