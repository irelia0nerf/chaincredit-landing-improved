import { useEffect, useState } from 'react';
import { Switch } from '@radix-ui/react-switch';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(stored);
    document.documentElement.setAttribute('data-theme', stored);
  }, []);

  const toggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggle}
        className="w-12 h-6 bg-gray-300 rounded-full relative"
      >
        <span className="block w-6 h-6 bg-white rounded-full shadow transform transition-transform" style={{ translate: theme === 'dark' ? '6px 0' : '0 0' }} />
      </Switch>
    </div>
  );
}
