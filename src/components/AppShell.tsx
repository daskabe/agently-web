import * as Separator from '@radix-ui/react-separator';
import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../../assets/logo-128x128.png';
import { cn } from '../lib/utils';

type AppShellProps = {
  children: ReactNode;
};

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/docs', label: 'Docs' },
  { to: '/support', label: 'Support' },
];

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link to="/" className="brand-mark" aria-label="Agently home">
          <img src={logoImage} alt="Agently logo" className="brand-mark__icon" />
          <span className="brand-mark__wordmark">Agently</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn('site-nav__link', isActive && 'site-nav__link--active')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <Separator.Root className="site-separator" decorative orientation="horizontal" />

      <main>{children}</main>
    </div>
  );
}
