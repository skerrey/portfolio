'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm{' '}
            <span className="text-primary">Seth Kerrey</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Full-stack developer passionate about creating amazing digital experiences.
            I specialize in React, Node.js, and TypeScript, building scalable web
            applications that make a difference.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className="relative mx-auto h-96 w-full max-w-2xl overflow-hidden rounded-lg bg-muted">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground">Your Photo Here</p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

