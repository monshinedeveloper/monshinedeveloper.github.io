document.addEventListener('DOMContentLoaded', (event) => {
        let seconds = 0;
        let textElement = document.getElementById('loading-text');
        let progressBar = document.getElementById('progress');

        setInterval(() => {
            seconds++;

            switch (true) {
                case seconds <= 10:
                    textElement.innerText = "connecting to DC";
                    break;
                case seconds <= 45:
                    textElement.innerText = "connecting to UE";
                    break;
                case seconds <= 55:
                    textElement.innerText = "generate URL";
                    break;
                default:
                    textElement.innerText = "Ready " + (60 - seconds) + " seconds";
            }

            if (seconds <= 60) {
                progressBar.style.width = (seconds / 60 * 100) + "%";
            }

            if (seconds === 60) {
                window.location.href = "https://discord.com/invite/UgfrqFhtge"; // Hier deine URL einfügen
            }
        }, 1000);
    });