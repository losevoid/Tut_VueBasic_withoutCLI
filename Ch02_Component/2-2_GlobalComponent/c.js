const tmpCString = `<select><option>test</option>
<option>test1</option><select>`

Vue.component('components-c-part', {
    // data: function () {
    //     return {
    //         message: "I am component c's  message"
    //     }
    // },
    template: tmpCString
})