import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		/*return {
			"ProductName": "Ponderosa",
			"Dimensions": "26cm"
		}*/
		return Ember.$.getJSON("/data/production.json")
	}
});
