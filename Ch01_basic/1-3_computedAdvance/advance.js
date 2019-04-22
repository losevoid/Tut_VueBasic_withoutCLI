new Vue({
    el: '#app',
    data: {
        imgurl: "https://source.unsplash.com/user/erondu/300x300",
        height: "",
        weight: ""
    },
    methods: {
        changeimg(height, weight) {
            this.imgurl = `https://source.unsplash.com/user/erondu/${height}x${weight}`
        }
    },
    computed: {
        cimg() {
            return `https://source.unsplash.com/user/erondu/${this.height}x${this.weight}`
        }
    }
})