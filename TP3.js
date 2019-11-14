let bool = false;
let x = window.matchMedia("(max-width: 550px)")
mediaQuery(x); // Call listener function at run time
x.addListener(mediaQuery);// Attach listener function on state changes

$(document).ready(function () {
    console.log("ready");
    $("input[type=radio]").prop('checked', false);
    $("#table-panel").hide();

    $("input[type=radio]").click(function () {
    $("input[type=radio]").prop('checked', false);
    $(this).prop('checked', true);
    })

    createTable();
});

$(".panel-button").click(function () {
    $(".panel-button").css('backgroundColor', 'darkgray');
    $(this).css('backgroundColor','#903A2C')
    switch ($(this).attr('id')) {
        case "graph-butn":
            $("#graph-panel").show();
            $("#table-panel").hide();
            break;
        default:
            $("#table-panel").show();
            $("#graph-panel").hide();
    }
}).mouseenter(function () {
    let color = $(this).css('backgroundColor');
    if(color === "rgb(198, 85, 67)"){
        $(this).css('backgroundColor','#903A2C')
    }else{
        $(this).css('backgroundColor', 'gray');
    }
}).mouseleave(function () {
    let color = $(this).css('backgroundColor');
    if(color === "rgb(144, 58, 44)"){
        $(this).css('backgroundColor', '#C65543');
    }else{
        $(this).css('backgroundColor','darkgray');
    }
});

function mediaQuery(x) {
    if (x.matches) { // If media query matches
        resize();
    }else{
        if(bool){
            resize();
        }
    }
};

resize = function () {
    $("#input-table").each(function() {
        var $this = $(this);
        var newrows = [];
        $this.find("tr").each(function(){
            var i = 0;
            $(this).find("td").each(function(){
                i++;
                if(newrows[i] === undefined) { newrows[i] = $("<tr></tr>"); }
                newrows[i].append($(this));
            });
        });
        $this.find("tr").remove();
        $.each(newrows, function(){
            $this.append(this);
        });
    });
    bool = true;
};


$("#input").change(function () {    
    createTable();
});

function createTable(){
    console.log("ok");
    $(".output-row").remove();
    fetch("http://localhost:8080/JSON/output2.json").then(function (response) {
        console.log(response);
        if (response.ok) {
            response.json().then(function (data) {

                var table = document.createElement("tr");
                //On récupère ensuite les éléments de notre fichier JSON en le parcourant tel un tableau
                for (let i in data) {
                    //console.debug(data[i]);
                    //On fait de la mise en forme pour chaque section
                    //On ajoute une ligne blanche avant chaque grande partie du tableau
                    let blankRow = document.createElement("tr");
                    let blankCell = document.createElement("td");
                    blankRow.classList.add("blank-row");
                    blankCell.colSpan = 10;
                    blankRow.appendChild(blankCell);
                    table.appendChild(blankRow);
                    //On ajuste le titre de chaque grande partie du tableau
                    let section = document.createElement("tr");
                    let cellSection = document.createElement("th");
                    if (i === "consumer.segment") {
                        cellSection.appendChild(document.createTextNode("Consumer Segment"));
                    } else {
                        cellSection.appendChild(document.createTextNode("Estimated Usage"));
                    }
                    section.classList.add("section");
                    section.appendChild(cellSection);
                    table.appendChild(section);

                    for (let j in data[i]) {
                        //console.debug(data[i][j]);
                        //On crée une nouvelle ligne pour chaque nouvel objet de notre fichier JSON
                        let row = document.createElement("tr");
                        for (let k in data[i][j]) {
                            //console.debug(data[i][j][k]);
                            let cell = document.createElement("td");
                            let text = document.createTextNode(data[i][j][k]);
                            //On ajoute la donnée dans notre cellule
                            cell.appendChild(text);
                            //console.log(cell);
                            //Puis on ajoute notre cellule dans la ligne
                            row.appendChild(cell);
                            //console.log(row);
                        }
                        //Enfin on ajoute la nouvelle ligne à notre tableau
                        table.appendChild(row)
                    }
                }
                
                $("#output-table").append(table);

            })

        } else {
            console.error("ERROR: impossible de trouver le fichier JSON!")
        }
    });
}


function updateGraphs()
{
    fetch("http://localhost:8080/JSON/output2.json").then(function (response) {
        console.log(response);
        if (response.ok) {
            response.json().then(function (data) {

            

            })

        } else {
            console.error("ERROR: impossible de trouver le fichier JSON!")
        }
    });
}


