$(function(){
    // Get the form.
    var form = $('#contactForm');
    var formData = $(form).serialize();

    // Get the messages div.

    // TODO: The rest of the code will go here...
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // TODO
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
            success: function() {
                $('#contactForm :input').attr('disabled', 'disabled');
                $('#success').fadeIn();
            },
            error: function() {
                $('#error').fadeIn();
            }
        });
    });
});