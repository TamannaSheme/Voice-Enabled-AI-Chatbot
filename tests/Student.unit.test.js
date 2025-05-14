/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

describe("Student Role Page Integration Testing", () => {
  let document;
  let window;
  let assignMock;

  beforeEach(() => {
    // Load HTML file
    const html = fs.readFileSync(path.resolve(__dirname, "../student.html"), "utf8");
    
    // Create a new JSDOM instance
    const { JSDOM } = require('jsdom');
    const dom = new JSDOM(html, { runScripts: "dangerously" });
    
    window = dom.window;
    document = window.document;
    
    // Create a mock for window.location.assign
    assignMock = jest.fn();
    delete window.location;
    window.location = { assign: assignMock };

    // Make window and document available globally
    global.window = window;
    global.document = document;

    // Add buttons for testing
    const buttons = [
      { text: "📚 Enrolled Courses", href: "enrolled-courses.html" },
      { text: "📅 Upcoming Deadlines", href: "upcoming-deadlines.html" },
      { text: "📤 Submit Assignment", href: "submit-assignment.html" },
      { text: "📢 Notifications", href: "notifications.html" },
      { text: "📊 View Grades", href: "view-grades.html" },
      { text: "🧠 Ask Lumi", href: "ask-lumi.html" }
    ];

    buttons.forEach(button => {
      const btn = document.createElement("div");
      btn.className = "card";
      btn.textContent = button.text;
      btn.onclick = () => window.location.assign(button.href);
      document.body.appendChild(btn);
    });
  });

  afterEach(() => {
    // Clean up
    delete global.window;
    delete global.document;
    assignMock.mockClear();
  });

  test("[C113] Verify Enrolled Courses Button Functionality", () => {
    const enrolledButton = document.querySelector(".card:nth-child(1)");
    enrolledButton.click();
    expect(assignMock).toHaveBeenCalledWith("enrolled-courses.html");
  });

  test("[C114] Verify Upcoming Deadlines Button Functionality", () => {
    const deadlinesButton = document.querySelector(".card:nth-child(2)");
    deadlinesButton.click();
    expect(assignMock).toHaveBeenCalledWith("upcoming-deadlines.html");
  });

  test("[C115] Verify Submit Assignment Button Functionality", () => {
    const submitButton = document.querySelector(".card:nth-child(3)");
    submitButton.click();
    expect(assignMock).toHaveBeenCalledWith("submit-assignment.html");
  });

  test("[C116] Verify Notifications Button Functionality", () => {
    const notificationsButton = document.querySelector(".card:nth-child(4)");
    notificationsButton.click();
    expect(assignMock).toHaveBeenCalledWith("notifications.html");
  });

  test("[C117] Verify View Grades Button Functionality", () => {
    const gradesButton = document.querySelector(".card:nth-child(5)");
    gradesButton.click();
    expect(assignMock).toHaveBeenCalledWith("view-grades.html");
  });

  test("[C118] Verify Ask Lumi Button Functionality", () => {
    const askLumiButton = document.querySelector(".card:nth-child(6)");
    askLumiButton.click();
    expect(assignMock).toHaveBeenCalledWith("ask-lumi.html");
  });
});