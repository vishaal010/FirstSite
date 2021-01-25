var button = document.querySelector('button');

button.onclick = function() {
    var x, text;

    x = document.getElementById("cijfer").value;

    if (x > 10) {
        text = "Getal is hoger als 10, Kies lager!";
    }
    else if (isNaN(x)) {
        text = "Dat is geen getal! Typ een getal!"
    }

    else if (x < 1) {
        text = "Getal is lager gelijk/lager als 0! Kies hoger!"
    }

    else {
        text = "Dankuwel voor u feedback!";
    }
    document.getElementById("uitkomst").innerHTML = text;
}