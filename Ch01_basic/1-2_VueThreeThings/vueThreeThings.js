var vm = new Vue({
    el: '#app',
    data: {
        number1: 0,
        number2: 0,
        number3: 0,
        num1: 0,
        num2: 0,
        num3: 0,
        time: new Date,
        stop: 0
    },

    computed: {
        result() {
            this.number3 = this.number1 * 1 + parseInt(this.number2, 10)
            return this.number1 * 1 + parseInt(this.number2, 10)
        }
    },
    watch: {
        num1(value) {
            console.log(value)
            this.num3 = value * 1 + this.num2 * 1
        },
        num2(value) {
            console.log(value)
            this.num3 = this.num1 * 1 + value * 1
        }
    },
    methods: {

        go() {
            this.stop = setInterval(() => this.time = new Date, 1000)
        },
        stoptime() {
            console.log(this.stop)
            clearInterval(this.stop)
        }
    },

})