import { Hero } from '@/components/hero';
import { FeaturedProjects } from '@/components/featured-projects';
import { RecentBlogPosts } from '@/components/recent-blog-posts';
import { Skills } from '@/components/skills';

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Hero />
      <Skills />
      <FeaturedProjects />
      <RecentBlogPosts />
    </div>
  );
}
