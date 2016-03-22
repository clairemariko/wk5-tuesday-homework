require('mocha')
var assert = require('chai').assert;
var shoppingBasket = require('../shopping_basket.js');



describe('Shopping Basket', function() {
  it('should have an initial total of 0', function() {
    assert.equal(0, shoppingBasket.total);
  });//shoppingbasket is not defined?cus i didnt put in the require bit!

  it('should have an empty baskey', function(){
    assert.deepEqual([], shoppingBasket.basket);
  });//common error"shoppingBasket is not a function, cus i left the ()after total and basket also make sure that at the top when you are requiring it is exact as you are calling it!

  it('should add an item to the basket', function(){
    shoppingBasket=[];
    shoppingBasket.addItem('oven');
    assert.equal(1, shoppingBasket.basket.length);
  });//saying addItem is not a function

  it('should update the total when adding an item', function(){
    shoppingBasket.addItem('oven');
    assert.equal(15, shoppingBasket.total);
  });//saying addItem is not a ruddy FUNCTION WHY!

  




});