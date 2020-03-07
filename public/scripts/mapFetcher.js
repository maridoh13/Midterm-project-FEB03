  const initMap = () => {
    // The locations
    var vancity = {lat: 49.2945789, lng: -123.1182459};
    var gyu = {lat: 49.280058, lng: -123.1252331};
    var sushi = {lat: 49.2794237, lng: -123.1078451};


    // The map
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: vancity});

    var marker1 = new google.maps.Marker({position: gyu, map: map, animation: google.maps.Animation.DROP});
    var marker2 = new google.maps.Marker({position: sushi, map: map, animation: google.maps.Animation.DROP});

  };



  // You can use a LatLng literal in place of a google.maps.LatLng object when
  // creating the Marker object. Once the Marker object is instantiated, its
  // position will be available as a google.maps.LatLng object. In this case,
  // we retrieve the marker's position using the
  // google.maps.LatLng.getPosition() method.

  // var infowindow = new google.maps.InfoWindow({
  //   content: '<p>Marker Location:' + marker.getPosition() + '</p>'
  // });

  // google.maps.event.addListener(marker, 'click', function() {
  //   infowindow.open(map, marker);
  // });
  // google.maps.event.addDomListener(window, 'load', initialize);

