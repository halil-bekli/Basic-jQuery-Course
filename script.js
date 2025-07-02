// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Background color button functionality
    const changeColorBtn = document.getElementById('changeColorBtn');
    const body = document.body;
    const colors = ['#f4f4f4', '#e8f5e9', '#e3f2fd', '#fff8e1', '#fce4ec'];
    let currentColorIndex = 0;

    changeColorBtn.addEventListener('click', function () {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        body.style.backgroundColor = colors[currentColorIndex];
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Normally, you would send this data to a server
        // For this example, we'll just show an alert
        alert(`Form submitted!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Clear the form
        contactForm.reset();
    });

    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});

$(document).ready(function () {
    $("#btnChangeColor").css("display", "inline-block");
    $("#btnChangeColor").click(function () {
        $(".box").css("background-color", "lightblue");
        $("#box1").css("border-color", "lightgreen");
        $("#box2").css("border", "3px solid lightcoral");
    });
}); // End of jQuery ready function