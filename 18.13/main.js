var Event = new Vue();
Vue.component('mywords', {
	template: `
		<div>
			他在说：<input @keyup="on_change" v-model="i_said" />
		</div>
	`,
	methods: {
		on_change: function() {
			Event.$emit('i-say', this.i_said);
		}
	},
	data: function(){
		return {
			i_said: '',
		}
	},

})
Vue.component('record', {
	template: `<div>记录：{{recorded}}</div>`,
	data: function() {
		return {
			recorded: '',
		};
	},
	mounted: function() {
		var me = this;
		Event.$on('i-say', function(data) {
			me.recorded = data;
		})
	} 
})
new Vue({
	el: "#test"
})