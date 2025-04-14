# Professional Portfolio Website

A modern, responsive portfolio website built with Angular 19+ and Tailwind CSS.

## 🌐 Live Demo

Check out the live version of this portfolio at: [https://th3you7.github.io/MyPortfolio/](https://th3you7.github.io/MyPortfolio/)

## ✨ Features

- 🎨 Responsive design that works on all devices
- 🖥️ Modern UI with Tailwind CSS
- 📱 Mobile-first approach
- 🎭 Dark/Light mode support
- 📋 Project showcase with filtering
- 📧 Contact form with validation
- 🚀 Fast loading with Angular SSR
- 🔍 SEO optimized

## 🛠️ Technologies Used

- Angular 19+
- TypeScript
- Tailwind CSS
- Font Awesome
- Google Fonts
- Angular SSR

## 📋 Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- Angular CLI (v19 or later)

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Th3You7/MyPortfolio.git
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

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Navigation component
│   │   ├── home/            # Home page component
│   │   ├── about/           # About page component
│   │   ├── projects/        # Projects showcase component
│   │   ├── contact/         # Contact form component
│   │   └── footer/          # Footer component
│   ├── services/
│   │   ├── project.service.ts    # Project data service
│   │   └── theme.service.ts      # Theme management service
│   ├── app.component.ts     # Root component
│   ├── app.routes.ts        # Application routes
│   └── app.config.ts        # Application configuration
├── assets/
│   └── images/              # Project images and icons
└── styles.scss              # Global styles
```

## 🎨 Customization

1. Update personal information in the respective component files
2. Add your projects in `project.service.ts`
3. Customize colors and styles in `tailwind.config.js`
4. Add your own images to the `assets/images` directory
5. Modify theme colors in `theme.service.ts`

## 🚀 Deployment

The project is configured for deployment to GitHub Pages. To deploy:

1. Make sure all changes are committed and pushed to GitHub
2. Run the deployment command:

```bash
npm run deploy
```

The site will be available at `https://th3You7.github.io/MyPortfolio/`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or suggestions, please feel free to reach out through the contact form on the website.
