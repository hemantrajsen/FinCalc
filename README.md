# FinCalc - Financial Calculators

Smart calculators for smarter financial decisions. Free, accurate, and easy to use.

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

Follow these steps to set up the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd fincalc-290fa035

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server with auto-reloading
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Technologies

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Project Structure

- `/src/components` - Reusable React components
- `/src/pages` - Page components and calculator pages
- `/src/lib` - Utility functions and calculator logic
- `/src/hooks` - Custom React hooks
- `/public` - Static assets

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.
