$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  $('#button').submit(function(event){
  //   2- prevent the default action for that event from happening
    event.preventDefault();
  //   3- generate a random number between 1 and 6 using JavaScript
    var randomNumber = Math.floor((Math.random()*6)+1);
    var url = $(this).attr('action');
    var data = $(this).serialize();
  //   4- use jQuery to submit an AJAX post to the form's action

    $.post(url, data, function(response){
      var p = $(response).find('#die');
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

      $('#die').remove();
      $('#button').after(p); 

    });
    
  })


});
