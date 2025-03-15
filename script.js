let url = "https://script.google.com/macros/s/AKfycbxxth2gu8FbE5wUlNDFoT32a2NeyfKjnDvzybHJRm0bWJ-ytnYofaUc7N4Hi867R4S6/exec";

// ✅ Correctly select the form
let form = document.querySelector("#waitlist-form");

if (!form) {
    console.error("❌ Form element not found!");
} else {
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // ✅ Prevent page reload

        let d = new FormData(form); // ✅ Get form data

        fetch(url, {
            method: "POST",
            body: d
        })
        .then(res => res.text()) // ✅ Parse response as text
        .then(finalRes => {
            console.log("✅ Success:", finalRes);
            document.getElementById("success-message").style.display = "block"; // ✅ Show success message
            form.reset(); // 🔥 ✅ Clear the form fields after submission
        })
        .catch(error => console.error("❌ Error:", error)); // ✅ Catch errors
    });
}
