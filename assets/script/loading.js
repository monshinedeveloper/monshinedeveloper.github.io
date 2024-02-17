function startLoadingAnimation() {
    var loadingCircle = document.getElementById('loading-circle');
    var loadingBar = document.getElementById('loading-bar');
    var percent = 0;
    var increment = 100 / 30; // Prozent pro Sekunde

    var interval = setInterval(function() {
        loadingCircle.style.backgroundColor = getNextColor(loadingCircle.style.backgroundColor);
        loadingBar.style.width = percent + '%';
        loadingBar.innerText = 'connecting... ' + Math.round(percent) + '%';
        percent += increment;
        if (percent >= 100) {
            clearInterval(interval);
            // Weiterleitung nach 30 Sekunden
            setTimeout(function() {
                window.location.href = 'WEITERLEITUNGS_URL_HIER_EINFÜGEN';
            }, 1000);
        }
    }, 1000);
}

function getNextColor(currentColor) {
    switch (currentColor) {
        case 'red':
            return 'blue';
        case 'blue':
            return 'green';
        case 'green':
            return 'red';
        default:
            return 'red';
    }
}