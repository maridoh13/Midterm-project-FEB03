// Map function

function initMap() {

  fetch("/api/points").then((response) => {
    response.json().then((text) => {
      return text.users;
    })
    .then((data) => {
      let places = [];

      for (let i = 0; i < data.length; i++) {
        places.push({
          name: data[i].name,
          lat: parseFloat(data[i].lat),
          lng: parseFloat(data[i].lng),
          content: data[i].name
        });
      }

      // The map
      let vancity = { lat: 49.2945789, lng: -123.1182459 };
      let map = new google.maps.Map(
        document.getElementById('map'), { zoom: 12, center: vancity }
        );

      for (let i = 0; i < places.length; i++) {
        let nameMarker = new google.maps.Marker({
          position: { lat: places[i].lat, lng: places[i].lng },
          map: map,
          animation: google.maps.Animation.DROP
        });

        let infoWin = new google.maps.InfoWindow({
          content: places[i].content
        });

        nameMarker.addListener('click', function () {
          infoWin.open(map, nameMarker);
        });

      }
    });
  });
}
