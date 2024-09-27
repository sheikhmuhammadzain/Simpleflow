document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
  
    function switchForms(showForm, hideForm, activeBtn, inactiveBtn) {
      showForm.style.display = 'block';
      hideForm.style.display = 'none';
      activeBtn.classList.add('active');
      inactiveBtn.classList.remove('active');
    }
  
    signInBtn.addEventListener('click', () => switchForms(signInForm, signUpForm, signInBtn, signUpBtn));
    signUpBtn.addEventListener('click', () => switchForms(signUpForm, signInForm, signUpBtn, signInBtn));
  
    signInForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add your sign-in logic here
      console.log('Sign In submitted');
      window.location.href = 'mainscreen.html';
    });
  
    signUpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const password1 = document.getElementById('password1').value;
      const password2 = document.getElementById('password2').value;
      if (password1 !== password2) {
        alert('Passwords do not match!');
      } else {
        // Add your sign-up logic here
        console.log('Sign Up submitted');
        window.location.href = 'otp.html';
      }
    });
  });