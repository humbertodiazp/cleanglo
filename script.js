function onSubmit(token) {
    document.getElementById("demo-form").submit();
}

(function() {
    // Initialize EmailJS with your public key
    emailjs.init("gwc-U2qHF0jVBzyW4");
})();

window.onload = function() {
    document.getElementById('template_hi69ml8').addEventListener('submit', function(event) {
        event.preventDefault();
        // Use the correct service ID, template ID, and form
        emailjs.sendForm('service_yfc4cp2', 'template_hi69ml8', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}



document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const modal = document.getElementById('navbarModal');
    const closeButton = document.querySelector('.close-button');
    const modalNavLinks = document.querySelectorAll('.modal-nav-links a');

    // Open modal when hamburger is clicked
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    }

    // Close modal when close button is clicked
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal when any nav link inside the modal is clicked
    modalNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });
});


