const Event = new Vue();

Vue.component('keke', {
    template: '<div>我说：<input @keyup="change" v-model="i_say" type="text"></div>',
    data: function() {
        return {
            i_say: '',
        }
    },
    methods: {
        change: function() {
            Event.$emit('keke-say', this.i_say);
        }
    }
});

Vue.component('dingding', {
    template: '<div>他说：{{he_said}}</div>',
    data: function() {
        return {
            he_said: '',
        }
    },
    mounted: function() {
        const me = this;
        Event.$on('keke-say', function(data) {
            me.he_said = data;
        })
    }
});

new Vue({
    el: "#app",
})