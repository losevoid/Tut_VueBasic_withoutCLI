Vue.component('todo-input', {
    data: function () {
        return {
            text: ""
        }
    },
    methods: {
        submit() {
            this.$emit('input', this.text);
            this.text = '';
        }
    },
    template: `
            <form @submit.prevent="submit"> 
                <input type="text" v-model="text">
                <button type="submit">submit</button>
            </form>
            `
})