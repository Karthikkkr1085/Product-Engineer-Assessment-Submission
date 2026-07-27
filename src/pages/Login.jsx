import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FintechHero from '../components/auth/FintechHero';
import LoginCard from '../components/auth/LoginCard';

export default function Login() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [email, setEmail] = useState('ananya.rao@email.com');
  const [password, setPassword] = useState('••••••••');
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 75, damping: 22, mass: 0.45 });
  const mouseY = useSpring(rawY, { stiffness: 75, damping: 22, mass: 0.45 });
  const cardX = useTransform(mouseX, (value) => reduceMotion ? 0 : value * -0.1);
  const cardY = useTransform(mouseY, (value) => reduceMotion ? 0 : value * -0.08);
  const cardRotateX = useTransform(mouseY, (value) => reduceMotion ? 0 : value * 0.018);
  const cardRotateY = useTransform(mouseX, (value) => reduceMotion ? 0 : value * -0.018);
  const glowX = useTransform(mouseX, (value) => value * 0.6);
  const glowY = useTransform(mouseY, (value) => value * 0.6);

  function handleSubmit(event) { event.preventDefault(); navigate('/dashboard'); }
  function handlePointerMove(event) { if (!reduceMotion && window.innerWidth >= 768) { rawX.set((event.clientX / window.innerWidth - 0.5) * 100); rawY.set((event.clientY / window.innerHeight - 0.5) * 100); } }

  return <main onPointerMove={handlePointerMove} className="relative min-h-screen overflow-hidden bg-slate-950"><FintechHero mouseX={mouseX} mouseY={mouseY} /><motion.div style={{ x: glowX, y: glowY }} className="pointer-events-none absolute top-1/2 left-1/2 -mt-72 -ml-72 hidden size-[36rem] rounded-full bg-blue-200/12 blur-3xl md:block" /><section className="relative z-10 grid min-h-screen place-items-center px-4 py-8 sm:px-6 lg:place-items-center lg:pl-[38%] xl:pl-[42%]"><motion.div style={{ x: cardX, y: cardY, rotateX: cardRotateX, rotateY: cardRotateY, transformPerspective: 1200 }} whileHover={reduceMotion ? undefined : { scale: 1.01 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="w-full max-w-md transform-3d"><LoginCard email={email} password={password} onEmailChange={setEmail} onPasswordChange={setPassword} onSubmit={handleSubmit} /></motion.div></section></main>;
}
