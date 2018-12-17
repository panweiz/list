var vm = new Vue({
  el: '#list',
  data: {
    inputi:{
      name: '',
      price: '',
    },
    showi: [
      {name: '午餐',
       price: 80
      },
      {name: '飲料',
       price: 30
      },
      {name: '西瓜',
       price: 170
      }
    ],
  },
  methods:{
    addi: function(){
      this.showi.push(this.inputi);
      this.inputi = {name: '',price: ''};
    },
    deli: function(index){
      this.showi.splice(index,1);
    }
  },
  computed:{
    totali: function (){
      let sum = 0
      for (let i=0; i<this.showi.length; i++){
        sum += parseInt(this.showi[i].price)
      }
      return sum
    }
  }
})