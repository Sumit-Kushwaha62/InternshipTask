# Task 6 — Contact Form with Client‑Side Validation

This project implements a contact form with client‑side validation for Name, Email, and Message, styled with a modern multicolor UI and user feedback messages.


## Screenshots
- ![Form – Empty](screenshots/form-empty.png) 

## Tech Stack

- HTML5 for structure and input semantics with labels and accessibility attributes. 
- CSS3 for clarity, responsive layout, and modern multicolor styling.   
- Vanilla JavaScript for validation logic, event handling, and DOM updates. 


## How to Run Locally

- Open `index.html` in any modern browser; no build or server is required.  
- Optionally use a simple static server or VS Code Live Server for convenience. 

## Approach

### 1) Form scaffold  
- Built semantic fields for Name, Email, and Message with labels and basic constraints. 

### 2) Validation and feedback  
- Implemented client‑side checks for non‑empty fields and used a regex to validate email format at submit time.  
- Displayed inline error messages directly beneath each field and prevented submission if invalid. 

### 3) Success and reset  
- On valid input, showed a success message to confirm readiness and prevented any actual sending.  
- Automatically reset the form and cleared validation states to allow a fresh entry flow.

