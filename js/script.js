var callback = {
  success : function(msg) {
    $('input[type="email"]').val('');
  }
};

var events = {
  initialize : function() {
    /* Bind events */
    $('form').on('submit', this.submitEmail);
  },
  submitEmail : function(e) {
    e.preventDefault();
    var email = $('input[type="email"]').val();
    if (email !== '' && validateEmail(email)) {
      $.ajax({
        url : "api/mail.php",
        type : "POST",
        data : {email : email},
        success : callback.success
      });
    }
  }
};
/* DOM Ready and events function */
$(document).ready(function() {
  events.initialize();
});
