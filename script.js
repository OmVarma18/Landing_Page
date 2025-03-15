document.getElementById("waitlist-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Google Apps Script URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbxdp-gf8fNdwXJivRbf0j9xWnhfABw2jQ9JX7eVsxTFoPlglPDNfAg2QHMQdeitkzIz/exec";

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ name: name, email: email }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => {
        document.getElementById("success-message").style.display = "block";
        document.getElementById("waitlist-form").reset();
    })
    .catch(error => console.error("Error:", error));
});
