'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GoogleFormsIntegration } from '@/components/google-forms-integration';

export default function ContactPage() {
  // Google Forms configuration from environment variables
  const GOOGLE_FORMS_CONFIG = {
    formAction: process.env.NEXT_PUBLIC_GOOGLE_FORMS_ACTION_URL || '',
    nameField: process.env.NEXT_PUBLIC_GOOGLE_FORMS_NAME_FIELD || '',
    emailField: process.env.NEXT_PUBLIC_GOOGLE_FORMS_EMAIL_FIELD || '', 
    subjectField: process.env.NEXT_PUBLIC_GOOGLE_FORMS_SUBJECT_FIELD || '',
    messageField: process.env.NEXT_PUBLIC_GOOGLE_FORMS_MESSAGE_FIELD || '',
  };

  const handleFormSuccess = () => {
    console.log('Form submitted successfully!');
  };

  const handleFormError = (error: string) => {
    console.error('Form submission error:', error);
  };

  return (
    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Get In Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Let's work together</h2>
              <p className="text-muted-foreground">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GoogleFormsIntegration
                formAction={GOOGLE_FORMS_CONFIG.formAction}
                nameField={GOOGLE_FORMS_CONFIG.nameField}
                emailField={GOOGLE_FORMS_CONFIG.emailField}
                subjectField={GOOGLE_FORMS_CONFIG.subjectField}
                messageField={GOOGLE_FORMS_CONFIG.messageField}
                onSuccess={handleFormSuccess}
                onError={handleFormError}
              />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
