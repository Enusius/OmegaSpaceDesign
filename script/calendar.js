/**
 * Created by David on 2015-04-21.
 */
$(document).ready(function() {

    $('.day').click(function (e) {

        $('.day.selected').removeClass("selected");

        $(e.target).addClass("selected");
    });

});