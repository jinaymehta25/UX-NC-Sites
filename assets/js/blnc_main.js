/**
 * Created with JetBrains WebStorm.
 * User: Jinay
 * Date: 11/28/13
 * Time: 3:22 AM
 * To change this template use File | Settings | File Templates.
 */
var BLNC_LIB = BLNC_LIB || {};
var console = console ? console : {};
var _ = _ ? _ : {};


$(document).ready(function () {
    var lib = new BLNC_LIB({});

    $('#search_license').on('click',function(){
        $("#second_title a").trigger('click');
        lib.getSearchResults($(this));
    });


});


