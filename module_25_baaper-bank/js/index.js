document.getElementById("login-submit").addEventListener('click', function () {
    // get user email 
    var emailField = document.getElementById('user-email');
    var userEmail = emailField.value;
    console.log("email: ", userEmail);

    // get user password 
    var passwordField = document.getElementById('user-password');
    var userPassword = passwordField.value;
    console.log("password: ", userPassword);

    if (userEmail == 'baperbassa@gmail.com' && userPassword == 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert("Wrong email or password!");
    }
})