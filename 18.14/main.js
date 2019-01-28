Vue.filter('meter', function(val, unit) {
	val = val || 0;
	unit = unit || '米';
	return (val / 1000).toFixed(2) + unit;
})
new Vue({
	el: '#test',
	data:{
		length: 10
	}
})