$(document).ready(function() {

    $("button").click(function () {
        if ($('input[type="checkbox"]').is(":checked")) {
            alert("Your slots are successfully booked!");
        }      
    });

   $('input[type="checkbox"]').click(function(){
        var len = $('input[type="checkbox"]:checked').length;
        if (len>0){
            $("button").prop("disabled", false);
            console.log("Checkbox is checked.");
        }
        else if (len==0){
            console.log("Checkbox is unchecked.");
            $("button").prop("disabled", true);
        }
    });

    $("#check").on("click", function() {
        $('input').on('change', function () {
            var currentClass = $(this).attr('class');
            if ($(this).prop('checked')) {
                $('.' + currentClass).prop('checked', true);
            } else {
                $('.' + currentClass).prop('checked', false);
            }
        }); 
        
    }); 
})

