# ELibrary Dashboard

A modern dashboard application built with React, TypeScript, and Vite for managing books and authors. The application features a clean UI built with Tailwind CSS and Shadcn UI components.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Routing:** React Router v6
- **State Management:**
  - Zustand for global state
  - TanStack Query (React Query) for server state
- **Styling:**
  - Tailwind CSS
  - Shadcn UI components
  - Lucide React icons
- **Form Handling:**
  - React Hook Form
  - Zod for validation
- **HTTP Client:** Axios

## Features

- 📚 Book Management (CRUD operations)
- 🔐 Authentication system
- 📊 Dashboard analytics
- 📱 Responsive design
- 🎨 Dark/Light mode support
- 🔍 Search functionality
- 📝 Form validation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd elib-dashboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:

```bash
VITE_PUBLIC_BACKEND_URL=http://localhost:5513
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Build

To create a production build:

```bash
npm run build
# or
yarn build
```

### Lint

To run the linter:

```bash
npm run lint
# or
yarn lint
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Layout components
├── pages/          # Page components
├── http/          # API related code
├── store/         # Global state management
├── types/         # TypeScript type definitions
├── lib/           # Utility functions
└── router.tsx     # Route definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
