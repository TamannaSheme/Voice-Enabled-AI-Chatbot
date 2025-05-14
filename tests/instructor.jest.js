const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Load the HTML file
const instructorHtml = fs.readFileSync(path.resolve(__dirname, '../instructor.html'), 'utf8');

let dom, document;

describe('Instructor Role Page Testing', () => {
  beforeEach(() => {
    dom = new JSDOM(instructorHtml, { runScripts: 'dangerously' });
    document = dom.window.document;
  });

  test('[C123] Manage Courses Button Functionality', () => {
    const manageCourses = document.querySelector('.card:nth-child(1)');
    expect(manageCourses.textContent).toContain('Manage Courses');
  });

  test('[C124] Upload Materials Button Functionality', () => {
    const uploadMaterials = document.querySelector('.card:nth-child(2)');
    expect(uploadMaterials.textContent).toContain('Upload Materials');
  });

  test('[C125] Instructor Page Access Control', () => {
    const header = document.querySelector('h1');
    expect(header.textContent).toContain('Welcome, Instructor');
  });

  test('[C126] Grade Submissions Button Functionality', () => {
    const gradeSubmissions = document.querySelector('.card:nth-child(3)');
    expect(gradeSubmissions.textContent).toContain('Grade Submissions');
  });

  test('[C127] Set Deadlines Button Functionality', () => {
    const setDeadlines = document.querySelector('.card:nth-child(4)');
    expect(setDeadlines.textContent).toContain('Set Deadlines');
  });

  test('[C128] Announcements Button Functionality', () => {
    const announcements = document.querySelector('.card:nth-child(5)');
    expect(announcements.textContent).toContain('Announcements');
  });

  test('[C129] Ask Lumi Button Functionality', () => {
    const askLumi = document.querySelector('.card:nth-child(6)');
    expect(askLumi.textContent).toContain('Ask Lumi');
  });

  test('[C130] Page Load and Role Verification', () => {
    expect(document).not.toBeNull();
    const header = document.querySelector('h1');
    expect(header.textContent).toContain('Instructor');
  });
});

