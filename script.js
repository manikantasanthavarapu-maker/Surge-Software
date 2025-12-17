 // =====================================
// SUBMIT ISSUE (EMPLOYEE PAGE)
// =====================================
document.getElementById("issueForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    let issueId = "ISS" + Math.floor(1000 + Math.random() * 9000);

    let issueData = {
        name: document.getElementById("name").value,
        empId: document.getElementById("empId").value,
        department: document.getElementById("department").value,
        issue: document.getElementById("issue").value,
        status: "Pending"
    };

    localStorage.setItem(issueId, JSON.stringify(issueData));

    document.getElementById("result").innerHTML =
        "✅ Issue Submitted Successfully!<br><b>Your Issue ID:</b> " + issueId;

    this.reset();
});


// =====================================
// TRACK ISSUE (EMPLOYEE PAGE)
// 👉 SHOW ONLY STATUS
// =====================================
function trackIssue() {
    let id = document.getElementById("trackId").value.trim();
    let data = localStorage.getItem(id);
    let statusResult = document.getElementById("statusResult");

    if (data) {
        let issue = JSON.parse(data);

        statusResult.innerHTML =
            "<b>Issue ID:</b> " + id + "<br>" +
            "<b>Current Status:</b> " + issue.status;
    } else {
        statusResult.innerHTML = "❌ Invalid Issue ID";
    }
}


// =====================================
// ADMIN PANEL
// 👉 SHOW FULL ISSUE DETAILS
// =====================================
function updateStatus() {
    let id = document.getElementById("adminIssueId").value.trim();
    let data = localStorage.getItem(id);
    let adminResult = document.getElementById("adminResult");

    if (data) {
        let issue = JSON.parse(data);

        // Update status
        issue.status = document.getElementById("newStatus").value;
        localStorage.setItem(id, JSON.stringify(issue));

        // Display full issue ONLY in admin panel
        adminResult.innerHTML = `
            <strong>📋 Issue Details (Admin Panel)</strong><br><br>
            <b>Issue ID:</b> ${id}<br>
            <b>Employee Name:</b> ${issue.name}<br>
            <b>Employee ID:</b> ${issue.empId}<br>
            <b>Department:</b> ${issue.department}<br>
            <b>Issue:</b> ${issue.issue}<br>
            <b>Status:</b> ${issue.status}
        `;
    } else {
        adminResult.innerHTML = "❌ Issue ID Not Found";
    }
}