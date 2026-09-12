
# 🚀 Tech Stack Selector / Builder

A modern, responsive React web application which designed for beginner. It is help build their custom technology stacks easily.

---

## 📝 Description

This application helps a beginner to know software development technologies.its helps them to manage selected items, and calculate their current stack setup dynamically. It features a responsive layout, seamless dynamic selection toggles, and state persistence for an optimized user experience.

---

## 🛠️ Technologies Used

* **Frontend Framework:** React (with TypeScript)
* **Styling:** Tailwind CSS
* **Icons:** React Icons (`tb`, etc.)
* **Build Tool:** Vite
* **daisyui
---

## ✨ Key Features

1. **Interactive Selection & Instant Toggle:** Choose technologies to add to your stack. Selected items are automatically disabled in the cards to prevent duplication.
2. **Real-time Stack Management:** View, remove individual items, or reset the entire stack using the "Remove All" option.
3. **Fully Responsive Layout:** Optimized for mobile, tablet, and desktop screens with dynamic mobile navbar drawers and flexible grids.

---

## ❓ React Concepts & QA

### i. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax whish best combination of html and JavaScript . It makes building UI components simpler, more visual, and easier to maintain.

---

### ii. What is the difference between props and state?
**Answer:**
* **Props (Properties):** data passed from parent component to a child component.
* **State:**  state use for change internal data in component based on user interactions .

---

### iii. What does the `useState` hook do, and where did you use it in this project?
**Answer:** `useState` use for store and manage dynamic state data. In this project, I used it to store selected technologies (`Techselected`), track navigation UI state (`buttonType`).

---

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` manages side effects in React components, such as API fetching, timers, or DOM updates. It was used to fetch the initial technology JSON data asynchronously when the component first rendered (mounted).

---

### v. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** A unique `key` use for accurately changed data, added data, or removed data. 

---

### vi. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means displaying specific UI components or elements based on certain conditions (true/false). 
**Example used:** In `Techselectedmenu`, if `Techselected.length === 0`, it renders the empty message `"Your stack is empty."`; otherwise, it maps over and renders the selected technology cards.

---

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
* **Parent to Child:** Data is passed down using **props**.
* **Child to Parent:** The parent passes a callback function down via props, and the child calls that function with data as an argument to update the parent's state.

---
                                                       ` DEVELOPED BY SHOYAYEB `
---
