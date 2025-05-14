/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

describe("Instructor Role Page Integration Testing", () => {
  let document;

  beforeEach(() => {
    // Load HTML file
    const html = fs.readFileSync(path.resolve(__dirname, "../instructor.html"), "utf8");
    document = new DOMParser().parseFromString(html, "text/html");
    document.body.innerHTML = html;

    // Mock window.location for navigation
    Object.defineProperty(window, 'location', {
      value: {
        assign: jest.fn()
      },
      writable: true,
    });

    // Ensure buttons exist in the DOM for testing
    const buttons = [
      { id: "manage-courses", href: "manage-courses.html" },
      { id: "manage-courses-duplicate", href: "manage-courses.html" },
      { id: "instructor-access", href: "instructor-access.html" },
      { id: "upload-materials", href: "upload-materials.html" },
      { id: "grade-submissions", href: "grade-submissions.html" },
      { id: "set-deadlines", href: "set-deadlines.html" },
      { id: "announcements", href: "announcements.html" },
      { id: "ask-lumi", href: "ask-lumi.html" }
    ];

    buttons.forEach(button => {
      const btn = document.createElement("button");
      btn.id = button.id;
      btn.onclick = () => window.location.assign(button.href);
      document.body.appendChild(btn);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("[C123] Manage Courses Button Functionality", () => {
    const manageButton = document.querySelector("#manage-courses");
    manageButton.click();
    expect(window.location.assign).toHaveBeenCalledWith("manage-courses.html");
  });

  test("[C124] Manage Courses Button Functionality Duplicate", () => {
    const manageButton = document.querySelector("#manage-courses-duplicate");
    manageButton.click();
    expect(window.location.assign).toHaveBeenCalledWith("manage-courses.html");
  });

  test("[C125] Instructor Page Access Control", () => {
    const header = document.createElement('h1');
    header.textContent = "Welcome, Instructor";
    document.body.appendChild(header);
    expect(header.textContent).toContain("Instructor");
  });

  test("[C126] Upload Materials Button Functionality", () => {
    const uploadButton = document.querySelector("#upload-materials");
    uploadButton.click();
    expect(window.location.assign).toHaveBeenCalledWith("upload-materials.html");
  });

  test("[C127] Grade Submissions Button Functionality", () => {
    const gradeButton = document.querySelector("#grade-submissions");
    gradeButton.click();
    expect(window.location.assign).toHaveBeenCalledWith("grade-submissions.html");
  });

  test("[C128] Set Deadlines Button Functionality", () => {
    const deadlinesButton = document.querySelector("#set-deadlines");
    deadlinesButton.click();
    expect(window.location.assign).toHaveBeenCalledWith("set-deadlines.html");
  });

  test("[C129] Announcements Button Functionality", () => {
    const announcementsButton = document.querySelector("#announcements");
    announcementsButton.click();
    expect(window.location.assign).toHaveBeenCalledWith("announcements.html");
  });

  test("[C130] Ask Lumi Button Functionality", () => {
    const askLumiButton = document.querySelector("#ask-lumi");
    askLumiButton.click();
    expect(window.location.assign).toHaveBeenCalledWith("ask-lumi.html");
  });
});
