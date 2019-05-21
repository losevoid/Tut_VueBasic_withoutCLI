Vue.component('my-component', {
    data: function () {
        return {

        }
    },
    // props跟component限制一樣用keybacase
    props: ['title', 'msg'],
    template:
        `<div>
    <h3> {{title}} </h3>
    <h6> {{msg}} </h6>
    </div>
    `
})