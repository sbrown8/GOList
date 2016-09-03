global.jQuery = require('jquery');
var $ = jQuery;
require('bootstrap');
require('datatables.net')();
require('datatables.net-bs')();
require('datatables.net-select')();

$(document).ready(function () {

    //Create GOList table with appropriate columns. This table allows multiple entries to be selected

    var goList = $('#golist').DataTable({
        select: {
            style: "multi"
        },
        columns: [
            {title: "UniProt ID", data: "uniprotId"},
            {title: "Protein names", data: "proteinName"},
            {title: "Gene names", data: "geneNames"},
            {title: "Organism", data: "organism"},
            {title: "Taxonomic lineage", data: "taxonomicLineage"},
            {title: "Function", data: "proteinFunction"},
            {title: "Subcellular location", data: "subcellularLocation"}
        ]
    });

    //Selected rows are deleted when "Delete Selected" button is clicked

    $("#deleteSelected").click(function () {
        alertSuccess("Entries succesfully deleted from the GOList.");
        /*
         $("#alertBox").attr('class', 'alert alert-success');
         $("#alertBox").html("Entries succesfully deleted from the GOList.");
         */
        goList.rows({selected: true}).remove();
        goList.draw();
    });


    $("#uniprotid").submit(function (event) {
        var upid = $("#uniprotidInput").val();
        getUPIDContents(upid);
        event.preventDefault();
    });

    //Add new row to table with entry information from uniprot.org

    function getUPIDContents(upid) {
        var upidURL = "http://www.uniprot.org/uniprot/" + upid + ".xml";
        $.ajax({
            url: upidURL,
            dataType: "xml",
            success: function (data) {

                var proteinNames = [];
                $(data).find("protein").find("recommendedName").find("fullName").each(function () {
                    proteinNames.push($(this).text());
                });
                proteinNames = proteinNames.join(', ');

                var taxLineage = [];
                $(data).find("organism").find("lineage").find("taxon").each(function () {
                    taxLineage.push($(this).text());
                });
                taxLineage = taxLineage.join(', ');

                var geneNames = [];
                $(data).find("gene").find("name[type=primary]").each(function () {
                    geneNames.push($(this).text());
                });
                geneNames = geneNames.join(', ');

                var organism = [];
                $(data).find("organism").find("name[type=scientific]").contents().each(function () {
                    organism.push($(this).text());
                });
                organism = organism.join(', ');

                var proteinFunction = [];
                $(data).find("comment[type=function]").contents().each(function () {
                    proteinFunction.push($(this).text());
                });
                //a line separates protien functions instead of a comma because functions are described in a long paragraph
                proteinFunction = proteinFunction.join("\n ");

                var subcellularLocation = [];
                $(data).find("comment").find("subcellularLocation").find("location").contents().each(function () {
                    if ($.inArray($(this).text(), subcellularLocation) === -1) {
                        subcellularLocation.push($(this).text());
                    }
                });
                subcellularLocation = subcellularLocation.join(", ");

                var results = {
                    "uniprotId": upid,
                    "geneNames": proteinNames,
                    "proteinName": geneNames,
                    "organism": organism,
                    "taxonomicLineage": taxLineage,
                    "proteinFunction": proteinFunction,
                    "subcellularLocation": subcellularLocation
                };

                goList.row.add(results).draw();
                /*
                 $("#alertBox").attr('class', 'alert alert-success');
                 $("#alertBox").html(upid + " was successfully added to the GOList.");
                 */
                alertSuccess(upid + " was successfully added to the GOList.");
            },
            error: function () {
                alertFailure(upid + " is not a valid UniProt ID.");
                /*
                 $("#alertBox").attr('class', 'alert alert-danger');
                 $("#alertBox").html(upid + " is not a valid UniProt ID.");
                 */
            }
        });
    }

    function alertSuccess(message) {
        $("#alertBox").attr('class', 'alert alert-success');
        $("#alertBox").html(message);
    }

    function alertFailure(message) {
        $("#alertBox").attr('class', 'alert alert-danger');
        $("#alertBox").html(message);
    }
});