<div align="center">
  <img src="/public/ArthaCalc.png" alt="ArthaCalc Logo" width="100" height="100">
  
  # ArthaCalc - Smart Financial Calculators
  
  **Smart calculators for smarter financial decisions**
  
  Free, accurate, and easy to use financial planning tools to help you make informed money decisions.
  
  [![Live Demo](https://img.shields.io/badge/demo-live-success)](https://your-demo-url.vercel.app)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-19.x-61dafb)](https://reactjs.org/)
</div>

---

## 📋 Overview

ArthaCalc is a comprehensive suite of financial calculators designed to help individuals make informed financial decisions. Whether you're planning a loan, calculating retirement savings, or estimating taxes, ArthaCalc provides accurate, real-time calculations with beautiful visualizations.

### ✨ Key Features

- 🎯 **10+ Financial Calculators** - Covering loans, investments, taxes, and daily finance
- 📊 **Interactive Charts** - Visualize your financial data with dynamic graphs
- 💰 **No Sign-up Required** - Start calculating immediately, completely free
- 🌙 **Dark Mode Support** - Easy on the eyes with theme switching
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Lightning Fast** - Built with modern web technologies for optimal performance
- 🎨 **Beautiful UI** - Clean, modern interface with smooth animations

---

## 🧮 Available Calculators

### 💳 Loans & Debt
- **Loan/EMI Calculator** - Calculate monthly EMI payments with amortization schedule
- **Mortgage Calculator** - Plan home purchases with property tax and insurance
- **Credit Card Payoff** - Determine how long to clear credit card debt

### 💰 Savings & Investment
- **Compound Interest Calculator** - See how your savings grow over time
- **Investment Return Calculator** - Calculate ROI and CAGR on investments
- **Retirement Planner** - Plan for your retirement goals

### 📊 Income & Tax
- **Tax Estimator** - Estimate federal income tax liability
- **Net Salary Calculator** - Calculate take-home pay after deductions
- **Salary Converter** - Convert between hourly and annual salary

### 🧾 Everyday Finance
- **Tip Calculator** - Calculate tips and split bills easily

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/hemantrajsen/ArthaCalc.git

# Navigate to project directory
cd ArthaCalc

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run build:dev` | Build development bundle |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run preview` | Preview production build locally |

---

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
      <br>React 19
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://vitejs.dev/logo.svg" width="48" height="48" alt="Vite" />
      <br>Vite
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="48" height="48" alt="Tailwind" />
      <br>Tailwind CSS
    </td>
  </tr>
</table>

### Core Technologies
- **[React 19](https://reactjs.org/)** - Modern UI library with hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Recharts](https://recharts.org/)** - Composable charting library
- **[React Hook Form](https://react-hook-form.com/)** - Performant form validation
- **[TanStack Query](https://tanstack.com/query/latest)** - Powerful data synchronization
- **[React Router](https://reactrouter.com/)** - Client-side routing

---

## 📁 Project Structure

```
ArthaCalc/
├── public/                  # Static assets
│   └── ArthaCalc.png       # Logo and images
├── src/
│   ├── components/         # Reusable React components
│   │   ├── calculator/     # Calculator-specific components
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   └── ui/             # shadcn/ui components
│   ├── pages/              # Page components
│   │   └── calculators/    # Individual calculator pages
│   ├── lib/                # Utility functions & calculator logic
│   ├── hooks/              # Custom React hooks
│   └── App.tsx             # Main application component
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🎨 Features in Detail

### Interactive Visualizations
All calculators include dynamic charts and graphs using Recharts:
- **Pie Charts** - For loan breakdowns (principal vs interest)
- **Area Charts** - For growth projections over time
- **Responsive Design** - Charts adapt to screen size

### Calculator Components
- **InputField** - Reusable input with validation and formatting
- **ResultCard** - Display calculated results with icons
- **CalculatorLayout** - Consistent layout wrapper for all calculators

### User Experience
- 🔍 **Smart Search** - Find calculators instantly with live search
- 📌 **Category Filters** - Browse by calculator category
- 🎯 **Popular Calculators** - Quick access to most-used tools
- ↩️ **Easy Navigation** - Breadcrumb navigation on all pages

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory, ready to deploy.

### Deployment Platforms

ArthaCalc can be deployed to any static hosting service:

- **[Vercel](https://vercel.com)** (Recommended)
  ```bash
  npm install -g vercel
  vercel
  ```

- **[Netlify](https://netlify.com)**
  ```bash
  npm install -g netlify-cli
  netlify deploy
  ```

- **[GitHub Pages](https://pages.github.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)**

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-calculator
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing calculator'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-calculator
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add TypeScript types for all new code
- Test calculators for accuracy
- Update documentation as needed

---

## 📝 Calculator Logic

All calculator functions are located in `src/lib/calculators.ts`:

- `calculateEMI()` - Loan EMI calculations
- `calculateMortgage()` - Mortgage with taxes
- `calculateCompoundInterest()` - Compound interest growth
- `calculateCreditCardPayoff()` - Credit card payoff timeline
- `estimateTax()` - Federal tax estimation
- And more...

Each function is pure, testable, and well-documented.

---

## 🐛 Known Issues

Currently no known issues. If you find a bug, please [open an issue](https://github.com/hemantrajsen/ArthaCalc/issues).

---

## 👨‍💻 Author

**Hemant Raj Sen**
- GitHub: [@hemantrajsen](https://github.com/hemantrajsen)

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Lucide Icons](https://lucide.dev/) for amazing icons
- [Vercel](https://vercel.com) for hosting and analytics

---

## 📬 Support

If you like this project, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs or issues
- 💡 Suggesting new features
- 📢 Sharing with others

---

<div align="center">
  Made with ❤️ for better financial decisions

  &copy; ArthaCalc 2026. All rights reserved.
  
  [Live Demo](https://your-demo-url.vercel.app) • [Report Bug](https://github.com/hemantrajsen/ArthaCalc/issues) • [Request Feature](https://github.com/hemantrajsen/ArthaCalc/issues)
</div>
