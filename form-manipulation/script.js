// Task 2: Write JavaScript code to handle form submissions and store user input in an object
function User(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = this.message;
}

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value || null;
    let user = new User(name, email, message);

    document.getElementById("userForm").reset();
});