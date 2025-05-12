const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Load the HTML files
const indexHtml = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const instructorHtml = fs.readFileSync(path.resolve(__dirname, '../instructor.html'), 'utf8');

let dom, document;

describe('Welcome Page Testing', () => {
  beforeEach(() => {
    dom = new JSDOM(indexHtml, { runScripts: 'dangerously' });
    document = dom.window.document;
  });

  test('[C1] Page Load', () => {
    expect(document).not.toBeNull();
  });

  test('[C2] Voice Input - Student ID', () => {
    const input = document.querySelector('#student-id');
    expect(input).not.toBeNull();
  });

  test('[C3] Form Responsiveness', () => {
    const container = document.querySelector('.form-card');
    expect(container).not.toBeNull();
  });

  test('[C4] Submit Button Exists', () => {
    const button = document.querySelector('.button-orange');
    expect(button).not.toBeNull();
  });

  test('[C5] Voice Recognition Error Handling', () => {
    const voiceError = document.querySelector('#voice-error');
    expect(voiceError).not.toBeNull();
  });
});

describe('Instructor Dashboard Testing', () => {
  beforeEach(() => {
    dom = new JSDOM(instructorHtml, { runScripts: 'dangerously' });
    document = dom.window.document;
  });

  test('[C1] Dashboard Load', () => {
    expect(document).not.toBeNull();
  });

  test('[C2] All Action Cards Present', () => {
    const cards = document.querySelectorAll('.card');
    expect(cards.length).toBe(6);
  });

  test('[C3] Role Navigation', () => {
    const role = 'instructor';
    const roleFunction = require('../js/role.js');
    expect(() => roleFunction.handleRole(role)).not.toThrow();
  });
});
