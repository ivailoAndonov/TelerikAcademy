(function () {
    let getCick = document.getElementById('click')
        .addEventListener('click', popUp);

    function popUp() {

        let myPromis = new Promise((resolve, reject) => {
            console.log(resolve);
            return resolve('ok');
        });

        function loadPopUp() {
            document.getElementById('light').style.display = 'block';
            document.getElementById('fade').style.display = 'block';
        }

        function timeOut() {
            setTimeout(function () {
                window.location.href = "http://www.google.com";
            }, 2000);
        }

        myPromis
            .then(console.log(resolve))
            //.then(timeOut);
    }

})();