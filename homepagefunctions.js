/*Group 8: Kyra O'Connor, Calum Cleary, Caoimhe O'Sullivan, Matthew Brink*/

/*API*/
/*https://api.openweathermap.org/data/2.5/weather?callback=process&lang=en&units=metric&q=Cork,Ireland&appid=9144a80c6727020a0a7106a1c6a63766  */



/*Open and close sidebar*/
function toggle_sidebar(){
    var sidebar = document.getElementById("sidebar");


    document.getElementById("sidebar").style.display = "block";
    
}

/*get live location*/
const result = document.querySelector("#live_location_result")

document.querySelector("#live_location").addEventListener (
    "click", 
    get_live_location
);

function get_live_location(){
    if (!navigator.geolocation){
        result.textContent = "Geolocation is not supported by your browser"
        return;
    }
        navigator.geolocation.getCurrentPosition(
            (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude; 
        
            result.textContent = `Latitude: ${lat}\nLongitude: ${lon}`;
        },
            
    (err) => {
        result.textContent = `Error: ${err.message}`;
    }
);
}



/*window.addEventListener("load", init);

function init(

)*/