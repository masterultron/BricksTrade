import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  
  // Smart Scroll State
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smart Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background blur if scrolled past 50px
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide navbar if scrolling down past 100px, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Route change listener (Smooth scroll to top on navigation)
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Manual click handler (Forces smooth scroll & menu close even if on the same page)
  const handleNavClick = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="noise min-h-[100dvh] overflow-hidden">
      <header 
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ease-in-out px-5 md:px-10 ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled
            ? 'bg-[hsl(var(--background))]/80 backdrop-blur-md py-4 shadow-sm'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" onClick={handleNavClick} className="group flex items-center gap-3" data-testid="link-logo">
            <span className="flex h-9 w-9 items-center justify-center border border-[hsl(var(--accent))] text-[hsl(var(--accent))] transition-transform duration-500 group-hover:rotate-45">
              <span className="-rotate-45 display text-xl group-hover:rotate-0 transition-transform duration-500">A</span>
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[.26em] text-[hsl(var(--foreground))] sm:block">Brickstrade<br /><span className="text-[hsl(var(--muted-foreground))]">Property Developer</span></span>
          </Link>
          
          <div className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={handleNavClick}
                className={`line-link mono transition-colors ${location === item.href ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--foreground))]'}`} 
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={handleNavClick}
              className="group flex items-center gap-2 border border-[hsl(var(--foreground)/.35)] px-4 py-2.5 text-[10px] uppercase tracking-[.16em] transition-colors hover:border-[hsl(var(--accent-orange))] hover:text-[hsl(var(--accent-orange))]" 
              data-testid="link-enquire"
            >
              Enquire <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button onClick={() => setOpen(true)} className="flex items-center gap-2 border border-[hsl(var(--foreground)/.3)] px-3 py-2 text-[10px] uppercase tracking-[.15em] md:hidden" data-testid="button-open-menu">
            Menu <Menu size={15} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex flex-col justify-between bg-[hsl(var(--primary))] p-6 text-[hsl(var(--primary-foreground))]">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={handleNavClick} className="display text-2xl" data-testid="link-mobile-logo">BricksTrade<span className="text-[hsl(var(--accent))]">.</span></Link>
              <button onClick={() => setOpen(false)} className="border border-[hsl(var(--primary-foreground)/.25)] p-3" data-testid="button-close-menu"><X size={20} /></button>
            </div>
            <nav className="flex flex-col gap-5">
              {navItems.map((item, index) => (
                <motion.div key={item.href} initial={{ x: -25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * .08 }}>
                  <Link 
                    href={item.href} 
                    onClick={handleNavClick}
                    className="display text-6xl leading-none sm:text-8xl" 
                    data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}<span className="text-[hsl(var(--accent-orange))]">.</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex justify-between border-t border-[hsl(var(--primary-foreground)/.2)] pt-5">
              <span className="mono opacity-60">Abuja · Lagos · Everywhere</span>
              <span className="mono text-[hsl(var(--accent))]">Est. 2011</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  const handleFooterNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[hsl(var(--primary))] px-5 py-14 text-[hsl(var(--primary-foreground))] md:px-10 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.7fr_.7fr]">
          <div>
            <p className="mono mb-6 text-[hsl(var(--accent))]">BricksTrade / Property Developer</p>
            <h2 className="display max-w-xl text-5xl leading-[.95] md:text-7xl">Places with a point of view.</h2>
          </div>
          <div>
            <p className="mono mb-5 opacity-50">Navigate</p>
            <div className="flex flex-col items-start gap-3 text-sm">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={handleFooterNavClick}
                  className="line-link opacity-80 hover:opacity-100 hover:text-[hsl(var(--accent-orange))]" 
                  data-testid={`link-footer-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mono mb-5 opacity-50">Find us</p>
            <p className="max-w-[190px] text-sm leading-6 opacity-80">Plot 18, 3rd Avenue<br />Gwarinpa, Abuja, Nigeria</p>
            <a href="mailto:hello@brickstrade.studio" className="line-link mt-4 inline-block text-sm opacity-80 hover:opacity-100" data-testid="link-footer-email">hello@brickstarde.studio</a>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[hsl(var(--primary-foreground)/.18)] pt-5 text-[10px] uppercase tracking-[.12em] opacity-50 md:flex-row">
          <span>© 2026 TheAbdurrahaman </span><span>BricksTrade Property Developer</span><span>Built for the long view</span>
        </div>
      </div>
    </footer>
  );
}

export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .8, delay, ease: [.22, 1, .36, 1] }} className={className}>{children}</motion.div>;
}