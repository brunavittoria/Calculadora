$(document).ready(function(){

$(":button").click(function(){
    
    if($(this).attr("value") == "C"){
        $("#display").val("");
    } else if ($(this).attr("value") == "="){
        $("#display").val(eval($("#display").val().replace("x", "*"))); 
    } else {
        
        $("#display").val($("#display").val() + $(this).attr("value"));
    }

    


});



});