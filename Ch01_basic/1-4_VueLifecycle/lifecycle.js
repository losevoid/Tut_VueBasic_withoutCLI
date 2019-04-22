// 有生命之前
// new Vue({
//     data: {
//         think: "我已經有思考能力",
//         name: "vue"
//     },
//     beforeCreate() {
//         console.log("hey vue我是你媽媽")
//         console.log(`大家好我叫做${this.name}`)
//         console.log(this.think)
//     },
// })


// created已有生命但是尚未有身體


// new Vue({
//     data: {
//         think: "我已經有思考能力",
//         name: "vue"
//     },
//     created() {
//         changeClothes()
//         console.log(`大家好我叫做${this.name}`)
//         console.log(this.think)
//     },
//     methods: {
//         changeClothes() {
//             document.getElementById("app").style.color = "blue"
//         }
//     },
// })

// beforemounted身體裝上去之前(不常用)



//  mounted身為一個正常人 (身體已接上)
// let vm = new Vue({
//     // el: "#app",  綁身體方法1
//     data: {
//         think: "我已經有思考能力並且我想換衣服",
//         name: "vue"
//     },
//     mounted() {
//         changeClothes()
//     },
//     methods: {
//         changeClothes() {
//             document.getElementById("app").style.color = "blue"
//         }
//     },

// })

// vm.$mount(document.getElementById("app"))

// 死前
// let vm = new Vue({
//     el: "#app",
//     data: {
//         think: "如何拯救世界",
//         name: "hello我是等死英雄 Vue",
//         time: new Date,
//         stop: 0
//     },
//     beforeDestroy() {
//         console.log("我快死了")
//         stoptime()

//     },
//     methods: {
//         changeClothes() {
//             document.getElementById("app").style.color = "blue"
//         },
//         go() {
//             this.stop = setInterval(() => this.time = new Date, 1000)
//         },
//         stoptime() {
//             console.log(this.stop)
//             clearInterval(this.stop)
//         }
//     },
// })

// vm.$destroy()

// 死後


let vm = new Vue({
    el: "#app",
    data: {
        think: "我無意識",
        name: "hello我已死亡",
        time: new Date,
        stop: 0
    },
    destroyed() {
        console.log("我已經死了")
        // stoptime()

    },
    methods: {
        changeClothes() {
            document.getElementById("app").style.color = "blue"
        },
        go() {
            this.stop = setInterval(() => this.time = new Date, 1000)
        },
        stoptime() {
            console.log(this.stop)
            clearInterval(this.stop)
        }
    },
})
// vm.$destroy()
// vm.$el.parentNode.removeChild(vm.$el)