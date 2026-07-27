import { Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Navbar({ actions, className }) {
  return (
    <header className={cn('flex items-center justify-between border-b border-slate-200/80 bg-white/80 px-4 py-3 backdrop-blur-md sm:px-6', className)}>
      <Link to="/dashboard" className="flex items-center gap-2 font-semibold tracking-tight" aria-label="Finovrr dashboard">
        <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
          <Landmark className="size-4" aria-hidden="true" />
        </span>
        <span>Finovrr</span>
      </Link>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </header>
  );
}
