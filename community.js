function toggleMenu() {
    const nav = document.getElementById("navLinks");
nav.classList.toggle("active");
}

function readBlog(number) {
       if (number === 1) {
    alert("Week 1 article coming soon!");
}

  else if (number === 2) {
    alert("Week 2 article coming soon!");
  }
    
  else {
    alert("More articles are coming soon!");
  }
}
function notifyme() {
    alert("✔️ Thanks! You'll be notified when new content is avaliable.");
}

function addReview() {
    const input = document.getElementById("comment-input");
    const comments = document.getElementById("comments");

    const text = input.value.trim();
    if (text === "") {
        alert("Thank you for your review!🩵.");
        return;
    }

    const review = document.createElement("div");
    review.className = "comment-card";

    review.innerHTML = `
    <h4>Community Member</h4>
    <p>${text}</p>
    <button class="delete-btn" onclick="this.parentElement.remove()">🗑️Delete</button>
    `;
    comments.prepend(review);
    input.value = "";
}