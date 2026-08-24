import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MoveDown } from 'lucide-react';
import { Link } from 'wouter';
import { Reveal } from '@/components/Shell';
import gwarinpaHeights from '@/images/gwarinpa-heights.jpeg';
import guzapeCourt from '@/images/guzape-court.jpeg';
import jabiLakeviewTerraces from '@/images/jabi-lakeview-terraces.jpeg';


const portfolio = [
  { title: 'Gwarinpa Heights', type: 'Terrace residences', place: 'Gwarinpa, Abuja', image: gwarinpaHeights, size: 'large' },
  { title: 'Guzape Court', type: 'Urban residences', place: 'Guzape, Abuja', image: guzapeCourt, size: 'small' },
  { title: 'Jabi Lakeview Terraces', type: 'Terrace residences', place: 'Jabi, Abuja', image: jabiLakeviewTerraces, size: 'small' },
];

export default function About() {
  const { scrollYProgress } = useScroll();
  const introY = useTransform(scrollYProgress, [0, .3], [0, -90]);
  return (
    <div className="bg-[hsl(var(--background))]">
      <section className="relative min-h-[88dvh] overflow-hidden bg-[hsl(var(--primary))] px-5 pb-16 pt-40 text-[hsl(var(--primary-foreground))] md:px-10 md:pb-24 md:pt-52">
        <div className="absolute right-0 top-0 h-full w-[43%] overflow-hidden opacity-50"><motion.img style={{ y: introY }} src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Brutalist concrete facade" className="h-[115%] w-full object-cover grayscale" /><div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(210_100%_12%),transparent)]" /></div>
        <div className="relative mx-auto max-w-[1400px]">
          <Reveal><p className="mono mb-10 text-[hsl(var(--accent))]">BricksTrade / The Developer</p></Reveal>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="display max-w-4xl text-[clamp(5rem,13vw,12rem)] leading-[.78] tracking-[-.04em]">The long<br /><em className="text-[hsl(var(--accent))]">view.</em></motion.h1>
          <div className="mt-16 flex items-end justify-between md:mt-24"><p className="max-w-sm text-sm leading-6 opacity-65">An independent property developer working at the intersection of architecture, landscape, and everyday life.</p><a href="#story" className="hidden items-center gap-3 text-[10px] uppercase tracking-[.15em] opacity-70 md:flex" data-testid="link-scroll-story">Our story <MoveDown size={15} /></a></div>
        </div>
      </section>

      <section id="story" className="px-5 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[.65fr_1.35fr] md:gap-28">
          <Reveal><p className="mono text-[hsl(var(--accent))]">01 / Why we exist</p></Reveal>
          <Reveal delay={.1}><h2 className="display max-w-4xl text-5xl leading-[.95] md:text-8xl">We make places that <em className="text-[hsl(var(--accent-orange))]">hold their value</em> in more ways than one.</h2><p className="mt-10 max-w-2xl text-base leading-7 text-[hsl(var(--muted-foreground))] md:text-lg">BricksTrade was founded in Abuja by a small group of architects, developers, realtors and listeners. We were tired of the distance between a beautiful drawing and a meaningful address. So we built properties that keeps the two in conversation.</p></Reveal>
        </div>
      </section>

      <section className="bg-[hsl(var(--muted))] px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal><div className="mb-16 flex items-end justify-between"><p className="mono text-[hsl(var(--accent))]">02 / The work</p><span className="mono text-[hsl(var(--muted-foreground))]">{portfolio.length} place{portfolio.length !== 1 ? 's' : ''}, one point of view</span></div></Reveal>
          <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">
            {portfolio.map((item, index) => (
              <Reveal key={item.title} delay={index % 2 ? .1 : 0} className={item.size === 'large' ? 'md:row-span-2' : ''}>
                <article className="group">
                  <div className={`relative overflow-hidden ${item.size === 'large' ? 'aspect-[.83/1]' : 'aspect-[1.28/1]'}`}>
                    <img src={item.image} alt={`${item.title} project`} className="image-lift h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,hsl(210_100%_12%/.7),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-[hsl(var(--accent-orange))] text-[hsl(var(--accent-orange-foreground))] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"><ArrowUpRight size={17} /></span>
                  </div>
                  <div className="mt-5 flex items-start justify-between border-t border-[hsl(var(--foreground)/.16)] pt-4"><div><h3 className="display text-3xl">{item.title}</h3><p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">{item.type} · {item.place}</p></div><span className="mono text-[hsl(var(--accent))]">0{index + 1}</span></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1400px]">
          <Reveal><p className="mono mb-14 text-[hsl(var(--accent))]">03 / A way of working</p></Reveal>
          <div className="grid border-t border-[hsl(var(--foreground)/.2)] md:grid-cols-3">
            {[
              ['01', 'Start with listening', 'Every project begins with the specifics: the light, the neighborhood, the people who will wake up there.'],
              ['02', 'Make less, mean more', 'We edit relentlessly. Material, proportion, and time are the only luxuries worth keeping.'],
              ['03', 'Stay for the long view', 'We build relationships that outlast a transaction, returning to our places as they become themselves.'],
            ].map(([number, title, copy], index) => <Reveal key={number} delay={index * .08} className="border-b border-[hsl(var(--foreground)/.2)] py-7 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><span className="mono text-[hsl(var(--accent))]">{number}</span><h3 className="display mt-12 text-4xl">{title}</h3><p className="mt-5 max-w-xs text-sm leading-6 text-[hsl(var(--muted-foreground))]">{copy}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-[hsl(var(--accent))] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="mono mb-6 opacity-70">04 / Continue the conversation</p><h2 className="display max-w-2xl text-6xl leading-[.85] text-[hsl(var(--foreground))] md:text-8xl">Have a place<br />in mind?</h2></div><Link href="/contact" className="group flex items-center gap-3 border-b border-[hsl(var(--foreground)/.55)] pb-2 text-xs uppercase tracking-[.15em]" data-testid="link-about-contact">Start a conversation <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div>
      </section>
    </div>
  );
}