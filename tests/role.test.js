/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

describe("Role Selection Page Testing", () => {
  let document;

  beforeEach(() => {
    // Load HTML file
    const html = fs.readFileSync(path.resolve(__dirname, "../role.html"), "utf8");
    document = new DOMParser().parseFromString(html, "text/html");
    document.body.innerHTML = html;
  });

  // C105: Verify Role Selection Page Loads Successfully
  test("[C105] Verify Role Selection Page Loads Successfully", () => {
    const header = document.querySelector("h1");
    expect(header).toBeTruthy();
    expect(header.textContent).toBe("Choose Your Role");
  });

  // C106: Verify Role Selection for Student
  test("[C106] Verify Role Selection for Student", () => {
    const studentRole = document.querySelector(".role-card[onclick=\"handleRole('student')\"]");
    expect(studentRole).toBeTruthy();
    expect(studentRole.textContent).toBe("Student");
  });

  // C107: Verify Role Selection for Instructor
  test("[C107] Verify Role Selection for Instructor", () => {
    const instructorRole = document.querySelector(".role-card[onclick=\"handleRole('instructor')\"]");
    expect(instructorRole).toBeTruthy();
    expect(instructorRole.textContent).toBe("Instructor");
  });

  // C108: Verify Role Selection for LMS Admin
  test("[C108] Verify Role Selection for LMS Admin", () => {
    const adminRole = document.querySelector(".role-card[onclick=\"handleRole('admin')\"]");
    expect(adminRole).toBeTruthy();
    expect(adminRole.textContent).toBe("LMS Admin");
  });

  // C109: Verify Logo is Displayed
  test("[C109] Verify Logo is Displayed", () => {
    const logo = document.querySelector(".logo");
    expect(logo).toBeTruthy();
    expect(logo.getAttribute("src")).toBe("images/lumi-icon.png");
  });
});
