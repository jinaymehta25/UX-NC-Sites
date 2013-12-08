/**
 * Created with JetBrains WebStorm.
 * User: Jinay
 * Date: 11/28/13
 * Time: 3:23 AM
 * To change this template use File | Settings | File Templates.
 */

var _ = _ ? _ : {};
var console = console ? console : {log: function () {}, dir: function () {} };


var BLNC_LIB = (function (){
    var lib = function(valuesArg){

    var categories = ['Administration','Agriculture and Consumer Services','Public Safety','Commerce',
    'Cultural Resources', 'NC Community College System', 'Health and Human Services', 'Public Instruction',
        'Enviornment and Natural Resources', 'Insurance', 'Justice', 'Labor', 'Occupational Licensing Boards',
    'Revenue','Secretary of state', 'Transportation', 'Board of governors of UNC']

    var data_cat = categories.map(function(i){
        return {id:i,text:i}
    });
    var counties = ['All','Alamance','Alexander','Alleghany','Anson','Ashe','Avery','Beaufort','Bertie','Bladen','Brunswick','Buncombe','Burke'];
    var data_co = counties.map(function(i){
        return {id:i,text:i}
    });

        $("#results_table").dataTable({

            "bAutoWidth":false,
            "aoColumns":[
                { "sWidth":"45%" },
                { "sWidth":"25%" },
                { "sWidth":"30%", "sClass":"center", "bSortable":false }
            ],
            "aaData":[
                ["Open Burning/High Hazard Counties", "NC Forest Service", ""],
                ["Open Burning/Non-High Hazard Counties", "NC Forest Service", "" ],
                ["Special Open Burning/High Hazard Counties", "NC Forest Service", ""],
                ["Cotton Gin, Cotton Merchant, Cotton Warehouse", "Budget & Finance", ""],
                ["Feed Sales Reporting", "Budget & Finance", ""] ,
                ["Fertilizer Sales Reporting", "Budget & Finance", ""] ,
                ["Grain Dealer", "Budget & Finance", ""],
                ["Lime Sales Reporting", "Budget & Finance", ""] ,
                ["Open Burning/High Hazard Counties", "NC Forest Service", ""],
                ["Open Burning/Non-High Hazard Counties", "NC Forest Service", "" ],
                ["Special Open Burning/High Hazard Counties", "NC Forest Service", ""],
                ["Cotton Gin, Cotton Merchant, Cotton Warehouse", "Budget & Finance", ""],
                ["Feed Sales Reporting", "Budget & Finance", ""] ,
                ["Fertilizer Sales Reporting", "Budget & Finance", ""] ,
                ["Grain Dealer", "Budget & Finance", ""],
                ["Lime Sales Reporting", "Budget & Finance", ""] ,
                ["Seed Sales Reporting", "Budget & Finance", ""]

            ],
            "sPaginationType":"bootstrap",
            "aoColumnDefs":[
                {
                    "sTitle":"Site name", "aTargets":[ "site_name" ]
                }
            ],
            "fnRowCallback":function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                var imgTagDetails = "<img class='btnLicense' src='../assets/img/details.gif'/>";
                var imgTagDload = "<img class='btnLicense' src='../assets/img/pdf.png'>"
                var imgTagApply = "<img class='btnLicense' src='../assets/img/icon-apply.png'>"
                $('td:eq(2)', nRow).html(imgTagDetails + imgTagDload + imgTagApply); // where 4 is the zero-origin visible column in the HTML

                return nRow;
            }
        });

        /* Set the defaults for DataTables initialisation */
        $.extend(true, $.fn.dataTable.defaults, {
            "sDom":"<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "sPaginationType":"bootstrap",
            "oLanguage":{
                "sLengthMenu":"_MENU_ records per page"
            }
        });

        $.extend($.fn.DataTable.ext.oStdClasses, {
            "sWrapper":"dataTables_wrapper form-inline"
        });


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


        $("#sel_category").select2({
            data : data_cat,
            multiple: true,
            placeholder: "Type to select categories",
            maximumSelectionSize: 6
        });

        $("#sel_county").select2({
            data : data_co,
            placeholder: "Select a County"
        });

    };
    lib.prototype = {
        constructor: lib,

        getSearchResults : function(search_btn){

        }
    }; //end of prototypes

    return lib;
}());