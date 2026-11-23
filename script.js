document.getElementById("studentForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let dept = document.getElementById("dept").value;

    document.getElementById("message").innerText =
        "Successfully Submitted!";

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", dept);

    this.reset();

});