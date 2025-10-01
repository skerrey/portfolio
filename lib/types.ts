import { z } from 'zod';

// Project schemas
export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  technologies: z.array(z.string()),
  githubUrl: z.string().optional(),
  liveUrl: z.string().optional(),
  featured: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const CreateProjectSchema = ProjectSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateProjectSchema = CreateProjectSchema.partial();

// Blog post schemas
export const BlogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(),
  published: z.boolean().default(false),
  tags: z.array(z.string()),
  readingTime: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const CreateBlogPostSchema = BlogPostSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateBlogPostSchema = CreateBlogPostSchema.partial();

// Contact form schema
export const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// API Response schemas
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.any().optional(),
  error: z.string().optional(),
});

// Type exports
export type Project = z.infer<typeof ProjectSchema>;
export type CreateProject = z.infer<typeof CreateProjectSchema>;
export type UpdateProject = z.infer<typeof UpdateProjectSchema>;

export type BlogPost = z.infer<typeof BlogPostSchema>;
export type CreateBlogPost = z.infer<typeof CreateBlogPostSchema>;
export type UpdateBlogPost = z.infer<typeof UpdateBlogPostSchema>;

export type ContactForm = z.infer<typeof ContactFormSchema>;
export type ApiResponse<T = any> = z.infer<typeof ApiResponseSchema> & {
  data?: T;
};
