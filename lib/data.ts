import { Project } from "./types";

// Sample data - replace with your actual content
export const projects: Project[] = [
  {
    id: "1",
    title: "Aparmtnet Dashboard",
    description: "An apartment tenantdashboard for a SaaS leasing company",
    image: "/images/dashboard.png",
    technologies: ["React", "Node.js", "Firebase", "JavaScript", "Bootstrap", "Serverless Functions"],
    githubUrl: "https://github.com/skerrey/dashboard",
    liveUrl: "apartment-dashboard.sethkerrey.com",
    featured: true,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Enterprise App",
    description: "An enterprise app for a company",
    image: "/images/enterprise-app.png",
    technologies: ["React", "Node.js", ".NET/C#", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/skerrey/enterprise-app",
    liveUrl: "enterprise-app.sethkerrey.com",
    featured: true,
    createdAt: "2024-02-20T14:30:00Z",
    updatedAt: "2024-02-20T14:30:00Z",
  },
  // {
  //   id: "3",
  //   title: "Weather Dashboard",
  //   description: "A responsive weather dashboard with location-based forecasts.",
  //   image: "/images/project3.jpg",
  //   technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
  //   githubUrl: "https://github.com/yourusername/weather-dashboard",
  //   liveUrl: "https://weather-demo.com",
  //   featured: false,
  //   createdAt: "2024-03-10T09:15:00Z",
  //   updatedAt: "2024-03-10T09:15:00Z",
  // },
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
