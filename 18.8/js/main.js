var test = new Vue({
	el: "#test",
	data: {
		math: null,
		chilish: null,
		english: null,
	},
	computed: {
		sum: function(){
			return parseFloat(this.math) + parseFloat(this.chilish) + parseFloat(this.english);
		},
		average: function(){
			return Math.round(this.sum / 3);
		},
	}
});