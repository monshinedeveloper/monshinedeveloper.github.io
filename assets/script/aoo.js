// Externe JS-Datei: script.js

// Funktion zur Verarbeitung des Formulars
function processForm(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Formulars
  
  // Daten aus dem Formular abrufen
  const playerName = document.getElementById('playerName').value;
  const playedAOO = document.getElementById('playedAOO').value;
  const highestCommander = document.getElementById('highestCommander').value;
  const playType = document.getElementById('playType').value;
  const expertiseCommander = document.getElementById('expertiseCommander').value;
  const t3Troops = document.getElementById('t3Troops').value;
  const t4Troops = document.getElementById('t4Troops').value;
  
  // Daten für den Webhook zusammenstellen
  const data = {
    playerName: playerName,
    playedAOO: playedAOO,
    highestCommander: highestCommander,
    playType: playType,
    expertiseCommander: expertiseCommander,
    t3Troops: t3Troops,
    t4Troops: t4Troops
  };

  // An den Webhook senden (Beispiel: POST-Anfrage mit Fetch-API)
  fetch('https://example.com/webhook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Registration successful!');
      // Hier können weitere Aktionen nach erfolgreicher Registrierung ausgeführt werden
    } else {
      throw new Error('Registration failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Registration failed. Please try again later.');
  });
}

// Formular-Element abrufen und Ereignislistener hinzufügen
const form = document.getElementById('aooForm');
form.addEventListener('submit', processForm);