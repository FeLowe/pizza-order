//BUSINESS LOGIC
function Pizza (flavor, size, pizzaQuantity, pizzaPrice, toppingsQuantity, toppingsPrice){
  this.flavor = flavor;
  this.size = size;
  this.pizzaQuantity = pizzaQuantity;
  this.pizzaPrice = pizzaPrice
  this.toppingsQuantity = toppingsQuantity;
  this.toppinsPrice = toppingsPrice

}
console.log(Pizza);

Pizza.prototype.sizePrice = function() {
  if (this.size === "small"){
    this.pizzaPrice = 15;
  } else if (this.size === "medium") {
    this.pizzaPrice = 20;
  } else {
    return this.pizzaPrice = 25; /*large pizza price*/
  }
}
console.log(Pizza.prototype.sizePrice);

Pizza.prototype.toppingPrice = function() {
  if (this.toppingsQuantity === "topping-total"){
    this.toppinsPrice = 2;
  } else if (this.toppingsQuantity !== "topping-total"){
    this.toppingsPrice = 0;
  } else {
    return null;
  }
console.log(Pizza.prototype.toppingPrice);
}

Pizza.prototype.sizePricePlusToppingsPrice = function() {
  var sizePrice = this.sizePrice(this.size);
  var toppingPrice = this.toppingPrice(thins.toppingsQuantity);
  var totalPrice = sizePrice + toppingPrice;

  console.log(totalPrice);
}


//USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#pizza").submit(function(event){
  event.preventDefault();

  var sizeInput = $("input:radio[name=pizza-size]:checked").val();
  var doughInput = $("input:radio[name=pizza-dough]:checked").val();
  var flavorInput = $("input:radio[name=pizza-flavor]:checked").val();
  var extraToppingsInput = $("input:radio[name=extraToppings]:checked").val();
  var toppingsQuantityInput = parseInt($("#toppings-quantity").val());
  console.log(toppingsQuantityInput);
  var pizzaQuantityInput = parseInt($("#pizza-quantity").val());
  console.log(pizzaQuantityInput);
  var pizzaPrice = [];


  var newPizza = new Pizza( flavorInput, sizeInput, pizzaQuantityInput,  Pizza.prototype.sizePrice, toppingsQuantityInput, Pizza.prototype.toppingPrice);

  console.log(newPizza);

  var OrderPrice = (newPizza.sizePrice() * pizzaQuantityInput) + (newPizza.toppingPrice() * toppingsQuantityInput);

                    console.log(OrderPrice);

  $(".orderSummary").show();
  $(".pizza-flavor").text(newPizza.flavor);
  $(".pizza-size").text(newPizza.size);
  $(".pizza-extra-toppings").text(extraToppingsInput);
  $(".pizza-quantity").text(pizzaQuantityInput);
  $(".pizza-price").text("$" + OrderPrice);

});
});
