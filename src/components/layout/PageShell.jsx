import LedgerRail from '../dashboard/LedgerRail';
import Background from './Background';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

export default function PageShell({ step, children }) {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-foreground">
      <Background />
      <Navbar className="relative z-10 lg:hidden" />
      <div className="mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-[17.5rem_minmax(0,1fr)]">
        <LedgerRail currentStep={step} />
        <main className="relative min-w-0">
          <motion.div key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, ease: 'easeOut' }} className="mx-auto w-full max-w-4xl px-4 py-7 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
