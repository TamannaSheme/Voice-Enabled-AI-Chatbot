
# Voice-Enabled AI Chatbot

A voice-integrated AI chatbot designed to assist users within a Moodle-based Learning Management System (LMS). Built with a focus on accessibility, real-time interaction, user role customization, and robust testing.

![Chatbot Preview](./wireframes/image%20(1).png)

---

## 🚀 Features

- **🎙️ Voice Interaction** – Users can interact using speech (text-to-speech and speech-to-text).
- **🔐 Role-Based Access** – Custom interface and access for students, instructors, and admins.
- **💬 Chat UI** – Clean, responsive chat interface with voice toggle.
- **🔗 Moodle LMS Integration** – Seamless integration via Moodle REST APIs.
- **📐 UI Prototypes** – Built using Figma, exported and implemented with precision.
- **🧪 Comprehensive Testing** – Automated (Jest) and manual testing (TestRail) ensure high reliability.

---

## 📁 Project Structure

```plaintext
├── css/                    # All stylesheets (Bootstrap + custom styles)
├── js/                     # JavaScript logic for interaction, toggles
├── wireframes/             # Project UI screenshots and Figma design exports
├── index.html              # Home UI
├── instructor.html         # Instructor dashboard
├── student.html            # Student dashboard
├── askLumi.html            # Chat interface
├── settings.html           # User preferences (voice, notifications)
├── reset-password.html     # Reset password form
├── test-results.json       # Jest test result exports
├── testrail-reporter.js    # Reporter script for automated test upload to TestRail
```

---

## 🖼️ UI Screenshots

### 🔓 Reset Password Page  
![Reset Password](./wireframes/image%20(3).png)

### 🧑‍🏫 Instructor Chat Interface  
![Instructor Chat](./wireframes/image%20(2).png)

### 📚 Moodle Dashboard with Chatbot  
![Dashboard](./wireframes/image%20(4).png)

### 🎤 Voice Toggle and Options  
![Voice Toggle](./wireframes/image%20(5).png)

### 🤖 Default Welcome State  
![Chat Init](./wireframes/image%20(6).png)

### 👋 Role Selection Page  
![Role Select](./wireframes/image%20(1).png)

---

## 🛠️ Technologies Used

- HTML5, CSS3, JavaScript (Vanilla)
- Bootstrap 5
- Figma (UI/UX Prototyping)
- Node.js + Express (Backend)
- Moodle LMS APIs (REST Web Services)
- OpenAI GPT API (Smart Responses)
- Web Speech API (Voice Input/Output)
- TestRail + Jest (Testing and Reporting)
- Jira + GitHub (Agile Integration)

---

## 🧭 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/TamannaSheme/Voice-Enabled-AI-Chatbot.git
```

2. Open `index.html` in your browser.

3. Use the mic button 🎤 to start voice interaction.

---

## 📊 Project Status

- ✅ **Sprint 1**: Figma prototypes, frontend UI, voice toggle
- ✅ **Sprint 2**: Backend API integration, role detection
- ✅ **Sprint 3**: Instructor/Student dashboards, analytics, testing
- 🧪 Manual & automated tests completed with 100% TestRail coverage

---

## 📈 Testing Highlights

- ✅ 113+ Manual Test Cases (TestRail)
- ✅ 215 Automated Tests (Jest + TestRail Integration)
- ✅ Functional + Integration + API + Usability + Performance tested

---

## 🧪 Integration Testing Example

- Moodle API: Fetch courses, grades, users
- OpenAI GPT: Responds contextually to academic queries
- Voice: Mic toggle for speech-to-text and reply via speech

---

## 📄 License

This project is for academic purposes only under Federation University – ITECH7415 Masters Project. All rights reserved to the team.

---

## 👥 Developed and Tested By

- **Syeda Tamanna Sheme** – Front-End Developer & QA Tester  
- **Tanvir Iqbal** – Backend Developer  
- **Hansi Nipunika Bandanage** – Backend Developer  
- **Afreen Begum** – Business Analyst  

---

## 🔗 Live Demo & Docs

- 🔗 GitHub Repository: [Voice-Enabled-AI-Chatbot](https://github.com/TamannaSheme/Voice-Enabled-AI-Chatbot)
- 🧪 Testing Docs (Jira/TestRail): [Test Reports Drive](https://drive.google.com/drive/folders/1BNpWu0wEXk68K_sjVlCgTojLIKNERPV8?usp=sharing)

---

## 📌 Future Enhancements

- 🌐 Multilingual voice and text support
- 📊 Admin analytics dashboard (student activity, common queries)
- 🔁 Chat memory + advanced context tracing
- 📲 Moodle Plugin version for native LMS embedding
