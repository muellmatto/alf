    'use strict';

function register_sw() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function(service_worker_registration) { 
                console.log('Service Worker Registered'); 
                service_worker_registration.update();
                show_notification('ALF installed!', 
                    {
                        "body": quotes[Math.floor(Math.random()*quotes.length)]
                    }
                )
            });
        set_installed();
    } else {
        alert('sorry :( not working in your webbrowser')
    }
}
function unregister_sw() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(function(registration) {
          registration.unregister();
        });
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                console.log('[ServiceWorker] Removing old cache', key);
                return caches.delete(key);
            }));
        });
    set_uninstalled();
    }
}
/*
				{
				body: 'Buzz! Buzz!',
				icon: '../images/touch/chrome-touch-icon-192x192.png',
				vibrate: [200, 100, 200, 100, 200, 100, 200],
				tag: 'vibration-sample'
				}
*/
function show_notification(title='Hello from ALF', options={}) {
	Notification.requestPermission(function(result) {
		if (result === 'granted') {
			navigator.serviceWorker.ready.then(function(registration) {
				registration.showNotification(title,options);
			});
		}
	});
}
function alf_notify() {
    show_notification('ALF', 
        {
            "body": quotes[Math.floor(Math.random()*quotes.length)]
        }
    );
}
function close_menu() {
    document.getElementById('menu').style.display = 'none';
    window.location.reload();
}
function open_menu() {
    document.getElementById('menu').style.display = 'block';
}

function change_quote() {
    var rand = Math.floor((Math.random() * quotes.length));
    document.getElementById("quote").innerHTML = quotes[rand];
}
change_quote();
function set_installed() {
    document.getElementById('uninstall_button').style.display = 'block';
    document.getElementById('install_button').innerHTML = 'UPDATE';
}
function set_uninstalled() {
    document.getElementById('uninstall_button').style.display = 'none';
    document.getElementById('install_button').innerHTML = 'INSTALL';
}
if (navigator.serviceWorker.controller) {
    set_installed();
}
function start_notify() {
    var delay = 24 * 60 * 60 * 1000;
    setTimeout(function(){var oi = setInterval(function(){console.log('oi');},60000);},600000);
}

