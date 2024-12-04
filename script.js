// Hey! This is my JavaScript code for the assignment

// Toggle Background Color Button - to make the page look cooler
document.getElementById("background-toggle").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
});

// Slider to change text size dynamically - Just for fun
document.getElementById("size-slider").addEventListener("input", function() {
  let textSize = this.value + "px";
  document.querySelector("#text-size-paragraph").style.fontSize = textSize;
});

// Modal functionality - When you click the button, the modal shows up
document.getElementById("modal-btn").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "block";
});

// Close the modal when the user clicks the close button
document.getElementById("close-modal-btn").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});

// Form Validation: Check the inputs before submitting
document.getElementById("userForm").addEventListener("submit", function(e) {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let nameValid = name.length >= 3;
  let emailValid = /\S+@\S+\.\S+/.test(email); // Check for valid email
  let passwordValid = password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);

  // If any validation fails, prevent the form from submitting and show a message
  if (!nameValid || !emailValid || !passwordValid) {
    e.preventDefault(); // Prevent form submission
    alert("Please check the form. Name must be at least 3 characters, password must be 8+ characters with an uppercase letter and a number.");
  }
});

// Dropdown onchange event - when the user selects an option
document.getElementById("country").addEventListener("change", function() {
  let selectedOption = this.value;
  let message = "";

  if (selectedOption === "Nigeria") {
    message = "You selected Nigeria! A great country!";
  } else if (selectedOption === "Kenya") {
    message = "Kenya is a beautiful country!";
  } else if (selectedOption === "South Africa") {
    message = "South Africa is known for its rich culture!";
  } else if (selectedOption === "Egypt") {
    message = "Egypt, with its ancient pyramids!";
  } else if (selectedOption === "Uganda") {
    message = "Uganda is known for its wildlife!";
  } else if (selectedOption === "Morocco") {
    message = "Morocco is famous for its history!";
  } else if (selectedOption === "Ghana") {
    message = "Ghana is known for its hospitality!";
  } else if (selectedOption === "Tanzania") {
    message = "Tanzania has amazing national parks!";
  } else if (selectedOption === "Algeria") {
    message = "Algeria has a rich cultural heritage!";
  } else if (selectedOption === "Ethiopia") {
    message = "Ethiopia is known for its ancient civilization!";
  }

  document.getElementById("messageDisplay").innerText = message;
});
