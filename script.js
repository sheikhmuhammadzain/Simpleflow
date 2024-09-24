document.getElementById('signInBtn').addEventListener('click', function() {
    // Change the style for Sign In
    document.getElementById('signUpBtn').classList.remove('active');
    document.getElementById('signInBtn').classList.add('active');
    alert("Thank you for signing in!");
});
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
});
 
document.getElementById('signUpBtn').addEventListener('click', function() {
    // Change the style for Sign Up
    document.getElementById('signInBtn').classList.remove('active');
    document.getElementById('signUpBtn').classList.add('active');
    alert("Thank you for signing up!");
});

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    if (password1 !== password2) {
        alert("Passwords do not match!");
    } else {
        window.location.href = "otp.html";
    }
});

