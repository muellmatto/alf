'use strict';

function change_quote() {
    var rand = Math.floor((Math.random() * quotes.length));
    document.getElementById("quote").innerHTML = quotes[rand];
}
change_quote();
