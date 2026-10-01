# Rahnuma SBBU — Technical Architecture

## 1. Overview

Rahnuma v0.1 will use a simple, maintainable static website architecture.

The initial version is designed for **BS entrance-test aspirants at SBBU Shaheed Benazirabad (main campus)**.

The architecture is intentionally simple because v0.1 does not require user accounts, a backend, or a database.

---

## 2. Technology Stack

### Frontend

* **HTML5** — page structure
* **CSS3** — styling, responsive design, themes, and Rahnuma's visual identity
* **JavaScript** — interactivity and application logic
* **JSON** — structured content data

Bootstrap may be used selectively for utilities or individual components, but custom CSS will remain the primary design system.

### Hosting

The v0.1 website will be deployed as a static website using **GitHub Pages**.

Git and GitHub will be used for:

* Version control
* Feature branches
* Pull requests
* Deployment
* Content updates

---

## 3. Architecture Type

Rahnuma v0.1 will use a **static, client-side architecture**.

```text
User
  ↓
GitHub Pages
  ↓
HTML + CSS + JavaScript
  ↓
JSON Data
```

There will be no application server in v0.1.

---

## 4. Backend & Database

A backend and database will **not be used in v0.1**.

The initial release will not include:

* User authentication
* User accounts
* User profiles
* Saved progress
* Persistent user data
* Admin dashboard
* Server-side APIs
* Database storage

These may be introduced in future versions when persistent user data or advanced content management becomes necessary.

---

## 5. Project Structure

The initial project structure is:

```text
rahnuma-sbbu/
│
├── index.html
├── README.md
├── .gitignore
│
├── pages/
│   ├── resources.html
│   ├── practice.html
│   ├── mock-test.html
│   ├── departments.html
│   ├── careers.html
│   ├── roadmap.html
│   ├── admission.html
│   └── community.html
│
├── css/
├── js/
├── data/
├── assets/
│
└── docs/
    ├── vision.md
    ├── scope.md
    ├── requirements.md
    ├── architecture.md
    └── development-workflow.md
```

The structure may be adjusted during implementation if a simpler approach provides the same functionality.

---

## 6. Community

The `community.html` page will provide links to Rahnuma's external WhatsApp and/or Telegram community.

v0.1 will not include:

- In-site messaging
- Comments
- Forums
- User posts
- User accounts

The community experience will remain external until a future version introduces user accounts and backend functionality.

## 7. Content Architecture

Content will be separated from presentation where practical.

Initial data categories may include:

```text
data/
├── resources.json
├── questions.json
├── departments.json
├── careers.json
└── admission.json
```

Important factual content should support information such as:

* Title
* Description/content
* Category or subject
* Source
* Last-updated date

This is particularly important for:

* Admission information
* Test-pattern information
* Current-affairs content
* Department information

### Content Updates

Because v0.1 does not include an admin dashboard, content updates will initially be managed through GitHub.

The workflow will be:

```text
Edit Content
    ↓
Git Commit
    ↓
Pull Request / Review
    ↓
Merge
    ↓
Deployment
```

This is an accepted limitation of the v0.1 static architecture.

---

## 8. Mock Test Architecture

Mock tests are part of the approved v0.1 scope.

The mock-test system will run in the browser using JavaScript and locally stored question data.

Questions may contain:

* Question text
* Options
* Correct answer
* Subject
* Explanation, where available
* Source/update information where applicable

JavaScript will handle:

* 60-minute timer
* Question navigation
* Answer selection
* Submission
* Score calculation
* Subject-wise result breakdown

The mock test will use the verified current SBBU BS entrance-test subjects:

1. General Mathematics
2. English
3. General Knowledge / Current Affairs / General Science

The final question count, marks, and negative-marking rules must be verified from the official prospectus before implementation.

Results will be session-only in v0.1 and will not be stored in an account or database.

---

## 9. Department & Career Architecture

Department and career information will use structured data so the information can be reused across the website.

A department record may contain:

```text
Department
├── Name
├── Description
├── What Students Study
├── Academic Field
└── Career Paths
```

Only verified SBBU BS programs should be published.

---

## 10. Admission Information Architecture

Admission information will be treated as time-sensitive content.

Important information should include:

* Source
* Last-updated date
* Admission cycle/year where applicable

Information such as:

* Test pattern
* Test date
* Merit formula
* Interview requirements
* Required documents
* Admission rules

must be verified against the current official SBBU source before publication.

### Verification Ownership

The project owner or an assigned content reviewer is responsible for sourcing and verifying admission-related information using official SBBU sources.

Verification will be performed before the v0.1 launch and rechecked shortly before launch for time-sensitive information such as admission dates, test patterns, merit rules, and interview requirements.

No unverified admission information will be presented as official guidance.

---

## 11. Responsive Design & Themes

Responsive design is a foundation of the architecture rather than a final-stage feature.

The website will follow a mobile-first approach.

CSS variables will be used for reusable design values such as:

* Colors
* Typography
* Spacing
* Borders

The site will support:

* Mobile
* Tablet
* Desktop
* Light theme
* Dark theme

Both light and dark themes are included in v0.1. Theme behavior and visual consistency will be verified at the required responsive widths during QA.

Responsive checks will be performed throughout development.

Required verification widths:

* 360px
* 768px
* 1280px

---

## 12. Future Scalability

The architecture is intentionally simple for v0.1 but should allow future expansion.

A future architecture may use:

```text
Frontend
    ↓
Backend API
    ↓
Database
```

This could support:

* User accounts
* Authentication
* Saved resources
* Progress tracking
* Mock-test history
* Personalized dashboards
* Advanced analytics
* AI features
* Admin/content management
* Multiple universities

These features are outside v0.1.

---

## 13. Requirement Traceability

The architecture supports the functional requirements defined in `requirements.md`:

* **FR-01 to FR-03** — Platform purpose and navigation
* **FR-04 to FR-07** — Preparation resources
* **FR-08 to FR-13** — Practice and mock tests
* **FR-14 to FR-19** — Departments and career guidance
* **FR-20 to FR-21** — Preparation roadmap
* **FR-22 to FR-23** — Community

It also supports the defined non-functional requirements covering usability, responsiveness, performance, accessibility, reliability, security, maintainability, compatibility, and visual experience.

---

## 14. Architectural Principles

Rahnuma v0.1 will follow these principles:

1. **Keep the architecture simple.**
2. **Separate content from presentation where practical.**
3. **Avoid unnecessary backend complexity.**
4. **Keep factual content traceable to reliable sources.**
5. **Design mobile-first.**
6. **Keep the visual identity under Rahnuma's control.**
7. **Build with future expansion in mind without over-engineering v0.1.**
8. **Use Git and GitHub to maintain a controlled development workflow.**
