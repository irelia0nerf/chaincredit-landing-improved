import Lottie from 'lottie-react';
import animationData from '../public/lottie/defi-tradfi.json';

export default function LottieBackground() {
  return (
    <div className="absolute inset-0 opacity-30">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
