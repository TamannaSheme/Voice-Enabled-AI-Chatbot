function handleRole(role) {
  if (role === 'student') {
      window.location.href = "student.html";
  } else if (role === 'instructor') {
      window.location.href = "instructor.html";
  } else if (role === 'admin') {
      window.location.href = "admin.html";
  }
}

function redirectToAskLumi() {
  window.location.href = "ask-lumi.html";
}
