'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Section, SectionTitle, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Send } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GradientText } from '@/components/animations/GradientText';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email sending logic
    console.log('Form submitted:', formData);
    alert(
      'Thanks for reaching out! This is a demo - email integration coming soon.',
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section id='contact' className='bg-muted/50 relative z-10'>
      <Container size='md'>
        <SectionHeader>
          <SectionTitle>
            Get In <GradientText animate={false}>Touch</GradientText>
          </SectionTitle>
          <p className='text-muted-foreground'>
            Have a project in mind? Let's work together!
          </p>
        </SectionHeader>

        <ScrollReveal>
          <Card className='backdrop-blur-sm bg-background/80'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Mail className='size-5' />
                Contact Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='text-sm font-medium block mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md bg-background'
                    placeholder='Your name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='text-sm font-medium block mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-3 py-2 border rounded-md bg-background'
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='text-sm font-medium block mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className='w-full px-3 py-2 border rounded-md bg-background resize-none'
                    placeholder='Your message...'
                  />
                </div>

                <Button type='submit' className='w-full'>
                  <Send className='size-4 mr-2' />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className='mt-8 text-center'>
            <p className='text-sm text-muted-foreground mb-4'>
              Or reach me directly at:
            </p>
            <div className='flex flex-wrap gap-2 justify-center'>
              <Badge variant='outline'>
                <Mail className='size-3 mr-1' />
                msankrit8055@gmail.com
              </Badge>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
