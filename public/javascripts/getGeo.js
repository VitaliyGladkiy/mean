function getLocation() {
    if (navigator.geolocation) {
        console.log(navigator.geolocation.watchPosition(()=> {
            console.log("apt: " + position.coords.latitude + " long: " + position.coords.longitude);
        }));
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}