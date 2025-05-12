const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../role.html'), 'utf8');

let dom, container;
beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
    container = dom.window.document.body;
});

test('C109 - Verify Navigation for Student Role', () => {
    const studentButton = container.querySelector(".role-card:nth-child(1)");
    studentButton.click();
    expect(dom.window.location.href).toContain("student.html");
});

test('C110 - Verify Navigation for Instructor Role', () => {
    const instructorButton = container.querySelector(".role-card:nth-child(2)");
    instructorButton.click();
    expect(dom.window.location.href).toContain("instructor.html");
});

test('C112 - Verify Navigation for LMS Admin Role', () => {
    const adminButton = container.querySelector(".role-card:nth-child(3)");
    adminButton.click();
    expect(dom.window.location.href).toContain("admin.html");
});
