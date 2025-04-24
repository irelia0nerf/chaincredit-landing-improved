import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchScores, Score } from '../lib/api';

export default function ReputationChart({ initialData }: { initialData: Score[] }) {
  const [data, setData] = useState<Score[]>(initialData);

  useEffect(() => {
    const iv = setInterval(async () => setData(await fetchScores()), 30000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section aria-labelledby="chart-title" className="p-8">
      <h2 id="chart-title" className="text-2xl font-semibold mb-4">Pontuação de Reputação</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="timestamp" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="var(--color-primary)" />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
