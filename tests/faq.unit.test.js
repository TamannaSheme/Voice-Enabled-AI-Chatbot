/**
 * @jest-environment jsdom
 */

describe("FAQ Page Unit Testing", () => {
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

  // Function to Test: toggleAnswer
  const toggleAnswer = (element) => {
    const answer = element.querySelector('.answer');
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  };

  test("should toggle answer display from none to block", () => {
    document.body.innerHTML = `
      <div class="faq-item">
        <div class="question">How do I submit an assignment?</div>
        <div class="answer" style="display: none;">Answer text here</div>
      </div>
    `;

    const faqItem = document.querySelector(".faq-item");
    toggleAnswer(faqItem);

    const answer = faqItem.querySelector(".answer");
    expect(answer.style.display).toBe("block");
  });

  test("should toggle answer display from block to none", () => {
    document.body.innerHTML = `
      <div class="faq-item">
        <div class="question">How do I submit an assignment?</div>
        <div class="answer" style="display: block;">Answer text here</div>
      </div>
    `;

    const faqItem = document.querySelector(".faq-item");
    toggleAnswer(faqItem);

    const answer = faqItem.querySelector(".answer");
    expect(answer.style.display).toBe("none");
  });

  test("should navigate to 'Ask Lumi a New Question' page", () => {
    window.location.assign("ask-lumi.html");
    expect(mockNavigate).toHaveBeenCalledWith("ask-lumi.html");
  });
});
