

var shoppingList = {
  oven:{
    price: 15,
    type: 'whirlpool'
  },
  fridge:{
    price: 10,
    type: 'kenwood'
  },
  kettle:{
    price: 5,
    type: 'morphy'
  }
};

//do this instead of having a seperate item file? can you have two objects in a file?

var shoppingBasket = {
  total: 0,
  basket: [],
  addItem: function(item) {
    this.basket.push(shoppingList[item]);
    this.total += (shoppingList[item].price);
  },




};

module.exports=shoppingBasket