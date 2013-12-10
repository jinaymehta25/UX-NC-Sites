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

    this.categories = ['All','Administration','Agriculture and Consumer Services','Public Safety','Commerce',
    'Cultural Resources', 'NC Community College System', 'Health and Human Services', 'Public Instruction',
        'Environment and Natural Resources', 'Insurance', 'Justice', 'Labor', 'Occupational Licensing Boards',
    'Revenue','Secretary of state', 'Transportation', 'Board of governors of UNC']

    this.licenses = ['All','Private Elementary/Secondary Schools','Open Burning/High Hazard Counties','Seed Sales Reporting',
    'Professional Boxing/Kick Boxing/Toughman/Mixed Martial Arts','BINGO Games/Single Occasion','Alcoholic Beverages/Air Commerce',
    'Brewery','Electric and Natural Gas Service','Archaeological investigations on state lands', 'Underwater Archaeology',
    'Proprietary School','Maternity Homes','Ground Water Treatment','Incineration facility','Bail Bond Runner','Alarm system business',
    'Boiler or Pressure vessel operation'];

    var data_cat = this.categories.map(function(i){
        return {id:i,text:i}
    });
    this.counties = ['All','Alamance','Alexander','Alleghany','Anson','Ashe','Avery','Beaufort','Bertie','Bladen','Brunswick','Buncombe','Burke','Wake'];
    var data_co = this.counties.map(function(i){
        return {id:i,text:i}
    });

    this.tmp_data = [
        {title: this.licenses[1], category: this.categories[1], county: this.counties[1], tags:['education','study']},
        {title: this.licenses[2], category: this.categories[2], county: this.counties[2], tags:['forest']},
        {title: this.licenses[3], category: this.categories[2], county: this.counties[2], tags:['budget','finance']},
        {title: this.licenses[4], category: this.categories[3], county: this.counties[3], tags:['kick','karate','fight']},
        {title: this.licenses[5], category: this.categories[3], county: this.counties[4], tags:['alcohol','beer','wine']},
        {title: this.licenses[6], category: this.categories[4], county: this.counties[4], tags:['beer','wine']},
        {title: this.licenses[7], category: this.categories[4], county: this.counties[5], tags:['alcohol','beer','wine']},
        {title: this.licenses[8], category: this.categories[4], county: this.counties[5], tags:['utilities']},
        {title: this.licenses[9], category: this.categories[5], county: this.counties[5], tags:['history','archives']},
        {title: this.licenses[10], category: this.categories[5], county: this.counties[6], tags:['history','archives']},
        {title: this.licenses[11], category: this.categories[6], county: this.counties[7], tags:['education','study']},
        {title: this.licenses[12], category: this.categories[7], county: this.counties[8], tags:['childcare']},
        {title: this.licenses[13], category: this.categories[9], county: this.counties[9], tags:[]},
        {title: this.licenses[14], category: this.categories[9], county: this.counties[10], tags:['waste']},
        {title: this.licenses[15], category: this.categories[10], county: this.counties[11], tags:['agent']},
        {title: this.licenses[16], category: this.categories[11], county: this.counties[12], tags:['security']},
        {title: this.licenses[17], category: this.categories[12], county: this.counties[13], tags:[]}
    ];



        /*$("#search_box").typeahead({
            local: licenses,
            limit: 10
        });*/

        $("#search_box").autocomplete({
            source: this.licenses,
            open: function(event, ui) {
                $(this).autocomplete("widget").width($('#search_box').width()+20)
            }
        });

        this.dataTableObj = $("#results_table").dataTable({

            "bAutoWidth":false,
            "aoColumns":[
                { "sWidth":"35%" },
                { "sWidth":"25%" },
                { "sWidth":"10%" },
                { "sWidth":"30%", "sClass":"center", "bSortable":false }
            ],

            "sPaginationType":"bootstrap",
            "aoColumnDefs":[
                {
                    "sTitle":"Site name", "aTargets":[ "site_name" ]
                }
            ],

            "iDisplayLength": 5,

            "fnRowCallback":function (nRow) {
                var imgTagDetails = "<img class='btnLicense' title='View Details' src='../assets/img/details.gif'/>";
                var imgTagDload = "<img class='btnLicense' title='Download Application' src='../assets/img/pdf.png'>"
                var imgTagApply = "<img class='btnLicense' title='Apply Online' src='../assets/img/icon-apply.png'>"

                $('td:eq(3)', nRow).html(imgTagDetails + imgTagDload + imgTagApply); // where 4 is the zero-origin visible column in the HTML
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

        getSearchResults : function(key,co,cat){
            var that = this;
            var t_search_res = []
            var search_res = []
            this.dataTableObj.fnClearTable();
            this.tmp_data.forEach(function(entry){

                if(cat == "" || cat.toLowerCase() == 'all' || co == "" || co.toLowerCase() == 'all' || cat.indexOf(entry.category) !=-1 || entry.category.indexOf(cat) !=-1 || entry.county == co){
                    t_search_res.push(entry);
                }

            });



            $.each(t_search_res,function(i,v){
                if(key == "" || key.indexOf(v.title) != -1 || v.title.indexOf(key) != -1 || ( v.tags.join(",")!="" && (key.toLowerCase().indexOf(v.tags.join(",")) !=-1) || v.tags.join(",").indexOf(key.toLowerCase()) != -1)){
                    that.createRow([v.title, v.category, v.county, ""]);
                }
            });

        },


        createRow : function(values){
            $('#results_table').dataTable().fnAddData(values);
        }
    }; //end of prototypes

    return lib;
}());