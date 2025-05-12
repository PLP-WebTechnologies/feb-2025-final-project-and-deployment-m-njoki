// Example of a simple form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('All fields are required');
  } else {
    alert('Message sent successfully!');
  }
});
