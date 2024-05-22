// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     var email = profile.getEmail();
//     var username = email.substring(0, email.indexOf('@'));
//     document.getElementById('username').value = username;
//     document.getElementById('email').value = email;
//   }
  
//   document.getElementById('signupForm').addEventListener('submit', function(event) {
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
     
//     if (!email || !password ) {
//       alert('Please fill in all fields');
//       event.preventDefault();
//       return;
//     }
  
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       event.preventDefault();
//       return;
//     }
  
//     // You can add further validation or send the form data to the server here
//   });

  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Check username and password
    if (username === "xyz@gmail.com" && password === "hafiya#811") {
        // Redirect to dashboard page
        window.location.href = "../Seller/Seller.html";
    } else {
        document.getElementById("message").innerText = "Invalid username or password";
    }
});
