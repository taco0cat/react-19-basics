# ⚛️ React 19 Basics

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GitHub last commit](https://img.shields.io/github/last-commit/taco0cat/react-19-basics?style=for-the-badge&color=blue)

This repository documents my learning journey through React. While based on the **Bro Code React Course**, all projects have been adapted to meet **React 19** standards, including modern best practices for props, state, and rendering.

## 📋 Table of Contents

* [📂 Project Directory](#project-directory)
* [⚡ How to Run](#how-to-run)
* [🆕 React 19 Adaptations](#react-19-adaptations)

---

## 📂 Project Directory

| ID | Project Name | Description | Key Concepts |
| :--- | :--- | :--- | :--- |
| **01** | [**Basic React App**](./01-Basic-React-App) | Intro to Vite file structure and components. | JSX, File Structure |
| **02** | [**Card Component**](./02-Card-Component) | Creating reusable card components. | Component Reuse, CSS Modules |
| **03** | [**CSS Styles**](./03-CSS-Styles) | Distinct styling methods in React. | Inline, External, & Modules |
| **04** | [**React Props**](./04-React-Props) | Passing data between parent/child components. | Props, **Destructuring** |
| **05** | [**Conditional Render**](./05-Conditional-Render) | Rendering components based on state/logic. | Ternary Operators, Short-circuiting |

---

## ⚡ How to Run

Since these are separate mini-projects, you need to run them individually.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/taco0cat/react-19-basics.git](https://github.com/taco0cat/react-19-basics.git)
    ```

2.  **Navigate to the specific project folder:**
    *(Example: To run the Card Component)*
    ```bash
    cd 02-Card-Component
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

---

## 🆕 React 19 Adaptations

This repository adheres to the latest React 19 changes.

### ⚠️ Deprecation of `defaultProps`
In older React versions (and many tutorials), `defaultProps` was used to set fallback values for components. In React 19, this is deprecated for functional components.

**My Approach:**
Instead of `defaultProps`, I utilize **ES6 JavaScript Destructuring** directly in the function signature:

```jsx
// ❌ Old Way (Deprecated)
Component.defaultProps = {
  name: "Guest"
}

// ✅ Modern Way (Used in this repo)
function Component({ name = "Guest" }) {
  return <h1>Hello, {name}</h1>;
}