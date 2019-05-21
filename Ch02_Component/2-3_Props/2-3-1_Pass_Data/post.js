Vue.component('post-com', {
    data: function () {
        return {

        }
    },
    // props跟component限制一樣用keybacase
    props: ['text', 'author'],
    template:
        `<div>
    <h3> 文章內容: {{text}} </h3>
    <h6> 作者名字:{{author}} </h6>
    </div>
    `
})