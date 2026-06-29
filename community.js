function toggleMenu() {
    const nav = document.getElementById("navLinks");
nav.classList.toggle("active");
}

function readArticle() {
    alert("Full article coming soon.");
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

window.onload = function() {
    showReviews();
};

function addReview() {
    const input = document.getElementById("comment-input");
    const text = input.value.trim();

    if (text === "") {
        alert("Please write a review first.");
        return;
    }

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    
    reviews.unshift(text);

    localStorage.setItem("reviews", JSON.stringify(comments));
    input.value = "";
    showReview();

    alert("Thank you for your review!🩵");
}

function showReview() {
    const commentsDiv = document.getElementById("comments");
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    commentsDiv.innerHTML = "";

    reviews.forEach(function(review, index) {
        commentsDiv.innerHTML += `
    <div class="comment-card">
    <h4>Community Member</h4>
    <p>${review}</p>
    <button onclick="deleteReview(${index})>🗑️Delete</button>
    </div>
    `;
    });
}
    function deleteReview(index) {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        localStorage.setItem("reviews", JSON.stringify(reviews));
        
        reviews.splice(index, 1);
        localStorage.setItem("reviews", JSON.stringify(reviews));

        showReviews();
    }
