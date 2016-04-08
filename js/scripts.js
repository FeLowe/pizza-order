//Business Logic
function Pizza (size, topping, extraToppings){
  this.sizeKey = size;
  this.toppingKey = topping;
  this.extraToppingsKey = extraTopping;
}

//User Interface Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event)
  event.preventDefault();

  var sizeInput = $("input:radio[name=pizza-size]:checked").val();
  var toppingInput = $("input:radio[name=toppings]:checked").val();
  var extraToppingsInput = $("input:radio[name=extraToppings]:checked").val();
  var quantityInput = $("#quantity").val();





});
});
