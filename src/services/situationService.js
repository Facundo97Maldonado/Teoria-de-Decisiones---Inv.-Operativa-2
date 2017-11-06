export default {
	getSituations() {
		return JSON.parse(localStorage.getItem('situations')) || [];
	},
	setSituations(situations){
		localStorage.setItem('situations', JSON.stringify(situations));
	},
	addSituation(arr_alternatives, arr_scenarios, tit) {
		const situations = this.getSituations();
		situations.push({alternatives: arr_alternatives, scenarios: arr_scenarios, tittle: tit, id: this.getLastId()+1});
		localStorage.setItem('situations', JSON.stringify(situations));
	},
	getLastId(){
		const situations = JSON.parse(localStorage.getItem('situations') || '[]');
		if(!situations.length){
			return 0;
		}
		return situations[(situations.length)-1].id;
	},
	getSituationById(id){
		return JSON.parse(localStorage.getItem('situations')).find(s => s.id == id);
	}
}