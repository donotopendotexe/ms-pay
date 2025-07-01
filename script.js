if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('Service Worker registriert:', registration);
    }).catch(error => {
      console.log('Service Worker Registrierung fehlgeschlagen:', error);
    });
  });
}

// Event listener für den "Jetzt bestellen!" Button
document.getElementById("losGehtsButton").addEventListener("click", function() {
    // Den Startscreen ausblenden
    document.getElementById("startscreen").style.display = "none";
    
    // Die Angebotssektion einblenden
    document.getElementById("angeboteSection").style.display = "block";
});

// Event listener für den "Jetzt bestellen!" Button
document.getElementById("bestellen").addEventListener("click", function() {
    // Den Startscreen ausblenden
    document.getElementById("zahlenher").style.display = "block";
    
    // Die Angebotssektion einblenden
    document.getElementById("angeboteSection").style.display = "none";
});

document.getElementById("bestellen2m").addEventListener("click", function() {
    // Den Startscreen ausblenden
    document.getElementById("zahlenher").style.display = "block";
    
    // Die Angebotssektion einblenden
    document.getElementById("angeboteSection").style.display = "none";
});

document.getElementById("bestellen3m").addEventListener("click", function() {
    // Den Startscreen ausblenden
    document.getElementById("zahlenher").style.display = "block";
    
    // Die Angebotssektion einblenden
    document.getElementById("angeboteSection").style.display = "none";
});
