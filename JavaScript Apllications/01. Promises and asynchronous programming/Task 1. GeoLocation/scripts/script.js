(function () {
    let getCick = document.getElementById('click')
        .addEventListener('click', getPozition);

    function getPozition() {

        let myPromis = new Promise((resolve, reject) => {
            if( navigator.geolocation.getCurrentPosition){ console.log(' "navigator.geolocation.getCurrentPosition" exists dut doesn\'t work in chrome!!');}
            navigator.geolocation.getCurrentPosition((pos) => {
                
                resolve(pos);
            })
        });

        function coordsParse(pos) {
            return {
                lat: pos.coords.latitude,
                long: pos.coords.longitude
            };
        }

        function displyMap(pos) {
            let src = `http://maps.googleapis.com/maps/api/staticmap?center=${pos.lat},${pos.long}&zoom=13&size=700x450&sensor=false`;
            let resultdone = document.getElementById('map');
            resultdone.setAttribute('src', src);
        }

        function error(err) {
            let result = document.getElementById('error')
                .innerHTML = 'Error';
            return result;
        }

        myPromis
            .then(coordsParse)
            .then(displyMap)
            .catch(error);

    }
})();

