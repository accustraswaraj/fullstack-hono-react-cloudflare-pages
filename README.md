# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Environment Variables for Cloudflare Pages App

Set the following environment variables in your Cloudflare Pages App:

``AUTH_SECRET="any-secret"
AUTH_URL="http://{your-app-domain}/api/auth"
GITHUB_ID="your-github-app-id"
GITHUB_SECRET="your-github-app-secret"``


## GitHub App Callback URL

In your GitHub App's settings, set the callback URL to:

`http://{your-app-domain}/api/auth/callback/github`

# Clone this repository
`git clone <repository-url>`

# Install dependencies
`npm install`

# Run the frontend development server
`npm run dev`

# Run the backend development server
`wrangler dev`