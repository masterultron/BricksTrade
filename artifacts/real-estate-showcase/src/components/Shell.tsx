import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location]);

  return (
    <div className="noise min-h-[100dvh] overflow-hidden">
      <header className="fixed left-0 right-0 top-0 z-40 px-5 py-5 md:px-10 md:py-7">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3" data-testid="link-logo">
            <span className="flex h-9 w-9 items-center justify-center border border-[hsl(var(--accent))] text-[hsl(var(--accent))] transition-transform duration-500 group-hover:rotate-45">
              <span className="-rotate-45 display text-xl group-hover:rotate-0 transition-transform duration-500">A</span>
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[.26em] text-[hsl(var(--foreground))] sm:block">Aperture<br /><span className="text-[hsl(var(--muted-foreground))]">Property Studio</span></span>
          </Link>
          <div className="hidden items-center gap-9 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`line-link mono transition-colors ${location === item.href ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--foreground))]'}`} data-testid={`link-nav-${item.label.toLowerCase()}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="group flex items-center gap-2 border border-[hsl(var(--foreground)/.35)] px-4 py-2.5 text-[10px] uppercase tracking-[.16em] transition-colors hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))]" data-testid="link-enquire">
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
              <Link href="/" className="display text-2xl" data-testid="link-mobile-logo">Aperture<span className="text-[hsl(var(--accent))]">.</span></Link>
              <button onClick={() => setOpen(false)} className="border border-[hsl(var(--primary-foreground)/.25)] p-3" data-testid="button-close-menu"><X size={20} /></button>
            </div>
            <nav className="flex flex-col gap-5">
              {navItems.map((item, index) => (
                <motion.div key={item.href} initial={{ x: -25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * .08 }}>
                  <Link href={item.href} className="display text-6xl leading-none sm:text-8xl" data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}>{item.label}<span className="text-[hsl(var(--accent))]">.</span></Link>
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
  return (
    <footer className="bg-[hsl(var(--primary))] px-5 py-14 text-[hsl(var(--primary-foreground))] md:px-10 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.7fr_.7fr]">
          <div>
            <p className="mono mb-6 text-[hsl(var(--accent))]">Aperture / Property Studio</p>
            <h2 className="display max-w-xl text-5xl leading-[.95] md:text-7xl">Places with a point of view.</h2>
          </div>
          <div>
            <p className="mono mb-5 opacity-50">Navigate</p>
            <div className="flex flex-col items-start gap-3 text-sm">
              {navItems.map((item) => <Link key={item.href} href={item.href} className="line-link opacity-80 hover:opacity-100" data-testid={`link-footer-${item.label.toLowerCase()}`}>{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="mono mb-5 opacity-50">Find us</p>
            <p className="max-w-[190px] text-sm leading-6 opacity-80">Plot 18, 3rd Avenue<br />Gwarinpa, Abuja, Nigeria</p>
            <a href="mailto:hello@aperture.studio" className="line-link mt-4 inline-block text-sm opacity-80 hover:opacity-100" data-testid="link-footer-email">hello@aperture.studio</a>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[hsl(var(--primary-foreground)/.18)] pt-5 text-[10px] uppercase tracking-[.12em] opacity-50 md:flex-row">
          <span>© 2025 Aperture Property Studio</span><span>Built for the long view</span><span>Privacy / Terms</span>
        </div>
      </div>
    </footer>
  );
}

export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .8, delay, ease: [.22, 1, .36, 1] }} className={className}>{children}</motion.div>;
}
