# Game Hub

## Description

A web application for discovering and exploring video games. Users can browse, search, and filter games based on various criteria.

## Tech Stack

- **Vite:** Next-generation front-end tooling for a faster and leaner development experience.
- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Chakra UI:** A simple, modular, and accessible component library for React applications.
- **Axios:** A promise-based HTTP client for the browser and Node.js.
- **React Icons:** A library for including popular icons in your React projects.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    (Replace `your-username/game-hub.git` with the actual URL of your repository)
    ```bash
    git clone https://github.com/your-username/game-hub.git
    cd game-hub
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

In the project directory, you can run the following scripts:

-   `npm run dev` or `yarn dev`: Runs the app in development mode with hot reloading.
-   `npm run build` or `yarn build`: Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
-   `npm run lint` or `yarn lint`: Lints the project files using ESLint to check for code quality and potential errors.
-   `npm run preview` or `yarn preview`: Serves the production build locally to preview it before deployment.

## Project Structure

```
game-hub/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, icons, etc.
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # Chakra UI custom components or theme related files
│   ├── data/           # Static data (e.g., genre list)
│   ├── hooks/          # Custom React hooks
│   ├── services/       # Modules for API calls and other services
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Entry point of the application
│   └── index.css       # Global styles
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript compiler options
└── vite.config.ts      # Vite configuration
```

## API Integration

This project fetches game data from the [RAWG Video Games Database API](https://rawg.io/apidocs). The API client is configured in `src/services/api-client.ts`.

For the application to fetch data, you should ensure an API key is available to the application. The project is currently configured to use an API key directly in `src/services/api-client.ts`. However, for better security and flexibility, it's recommended to use an environment variable.

To do this:
1.  Sign up for a free API key at [RAWG](https://rawg.io/apikey).
2.  Create a `.env` file in the root of your project.
3.  Add your API key to the `.env` file like this:
    ```env
    VITE_API_KEY=YOUR_RAWG_API_KEY
    ```
4.  Modify `src/services/api-client.ts` to use this environment variable:
    ```typescript
    import axios from "axios";

    const apiClient = axios.create({
        baseURL: 'https://api.rawg.io/api',
        timeout: 10000, // Optional: adjust timeout as needed
        params: {
            key: import.meta.env.VITE_API_KEY
        }
    });

    export default apiClient;
    ```

The application will then use this key to authenticate requests to the RAWG API.

## Deployment

To deploy the application, first build the project:

```bash
npm run build
# or
yarn build
```

This command creates a `dist` folder with the optimized static assets. You can then deploy the contents of this folder to any static site hosting service (e.g., Netlify, Vercel, GitHub Pages).

---

This project was bootstrapped with [Vite](https://vitejs.dev/).
