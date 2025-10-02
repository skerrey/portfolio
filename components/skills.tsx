'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const skills = [
  {category: 'Frontend', technologies: ['React','Angular','React Native','JavaScript','TypeScript','HTML5','CSS3','SASS','Bootstrap','Tailwind','Expo']},
  {category: 'Backend', technologies: ['Node.js','Express.js','Python','Stripe API','PostgreSQL','MongoDB','Sequelize ORM']},
  {category: 'Tools', technologies: ['AWS','Elastic Beanstalk','S3','Code Pipeline','CloudFront','Lambda','Docker','CI/CD','Jest','NPM','Git']},
  {category: 'Languages', technologies: ['JavaScript','TypeScript','Python','SQL']}
];
  

export function Skills() {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

