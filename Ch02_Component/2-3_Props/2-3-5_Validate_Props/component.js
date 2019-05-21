Vue.component('my-component', {
    data: function () {
        return {
            mycount: this.count
        }
    },

    //props可以指定成物件 並註明type  default 還有validator
    props: {
        count: {
            type: Number,
            default: 10,
            //props的檢驗是在before component created 所以method不能用
            validator(value) {
                return value <= 10;
            }
        }
    },
    template:
        `<div>
    <h3> {{mycount}} </h3>
    <button @click="mycount+=1">+</button>
    </div>
    `
})