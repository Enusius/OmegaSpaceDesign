
$(document).ready(function(){

    $('button').mousedown(function(e)
    {
        $(e.target).addClass("clicked");
    });

    $("button").mouseup(function(e)
    {
        $(e.target).removeClass("clicked");
    });
});
