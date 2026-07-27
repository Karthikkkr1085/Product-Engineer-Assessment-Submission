import { LayoutDashboard, PlusCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const defaultItems = [
  { label: 'Overview', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Apply for a loan', to: '/apply', icon: PlusCircle },
];

export default function Sidebar({ items = defaultItems, className }) {
  return (
    <nav aria-label="Primary navigation" className={cn('flex flex-col gap-1 p-3', className)}>
      {items.map(({ label, to, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
            isActive && 'bg-muted text-foreground',
          )}
        >
          <Icon className="size-4" aria-hidden="true" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
