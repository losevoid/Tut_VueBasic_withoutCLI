Vue.component("my-component", {
  data: function() {
    return {};
  },
  // props跟component限制一樣用keybacase
  props: ["title", "msg"],
  computed: {
    lowcaseMsg() {
      return this.msg.trim().toLowerCase();
    }
  },
  template: `<div>
    <h3> {{title}} </h3>
    <h6> {{msg}} </h6>
    <h6>小寫處理 {{lowcaseMsg}} </h6>
    </div>
    `
});
