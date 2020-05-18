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
                //$("#booked").prop('checked',false);
                //$("#hold").prop('checked',false);
                //$("#booked1").prop('checked',false);
                $(".booked").prop('checked',false);
                $(".hold").prop('checked',false);
            } else {
                $('.' + currentClass).prop('checked', false);
            }
        }); 
        
    });

    

    /*$("#check").on("click", function() {
        $('input').on('change', function () {
            var currentClass = $(this).attr('class');
            if ($(this).prop('checked')) {
                if ($("#booked")) {
                    console.log("enter");
                    $('.' + currentClass).prop('checked', false);
                }
                else {
                    console.log("not");
                    $('.' + currentClass).prop('checked', true);
                }
                //$('.' + currentClass).prop('checked', true);
            } else {
                $('.' + currentClass).prop('checked', false);
            }
        }); 
        
    }); */
})

