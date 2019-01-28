var test = new Vue({
	el: "#test",
	methods: {
		onClick: function() {
			console.log('clicked');
		},
		onEnter: function() {
			console.log('mouse enter');
		},
		onLeave: function() {
			console.log('mouse leave');
		},
		onSubmit: function() {
			console.log('submitted');
		},
		onEntered: function() {
			console.log('entered');
		},
	}
});