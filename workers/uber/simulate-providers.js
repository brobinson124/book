var _ = require('lodash')
var random_name = require('node-random-name');
var Firebase = require('firebase');
// Denver
var city_location = {
    lat: 39.75,
    lon: -104.98
}
var radius = 0.03
    // simualate a random person entering, staying for a duration, and leaving
function simulate() {
    // generate a random person with a random name,
    // random location, and random duration
    var name = random_name();
    var duration = 1 + 60 * Math.random();
    var lat = city_location.lat + radius * (Math.random() - 0.5) * 2;
    var lon = city_location.lon + radius * (Math.random() - 0.5) * 2;
    var gas = Math.random() < 0.5 ? true : false;
    var vacuum = Math.random() < 0.5 ? true : false;
    var jump = Math.random() < 0.5 ? true : false;
    var winwash = Math.random() < 0.5 ? true : false;
    var airfresh = Math.random() < 0.5 ? true : false;
    var movementdur = 1 + 5 * Math.random();

    var person = {
        name: name,
        duration: duration,
        movement: movementdur,
        lat: lat,
        lon: lon,
        gas: gas,
        vacuum: vacuum,
        jump: jump,
        winwash: winwash,
        airfresh: airfresh
    };

    // simulate this person entering
    enter(person);

    movement();

    // simulate this person leaving after 'duration' seconds
    setTimeout(function() {
        leave(person);
    }, duration * 1000);

}

function enter(person) {
    console.log('enter', person.name);
    // Put this person in the Firebase
    var ref = new Firebase('https://weekfour.firebaseio.com/providers');
    ref.child(person.name).set({
        duration: person.duration,
        lat: person.lat,
        lon: person.lon,
        name: person.name,
        gas: person.gas,
        vacuum: person.vacuum,
        jump: person.jump,
        winwash: person.winwash,
        airfresh: person.airfresh
    });
}

function movement() {

    console.log("movement called!");

    var ref = new Firebase('https://weekfour.firebaseio.com/');

    ref.child('providers').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var provider = childSnapshot.val();
            var childKey = childSnapshot.key();
            console.log(provider);

            var latmov = Math.random() * (0.001).toFixed(4);
            latmov *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

            var lonmov = Math.random() * (0.001).toFixed(4);
            lonmov *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

            var lat = latmov + provider.lat;
            var lon = lonmov + provider.lon;

            // console.log("Lat: " + lat + " CNG: " + (provider.lat-lat));
            // console.log("Lon: " + lon + " CNG: " + (provider.lon-lon));

            ref.child('providers/' + provider.name).set({
                lat: lat,
                lon: lon,
                duration: provider.duration,
                name: provider.name,
                gas: provider.gas,
                vacuum: provider.vacuum,
                jump: provider.jump,
                winwash: provider.winwash,
                airfresh: provider.airfresh
            });

        });
    });
}


function leave(person) {
    console.log('leave', person)
    var ref = new Firebase('https://weekfour.firebaseio.com/providers')
    var onComplete = function(error) {
        if (error) {
            console.log('Leave Synchronization failed');
        } else {
            console.log('Leave Synchronization succeeded');
        }
    };
    ref.child(person.name).remove(onComplete);
}

function clear() {
    // TODO: remove all people from the Firebase
    var ref = new Firebase('https://weekfour.firebaseio.com/providers')
    var onComplete = function(error) {
        if (error) {
            console.log('Clear Synchronization failed');
        } else {
            console.log('Clear Synchronization succeeded');
        }
    };
    ref.remove(onComplete);
}
// clear the firebase, so that the simulation always starts from no one
clear();
// run each second
setInterval(simulate, 2000);