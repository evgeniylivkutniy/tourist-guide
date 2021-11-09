let findMeButton = document.getElementById('findMe');

const getMyPosition = () => {
    navigator.geolocation.getCurrentPosition(function (position) {

        // Текущие координаты.
        return x = position.coords.latitude,
            y = position.coords.longitude;


    })
}
findMeButton.addEventListener('click', getMyPosition)



function myMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        getMyPosition,
        center: { lat: parseFloat(x), lng: parseFloat(y) },
        zoom: 12
    });
}
