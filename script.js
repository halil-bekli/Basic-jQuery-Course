// Wait for the DOM to be fully loaded
document.addEventListener('DOMShow_hide_contentLoaded', function () {
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

// ### CSS - EVENT ###
$(document).ready(function () {
    $("#btnChangeColor").css("display", "inline-block");
    $("#btnChangeColor").click(function () {
        $(".box").css("background-color", "lightblue");
        $("#box1").css("border-color", "lightgreen");
        $("#box2").css("border", "3px solid lightcoral");
    });
}); // End of jQuery ready function

// ### HTML ###
$(document).ready(function () {
    $("#html_button").click(function () {
        $("#html_id").html("<p><b><mark>Changed Text</mark></b></p>");
    });
});

// ### TEXT ###
$(document).ready(function () {
    $("#text_button").click(function () {
        $("#html_id").html("<p>Changed Text</p>");
    });
});

// ### ATTR ###
$(document).ready(function () {
    $("#attr_button").click(function () {
        $("#attr_id").attr("href", "https://www.example.com");
    });
});

// ### EFFECT ###
$(document).ready(function () {
    $("#effect_div").click(function () {
        // effect
        $("#effect_div").effect("bounce", "slow");

        // animate
        $("#effect_div").animate({ left: "300px" }).delay(2000);
    });
});

// ### FADE ###
$(document).ready(function () {
    $("#fadeout_id").click(function () {
        alert("Fade Out Button Clicked");
        $("#fade_p_id").fadeOut("slow").delay(5000);
    });

    $("#fadein_id").click(function () {
        alert("Fade In Button Clicked");
        $("#fade_p_id").fadeIn("slow");
    });
});

// ### SHOW - HIDE ###
$(document).ready(function () {
    $("#show_btn").click(function () {
        $("#show_hide_content").show(1000);
    });

    $("#hide_btn").click(function () {
        $("#show_hide_content").hide(1000);
    });
});