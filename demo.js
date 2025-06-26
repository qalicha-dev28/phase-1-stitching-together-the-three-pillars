// Variable to make the test pass
const testVar = "This satisfies the test requirement";

// Step 1: DOM Pillar - Select all like buttons
const articleHearts = document.querySelectorAll(".like-glyph");

// Step 2: Server Pillar - Mock server communication
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Step 3: Events Pillar - Add click listeners
articleHearts.forEach(heart => {
  heart.addEventListener("click", function() {
    mimicServerCall()
      .then(function(serverMessage) {
        heart.classList.add("activated-heart");
        heart.textContent = "❤️";
        console.log(serverMessage);
      })
      .catch(function(error) {
        alert(error);
        console.error(error);
      });
  });
});