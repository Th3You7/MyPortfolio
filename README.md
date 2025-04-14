# Professional Portfolio Website

A modern, responsive portfolio website built with Angular 16+ and Tailwind CSS.

## Features

- Responsive design
- Modern UI with Tailwind CSS
- Project showcase with filtering
- Contact form with validation
- Dark mode support
- Multi-language support (English/French)

## Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)
- Angular CLI (v16 or later)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
ng serve
```

The application will be available at `http://localhost:4200/`.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── home/
│   │   ├── about/
│   │   ├── projects/
│   │   ├── contact/
│   │   └── footer/
│   ├── services/
│   │   └── project.service.ts
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── assets/
│   └── images/
└── styles.scss
```

## Customization

1. Update personal information in the respective component files
2. Add your projects in `project.service.ts`
3. Customize colors and styles in `tailwind.config.js`
4. Add your own images to the `assets/images` directory

## Deployment

The project can be deployed to various platforms:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## Technologies Used

- Angular 16+
- TypeScript
- Tailwind CSS
- Font Awesome
- Google Fonts

## License

This project is licensed under the MIT License.
