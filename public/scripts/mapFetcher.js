// Map function

// The locations
var vancity = {lat: 49.2945789, lng: -123.1182459};
var gyu = {lat: 49.280058, lng: -123.1252331};
var sushi = {lat: 49.2794237, lng: -123.1078451};
var contentString = "hello world";
var string2 = "howdy do";


function initMap() {
  // The map
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 12, center: vancity});

  var marker1 = new google.maps.Marker({position: gyu, map: map, animation: google.maps.Animation.DROP});
  var marker2 = new google.maps.Marker({position: sushi, map: map, animation: google.maps.Animation.DROP});


  var infowindow1 = new google.maps.InfoWindow({
    content: contentString
  });

  var infowindow2 = new google.maps.InfoWindow({ content: string2})

  marker1.addListener('click', function() {
    infowindow1.open(map, marker1);
  });

  marker2.addListener('click', function() {
    infowindow2.open(map, marker2)
  });


};


