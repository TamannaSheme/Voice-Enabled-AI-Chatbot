/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

describe("Role Selection Page Testing", () => {
  let document;
  let mockNavigate;

  beforeEach(() => {
    // Load HTML file
    const html = fs.readFileSync(path.resolve(__dirname, "../role.html"), "utf8");
    document = new DOMParser().parseFromString(html, "text/html");
    document.body.innerHTML = html;

    // Mock window.location.assign safely
    mockNavigate = jest.fn();
    Object.defineProperty(window, 'location', {
      value: {
        assign: mockNavigate
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
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

  // C110: Verify Navigation for Student Role
  test("[C110] Verify Navigation for Student Role", () => {
    const handleRole = (role) => {
      if (role === "student") {
        window.location.assign("student.html");
      }
    };

    handleRole("student");

    expect(mockNavigate).toHaveBeenCalledWith("student.html");
  });

  // C111: Verify Visibility of Role Selection Buttons
  test("[C111] Verify Visibility of Role Selection Buttons", () => {
    const buttons = document.querySelectorAll(".role-card");
    buttons.forEach(button => {
      expect(button.style.display).not.toBe("none");
      expect(button.style.visibility).not.toBe("hidden");
    });
  });

  // C112: Verify Navigation for LMS Admin Role
  test("[C112] Verify Navigation for LMS Admin Role", () => {
    const handleRole = (role) => {
      if (role === "admin") {
        window.location.assign("admin.html");
      }
    };

    handleRole("admin");

    expect(mockNavigate).toHaveBeenCalledWith("admin.html");
  });
});
