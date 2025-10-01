# Portfolio - Next.js

A clean, modern personal portfolio website built with Next.js 14, TypeScript, and TailwindCSS.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** + **shadcn/ui** for styling
- **Framer Motion** for smooth animations
- **Dark mode** support
- **Responsive design** for all devices
- **SEO optimized** with meta tags
- **Contact form** with validation

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx          # Home page
│   ├── projects/page.tsx # Projects showcase
│   ├── blog/page.tsx     # Blog posts
│   ├── contact/page.tsx  # Contact form
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation with theme toggle
│   ├── footer.tsx        # Footer with social links
│   ├── hero.tsx          # Hero section
│   ├── skills.tsx        # Skills showcase
│   ├── featured-projects.tsx
│   └── recent-blog-posts.tsx
├── lib/                   # Utilities and data
│   ├── data.ts           # Sample projects and blog posts
│   ├── types.ts          # TypeScript type definitions
│   ├── utils.ts          # Helper functions
│   └── shared-utils.ts  # Additional utilities
└── package.json          # Dependencies
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm 8+

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

The application will start on http://localhost:3001

## 🎨 Customization

### Personal Information
Update your personal details in:

1. **Header** (`components/header.tsx`):
```typescript
<span className="text-xl font-bold">Your Name</span>
```

2. **Footer** (`components/footer.tsx`):
```typescript
<h3 className="text-lg font-semibold">Your Name</h3>
<p className="text-sm text-muted-foreground">
  Full-stack developer passionate about creating amazing digital experiences.
</p>
```

3. **Layout** (`app/layout.tsx`):
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Full-stack developer portfolio showcasing projects and blog posts',
  // ... other metadata
};
```

### Projects and Blog Posts
Update your content in `lib/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project',
    description: 'Project description...',
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://yourproject.com',
    featured: true,
    // ...
  },
];
```

### Social Links
Update social media links in `components/footer.tsx`:

```typescript
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: Twitter },
  { name: 'Email', href: 'mailto:your.email@example.com', icon: Mail },
];
```

### Contact Information
Update contact details in `app/contact/page.tsx`:

```typescript
<p className="text-muted-foreground">your.email@example.com</p>
<p className="text-muted-foreground">+1 (555) 123-4567</p>
<p className="text-muted-foreground">Your City, State</p>
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel --yes
```

### Other Platforms

- **Netlify**: Deploy as static site
- **Railway**: Full-stack deployment
- **AWS S3 + CloudFront**: Custom hosting

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Features Explained

### Dark Mode
The app includes a theme toggle using `next-themes`. Users can switch between light and dark modes.

### Responsive Design
Built with mobile-first approach using TailwindCSS responsive utilities.

### Animations
Smooth animations powered by Framer Motion for better user experience.

### SEO Optimization
- Meta tags for social sharing
- Open Graph tags
- Twitter Cards
- Sitemap generation
- Robots.txt

### Contact Form
Form validation using `react-hook-form` and `zod` for type-safe validation.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub or contact: your.email@example.com