//User Interface

// Toggle What We do
//design
$(document).ready(function() {
  $("#design").click(function() {
    $(".design-show").toggle();
    $(".design-hide").toggle();
  });

//development
$(document).ready(function() {
  $("#development").click(function() {
    $(".development-show").toggle();
    $(".development-hide").toggle();
  });
//product
$(document).ready(function() {
  $("#product").click(function() {
    $(".product-show").toggle();
    $(".product-hide").toggle();
  });


//Business Logic

//EventListener and alerts.
var input = document.getElementById('clientForm')
input.addEventListener("keyup", function(event) {
});
$(document).getElementById(function()
  $('#clientForm').keyup(function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementByName("contact").click();
     }
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var key = e.which;
    if (key == 13) {
      if (name == "") {
      alert("Name is Missing"); //alert if name is not input
      } else if (email == "") {
      alert("Email address is missing"); //alert if email is not input
      } else if (message == "") {
      alert("Message is missing"); // alert if message is not input
      } else {
      $('#clientForm').submit();
      alert("Thank you for visiting our page! We have received your messgae and we will respond promptly.");  //let client know message has been received.
      }
      return false;
      }
  });
});
