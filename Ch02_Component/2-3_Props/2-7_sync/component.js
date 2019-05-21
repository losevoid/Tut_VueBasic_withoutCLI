Vue.component('my-component', {
    data: function () {
        return {
            mycount: this.count
        }
    },
    methods: {
        submit() {
            // update 事件屬性
            this.$emit('update:clicked', this.mycount)
        }
    },
    props: {
        count: {
            type: Number,
            default: 10,
        }
    },
    template:
        `<div>
    <h3> {{mycount}} </h3>
    <button @click="mycount+=1">+</button>
    <button @click="submit">傳值到父組件</button>
    </div>
    `
})