document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission
    signinData();
});

function isValidEmail(email) { 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email); 
}

function signinData(){
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    
    var isValid = true; 

    // Email validation 
    if (!isValidEmail(email)) { 
        document.getElementById("emailError").textContent = "Invalid email address."; 
        isValid = false; 
    } else { 
        document.getElementById("emailError").textContent = ""; 
    } 

    if (!isValid) {
        return;  // Exit if validation fails
    }

    let user_record = JSON.parse(localStorage.getItem("users")) || [];

    if(user_record.some((v) => v.email === email && v.password === password)){
        alert("Login successful");
        let current_user = user_record.filter((v) => v.email === email && v.password === password)[0];
        localStorage.setItem("name", current_user.name);
        localStorage.setItem("email", current_user.email);
        localStorage.setItem("password", current_user.password);
        window.location.href = "home.html";  // Redirect to a home page
    } else {
        alert("Login failed");
    }
}
