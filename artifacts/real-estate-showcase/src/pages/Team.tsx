import { Reveal } from '@/components/Shell';
// import logoIcon from '@/images/logo-icon.png'
import logoOnly from '@/images/logo-only.png'
import dami from '@/images/dami.jpg';
import dami2 from '@/images/dami2.jpg';
import bash from '@/images/bash.jpg';
import mok from '@/images/mok.jpg';






interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [

  {
    name: "Okunlola Muyideen",
    role: "CEO",
    image: mok,
  },
  {
    name: "Oyeleke Bashiru ",
    role: "Creative Director / PM",
    image: bash,
  },
  // {
  //   name: "Team Member",
  //   role: "Principal Partner",
  //   image: "/images/hakeem-sheu.jpg",
  // },


  {
    name: "Usikalu Damilola",
    role: "Executive director",
    image: dami2,
  },

  {
    name: "Adeitan Damilola",
    role: "Managing director",
    image: dami,
  },
  
]

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60dvh] bg-primary flex items-center justify-center overflow-hidden">
        <img
          src= {logoOnly}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 m-auto h-[70%] w-auto opacity-[0.50] select-none"
        />
        <div className="relative z-10 max-w-2xl px-6 text-center">
          <Reveal>
            <p className="mono text-xs tracking-[0.2em] uppercase text-[hsl(var(--accent))] mb-4">
              BricksTrade / The People
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display text-4xl md:text-6xl text-white leading-tight">
              The people
              <br />
              behind the plan.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-white/70 text-base md:text-lg">
              The partners and associates who take every project from first
              sketch to final handover.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="mono text-xs tracking-[0.2em] uppercase text-[hsl(var(--accent))] mb-12">
              01 / Meet the team
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
  {team.map((member, i) => (
    <Reveal key={member.name + i} delay={i * 0.1}>
      <div>
        <div className="aspect-[4/3] overflow-hidden rounded-md bg-primary/5">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <h3 className="display text-3xl md:text-4xl mt-6">
          {member.name}
        </h3>
        <p className="mono text-sm text-muted-foreground mt-1">
          {member.role}
        </p>
      </div>
    </Reveal>
  ))}
</div>
        </div>
      </section>
    </>
  );
}