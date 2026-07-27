import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { MotionButton } from '../components/ui/motion-button';
import { useApplication } from '../context/ApplicationContext';
import { formatINR } from '../data/mockData';

export default function Confirmation() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const { application } = useApplication();
  const [refCode] = useState(() => `HZN-LN-${Math.floor(100000 + Math.random() * 899999)}`);
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.22, ease: 'easeOut' };

  return <PageShell step={10}><motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={transition} className="confirm-wrap"><motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ...transition, delay: 0.05 }} className="confirm-seal"><svg viewBox="0 0 24 24" fill="none" className="size-7" aria-hidden="true"><motion.path d="m5 12 4.2 4.2L19 6.8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 0.28, delay: 0.12, ease: 'easeOut' }} /></svg></motion.div><motion.h1 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: 0.1 }} style={{ fontSize: 26 }}>Application submitted</motion.h1><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...transition, delay: 0.14 }} className="subhead" style={{ margin: '8px auto 0' }}>Thank you. Your application for {formatINR(application.amount)} has been received and is being processed.</motion.p><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: 0.18 }} className="ref-code tabular">{refCode}</motion.div><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...transition, delay: 0.2 }} style={{ fontSize: 13.5, color: 'var(--ink-soft)', maxWidth: '46ch', margin: '0 auto 28px' }}>Keep this reference number for tracking. Funds are typically disbursed within 2 business days after document verification. You&apos;ll receive updates by SMS and email.</motion.p><motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: 0.24 }}><MotionButton type="button" onClick={() => navigate('/dashboard')}>Back to dashboard<ArrowRight aria-hidden="true" /></MotionButton></motion.div></motion.section></PageShell>;
}
