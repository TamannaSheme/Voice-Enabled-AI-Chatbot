function handleRole(role) {
    alert("You selected: " + role);
    // You can redirect to role-specific dashboards here
    // window.location.href = `${role}-dashboard.html`;
  }
  function handleRole(role) {
    if (role === 'student') {
      window.location.href = "student.html";
    } else if (role === 'instructor') {
      window.location.href = "instructor.html";
    } else if (role === 'admin') {
      window.location.href = "admin.html";
    }
  }
  