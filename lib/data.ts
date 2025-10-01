import { Project, BlogPost } from "./types";

// Sample data - replace with your actual content
export const projects: Project[] = [
  {
    id: "1",
    title: "Dashboard",
    description: "A dashboard for a SaaS leasing company",
    image: "/images/dashboard.png",
    technologies: ["React", "Node.js", "Firebase", "JavaScript", "Bootstrap", "Serverless Functions"],
    githubUrl: "https://github.com/skerrey/dashboard",
    liveUrl: "https://dashboard-c48b3.web.app/",
    featured: true,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "/images/project2.jpg",
    technologies: ["Next.js", "Socket.io", "MongoDB", "TailwindCSS"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://taskmanager-demo.com",
    featured: true,
    createdAt: "2024-02-20T14:30:00Z",
    updatedAt: "2024-02-20T14:30:00Z",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts.",
    image: "/images/project3.jpg",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-demo.com",
    featured: false,
    createdAt: "2024-03-10T09:15:00Z",
    updatedAt: "2024-03-10T09:15:00Z",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    slug: "building-scalable-react-applications",
    excerpt: "Learn how to structure and scale React applications for large teams.",
    content: "# Building Scalable React Applications\n\nReact is a powerful library for building user interfaces...",
    published: true,
    tags: ["React", "JavaScript", "Architecture"],
    readingTime: 8,
    createdAt: "2024-01-10T12:00:00Z",
    updatedAt: "2024-01-10T12:00:00Z",
  },
  {
    id: "2",
    title: "TypeScript Best Practices",
    slug: "typescript-best-practices",
    excerpt: "Essential TypeScript patterns and practices for better code quality.",
    content: "# TypeScript Best Practices\n\nTypeScript brings static typing to JavaScript...",
    published: true,
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    readingTime: 6,
    createdAt: "2024-02-05T15:30:00Z",
    updatedAt: "2024-02-05T15:30:00Z",
  },
];

// API functions
export function getProjects(featured?: boolean): Project[] {
  if (featured) {
    return projects.filter(project => project.featured);
  }
  return projects;
}

export function getProjectById(id: string): Project | null {
  return projects.find(project => project.id === id) || null;
}

export function getBlogPosts(published?: boolean): BlogPost[] {
  if (published) {
    return blogPosts.filter(post => post.published);
  }
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null;
}
