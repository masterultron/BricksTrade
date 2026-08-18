import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Instagram, Linkedin, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const phone = String(form.get('phone') ?? '');
    const message = String(form.get('message') ?? '');
    const subject = encodeURIComponent(`New enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\n${message}`);
    window.location.href = `mailto:hello@aperture.studio?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <div className="bg-[hsl(var(--background))]">
      <section className="px-5 pb-24 pt-40 md:px-10 md:pb-36 md:pt-52">
        <div className="mx-auto max-w-[1400px]">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mono mb-10 text-[hsl(var(--secondary))]">Aperture / Contact</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="display max-w-5xl text-[clamp(5rem,13vw,12rem)] leading-[.78] tracking-[-.04em]">Let’s make<br /><em className="text-[hsl(var(--secondary))]">room.</em></motion.h1>
          <div className="mt-20 grid gap-16 border-t border-[hsl(var(--foreground)/.2)] pt-8 md:grid-cols-[.75fr_1.25fr] md:gap-28">
            <div className="space-y-10">
              <div><p className="mono mb-4 text-[hsl(var(--muted-foreground))]">General enquiries</p><a href="mailto:hello@aperture.studio" className="line-link text-xl" data-testid="link-email">hello@aperture.studio</a></div>
              <div><p className="mono mb-4 text-[hsl(var(--muted-foreground))]">Talk to a human</p><a href="tel:+12125550184" className="line-link text-xl" data-testid="link-phone">+1 212 555 0184</a></div>
              <div><p className="mono mb-4 text-[hsl(var(--muted-foreground))]">Follow along</p><div className="flex gap-5"><a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[hsl(var(--accent))]" data-testid="link-instagram"><Instagram size={20} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[hsl(var(--accent))]" data-testid="link-linkedin"><Linkedin size={20} /></a></div></div>
              <a href="https://maps.google.com/?q=18+Crosby+Street+New+York+NY" target="_blank" rel="noreferrer" className="group block overflow-hidden border border-[hsl(var(--foreground)/.18)] bg-[hsl(var(--muted))]" data-testid="link-office-map">
                <div className="relative h-44 overflow-hidden bg-[#b3b7a7]"><div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(30deg, transparent 48%, #6b766b 49%, #6b766b 51%, transparent 52%), linear-gradient(120deg, transparent 48%, #dfe0c9 49%, #dfe0c9 54%, transparent 55%)', backgroundSize: '80px 80px' }} /><div className="absolute left-[56%] top-[44%] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--foreground))] shadow-lg"><MapPin size={17} /></div><span className="absolute bottom-3 left-4 mono bg-[hsl(var(--background)/.85)] px-2 py-1 text-[hsl(var(--foreground))]">Open in Google Maps ↗</span></div>
                <div className="flex items-center justify-between p-4 text-sm"><span>18 Crosby Street<br />New York, NY 10013</span><ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              </a>
            </div>
            <div>
              <p className="mono mb-7 text-[hsl(var(--secondary))]">Tell us about the place</p>
               <AnimatePresence mode="wait">
                {!sent ? <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }} onSubmit={submit} className="space-y-8" data-testid="form-contact">
                  <label className="block"><span className="mono mb-3 block text-[hsl(var(--muted-foreground))]">Your name</span><input required name="name" placeholder="Name" className="w-full border-b border-[hsl(var(--foreground)/.3)] bg-transparent py-3 text-xl outline-none transition-colors placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--accent))]" data-testid="input-name" /></label>
                  <label className="block"><span className="mono mb-3 block text-[hsl(var(--muted-foreground))]">Phone number</span><input required type="tel" name="phone" placeholder="+1 212 555 0184" className="w-full border-b border-[hsl(var(--foreground)/.3)] bg-transparent py-3 text-xl outline-none transition-colors placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--accent))]" data-testid="input-phone" /></label>
                  <label className="block"><span className="mono mb-3 block text-[hsl(var(--muted-foreground))]">A few words</span><textarea required name="message" rows={4} placeholder="What are you thinking about?" className="w-full resize-none border-b border-[hsl(var(--foreground)/.3)] bg-transparent py-3 text-xl outline-none transition-colors placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--accent))]" data-testid="input-message" /></label>
                  <button type="submit" className="group mt-3 flex items-center gap-4 bg-[hsl(var(--primary))] px-6 py-4 text-xs uppercase tracking-[.16em] text-[hsl(var(--primary-foreground))] transition-colors hover:bg-[hsl(var(--secondary))]" data-testid="button-submit-contact">Send enquiry <Send size={15} className="transition-transform group-hover:translate-x-1" /></button>
                </motion.form> : <motion.div key="success" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="border border-[hsl(var(--secondary)/.35)] bg-[hsl(var(--muted))] p-8 md:p-12" data-testid="status-contact-success"><div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--accent))]"><Check size={22} /></div><p className="mono mb-5 text-[hsl(var(--secondary))]">Message received</p><h2 className="display text-5xl leading-none">We’ll be in touch<br /><em>shortly.</em></h2><p className="mt-7 max-w-sm text-sm leading-6 text-[hsl(var(--muted-foreground))]">Thank you for starting the conversation. Our studio usually replies within one working day.</p><button onClick={() => setSent(false)} className="mt-8 text-xs uppercase tracking-[.14em] underline underline-offset-4" data-testid="button-send-another">Send another message</button></motion.div>}
               </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[hsl(var(--secondary))] px-5 py-16 text-[hsl(var(--background))] md:px-10 md:py-20"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-5 md:flex-row md:items-center"><p className="display text-4xl md:text-5xl">Good places start with<br /><em className="text-[hsl(var(--accent))]">good questions.</em></p><div className="flex gap-8 text-sm opacity-80"><span className="flex items-center gap-2"><MapPin size={15} /> New York</span><span className="flex items-center gap-2"><Phone size={15} /> By appointment</span></div></div></section>
    </div>
  );
}