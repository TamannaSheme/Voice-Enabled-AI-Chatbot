/**
 * @jest-environment jsdom
 */

describe("Admin Page Unit Testing", () => {
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

  // Function to Test: handleAdminNavigation
  const handleAdminNavigation = (action) => {
    switch(action) {
      case "manage-users":
        window.location.assign("manage-users.html");
        break;
      case "role-access":
        window.location.assign("role-access.html");
        break;
      case "platform-stats":
        window.location.assign("platform-stats.html");
        break;
      case "global-announcements":
        window.location.assign("global-announcements.html");
        break;
      case "system-settings":
        window.location.assign("system-settings.html");
        break;
      case "ask-lumi":
        window.location.assign("ask-lumi.html");
        break;
      default:
        throw new Error("Invalid admin action");
    }
  };

  test("should navigate to Manage Users page", () => {
    handleAdminNavigation("manage-users");
    expect(mockNavigate).toHaveBeenCalledWith("manage-users.html");
  });

  test("should navigate to Role Access page", () => {
    handleAdminNavigation("role-access");
    expect(mockNavigate).toHaveBeenCalledWith("role-access.html");
  });

  test("should navigate to Platform Stats page", () => {
    handleAdminNavigation("platform-stats");
    expect(mockNavigate).toHaveBeenCalledWith("platform-stats.html");
  });

  test("should navigate to Global Announcements page", () => {
    handleAdminNavigation("global-announcements");
    expect(mockNavigate).toHaveBeenCalledWith("global-announcements.html");
  });

  test("should navigate to System Settings page", () => {
    handleAdminNavigation("system-settings");
    expect(mockNavigate).toHaveBeenCalledWith("system-settings.html");
  });

  test("should navigate to Ask Lumi page", () => {
    handleAdminNavigation("ask-lumi");
    expect(mockNavigate).toHaveBeenCalledWith("ask-lumi.html");
  });

  test("should throw an error for invalid action", () => {
    expect(() => handleAdminNavigation("invalid-action")).toThrow("Invalid admin action");
  });
});
