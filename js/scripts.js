//BUSINESS LOGIC
function Pizza (flavor, size, toppings){
  this.flavor = flavor;
  this.size = size;
  this.toppings = toppings;
  this.pizzaPrice = 0;
  this.toppingPrice = 0;
  this.total = 0
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "small"){
    this.pizzaPrice = 15;
  } else if (this.size === "medium") {
    this.pizzaPrice = 20;
  } else if (this.size === "large"){
    this.pizzaPrice === 25; /*large pizza price*/
  } else{
    this.pizzaPrice = 0;
  }
}

Pizza.prototype.toppingsPrice = function(){
  this.toppingPrice = (this.toppings * 2);
}


//USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#pizza").submit(function(event){
    event.preventDefault();

    var sizeInput = $("input:radio[name=pizza-size]:checked").val();
    var doughInput = $("input:radio[name=pizza-dough]:checked").val();
    var flavorInput = $("input:radio[name=pizza-flavor]:checked").val();
    var extraToppingInput = $("input:radio[name=extraToppings]:checked").val();
    var toppingQuantityInput = parseInt($("#toppings-quantity").val());

    var newPizza = new Pizza(flavorInput, sizeInput, toppingQuantityInput);
    newPizza.sizePrice();
    newPizza.toppingsPrice();
    newPizza.total = newPizza.toppingPrice + newPizza.pizzaPrice;

    $(".orderSummary").show();
    $(".pizza-flavor").text(newPizza.flavor);
    $(".pizza-size").text(newPizza.size);
    $(".pizza-extra-toppings").text(newPizza.toppings);
    $(".pizza-price").text("$" + newPizza.pizzaPrice);
    $(".total-price").text("$" + newPizza.total);

  });
});
