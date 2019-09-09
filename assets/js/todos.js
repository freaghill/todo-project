// Check off specific To-dos by Clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed")
});

// Click on X to delete To-do
$("ul").on("click", ".tasks",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span class='tasks'> <i class='fas fa-trash'></i> </span>" + todoText + "</li>")
    }
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});