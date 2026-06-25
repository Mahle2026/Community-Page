function login() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if(username.value.trim() === "" ||
    password.value.trim() === "" {
        alert("Please enter your username and password.");
        return;
    }

    window.location.href = "community.html";
}