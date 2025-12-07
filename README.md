# Country Information App

A modern web application built with React and TypeScript that displays country information fetched from a backend API. Users can browse countries and view detailed information about each one in an interactive dialog.

## Features

- Browse a list of countries with their basic information
- Click on any country to view detailed information in a modal dialog
- Responsive design that works on mobile and desktop
- Loading states with spinner overlay
- Error handling with user-friendly alerts
- State management using Redux Toolkit
- Modern UI with Tailwind CSS

## Tech Stack

- **React 19.2.0** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS 4** - Styling
- **SweetAlert2** - Beautiful alerts and modals
- **SVGR** - SVG to React component

## Project Structure

```
src/
├── apis/           # API integration layer
│   ├── axios.ts    # Axios instance configuration
│   └── countryApi.tsx
├── components/     # Reusable components
│   └── ui/         # UI components (Spinner, LoadingOverlay)
├── pages/          # Page components
│   └── eventPage/  # Main event/country page
│       ├── components/
│       │   ├── Header.tsx
│       │   ├── Card.tsx
│       │   ├── InfoCard.tsx
│       │   └── countryDialog.tsx
│       └── index.tsx
├── router/         # Routing configuration
│   ├── index.ts
│   └── routers.tsx
├── services/       # Business logic layer
│   └── eventService.ts
├── stores/         # Redux store configuration
│   ├── features/   # Redux slices
│   │   ├── eventSlice.ts
│   │   └── globalLoadingSlice.ts
│   ├── index.ts
│   └── store.ts
├── App.tsx
├── main.tsx
├── env.ts          # Environment configuration
└── configEnv.ts
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd garena-fe
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create or update [configEnv.ts](src/configEnv.ts) with your backend URL:
```typescript
export const dataEnvConfig = {
  BACKEND_URL: "your-backend-api-url"
}
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:
```bash
npm run lint
```

## Configuration

### Vite Configuration

The project uses Vite with the following configurations:
- Port 3000 for development server
- File system polling enabled for hot reload
- Path alias `@` points to `./src`
- SVGR plugin for importing SVGs as React components
- Tailwind CSS v4 integration

### TypeScript

The project uses TypeScript with strict type checking. Configuration files:
- [tsconfig.json](tsconfig.json) - Base TypeScript configuration
- [tsconfig.app.json](tsconfig.app.json) - App-specific configuration
- [tsconfig.node.json](tsconfig.node.json) - Node-specific configuration

## Features in Detail

### State Management

Redux Toolkit is used for state management with the following slices:
- **eventSlice** - Manages country data and fetch operations
- **globalLoadingSlice** - Controls global loading overlay

### API Integration

The app integrates with a backend API to:
- Fetch list of countries (`GET /countries`)
- Get country details by code (`GET /countries/:code`)

### Routing

React Router DOM is configured with:
- `/` - Main event page displaying countries
- `*` - 404 Not Found page

### UI Components

- **LoadingOverlay** - Global loading indicator
- **Spinner** - Loading spinner component
- **CountryDialog** - Modal for displaying country details
- **EventCard** - Country list card component
- **EventHeader** - Page header component

## API Requirements

The backend API should provide the following endpoints:

```
GET /countries
Response: Array of country objects

GET /countries/:code
Response: Detailed country information object
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and not licensed for public use.
