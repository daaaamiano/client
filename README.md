# 📸 Lens - Photography Portfolio

A clean, modern photography portfolio showcasing the work of talented photographers, built with React and Telegram UI components.

## 🚀 Live Demo

Visit: `https://daaaamiano.github.io/client/`

## ✨ Features

- **Clean Card-Based Design** - Telegram UI inspired interface
- **Dark/Light Theme Toggle** - Automatic theme switching
- **Responsive Portfolio Grid** - Beautiful image galleries
- **Modal Image Viewer** - Full-screen image viewing
- **Mobile Optimized** - Works great on all devices

## 🛠 Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Telegram UI** - Native Telegram components
- **Tanstack Router** - Type-safe routing
- **Vite** - Fast build tool

## 🏃‍♂️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/client.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to main

### Manual Deployment

```bash
# Build the project
npm run deploy

# The built files will be in the 'dist' folder
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (theme, etc.)
├── pages/             # Page components
│   ├── LandingPage.tsx    # Main portfolio listing
│   └── PhotographerProfile.tsx # Individual photographer page
├── types/             # TypeScript type definitions
└── main.tsx          # App entry point

public/
├── artists/          # Photographer profile images
└── portfolio1/       # Portfolio photo collection
```

## 🎨 Customization

### Adding New Photographers

1. Add photographer data in `src/pages/LandingPage.tsx`:
```tsx
const photographers = [
  {
    id: 'photographer-id',
    name: 'Photographer Name',
    specialty: 'Photography Style',
    avatar: '/artists/photographer.jpg',
    portfolioCount: 20
  }
]
```

2. Add corresponding data in `src/pages/PhotographerProfile.tsx`

### Changing Theme Colors

Update CSS variables in `src/index.css`:
```css
:root {
  --tg-theme-bg-color: #ffffff;
  --tg-theme-text-color: #000000;
  /* ... other theme colors */
}
```

## 📸 Adding Portfolio Images

1. Place images in `public/portfolio[X]/`
2. Update the portfolio array in photographer data
3. Images are automatically optimized and lazy-loaded

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own portfolio!