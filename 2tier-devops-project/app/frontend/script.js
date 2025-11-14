document.getElementById("userForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const response = await fetch("http://<backend-private-ip>:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });

    if (response.ok) {
        alert("Data submitted successfully!");
    } else {
        alert("Failed to submit data.");
    }
});
