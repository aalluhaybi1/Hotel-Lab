// check things are ready
$( document ).ready(function() { 
  
  console.log( "ready!" ); 
  
  //click the submit button and get confirmation message 
  $('#submitBtn').click(function() { 
    console.log("button clicked")
    
    let name = $('#name').val()
    
    let email = $('#email').val()
       
    let confirmation; 
    
    confirmation = "Thank you, " + name + " for your interest! You will hear from us via the email (" + email + ") you provided soon!"
    
    $('#confirmMsg').text(confirmation);
    

  }); 
  
});
