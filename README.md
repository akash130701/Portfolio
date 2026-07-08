# Akash Somasundaran Portfolio

A clean, recruiter-friendly portfolio website built with **React**, **Vite** and **Tailwind CSS**. The site is designed for UK data analyst, data scientist, BI analyst and junior data engineer roles.

## Sections

- Hero
- About
- Featured Projects
- Experience
- Skills
- Contact

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React icons
- Netlify-ready deployment

## Local Setup

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Netlify Deployment

### Option 1: Deploy through Netlify dashboard

1. Push this project to a GitHub repository.
2. Go to Netlify.
3. Click **Add new site**.
4. Choose **Import an existing project**.
5. Connect your GitHub account.
6. Select the portfolio repository.
7. Use these build settings:

```text
Build command: npm run build
Publish directory: dist
```

8. Click **Deploy site**.

Netlify will automatically redeploy the site whenever you push changes to the selected branch.

### Option 2: Deploy with Netlify CLI

Install the CLI:

```bash
npm install -g netlify-cli
```

Login:

```bash
netlify login
```

Build the project:

```bash
npm run build
```

Deploy draft version:

```bash
netlify deploy
```

Deploy production version:

```bash
netlify deploy --prod
```

When prompted for the publish directory, use:

```text
dist
```

## Things to Update Before Publishing

Open `src/data/portfolio.js` and update:

- Email address
- LinkedIn URL
- GitHub URL
- CV file name or path
- Any project links when available

To add your CV, place the PDF in the `public` folder and make sure the filename matches the `cv` value in `src/data/portfolio.js`.

Example:

```js
cv: '/Akash-Somasundaran-CV.pdf'
```

## Suggested Next Improvements

- Add screenshots for Power BI or project dashboards.
- Add GitHub links to technical projects.
- Add a downloadable CV PDF.
- Add a custom domain later if needed.
