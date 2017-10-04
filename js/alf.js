'use strict';

function register_sw() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function(servive_worker_registration) { 
                console.log('Service Worker Registered'); 
                servive_worker_registration.update();
                });
    }
}

function close_menu() {
    document.getElementById('menu').style.display = 'none';
}
function open_menu() {
    document.getElementById('menu').style.display = 'block';
}

function change_quote() {
    var rand = Math.floor((Math.random() * quotes.length));
    document.getElementById("quote").innerHTML = quotes[rand];
}
change_quote();
