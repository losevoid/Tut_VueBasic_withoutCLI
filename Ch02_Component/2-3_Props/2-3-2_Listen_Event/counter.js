Vue.component('counter', {
    data: function () {
        return {
            // 可以把props傳來的初始值定為component的值
            mycount: this.count + 1
        }
    },
    computed: {
        // 可以用上層傳下來的數值做運算並反映在下層組件
        doublecount() {
            return this.count * 2
        }
    },
    // props跟component限制一樣用keybacase
    props: ['count'],
    template:
        `<div>
    
    <h3>{{mycount}}</h3>
    <button @click="mycount+=1">  + </button>
    <hr>
    
    <h3>{{doublecount}}<h3>
    </div>
    `
})