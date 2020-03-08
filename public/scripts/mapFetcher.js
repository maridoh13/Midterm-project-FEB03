// Map function

function initMap() {
  const point1 = {
    name: "Gyu",
    lat: 49.280058,
    long: -123.1252331,
    content: "Best Japanese BBQ",
    infoWin: "infoG"
  };

  const point2 = {
    name: "SushiDen",
    lat: 49.2794237,
    long: -123.1078451,
    content: "Cheapest Sushi!",
    infoWin: "infoS"
  }

  let places = [point1, point2];


  // The map
  var vancity = { lat: 49.2945789, lng: -123.1182459 };
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 12, center: vancity }
  );

  for (let i = 0; i < places.length; i++) {
    let nameMarker = places[i].name;
    let infoWin = places[i].infoWin;

    nameMarker = new google.maps.Marker({
      position: { lat: places[i].lat, lng: places[i].long },
      map: map,
      animation: google.maps.Animation.DROP
    });

    infoWin = new google.maps.InfoWindow({
      content: places[i].content
    });

    nameMarker.addListener('click', function () {
      infoWin.open(map, nameMarker);
    });

  }

};


