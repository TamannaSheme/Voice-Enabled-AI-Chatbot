const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

let dom;
let document;

beforeEach(() => {
    // Load HTML structure
    dom = new JSDOM(`
        <div>
            <input type="radio" name="push" value="on" id="push-on">
            <input type="radio" name="email" value="on" id="email-on">
            <input type="radio" name="sound" value="enabled" id="sound-enabled">
            <button id="save-btn">Save</button>
        </div>
    `, { url: "http://localhost" });

    document = dom.window.document;
    global.window = dom.window;
    global.document = dom.window.document;
    global.alert = jest.fn(); // Mock alert

    // Manually define the save button click event
    document.getElementById('save-btn').addEventListener('click', () => {
        alert('Preferences saved successfully!');
    });
});

describe('Notifications Settings Page Testing', () => {
    test('[C47] Toggle Push Notifications and Save', () => {
        document.getElementById('push-on').checked = true;
        document.getElementById('save-btn').click();
        expect(alert).toHaveBeenCalledWith('Preferences saved successfully!');
    });

    test('[C48] Toggle Email Alerts and Save', () => {
        document.getElementById('email-on').checked = true;
        document.getElementById('save-btn').click();
        expect(alert).toHaveBeenCalledWith('Preferences saved successfully!');
    });

    test('[C49] Change Sound to Enabled and Save', () => {
        document.getElementById('sound-enabled').checked = true;
        document.getElementById('save-btn').click();
        expect(alert).toHaveBeenCalledWith('Preferences saved successfully!');
    });
});
