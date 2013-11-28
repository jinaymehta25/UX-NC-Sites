/**
 * Created with JetBrains WebStorm.
 * User: Jinay
 * Date: 11/28/13
 * Time: 3:22 AM
 * To change this template use File | Settings | File Templates.
 */
var console = console ? console : {};

$(".panel-title").on("click","a, .expand_collapse_ui a",function(){

    clicked_id = $(this).parents(".panel-title").attr("id");
    if(clicked_id == "first_title" && $("#second_title").hasClass("expanded")){
        $("#second_title").removeClass("expanded");
        $("#second_title").children(".expand_collapse_ui").children().toggle();
    }

    if(clicked_id == "second_title" && $("#first_title").hasClass("expanded")){
        $("#first_title").removeClass("expanded");
        $("#first_title").children(".expand_collapse_ui").children().toggle();
    }

    $(this).parents(".panel-title").children(".expand_collapse_ui").children().toggle();
    $(this).parents(".panel-title").toggleClass("expanded");

});