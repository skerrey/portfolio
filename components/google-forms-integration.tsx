'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

interface GoogleFormsIntegrationProps {
  formAction: string; // Google Forms action URL
  nameField: string; // Google Forms field name for name
  emailField: string; // Google Forms field name for email
  subjectField: string; // Google Forms field name for subject
  messageField: string; // Google Forms field name for message
  onSubmit?: () => void;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function GoogleFormsIntegration({
  formAction,
  nameField,
  emailField,
  subjectField,
  messageField,
  onSubmit,
  onSuccess,
  onError,
}: GoogleFormsIntegrationProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  
  // Refs for form fields
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Load reCAPTCHA script
  const loadRecaptcha = () => {
    return new Promise<void>((resolve) => {
      if (window.grecaptcha) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      document.head.appendChild(script);
    });
  };

  // Execute reCAPTCHA
  const executeRecaptcha = async (): Promise<string> => {
    await loadRecaptcha();
    
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      throw new Error('reCAPTCHA site key not configured');
    }
    
    return new Promise((resolve, reject) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(siteKey, { action: 'contact_form' })
          .then((token: string) => resolve(token))
          .catch((error: any) => reject(error));
      });
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get CAPTCHA token
      const token = await executeRecaptcha();
      setCaptchaToken(token);

      // Get form data from refs
      const formData = new FormData();
      formData.append(nameField, nameRef.current?.value || '');
      formData.append(emailField, emailRef.current?.value || '');
      formData.append(subjectField, subjectRef.current?.value || '');
      formData.append(messageField, messageRef.current?.value || '');
      formData.append('g-recaptcha-response', token);

      // Submit to Google Forms
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Required for Google Forms
      });

      // Since we're using no-cors, we can't check the response status
      // But if we get here without an error, assume success
      setSubmitStatus('success');
      
      // Clear form
      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
      if (subjectRef.current) subjectRef.current.value = '';
      if (messageRef.current) messageRef.current.value = '';

      onSuccess?.();
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
      onError?.(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input
          ref={nameRef}
          id="name"
          className="mt-1"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          ref={emailRef}
          id="email"
          type="email"
          className="mt-1"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          ref={subjectRef}
          id="subject"
          className="mt-1"
          placeholder="What's this about?"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          ref={messageRef}
          id="message"
          className="mt-1"
          placeholder="Tell me about your project..."
          rows={5}
          required
        />
      </div>

      {/* reCAPTCHA badge will appear automatically */}
      <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} data-size="invisible"></div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-sm text-green-800">
            Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-800">
            Sorry, there was an error sending your message. Please try again.
          </p>
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}
