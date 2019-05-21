Vue.component('todo-item', {
    props: ['label', 'idx'],
    data: function () {
        return {
        }
    },
    methods: {
        del(idx) {
            this.$emit('del', idx)
        }
    },
    template: `<li>{{label}}<button @click="del(idx)">刪我</button></li>`
})