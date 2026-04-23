# Client Website

This is a Vite + React project for the client website.

## Prerequisites

- Node.js (v16+)
- npm or yarn

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```bash
cp .env.example .env
```

Update the `.env` file with your actual values:

```env
VITE_API_URL=https://your-actual-api-url.com
```

### 3. Run Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### 4. Build for Production

```bash
npm run build
```

## Deploying to Vercel

This project is fully configured for deployment on Vercel.

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repository.
4. Vercel will automatically detect that this is a Vite project.
5. In the "Environment Variables" section on Vercel, add:
   - `VITE_API_URL`: (Your production API URL)
6. Click **Deploy**.

## Folder Structure

- `src/`: Application source code
  - `assets/`: Static assets like images and SVG icons
  - `components/`: Reusable UI components
  - `features/`: Feature-based modules (e.g., `publicBlog`)
    - `api/`: Centralized API calls using the base URL
    - `hooks/`: Custom hooks for data fetching
    - `utils/`: Utility functions like `getApiBaseUrl.js`







## Deploying to Vercel

This project is fully configured for deployment on Vercel.

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repository.
4. Vercel will automatically detect that this is a Vite project.
5. In the "Environment Variables" section on Vercel, add:
   - `VITE_API_URL`: (Your production API URL)
6. Click **Deploy**.

## Folder Structure

- `src/`: Application source code
  - `assets/`: Static assets like images and SVG icons
  - `components/`: Reusable UI components
  - `features/`: Feature-based modules (e.g., `publicBlog`)
    - `api/`: Centralized API calls using the base URL
    - `hooks/`: Custom hooks for data fetching
    - `utils/`: Utility functions like `getApiBaseUrl.js`

