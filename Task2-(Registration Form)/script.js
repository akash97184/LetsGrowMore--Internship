function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var course = document.getElementById("course").value;

    var skills = [];
    if (document.getElementById("skill1").checked) {
        skills.push(document.getElementById("skill1").value);
    }
    if (document.getElementById("skill2").checked) {
        skills.push(document.getElementById("skill2").value);
    }
    if (document.getElementById("skill3").checked) {
        skills.push(document.getElementById("skill3").value);
    }
    if (document.getElementById("skill4").checked) {
        skills.push(document.getElementById("skill4").value);
    }

    if (name && email && course && skills.length) {
        var table = document.getElementById("enrollment-table");
        var body = document.getElementById("enrollment-body");

        var row = body.insertRow(-1);
        var nameCell = row.insertCell(0);
        var emailCell = row.insertCell(1);
        var websiteCell = row.insertCell(2);
        var courseCell = row.insertCell(3);
        var skillsCell = row.insertCell(4);

        nameCell.innerHTML = name;
        emailCell.innerHTML = email;
        websiteCell.innerHTML = website;
        courseCell.innerHTML = course;
        skillsCell.innerHTML = skills.join(", ");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("website").value = "";
        document.getElementById("course").value = "CSE";
        document.getElementById("skill1").checked = false;
        document.getElementById("skill2").checked = false;
        document.getElementById("skill3").checked = false;
        document.getElementById("skill4").checked = false;
    } else {
        alert("Please fill all required fields !!");
    }
}