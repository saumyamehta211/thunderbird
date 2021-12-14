$(document).ready(function(){
    $(".sub_photo").show();
    $(".sub_decor").show();
    $("#photographs").change(function(){
        let photo = $("#photographs").val();
        if (photo == "Yes"){
            $(".sub_photo").show();
        }else{
            $(".sub_photo").hide();
        }
    }); 
    $("#decorations").change(function(){
        let decor = $("#decorations").val();
        if (decor == "Yes"){
            $(".sub_decor").show();
        }else{
            $(".sub_decor").hide();
        }
    }) 
    $("form[name='wedding']").validate({
        // Specify validation rules
        rules: {
          // The key name on the left side is the name attribute
          // of an input field. Validation rules are defined
          // on the right side
          first_name: "required",
          last_name: "required",
          email: {
            required: true,
            // Specify that email should be validated
            // by the built-in "email" rule
            email: true
          },
          password: {
            required: true,
            minlength: 5
          }
        },
        // Specify validation error messages
        messages: {
          first_name: "Please enter your firstname",
          last_name: "Please enter your lastname",
          email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
          alert("Submitted successfully")
        }
      });
});

