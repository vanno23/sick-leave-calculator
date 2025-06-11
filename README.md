# Sick-Leave Compensation Calculator

A responsive React + TypeScript application for calculating health insurance compensation during sick leave, based on Estonian compensation rules.

## Task Description

The app allows users to:
- Enter gross monthly income
- Specify sick-leave days
- Indicate whether they have tuberculosis
- See the amount of compensation from the employer and the Estonian Health Insurance Fund
- Get a total net compensation amount based on entered data


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
