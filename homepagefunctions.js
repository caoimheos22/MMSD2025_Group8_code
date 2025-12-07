/*Group 8: Kyra O'Connor, Calum Cleary, Caoimhe O'Sullivan, Matthew Brink*/

/*get current coords*/

function getLocation(){
    navigator.geolocation.getCurrentPosition (retrieveCoords);
}

function retrieveCoords(position){
    var devLatitude = position.coords.latitude;
    var devLongitude = position.coords.longitude;

    document.getElementById("current_coords").innerHTML = "lat: " + devLatitude + " long: " + devLongitude;
}

window.addEventListener("load", init);

function init(){
    document.getElementById("current_coords_but").addEventListener("click", getLocation)
}