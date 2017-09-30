'use strict';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function() { console.log('Service Worker Registered'); });
}

function change_quote() {
    var rand = Math.floor((Math.random() * quotes.length));
    document.getElementById("quote").innerHTML = quotes[rand];
}
change_quote();
