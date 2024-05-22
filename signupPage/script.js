function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var email = profile.getEmail();
  var username = email.substring(0, email.indexOf('@'));
  document.getElementById('username').value = username;
  document.getElementById('email').value = email;
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (!username || !email || !password || !confirmPassword) {
    alert('Please fill in all fields');
    event.preventDefault();
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    event.preventDefault();
    return;
  }

  // You can add further validation or send the form data to the server here
});
