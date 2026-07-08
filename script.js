// Step 1: Find the button in the HTML using its id
const acceptButton = document.getElementById("accept-btn");

// Step 2: Listen for a "click" on the button
acceptButton.addEventListener("click", function () {

  // Change the button text
  acceptButton.textContent = "Quest Accepted!";

  // Change the background color from green to gray
  acceptButton.style.backgroundColor = "gray";

  // Disable the button so it can't be clicked again
  acceptButton.disabled = true;
});
