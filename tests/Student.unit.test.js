/**
 * @jest-environment jsdom
 */

describe("Student Page Unit Testing", () => {
  let mockNavigate;

  beforeEach(() => {
    // Mock window.location.assign for clean unit testing
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

  // Function to Test: handleStudentNavigation
  const handleStudentNavigation = (action) => {
    switch(action) {
      case "enrolled-courses":
        window.location.assign("enrolled-courses.html");
        break;
      case "upcoming-deadlines":
        window.location.assign("upcoming-deadlines.html");
        break;
      case "submit-assignment":
        window.location.assign("submit-assignment.html");
        break;
      case "notifications":
        window.location.assign("notifications.html");
        break;
      case "view-grades":
        window.location.assign("view-grades.html");
        break;
      case "ask-lumi":
        window.location.assign("ask-lumi.html");
        break;
      default:
        throw new Error("Invalid student action");
    }
  };

  test("should navigate to Enrolled Courses page", () => {
    handleStudentNavigation("enrolled-courses");
    expect(mockNavigate).toHaveBeenCalledWith("enrolled-courses.html");
  });

  test("should navigate to Upcoming Deadlines page", () => {
    handleStudentNavigation("upcoming-deadlines");
    expect(mockNavigate).toHaveBeenCalledWith("upcoming-deadlines.html");
  });

  test("should navigate to Submit Assignment page", () => {
    handleStudentNavigation("submit-assignment");
    expect(mockNavigate).toHaveBeenCalledWith("submit-assignment.html");
  });

  test("should navigate to Notifications page", () => {
    handleStudentNavigation("notifications");
    expect(mockNavigate).toHaveBeenCalledWith("notifications.html");
  });

  test("should navigate to View Grades page", () => {
    handleStudentNavigation("view-grades");
    expect(mockNavigate).toHaveBeenCalledWith("view-grades.html");
  });

  test("should navigate to Ask Lumi page", () => {
    handleStudentNavigation("ask-lumi");
    expect(mockNavigate).toHaveBeenCalledWith("ask-lumi.html");
  });

  test("should throw an error for invalid action", () => {
    expect(() => handleStudentNavigation("invalid-action")).toThrow("Invalid student action");
  });
});
