function redirectToRolePage() {
  const studentId = document.getElementById("studentId").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const email = document.getElementById("email").value.trim();

  if (studentId && phoneNumber && email) {
    window.location.href = "role.html";
  } else {
    alert("Please fill in all fields before submitting.");
  }
}
