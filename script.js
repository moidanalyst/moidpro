window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax-background');
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Adjust 0.5 for speed
    });
});

// Function to handle the parallax scrolling and fade-in/fade-out effects
window.addEventListener('scroll', function () {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Select all parallax sections
    const parallaxSections = document.querySelectorAll('.parallax-section');

    // Loop through each parallax section
    parallaxSections.forEach((section) => {
        // Get the position of the section relative to the top of the viewport
        const sectionTop = section.getBoundingClientRect().top + scrollPosition;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Calculate the distance to the viewport center
        const viewportCenter = window.innerHeight / 2;
        const sectionCenter = sectionTop + section.offsetHeight / 2;

        // Check if the section is in the viewport
        if (sectionBottom > scrollPosition && sectionTop < (scrollPosition + window.innerHeight)) {
            // Calculate the opacity based on how centered the section is
            const distanceFromCenter = Math.abs(sectionCenter - (scrollPosition + viewportCenter));
            const maxDistance = window.innerHeight / 1; // Adjust for a slower fade-out

            // Calculate opacity (1 at center, fading to 0 at the edges)
            const opacity = 1 - (distanceFromCenter / maxDistance);
            section.style.opacity = Math.min(Math.max(opacity, 0), 1); // Clamp opacity between 0 and 1
        } else {
            // If the section is out of view, set opacity to 0
            section.style.opacity = 0;
        }
    });
});

// Set initial opacity for the first section on page load
document.addEventListener("DOMContentLoaded", () => {
    const firstSection = document.querySelector('.parallax-section'); // Select the first section generically
    firstSection.style.opacity = 1; // Ensure the first section is fully visible
});

// Action when form data is submitted
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    var formData = new FormData(this); // Capture form data

    // Send AJAX request
    fetch('https://moid.up.railway.app/submit_form', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        if (data.status === 'success') {
            // Show thank you message
            document.getElementById('thankyou').style.display = 'block';
            // Clear the form fields
            document.getElementById('contactForm').reset();
        } else {
            alert('There was an error submitting your form');
        }
    })
    .catch(error => console.error('Error:', error));
});

    // Check if the 'page_view' item exists in localStorage
    if (localStorage.getItem('page_view')) {
        // If it exists, increment the count
        localStorage.setItem('page_view', Number(localStorage.getItem('page_view')) + 1);
    } else {
        // If it doesn't exist, initialize the count to 1
        localStorage.setItem('page_view', 1);
    }

    // Display the visitor count on the webpage
    console.log("This page has been viewed ", localStorage.getItem('page_view'), " times");

