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

window.onload = function() {
    showReview();
};

function addReview() {
    const input = document.getElementById("comment-input");
    const comments = JSON.parse(localStorage.getItem("reviews")) || [];

    const text = input.value.trim();
    
    if (text === "") {
        alert("Please write a review first.");
        return;
    }
    
    comments.unshift(text);
    localStorage.setItem("reviews", JSON.stringify(comments));
    input.value = "";
    alert("Thank you for your review!🩵");

}

function showReview() {
    const commentsDiv = document.getElementById("comments");
    const comments = JSON.parse(localStorage.getItem("reviews")) || [];
    commentsDiv.innerHTML = "";
    comments.forEach(function(review, index) {
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
        const comments = JSON.parse(localStorage.getItem("reviews")) || [];
        localStorage.setItem("reviews", JSON.stringify(comments));
        
        comments.splice(index, 1);
        localStorage.setItem("reviews", JSON.stringify(comments));

        showReview();
    }
