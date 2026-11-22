document.getElementById("studentForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    document.getElementById("message").innerText =
        "Form submitted successfully! Welcome " + name;

    console.log("Name:", name);
    console.log("Email:", email);

    this.reset();

});