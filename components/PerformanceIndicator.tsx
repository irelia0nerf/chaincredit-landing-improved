import { useEffect, useState } from 'react';

export default function PerformanceIndicator() {
  const [vitals, setVitals] = useState({ FID: 0, LCP: 0, CLS: 0 });

  useEffect(() => {
    import('next/web-vitals').then(({ getCLS, getFID, getLCP }) => {
      getCLS(metrics => setVitals(prev => ({ ...prev, CLS: Math.round(metrics.value) })));
      getFID(metrics => setVitals(prev => ({ ...prev, FID: Math.round(metrics.value) })));
      getLCP(metrics => setVitals(prev => ({ ...prev, LCP: Math.round(metrics.value) })));
    });
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white bg-opacity-80 p-2 rounded shadow">
      <p className="text-sm">FID: {vitals.FID}ms LCP: {vitals.LCP}ms CLS: {vitals.CLS}</p>
    </div>
  );
}
