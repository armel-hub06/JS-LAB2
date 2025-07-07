function updateClock() {
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    const formattedTime = now.toLocaleTimeString('en-GB'); 
    document.getElementById('clockDisplay').textContent = `${formattedDate} - ${formattedTime}`;
    }
setInterval(updateClock, 1000);
updateClock(); 
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('darkModeToggle');
    if (document.body.classList.contains('dark-mode')) {
        btn.innerHTML = "🌙 Toggle Light Mode";
    } else {
        btn.innerHTML = "🌞 Toggle Dark Mode";
    }
    }
    function validateEmail() {
        const email = document.getElementById("email").value.trim();
        const feedback = document.getElementById("emailFeedback");
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (email === "") {
            feedback.textContent = "";
        } else if (!emailPattern.test(email)) {
            feedback.textContent = "❌ Invalid email format";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "✅ Valid email";
            feedback.style.color = "green";
        }
    }

function validatePassword() {
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("passwordFeedback");

    if (password === "") {
        feedback.textContent = "";
        return;
        }

    const strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const mediumPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (strongPattern.test(password)) {
        feedback.textContent = "✅ Strong password";
        feedback.style.color = "green";
    } else if (mediumPattern.test(password)) {
        feedback.textContent = "⚠️ Medium password – try adding special characters";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "❌ Weak password – use uppercase, numbers, symbols";
        feedback.style.color = "red";
        }
    }
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const feedback = document.getElementById("confirmPasswordFeedback");
    if (confirmPassword === "") {
        feedback.textContent = "";
            return;
        }

    if (password === confirmPassword) {
        feedback.textContent = "✅ Passwords match";
        feedback.style.color = "green";
        } else {
            feedback.textContent = "❌ Passwords do not match";
            feedback.style.color = "red";
            }
        }
function validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const feedback = document.getElementById("phoneFeedback");
    const phonePattern = /^\+\d{10,15}$/;

    if (phone === "") {
        feedback.textContent = "";
    } else if (!phonePattern.test(phone)) {
        feedback.textContent = "❌ Invalid phone format. Use +254712345678";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "✅ Valid phone number";
        feedback.style.color = "green";
            }
        }
function validateDOB() {
    const dobInput = document.getElementById("dob").value;
    const feedback = document.getElementById("dobFeedback");

    if (!dobInput) {
        feedback.textContent = "";
        return;
    }

    const today = new Date();
    const birthDate = new Date(dobInput);
    
    // Set cutoff date: 18 years ago from today
    const cutoffDate = new Date(today.getFullYear() - 18, today.getMonth(), 1);

    if (birthDate <= cutoffDate) {
        feedback.textContent = "✅ Age accepted";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "❌ You must be at least 18 years old";
        feedback.style.color = "red";
    }
}