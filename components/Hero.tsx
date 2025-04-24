import { motion } from 'framer-motion';
import LottieBackground from './LottieBackground';

export default function Hero() {
  return (
    <section className="hero relative h-96 flex items-center justify-center overflow-hidden">
      <LottieBackground />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center z-10"
      >
        <h1 className="text-4xl font-bold">ChainCredit</h1>
        <p className="mt-4">União perfeita de reputação on-chain e crédito bancário tradicional.</p>
        <button className="mt-6 px-6 py-3 bg-primary text-white rounded" onClick={() => window.location.href = '#integration'}>Saiba Mais</button>
      </motion.div>
    </section>
  );
}
