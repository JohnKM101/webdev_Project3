function initMap() {
  const centerPoint = { lat: 41.8832, lng: -87.6324 }; // coordinates

  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 12,
    center: centerPoint,
  });

  // marker
  const marker = new google.maps.Marker({
    position: centerPoint,
    map: map
  });

  // info window
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Welcome to Chi-Town!</h3><p>The Windy City!</p>"
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

  //custom Map Style
  const styledMap = new google.maps.StyledMapType(
    [
      {
        stylers: [
          { saturation: -50 },
          { lightness: 10 }
        ]
      }
    ],
    { name: "Light Mode" }
  );

  map.mapTypes.set("light", styledMap);
  map.setMapTypeId("light");
}



window.initMap = initMap;


//questions?
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("questionsBtn");

  btn.addEventListener("click", () => {
    alert("If you have questions, contact me at:\nMjohnson45@hawk.illinoistech.edu");
  });
});
