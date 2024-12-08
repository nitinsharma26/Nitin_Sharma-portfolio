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

function toggleProjects() {
    var moreProjects = document.getElementById('more-projects');
    var viewMoreBtn = document.querySelector('.view-more');

    if (moreProjects.classList.contains('hidden')) {
        moreProjects.classList.remove('hidden');
        viewMoreBtn.textContent = 'View Less';
    } else {
        moreProjects.classList.add('hidden');
        viewMoreBtn.textContent = 'View More';
    }
}
