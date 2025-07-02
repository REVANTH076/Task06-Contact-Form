# ✅ Task 6: Create a Contact Form with Validation Using JavaScript

## 🎯 Objective
Build a contact form that performs client-side validation for the following fields:
- **Name** (Required)
- **Email** (Must be in valid format)
- **Message** (Required)

## 🧰 Tools Used
- VS Code
- Chrome (or any modern browser)
- HTML, CSS, JavaScript

---

## 📜 Project Description
This is a simple contact form built with HTML, styled using CSS, and includes client-side validation using JavaScript. The form checks:
- Name and Message are not empty.
- Email is in valid format using regular expressions (Regex).

The form does not submit data to any backend but shows a success message upon valid submission.

---

## 🚀 How It Works

### 1. 🏗️ HTML - Form Structure
- Input fields for **Name**, **Email**, and **Message**.
- Error message placeholders below each field.
- A success message appears after successful submission.

### 2. 🎨 CSS - Styling
- Simple and clean design.
- Error messages are styled in **red**.
- Success message is styled in **green**.
- Responsive layout centered on the page.

### 3. ⚙️ JavaScript - Validation Logic
- Validates on form submission.
- Checks:
  - Name is not empty.
  - Email matches the pattern `^[^ ]+@[^ ]+\.[a-z]{2,3}$`.
  - Message is not empty.
- Shows inline error messages under each field.
- Shows a success message if all inputs are valid and resets the form.

---

---

## 🔍 ✅ What I Learned
- Creating and structuring forms using **HTML**.
- Styling forms for clarity and responsiveness using **CSS**.
- Implementing form validation using **JavaScript**.
- Using **Regex** for email validation.
- Displaying dynamic error and success messages.
- Preventing invalid form submissions on the client-side.

---

## 🚀 Test Cases
| Test Case            | Expected Behavior                                 |
| -------------------- | ------------------------------------------------- |
| Blank Name           | Error: "Name is required."                       |
| Invalid Email        | Error: "Enter a valid email."                    |
| Blank Message        | Error: "Message is required."                    |
| All Fields Valid     | Success: "Form submitted successfully!"          |





