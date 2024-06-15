document.getElementById("registrationForm").addEventListener("submit", function(event) { 
    var username = document.getElementById("username").value.trim(); 
    var email = document.getElementById("email").value.trim(); 
    var password = document.getElementById("password").value.trim(); 
    var confirmPassword = document.getElementById("conpassword").value.trim(); 

    var isValid = true; 

    // Username validation 
    if (username.length < 4) { 
        document.getElementById("usernameError").textContent = "Username must be at least 4 characters long."; 
        isValid = false; 
    } else { 
        document.getElementById("usernameError").textContent = ""; 
    } 

    // Email validation 
    if (!isValidEmail(email)) { 
        document.getElementById("emailError").textContent = "Invalid email address."; 
        isValid = false; 
    } else { 
        document.getElementById("emailError").textContent = ""; 
    } 

    // Password validation 
    if (password.length < 4) { 
        document.getElementById("passwordError").textContent = "Password must be at least 4 characters long."; 
        isValid = false; 
    } else { 
        document.getElementById("passwordError").textContent = ""; 
    } 

    // Confirm password validation 
    if (confirmPassword !== password) { 
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match."; 
        isValid = false;
    } else { 
        document.getElementById("confirmPasswordError").textContent = ""; 
    } 

    if (!isValid) { 
        event.preventDefault(); 
    } else {
        saveData();
        event.preventDefault();  // Prevent default form submission
    }
}); 

function isValidEmail(email) { 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email); 
} 

// SIGN UP DATA 
function saveData(){
    let signup_name = document.getElementById("username").value;
    let signup_email = document.getElementById("email").value;
    let signup_pass = document.getElementById("password").value;
    let signup_conpass = document.getElementById("conpassword").value;

    let user_records = JSON.parse(localStorage.getItem("users")) || [];
    if(user_records.some((v) => v.email === signup_email)){
        alert("This email is already registered. Try another one");
    } 
    else {
        user_records.push({
            "name": signup_name,
            "email": signup_email,
            "password": signup_pass,
            "confirm password": signup_conpass
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("Registration successful!");
    }
}
