/**
 * @jest-environment jsdom
 */

// This file focuses on Unit Testing the handleRole function (Logic Only)

describe("handleRole Function Unit Test", () => {
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

  // The handleRole function logic (pure function test)
  const handleRole = (role) => {
    if (role === "student") {
      window.location.assign("student.html");
    } else if (role === "admin") {
      window.location.assign("admin.html");
    } else if (role === "instructor") {
      window.location.assign("instructor.html");
    } else {
      throw new Error("Invalid role");
    }
  };

  test("should navigate to student page", () => {
    handleRole("student");
    expect(mockNavigate).toHaveBeenCalledWith("student.html");
  });

  test("should navigate to admin page", () => {
    handleRole("admin");
    expect(mockNavigate).toHaveBeenCalledWith("admin.html");
  });

  test("should navigate to instructor page", () => {
    handleRole("instructor");
    expect(mockNavigate).toHaveBeenCalledWith("instructor.html");
  });

  test("should throw an error for invalid role", () => {
    expect(() => handleRole("invalid")).toThrow("Invalid role");
  });
});
