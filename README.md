# React + TypeScript + Vite

# 🚀 Tech Stack Selector / Builder

A modern, responsive React web application designed to help developers showcase, manage, and build their custom technology stacks easily.

---

## 📝 Description

This application allows users to explore various software development technologies, add them to a custom stack, manage selected items, and calculate their current stack setup dynamically. It features a responsive layout, seamless dynamic selection toggles, and state persistence for an optimized user experience.

---

## 🛠️ Technologies Used

* **Frontend Framework:** React (with TypeScript)
* **Styling:** Tailwind CSS
* **Icons:** React Icons (`tb`, etc.)
* **Build Tool:** Vite

---

## ✨ Key Features

1. **Interactive Selection & Instant Toggle:** Choose technologies to add to your stack. Selected items are automatically disabled in the cards to prevent duplication.
2. **Real-time Stack Management:** View, remove individual items, or reset the entire stack using the "Remove All" option.
3. **Fully Responsive Layout:** Optimized for mobile, tablet, and desktop screens with dynamic mobile navbar drawers and flexible grids.

---

## ❓ React Concepts & QA

### i. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that lets us write HTML-like markup inside JavaScript code. It makes building UI components simpler, more visual, and easier to maintain.

---

### ii. What is the difference between props and state?
**Answer:**
* **Props (Properties):** Read-only data passed down from a parent component to a child component.
* **State:** Internal data managed within a component that can change over time based on user interactions.

---

### iii. What does the `useState` hook do, and where did you use it in this project?
**Answer:** `useState` allows functional components to store and manage dynamic state data. In this project, I used it to store selected technologies (`Techselected`), track navigation UI state (`buttonType`), and manage the mobile menu toggle (`isMobileMenuOpen`).

---

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` manages side effects in React components, such as API fetching, timers, or DOM updates. It was used to fetch the initial technology JSON data asynchronously when the component first rendered (mounted).

---

### v. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** A unique `key` helps React identify which items have changed, been added, or removed. This allows React to efficiently update only the changed DOM elements instead of re-rendering the entire list.

---

### vi. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means displaying specific UI components or elements based on certain conditions (true/false). 
**Example used:** In `Techselectedmenu`, if `Techselected.length === 0`, it renders the empty message `"Your stack is empty."`; otherwise, it maps over and renders the selected technology cards.

---

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
* **Parent to Child:** Data is passed down using **props**.
* **Child to Parent:** The parent passes a callback function down via props, and the child calls that function with data as an argument to update the parent's state.
