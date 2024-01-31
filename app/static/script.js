function submitBooking() {
    // Get form values
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var guests = document.getElementById("guests").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var message = document.getElementById("message").value;

    // Log the form data (you can replace this with your own logic)
    console.log("Name: " + name);
    console.log("Phone: " + phone);
    console.log("Email: " + email);
    console.log("Guests: " + guests);
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Message: " + message);
}

function submitForm() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Log the form data (you can replace this with your own logic)
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Subject: " + subject);
    console.log("Message: " + message);
}

document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling to all links inside the navbar
    document.querySelectorAll('.nav-list a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-btn").addEventListener("click", function () {
        openPopup('login-form');
    });

    document.getElementById("signup-btn").addEventListener("click", function () {
        openPopup('signup-form');
    });
});

function openPopup(formId) {
    document.getElementById("popup-container").style.display = "flex";

    // Hide the other form
    document.getElementById('login-form').style.display = formId === 'login-form' ? 'block' : 'none';
    document.getElementById('signup-form').style.display = formId === 'signup-form' ? 'block' : 'none';
}

function closePopup() {
    document.getElementById("popup-container").style.display = "none";
}