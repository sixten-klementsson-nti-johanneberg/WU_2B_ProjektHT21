function initMap() {
  const mcKinney = { lat: 32.80026, lng: -96.80048 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: mcKinney,
    controlSize: 32,
  });
  const marker = new google.maps.Marker({
    position: mcKinney,
    map: map,
  });
}
