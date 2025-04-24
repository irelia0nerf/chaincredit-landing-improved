import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL!);

export type Score = { user: string; score: number; timestamp: string };

export async function fetchInitialScores(): Promise<Score[]> {
  const cache = await redis.get('chaincredit:scores');
  if (cache) return JSON.parse(cache);

  const res = await fetch(process.env.GRAPH_ENDPOINT!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
          reputations(first: 50, orderBy: timestamp, orderDirection: asc) {
            user
            score
            timestamp
          }
        }
      `,
    }),
  });
  const json = await res.json();
  const data: Score[] = json.data.reputations;
  await redis.setex('chaincredit:scores', 60, JSON.stringify(data));
  return data;
}

export async function fetchScores(): Promise<Score[]> {
  return fetchInitialScores();
}
