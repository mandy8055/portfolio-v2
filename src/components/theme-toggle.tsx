'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('system');
        break;
      default:
        setTheme('light');
    }
  };

  if (!mounted) {
    return (
      <Button variant='ghost' size='icon'>
        <Sun className='size-5' />
      </Button>
    );
  }

  const getIcon = () => {
    const iconClass = 'size-5 transition-all';

    switch (theme) {
      case 'light':
        return <Moon className={iconClass} />;
      case 'dark':
        return <Monitor className={iconClass} />;
      default:
        return <Sun className={iconClass} />;
    }
  };

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={cycleTheme}
      aria-label='Toggle theme'
      className='cursor-pointer'
    >
      {getIcon()}
    </Button>
  );
}
