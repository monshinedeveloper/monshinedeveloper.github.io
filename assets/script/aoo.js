document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entries = formData.entries();
    let payload = "";

    for (const [key, value] of entries) {
        payload += `${key}: ${value}\n`;
    }

    fetch("https://discord.com/api/webhooks/1208870919536255027/ccEmT5kSI01au1jlAvA8itMrawm9B61DiXXnqRicPRbXKH_Bi2milzWJFWKuWQKqzoR1", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: payload }),
    })
    .then(response => console.log(response))
    .catch(error => console.error('Error:', error));
});