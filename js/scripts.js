//BUSINESS LOGIC
function Pizza (size, flavor, toppings){
  this.size = size;
  this.flavor = flavor;
  this.toppings = toppings;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "small"){
    return 15;
  } else if (this.size === "medium") {
    return 20;
  } else {
    return 25; /*large pizza price*/
  }
}

Pizza.prototype.pizzaPrice = function() {
  var sizePrice = this.sizePrice(this.size);
              console.log(sizePrice);
  var totalPrice = sizePrice + (this.toppings * 2.00);
  return totalPrice;
}

//USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#pizza").submit(function(event){
  event.preventDefault();

  var sizeInput = $("input:radio[name=pizza-size]:checked").val();
  var doughInput = $("input:radio[name=pizza-dough]:checked").val();
  var flavorInput = $("input:radio[name=pizza-flavor]:checked").val();
  var extraToppingsInput = $("input:radio[name=extraToppings]:checked").val();
  var quantityInput = $("#pizza-quantity").val();


  var newPizza = new Pizza(sizeInput, flavorInput, extraToppingsInput);
  console.log(newPizza);

  var OrderPrice = newPizza.pizzaPrice() * quantityInput;

                    console.log(OrderPrice);





});
});
