import { GetStaticProps } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';
import Integration from '../components/Integration';
import ReputationChart from '../components/ReputationChart';
import { fetchInitialScores, Score } from '../lib/api';

export default function Home({ initialScores }: { initialScores: Score[] }) {
  return (
    <>
      <Head>
        <title>ChainCredit – DeFi + TradFi Reputation</title>
        <meta name="description" content="ChainCredit conecta reputação Web3 a crédito TradFi." />
        <meta property="og:image" content="/og/chaincredit.png" />
      </Head>
      <Hero />
      <Integration />
      <ReputationChart initialData={initialScores} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const initialScores = await fetchInitialScores();
  return { props: { initialScores }, revalidate: 60 };
};
