var base = {
	methods: {
		show:function(){
			this.visible = true;
		},
		hide: function() {
			this.visible = false;
		},
		toggle: function(){
			this.visible = !this.visible;
		},
	},
	data: function(){
		return {
			visible: false,
		}
	},
}

Vue.component('tooltip', {
	template: `
	<div>
		<span @mouseenter="show" @mouseleave="hide">看这里</span>
		<div v-if="visible">
			<p>便捷和安全，是移动支付的要义</p>
		</div>
	</div>
	`,
	mixins: [base]
})

Vue.component('Popup', {
	template: `
	<div>
		<button @click="toggle">点我</button>
		<div v-if="visible">
			<p>便捷和安全，是移动支付的要义。在安全性方面，华为自研的麒麟芯片实现了主芯片与安全芯片的统一，确保了芯片级的安全保障</p>
		</div>
	</div>
	`,
	mixins: [base]
})

new Vue({
	el: "#app"

})