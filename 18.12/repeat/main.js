Vue.component('balance', {
    template: `
    <div>
    <show @show-balance="show_balance()"></show>
    <div v-if="show">
    这是一句可以来回消失的话。
</div>
</div>
    `,
    methods: {
        show_balance: function() {
            this.show = !this.show;
        },
    },
    data: function() {
        return {
            show : false,
        }
    }
});

Vue.component('show', {
    template: '<button @click="on_click">显示</button>',
    methods: {
        on_click() {
            this.$emit('show-balance');
        }
    }
});

new Vue({
    el: '#app',
});