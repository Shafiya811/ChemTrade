document.getElementById("buyerSignupButton").addEventListener("click", function () {
  setRoleAndShowForm("buyer");
});

document.getElementById("sellerSignupButton").addEventListener("click", function () {
  setRoleAndShowForm("seller");
});

function setRoleAndShowForm(role) {
  document.getElementById("role").value = role;
  document.getElementById("roleSelection").style.display = "none";
  document.getElementById("signupFormContainer").style.display = "block";
}

document.getElementById("signupForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const role = document.getElementById("role").value;

  if (!email || !password || !confirmPassword || !username) {
    alert('Please fill in all fields');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password, role })
    });

    const data = await response.json();
    if (response.ok) {
      alert('Signup successful! You can now log in.');
      window.location.href = "../loginPage/login.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert('An error occurred. Please try again.');
  }
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var email = profile.getEmail();
  var username = email.substring(0, email.indexOf('@'));
  document.getElementById('username').value = username;
  document.getElementById('email').value = email;
}