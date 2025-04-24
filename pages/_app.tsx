import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '../styles/tailwind.css';
import '../styles/theme.css';
import ThemeToggle from '../components/ThemeToggle';
import PerformanceIndicator from '../components/PerformanceIndicator';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeToggle />
      <PerformanceIndicator />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
