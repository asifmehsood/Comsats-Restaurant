document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var contactMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];

    contactMessages.push({
        "email": email,
        "message": message
    });

    localStorage.setItem('contactMessages', JSON.stringify(contactMessages));

    alert('Your message has been saved!');

    document.getElementById('contactForm').reset();
});
