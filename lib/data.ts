import { Project } from "./types";

// Sample data - replace with your actual content
export const projects: Project[] = [
  {
    id: "1",
    title: "Apartment Dashboard",
    description: "An apartment tenant dashboard for a SaaS leasing company",
    image: "/images/projects/dashboard.png",
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
    description: "A request dashboard for advisory firms for managing requests and tasks",
    image: "/images/projects/enterprise-app.png",
    technologies: ["React", ".NET/C#", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/skerrey/enterprise-app",
    liveUrl: "enterprise-app.sethkerrey.com",
    featured: true,
    createdAt: "2024-02-20T14:30:00Z",
    updatedAt: "2024-02-20T14:30:00Z",
  },
  {
    id: "3",
    title: "Jira Alternative Dashboard",
    description: "A Jira dashboard alternative for individuals of all technical capacity to use. Coupled with AI to help provide clarity.",
    image: "/images/projects/jira_alternative_dashboard.png",
    technologies: ["React.js", "Node.js", "OpenAI API", "JavaScript", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/skerrey/jira-alternative-dashboard",
    liveUrl: "jira-alt-dashboard.sethkerrey.com",
    featured: true,
    createdAt: "2026-01-09T09:15:00Z",
    updatedAt: "2026-01-09T09:15:00Z",
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
