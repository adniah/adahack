document.getElementById('locationButton').addEventListener('click', function() {
    var button = this;
    var title = document.getElementById('title');


    // Start fading the button and title
    button.style.opacity = 0;
    title.style.opacity = 0;

    // Wait for the fade effect to complete
    setTimeout(function() {
        title.style.display = 'none';
        button.style.display = 'none';
        loadRandomLocation();
    }, 500); // Set the timeout to the duration of the fade effect
});

// Rest of the loadRandomLocation function remains the same


function loadRandomLocation() {
    // Define the boundaries of the city (example coordinates for Edinburgh)
    var north = 55.980419; // northernmost latitude
    var south = 55.934138; // southernmost latitude
    var east = -3.144220; // easternmost longitude
    var west = -3.231799; // westernmost longitude

    // Generate a random latitude and longitude within the boundaries
    var lat = south + (Math.random() * (north - south));
    var lng = west + (Math.random() * (east - west));
    const randomLocation = { lat: lat, lng: lng };

    // Initialize and display the map
    const map = new google.maps.Map(document.getElementById('map'), {
        center: randomLocation,
        zoom: 18, // A closer zoom level may be better for 3D views
        mapTypeId: 'hybrid', // Set the map type to hybrid (satellite with labels)
        tilt: 45 // Enable a 45-degree perspective (3D view)
    });

    // Place a marker at the random location
    new google.maps.Marker({
        position: randomLocation,
        map: map,
    });

    // Display the map
    document.getElementById('map').style.display = 'block';
}


$(window).on('resize', function() {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
})