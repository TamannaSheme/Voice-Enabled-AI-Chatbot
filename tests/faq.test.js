/**
 * @jest-environment jsdom
 */

describe("FAQ Page Integration Testing", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="faq-container">
        <h2>📙 FAQ</h2>

        <div class="faq-item" onclick="toggleAnswer(this)">
          <div class="question">How do I submit an assignment?</div>
          <div class="answer" style="display: none;">You can upload assignments via the LMS dashboard or use the ‘Submit’ button in the course section.</div>
        </div>

        <button class="new-question-btn">Ask Lumi a New Question</button>
      </div>
    `;
  });

  // Test Case: Check visibility of FAQ questions
  test("[C58] Check visibility of FAQ questions", () => {
    const faqItems = document.querySelectorAll(".faq-item .question");
    expect(faqItems.length).toBeGreaterThan(0);
  });

  // Test Case: Expand answer to first question
  test("[C59] Expand answer to first question", () => {
    const faqItem = document.querySelector(".faq-item");
    faqItem.click();
    const answer = faqItem.querySelector(".answer");
    expect(answer.style.display).toBe("block");
  });

  // Test Case: Collapse answer on second click
  test("[C60] Collapse answer on second click", () => {
    const faqItem = document.querySelector(".faq-item");
    faqItem.click(); // Expand
    faqItem.click(); // Collapse
    const answer = faqItem.querySelector(".answer");
    expect(answer.style.display).toBe("none");
  });

  // Test Case: Navigate to "Ask Lumi a New Question"
  test("[C61] Navigate to 'Ask Lumi a New Question'", () => {
    const newQuestionBtn = document.querySelector(".new-question-btn");
    newQuestionBtn.click();
    // Mock navigation function
    window.location.assign = jest.fn();
    expect(window.location.assign).toHaveBeenCalled();
  });

  // Test Case: Verify expand/collapse is independent
  test("[C62] Verify expand/collapse is independent", () => {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => item.click());
    faqItems.forEach((item, index) => {
      const answer = item.querySelector(".answer");
      if (index === 0) expect(answer.style.display).toBe("block");
      else expect(answer.style.display).toBe("none");
    });
  });

  // Test Case: Check FAQ layout responsiveness
  test("[C63] Check FAQ layout responsiveness", () => {
    window.innerWidth = 480; // Simulate mobile view
    window.dispatchEvent(new Event('resize'));

    const faqContainer = document.querySelector(".faq-container");
    expect(getComputedStyle(faqContainer).flexDirection).toBe("column");
  });
});
