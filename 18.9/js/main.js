var Alert = {
	template: '<button @click="on_click">点我</button>',
	methods: {
		on_click: function() {
			alert("hello world");
		}
	}
};

new Vue({
	el: "#test",
	components: {
		alert: Alert
	},
});