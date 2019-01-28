Vue.component('kick', {
    template: '#kick-tpl',
    methods: {
        toggle_kick: function() {
            confirm('是否年满十八岁?');
        }
    }
})

const Like = {
    template: '#like-tpl',
    data: function() {
        return {
            like_count: 20,
            liked: false,
        }
    },
    methods: {
        toggle_like: function() {
            if(!this.liked) {
                this.like_count ++ ;
            } else {
                this.like_count --;
            }

            this.liked = !this.liked;
        }
    }
}

const Alert = {
    template: '#alert-tpl',
    methods: {
        toggle: function() {
            alert('hello world')
        }
    }
}

const app = new Vue({
    el: '#app',
    components: {
        like: Like,
    }
})

const test = new Vue({
    el: '#test',
    components: {
        alert: Alert,
    }
})