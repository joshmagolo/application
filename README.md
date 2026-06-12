# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
### React Application
A dynamic React portfolio application that allows users to display, search, and add projects in real time. This project demonstrates modern React fundamentals including state management, controlled forms, filtering logic, and component rendering.
## Project Display
Displays a list of featured projects
Each project includes:
Title
Description
Category
Image
## Smart Search
Search projects by:
Title
Category
Case-insensitive filtering
Instant results as you type
## Built With
React (Functional Components)
React Hooks (useState)
JavaScript (ES6+)
CSS3
## Structure
src/
 ├── App.jsx        # Main application logic
 ├── App.css        # Styling
 ### Key Concepts Demonstrated
 ## The app uses multiple useState hooks:
    1. State Management
   -projects → stores all project data
   -search → stores search input
   -newProject → handles form input values
    2. Controlled Forms
   - All form inputs are controlled using React state:

    .onChange updates state dynamically
    .Form data is stored in newProject
    3. Adding Data Dynamically

When a user submits a project:

Form submission is prevented
A new project object is created
State is updated using spread operator: