//changer le nom des variable
var afficherImage = false;
hide = function (hidden) {
    document.getElementById(hidden).style.display = 'none';
}

/* Permet de switcher entre les pages input et output */
panel = function (el, shown, hidden) {
    //On cache l'affichage de l'element enregistré dans la variable hide
    document.getElementById(hidden).style.display = 'none';
    //On fait apparaitre l'element enregistré dans la variable show
    document.getElementById(shown).style.display = 'block';
    el.style.fontWeight = 'bold'


    if (!afficherImage) {
        //on creer le visuelle du tableau 
        document.getElementById('tableHead').innerHTML = '<div class = "titreTableau"><table><th> RECONTRACT</th><th style="padding-right: 5%"> NEW CUSTOMERS</th></table></div><div class= intertitre><table><th></th><th> Baseline</th><th> Scenario</th><th> Baseline</th><th> Scenario</th></table></div>';
        fetchDonnees();
        document.getElementById('tableau2').innerHTML = showTable(defaultData2, '');
    }
}

// Accede à la base de donnees dans le json et le mets sous la forme d'un tableau 
function showTable(json, classes, boolean) {
    var cols = Object.keys(json[0]);
    var headerRow = '';
    var bodyRows = ''
    /* variable qui permet eviter les repititions des titres */
    var titreEstimated = boolean;
    var titreEstimatedRentree = false;

    classes = classes || '';

    cols.map(function (col) {
        if (!titreEstimated)
            headerRow += '<th>' + avoirLePremierMot(col) + '</th>';
        else {
            if (!titreEstimatedRentree) {
                headerRow += '<th> Estimated Usage </th>';
                titreEstimatedRentree = true;
            }
            headerRow += '<th></th>';
        }
    });

    json.map(function (row) {
        bodyRows += '<tr>';

        cols.map(function (colname) {
            bodyRows += '<td>' + transformerEnPourcentage(row[colname]) + '</td>';
        })

        bodyRows += '</tr>';
    });

    return '<table class = "' + classes + '"><thead><tr>' + headerRow + '</tr></thead><tbody>' + bodyRows + '</tbody></table>';
}

/*Fonction pour avoir le premier mot d'un string*/
function avoirLePremierMot(string) {
    var compteur = 0;
    while (string.charAt(compteur) != '.') {
        compteur++;
        if (compteur == 11)
            break;
    }

    return string.slice(0, compteur);
}

/*transforme les nombres decimales en pourcentage*/
function transformerEnPourcentage(row) {
    if (row < 1) {
        var pourcentage = row * 100 + '%';
        return pourcentage;
    }
    return row;
}

/* Afficher une image lorsqu'un selecteur est change */
function AfficherImage() {
    var x = document.getElementsByClassName('selectList');
    for (i = 0; i <= x.length; i++) {
        if (x[i].value = 0)
            afficherImage = false;
        else {
            afficherImage = true;
            break;
        }
    }
}

/*fonction pour fecth l'image*/
function fetchImage(value) {
    if (value == "fig4.png") {
        fetch('http://localhost:8080/Images/fig4.png').then(response => response.blob())
            .then(images => {
                imgURL = URL.createObjectURL(images);
                document.getElementById('output').innerHTML = "<img src= " + imgURL + ">";
            });
    } else {
        fetch('http://localhost:8080/Images/fig3.png').then(response => response.blob())
            .then(images => {
                imgURL = URL.createObjectURL(images);
                document.getElementById('output').innerHTML = "<img src= " + imgURL + ">";
            });
    }



}
/* Fonction pour fetch les donnees du serveur */
function fetchDonnees() {

    fetch('http://localhost:8080/JSON/output.json').then(function (response) {
        return response.json();
    }).then(data => {
        console.log(data);
        var estimatedUsage = data['estimated.usage'];
        var consumerSegmentData = data['consumer.segment'];
        document.getElementById('tableau1').innerHTML = showTable(consumerSegmentData, '', false);
        document.getElementById('tableau2').innerHTML = showTable(estimatedUsage, '', true);
    });
}

