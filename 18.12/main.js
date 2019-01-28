Vue.component('balance', {
	template: `
	<div>
		<show @show-balance="show_balance=true"></show>
		<div v-if="show_balance">您的余额是：￥23425</div>
		
	</div>
	`,
	data:function() {
		return {
			show_balance: false,
		}
	}
});
Vue.component('show', {
	template: '<button @click="on_click">显示余额</button>',
	methods: {
		on_click(){
			this.$emit('show-balance');
		} 	
	}
});
new Vue({
	el: "#test"
})