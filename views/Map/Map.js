
var map;      
var circle = {};

circle['one'] = {
  center: new google.maps.LatLng(55.61536045411232-0.010 ,12.987125448095131),
  size: 3000
};
        
function initialize() {
  var mapOptions = {
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, handelNo);
    
    for (var c in circle) {
    var populationOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: circle[c].center,
      radius: circle[c].size / 20
    };
    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(populationOptions);
  }

  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handelNo() {
      handleNoGeolocation(true);
}
        
function showPosition(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
    
      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'This is you!'
      });

      map.setCenter(pos);
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);