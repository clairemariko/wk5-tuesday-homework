require('mocha')
var assert = require('chai').assert;
var shoppingBasket = require('../shopping_basket.js');



describe('Shopping Basket', function() {
  it('should have an initial total of 0', function() {
    assert.equal(0, shoppingBasket.total);
  });//shoppingbasket is not defined?cus i didnt put in the require bit! SOLVED

  it('should have an empty baskey', function(){
    assert.deepEqual([], shoppingBasket.basket);
  });//common error"shoppingBasket is not a function, cus i left the ()after total and basket also make sure that at the top when you are requiring it is exact as you are calling it! SOLVED

  it('should add an item to the basket', function(){
    shoppingBasket=[];
    shoppingBasket.addItem('oven');
    assert.equal(1, shoppingBasket.basket.length);
  });//saying addItem is not a function

  it('should update the total when adding an item', function(){
    shoppingBasket.addItem('oven');
    assert.equal(15, shoppingBasket.total);
  });//saying addItem is not a ruddy FUNCTION WHY!

  it('should give a discount when they spend over 20', function(){
    shoppingBasket = [];
    shoppingBasket.total = 0;
    shoppingBasket.addItem('fridge');
       shoppingBasket.applyDiscount();
       assert.equal(90, shoppingBasket.total);
     });
  it('should give a customer an extra discount if they have a card', function(){
    shoppingBasket = [];
    shoppingBasket.total = 0;
    shoppingBasket.addItem('fridge');
      shoppingBasket.stroeCard();
      assert.equal()
  })
  });




