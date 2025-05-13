// Ensure this is globally accessible
window.handleRole = function handleRole(role) {
    if (role === 'student') {
        window.location.href = 'student.html';
    } else if (role === 'instructor') {
        window.location.href = 'instructor.html';
    } else if (role === 'admin') {
        window.location.href = 'admin.html';
    }
};
