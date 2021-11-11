
function myMap() {
    function success(pos) {
        var crd = pos.coords;
        crd.latitude = parseFloat(lat);
        crd.longitude = parseFloat(lng);
    };

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error);
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 12
    });
}

let subBtn = document.querySelector('#submitBtn');
subBtn.addEventListener('click', myMap)


// let query = ['restaurant', 'museum', 'hotel', 'coffee', 'McDonalds'];
// let radius = Number
// let lat = Number
// let lng = Number;

// const requestURL = 'http://198.199.125.240:8888/search';

// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()

//         xhr.open(method, url)
//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type', 'application/json')

//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//                 resolve(xhr.response)
//             }
//         }
//         xhr.onerror = () => {
//             reject(xhr.response)
//         }
//         xhr.send(JSON.stringify(body))
//     })
// }


// let body = {
//     "query": "restaurant",
//     "radius": 10000,
//     "lat": 50.27,
//     "lng": 30.31
// }


// sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


let myForm = document.querySelector('#myForm');

myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let elem = e.target;
    let sel = document.querySelector('#establishments');
    let formData = {
        establishments: elem.querySelector('#establishments').options[sel.selectedIndex].value,
        radius: elem.querySelector('input[name="range"]:checked').value,
        respType: elem.querySelector('input[name="resp"]:checked').value
    }
    console.log(formData.establishments, formData.radius, formData.respType);

    axios.post('http://198.199.125.240:8888/csv', {
        "query": formData.establishments,
        "radius": formData.radius,
        "lat": 50.27,
        "lng": 30.31
    })
})

