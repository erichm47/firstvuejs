new Vue({
  el: '#vue-app',
  data: {
    myName: '',
    myAge: '',
    x: 0,
    y: 0
  },
  methods: {
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
}); // a vue instance in #vue-app
