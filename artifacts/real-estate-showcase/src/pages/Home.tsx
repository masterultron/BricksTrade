import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, Pause, Play } from 'lucide-react';
import { Link } from 'wouter';
import { Reveal } from '@/components/Shell';
import gwarinpaHeights from '@/images/gwarinpa-heights.jpeg';
import guzapeCourt from '@/images/guzape-court.jpeg';
import jabiLakeviewTerraces from '@/images/jabi-lakeview-terraces.jpeg';
import sunCity from '@/images/suncity1.jpeg';
import sunCity2 from '@/images/suncity2.jpeg';
import sunCity3 from '@/images/suncity3.jpeg';
import karasana from '@/images/karsana.jpg'
import idu from '@/images/idu.jpg'
import gamev1 from '@/images/gamesvillage1.jpeg'
import gamwv2 from '@/images/gamesvillage2.jpeg'
import gamev3 from '@/images/gamesvillage3.jpeg'





const projects = [
  // { name: 'Gwarinpa Heights', place: 'Gwarinpa, Abuja', year: '2024', image: gwarinpaHeights },
  // { name: 'Guzape Court', place: 'Guzape, Abuja', year: '2023', image: guzapeCourt },
  // { name: 'Jabi Lakeview Terraces', place: 'Jabi, Abuja', year: '2022', image: jabiLakeviewTerraces },
  { name: 'Ventures Scape Estate', place: 'Karasana, Abuja', year: '2025', image: jabiLakeviewTerraces },
  // { name: 'Stallion Park', place: 'Idu Sabo, Abuja', year: '2025', image: idu },
  { name: 'Games Village Court', place: 'Games Village, Abuja', year: '2025', image: gamev1 },
  { name: 'Games Village Court', place: 'Games Village, Abuja', year: '2025', image: gamwv2 },
  { name: 'Stallion Park', place: 'Idu Sabo, Abuja', year: '2025', image: idu },
  { name: 'Games Village Court', place: 'Games Village, Abuja', year: '2025', image: gamev3 },

  // { name: 'Jabi Lakeview Terraces', place: 'Jabi, Abuja', year: '2022', image: jabiLakeviewTerraces },


  // { name: 'Sun City', place: 'Sun City Estate, Abuja', year: '2025', image: sunCity },
  // { name: 'Sun City', place: 'Sun City Estate, Abuja', year: '2025', image: sunCity2 },
  // { name: 'Sun City', place: 'Sun City Estate, Abuja', year: '2025', image: sunCity3 },


];
export default function Home() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % projects.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const project = projects[active];
  return (
    <div className="bg-[hsl(var(--background))]">
      <section className="relative flex min-h-[100dvh] items-end overflow-hidden bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
        <AnimatePresence mode="sync">
          <motion.img key={project.image} src={project.image} alt={`${project.name} architecture`} initial={{ opacity: 0, scale: 1.09 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.4, ease: 'easeInOut' }} className="absolute inset-0 h-full w-full object-cover object-center" />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(210_100%_12%/.82)_0%,hsl(210_100%_12%/.34)_55%,hsl(210_100%_12%/.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,hsl(210_100%_12%/.72),transparent_60%)]" />
        <div className="relative z-10 w-full px-5 pb-9 md:px-10 md:pb-12">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 flex items-end justify-between gap-6 md:mb-16">
              <div className="max-w-4xl">
                <motion.p key={`eyebrow-${active}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mono mb-5 text-[hsl(var(--accent))]">Featured residence / 0{active + 1}</motion.p>
                <motion.h1 key={`title-${active}`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="display text-[clamp(4.5rem,12vw,11rem)] leading-[.78] tracking-[-.035em]">{project.name}</motion.h1>
                <motion.div key={`place-${active}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }} className="mt-8 flex items-center gap-4 text-sm md:text-base"><span>{project.place}</span><span className="h-px w-9 bg-[hsl(var(--accent-orange))]" /><span>{project.year}</span></motion.div>
              </div>
              <div className="hidden pb-2 text-right md:block"><p className="mono mb-2 opacity-60">BricksTrade </p><p className="text-sm opacity-80">A considered approach<br />to lasting places in Nigeria.</p></div>
            </div>
            <div className="flex items-center justify-between border-t border-[hsl(var(--primary-foreground)/.35)] pt-5">
              <button onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-3 text-[10px] uppercase tracking-[.16em]" data-testid="button-scroll-intro">Scroll to explore <ArrowDown size={15} className="transition-transform group-hover:translate-y-1" /></button>
              <div className="flex items-center gap-5">
                <button onClick={() => setPaused(!paused)} className="flex items-center gap-2 text-[10px] uppercase tracking-[.16em] opacity-80 hover:opacity-100" data-testid="button-toggle-slideshow">{paused ? <Play size={13} /> : <Pause size={13} />} {paused ? 'Play' : 'Pause'}</button>
                <div className="flex gap-1.5">
                  {projects.map((item, index) => <button key={item.name} aria-label={`Show ${item.name}`} onClick={() => setActive(index)} className={`h-1 transition-all ${index === active ? 'w-12 bg-[hsl(var(--accent-orange))]' : 'w-5 bg-[hsl(var(--primary-foreground)/.4)]'}`} data-testid={`button-slide-${index + 1}`} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 md:block"><span className="vertical-label mono opacity-50">BricksTrade / 01 — 04</span></div>
      </section>

      <section id="intro" className="px-5 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[.7fr_1.3fr] md:gap-24">
          <Reveal><p className="mono text-[hsl(var(--accent))]">01 / The company</p></Reveal>
          <Reveal delay={.08}>
            <h2 className="display max-w-4xl text-5xl leading-[.94] tracking-[-.02em] md:text-8xl">Real estate is a <em className="text-[hsl(var(--accent-orange))]">long conversation</em> with a place.</h2>
            <p className="mt-10 max-w-xl text-base leading-7 text-[hsl(var(--muted-foreground))] md:text-lg">We partner with people who believe a building can do more than occupy land. BricksTrade is a property developer for considered homes, quiet hotels, and places that become part of the local memory.</p>
            <Link href="/about" className="group mt-9 inline-flex items-center gap-3 border-b border-[hsl(var(--foreground)/.35)] pb-2 text-xs font-semibold uppercase tracking-[.15em] hover:border-[hsl(var(--accent-orange))] hover:text-[hsl(var(--accent-orange))]" data-testid="link-discover-studio">Discover the company <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-[hsl(var(--primary))] px-5 py-20 text-[hsl(var(--primary-foreground))] md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex items-end justify-between"><p className="mono text-[hsl(var(--accent))]">02 / In focus</p><span className="mono opacity-60">Selected work / 2011—25</span></div>
          <div className="grid gap-8 md:grid-cols-[1.35fr_.65fr] md:items-end">
            <Reveal><div className="group overflow-hidden"><img src={gwarinpaHeights} alt="Gwarinpa Heights exterior" className="image-lift aspect-[1.25/1] w-full object-cover" /><div className="mt-5 flex items-start justify-between"><div><h3 className="display text-4xl">Gwarinpa Heights</h3><p className="mt-1 text-sm opacity-60">Gwarinpa, Abuja, Nigeria</p></div><span className="mono text-[hsl(var(--accent))]">01—04</span></div></div></Reveal>
            <Reveal delay={.12}><div className="md:pb-14"><p className="display max-w-xs text-4xl leading-[.98]">A room, a view, a life in balance.</p><p className="mt-6 max-w-xs text-sm leading-6 opacity-60">A terrace held close to its neighbors, finished in warm cream and quiet charcoal.</p><Link href="/about" className="group mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[.15em] text-[hsl(var(--accent-orange))]" data-testid="link-view-projects">View selected projects <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link></div></Reveal>
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-5 py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal><p className="mono mb-9 text-[hsl(var(--accent))]">03 / Our motto</p></Reveal>
        </div>
        
        {/* Infinite Marquee Animation Container */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            className="flex gap-16 pr-16"
            animate={{ x: [0, "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            <div className="flex items-center gap-6">
              <span className="display text-[clamp(5rem,15vw,14rem)] leading-none text-[hsl(var(--foreground)/.1)]">YOUR PROPERTY,</span>
              <span className="display text-[clamp(5rem,15vw,14rem)] leading-none text-[hsl(var(--accent-orange))]"> OUR COMMITMENT .</span>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="display text-[clamp(5rem,15vw,14rem)] leading-none text-[hsl(var(--foreground)/.1)]">YOUR PROPERTY,</span>
              <span className="display text-[clamp(5rem,15vw,14rem)] leading-none text-[hsl(var(--accent-orange))]"> OUR COMMITMENT .</span>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-[1400px] px-5 md:px-10 mt-12">
          <div className="flex justify-end">
            <p className="max-w-sm text-sm leading-6 text-[hsl(var(--muted-foreground))]">Not just a set of keys. A point of view, made tangible.</p>
          </div>
        </div>
      </section>
    </div>
  );
}