# HERO.IO - App Showcase Platform

**Note:** The project is named `programming-hero-assignment-7` in `package.json`, but this documentation refers to it as HERO.IO based on the application's content.

## Description

HERO.IO is a modern web application designed to showcase a portfolio of innovative apps. It allows users to browse, search, and view details about various applications developed by us. The platform is built to be fast, responsive, and user-friendly, providing a seamless experience for discovering and managing app installations. At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.

## Live Site URL

[**Visit the live site here**](https://your-live-site-url.com)

## Features

- **Browse Apps:** View a comprehensive list of all available applications on the platform.
- **Trending Apps:** A dedicated section on the homepage to highlight the most popular apps.
- **Search Functionality:** Easily search for specific apps by name.
- **Detailed App View:** Click on an app to see more details, including a long description, download counts, and user ratings.
- **App Installation:** Users can "install" apps, which adds them to a personal installation list managed via browser local storage.
- **Manage Installed Apps:** View a list of all installed apps, sort them by different criteria (e.g., price), and remove them.
- **Responsive Design:** The application is fully responsive and works seamlessly on devices of all sizes, from mobile phones to desktops.
- **User-Friendly Interface:** A clean and intuitive UI for the best user experience.
- **Error Handling:** A custom 404 error page for any invalid routes.
- **Loading States:** Loading spinners are shown while data is being fetched to provide better user feedback.

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [React Router DOM](https://reactrouter.com/) - For handling client-side routing.
- **Styling:**
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
  - [DaisyUI](https://daisyui.com/) - A component library for Tailwind CSS.
- **Build Tool:**
  - [Vite](https://vitejs.dev/) - A next-generation frontend tooling that provides a faster and leaner development experience.
- **Linting:**
  - [ESLint](https://eslint.org/) - For identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Icons:**
  - [React Icons](https://react-icons.github.io/react-icons/) - A library of popular icon sets.

## Installation

To get a local copy up and running, follow these simple steps.

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/programming-hero-assignment-8.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd programming-hero-assignment-8
   ```
3. **Install NPM packages:**
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) (or another port if 5173 is busy) to view it in the browser. The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Lints the project files using ESLint to check for code quality and style issues.

### `npm run preview`

Serves the production build locally to preview the final application.