document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}. Your message has been sent!`);
        // You can add email functionality via services like EmailJS here
    } else {
        alert("Please fill in all the fields.");
    }
});
