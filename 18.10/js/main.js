Vue.component('like', {
	template: '<button @click="on_click">赞{{like_count}}</button>',
	data: function() {
		return {
			like_count: 334,
			liked: false,
		}
	},
	methods: {
		on_click: function(){
			if(!this.liked)
				this.like_count++;
			else
				this.like_count--;
			this.liked = !this.liked;
		}
	},
})

new Vue({
	el: '#test'
})