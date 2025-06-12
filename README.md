# Sick-Leave Compensation Calculator

A responsive React + TypeScript application for calculating health insurance compensation during sick leave, based on Estonian compensation rules.

## Task Description

The app allows users to:
- Enter gross monthly income
- Specify sick-leave days
- Indicate whether they have tuberculosis
- See the amount of compensation from the employer and the Estonian Health Insurance Fund
- Get a total net compensation amount based on entered data

## Business Logic Clarification

In the original Figma design, the *compensation total* was displayed for **all sick-leave days**, including the first 3 days.

However, according to the official rules described in the task:

- The **first 3 days** of sick-leave are not compensated at all
- The **employer** compensates from **day 4 to day 8**
- The **Estonian Health Insurance Fund (EHIF)** compensates from **day 9 onward**

Based on this, I implemented the logic so that:

- The compensation total includes **only the days actually compensated**
- The display clearly separates how many days are compensated by each party
- A person’s own unpaid sick-leave days (days 1–3) are not included in the net compensation

This change ensures the result reflects *only compensated amounts* and matches the actual real-world scenario.


## Responsive Design

Fully responsive, pixel-perfect based on Figma Design


## Time Taken

Estimated time: **10 hours**

---

##  Tech Stack

- **React 18** (with Hooks)
- **TypeScript**
- **SCSS** for styling
- **Vite** as the build tool
- **CSS Flexbox/Grid** for layout
- **Semantic HTML**

---

## Validation Rules

The app performs validation on user input before calculation:

### Income (Gross)
- Required field
- Must be a number
- Must be a positive number

### Sick-Leave Days
- Required field
- Must be a number
- Must be a positive number

### Insurance Event
- Maximum:
  - 182 days normally
  - 240 days if tuberculosis is checked

Errors are shown inline near inputs for better UX.

## Getting Started

```bash
# Install dependencies
npm install

# Run the app
npm run dev
