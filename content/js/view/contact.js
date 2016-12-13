/* Contact Form Submit */
$(document).on('submit', '#contactForm', function()
{
  $.post(apiBase + apiMailer + "/", $(this).serialize(), function(data)
  {
    var result = document.getElementById( 'form-result' );
    if ( data.success == true ) {
      classie.add(result, "success");
      classie.remove(result, "fail");
      $('#contactForm').find("input[type=text], textarea").val("");
      $('#form-result').html("Message Sent");
    }
    else {
      classie.remove(result, "success");
      classie.add(result, "fail");
      $('#form-result').html("Message Failed To Send");
    }
  });
  return false;
});
