/**
 * @jest-environment jsdom
 */

describe("Instructor Page Unit Testing", () => {
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

  // Function to Test: handleInstructorNavigation
  const handleInstructorNavigation = (action) => {
    switch(action) {
      case "manage-courses":
        window.location.assign("manage-courses.html");
        break;
      case "upload-materials":
        window.location.assign("upload-materials.html");
        break;
      case "grade-submissions":
        window.location.assign("grade-submissions.html");
        break;
      case "set-deadlines":
        window.location.assign("set-deadlines.html");
        break;
      case "announcements":
        window.location.assign("announcements.html");
        break;
      case "ask-lumi":
        window.location.assign("ask-lumi.html");
        break;
      default:
        throw new Error("Invalid instructor action");
    }
  };

  test("should navigate to Manage Courses page", () => {
    handleInstructorNavigation("manage-courses");
    expect(mockNavigate).toHaveBeenCalledWith("manage-courses.html");
  });

  test("should navigate to Upload Materials page", () => {
    handleInstructorNavigation("upload-materials");
    expect(mockNavigate).toHaveBeenCalledWith("upload-materials.html");
  });

  test("should navigate to Grade Submissions page", () => {
    handleInstructorNavigation("grade-submissions");
    expect(mockNavigate).toHaveBeenCalledWith("grade-submissions.html");
  });

  test("should navigate to Set Deadlines page", () => {
    handleInstructorNavigation("set-deadlines");
    expect(mockNavigate).toHaveBeenCalledWith("set-deadlines.html");
  });

  test("should navigate to Announcements page", () => {
    handleInstructorNavigation("announcements");
    expect(mockNavigate).toHaveBeenCalledWith("announcements.html");
  });

  test("should navigate to Ask Lumi page", () => {
    handleInstructorNavigation("ask-lumi");
    expect(mockNavigate).toHaveBeenCalledWith("ask-lumi.html");
  });

  test("should throw an error for invalid action", () => {
    expect(() => handleInstructorNavigation("invalid-action")).toThrow("Invalid instructor action");
  });
});
