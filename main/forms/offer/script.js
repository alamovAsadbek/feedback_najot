document.addEventListener('DOMContentLoaded', function () {
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');

    signInBtn.addEventListener('click', function () {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
    });

    signUpBtn.addEventListener('click', function () {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted!');
    });
});
