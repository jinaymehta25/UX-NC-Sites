$(document).ready(function () {
    $("#results_table").dataTable({

        "bAutoWidth":false,
        "aoColumns":[
            { "sWidth":"55%" },
            { "sWidth":"25%" },
            { "sWidth":"20%", "sClass":"center", "bSortable":false }
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

    $("#agency-tree").jstree({
        "json_data":{"data":[
            {
                "data":"Administration",
                "children":[
                    {
                        "data":"Non-Public Education",
                        "children":[]
                    },

                    {
                        "data":"  State Construction Office ",
                        "children":[]
                    }
                ]
            },

            {
                "data":"Agriculture and consumer services",
                "children":[
                    {
                        "data":"Nc Forest Service",
                        "children":[]
                    },

                    {
                        "data":"Budget And Finance",
                        "children":[]
                    }  ,
                    {
                        "data":"Food & Drug Protection",
                        "children":[]
                    },
                    {
                        "data":"Marketing",
                        "children":[]
                    },
                    {
                        "data":"State Fair",
                        "children":[]
                    },
                    {
                        "data":"Veterinary",
                        "children":[]
                    },
                    {
                        "data":"Plant Industry",
                        "children":[]
                    },
                    {
                        "data":"Standards",
                        "children":[]
                    }
                ]
            },
            {
                "data":"Public safety",
                "children":[
                    {
                        "data":"Alcohol Law Enforcement",
                        "children":[]
                    },
                    {
                        "data":"Boxing Authority (Alcohol Law Enforcement)",
                        "children":[]
                    }

                ]
            },
            {
                "data":"Commerce",
                "children":[
                    {
                        "data":"ABC Commission",
                        "children":[]
                    },
                    {
                        "data":"NC Cemetery Commission",
                        "children":[]
                    },
                    {
                        "data":"Alcohol Law Enforcement",
                        "children":[]
                    },
                    {
                        "data":"Office Of The Commissioner Of Banks",
                        "children":[]
                    },
                    {
                        "data":"Utilities Commission",
                        "children":[]
                    } ,
                    {
                        "data":"Credit Union",
                        "children":[]
                    }
                ]
            },
            {
                "data":"Cultural Resources",
                "children":[
                    {
                        "data":"Archives & History/Office Of State Archaeology",
                        "children":[]
                    },
                    {
                        "data":"Archives & History/Underwater Archaeology Unit",
                        "children":[]
                    }
                ]
            },
            {
                "data":"Nc Community College System",
                "children":[
                    {
                        "data":"Office Of Proprietary Schools",
                        "children":[]
                    }
                ]
            },
            {
                "data":"Health And Human Services",
                "children":[
                    {
                        "data":"Child Development",
                        "children":[]
                    },
                    {
                        "data":"Health Service Regulation",
                        "children":[]
                    },
                    {
                        "data":"Mental Health, Developmental Disability & Substance Abuse Services",
                        "children":[]
                    },
                    {
                        "data":"Public Health",
                        "children":[]
                    },
                    {
                        "data":"Services For The Blind/Business Enterprises",
                        "children":[]
                    },
                    {
                        "data":"Social Services",
                        "children":[]
                    },
                    {
                        "data":"Aging And Adult Services",
                        "children":[]
                    }
                ]
            },
            {
                "data":"Public Instruction",
                "children":[
                    {
                        "data":"Financial & Business Services Area",
                        "children":[]
                    }
                ]
            },
            {
                "data":"Environment and Natural Resources",
                "children":[
                    {
                        "data":"Air Quality",
                        "children":[]
                    },
                    {
                        "data":"Coastal Management",
                        "children":[]
                    },
                    {
                        "data":"Energy, Mineral And Land Resources",
                        "children":[]
                    },
                    {
                        "data":"Marine Fisheries",
                        "children":[]
                    },
                    {
                        "data":"Office Of Conservation, Planning, & Community Affairs",
                        "children":[]
                    },
                    {
                        "data":"Parks And Recreation",
                        "children":[]
                    }  ,
                    {
                        "data":"Waste Management",
                        "children":[]
                    },
                    {
                        "data":"Water Resources",
                        "children":[]
                    } ,
                    {
                        "data":"Wildlife Resources",
                        "children":[]
                    }
                ]
            },
            {
                "data":"Insurance",
                "children":[  ]
            },
            {
                "data":"Justice",
                "children":[  ]
            },
            {
                "data":"Labor",
                "children":[  ]
            },
            {
                "data":"Occupational licensing boards",
                "children":[  ]
            },
            {
                "data":"Revenue",
                "children":[  ]
            },
            {
                "data":"Secretary of state",
                "children":[  ]
            },
            {
                "data":"Transportation",
                "children":[  ]
            },
            {
                "data":"Board of governors of unc",
                "children":[  ]
            }
        ]
        },
        "plugins":[ "themes", "json_data", "ui" , "checkbox"],
        "themes":{
            "theme":"proton",
            "url":"../assets/themes/proton/style.css"
        }
    })
        .bind("check_node.jstree", function (event, data) {
            $("#licenses").hide();
            $("#loading_results").show();
            setTimeout(function doSomething() {
                $("#loading_results").hide();
                $("#licenses").show();
            }, 500);


        });

})