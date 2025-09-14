"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Rocket, BarChart3, Presentation, Share2, Mail, Calendar, ArrowRight, Linkedin, Send } from "lucide-react";

// =============================
// QUICK CONFIG — EDIT THESE
// =============================
const SITE = {
  name: "Gian Calixto",
  role: "Web3 Advisor",
  tagline: "Tokenomics • Partnerships • Pitch Decks • Lead Gen (International)",
  email: "iamgiancalixto@gmail.com", 
  telegram: "https://t.me/GianCalixto", 
  linkedin: "https://www.linkedin.com/in/giancalixto/",
  twitter: "https://x.com/0xCalix", 
  calendly: "https://calendly.com/iamgiancalixto/30min", 
  location: "Global • Remote",
};

// Reusable button
function Button({ href, onClick, children, icon: Icon, variant = "primary" }) {
  const cls =
    variant === "primary"
      ? "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition border border-black/5 bg-black text-white"
      : "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition border border-black/10 hover:border-black/20 bg-white text-black";
  const content = (
    <span className="inline-flex items-center gap-2">
      {Icon ? <Icon size={18} /> : null}
      {children}
    </span>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls} onClick={onClick}>
      {content}
    </a>
  ) : (
    <button className={cls} onClick={onClick}>
      {content}
    </button>
  );
}

// Badge chip
function Chip({ children }) {
  return (
    <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-black/80 backdrop-blur">
      {children}
    </span>
  );
}

// Section wrapper
function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="mb-8">
        {eyebrow && (
          <div className="mb-2 text-xs uppercase tracking-widest text-black/50">{eyebrow}</div>
        )}
        {title && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        )}
        {subtitle && (
          <p className="mt-2 max-w-3xl text-black/70 leading-relaxed">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}

export default function Page() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-black text-white grid place-items-center font-bold">G</div>
            <div>
              <div className="text-sm font-semibold leading-none">{SITE.name}</div>
              <div className="text-xs text-black/60 leading-none">{SITE.role}</div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a className="hover:opacity-70" href="#services">Services</a>
            <a className="hover:opacity-70" href="#cases">Case Studies</a>
            <a className="hover:opacity-70" href="#process">Process</a>
            <a className="hover:opacity-70" href="#about">About</a>
            <a className="hover:opacity-70" href="#contact">Contact</a>
          </nav>
          <div className="hidden md:block">
            <Button href={SITE.calendly} icon={Calendar}>Book an intro</Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-70">
          <div className="mx-auto h-[420px] max-w-6xl translate-y-10 rounded-3xl bg-gradient-to-r from-indigo-100 via-teal-100 to-rose-100 blur-2xl" />
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-5 py-16 sm:py-24 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            >
              Partnerships, Tokenomics & Decks that convert — with <strong>lead gen</strong> built in.
            </motion.h1>
            <p className="mt-4 text-base sm:text-lg text-black/70 max-w-xl">
              I advise Web3 teams globally on <strong>token models</strong>, <strong>partner strategy</strong>,
              <strong> exchange listings</strong>, and <strong>multi‑channel outreach</strong> (email • LinkedIn • Telegram).
              Clean execution, measurable KPIs, and zero hype.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={SITE.calendly} icon={Calendar}>Book an intro</Button>
              <Button href={`mailto:${SITE.email}`} icon={Mail} variant="ghost">Email me</Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Chip>Exchanges</Chip>
              <Chip>Market Makers</Chip>
              <Chip>VCs & Angels</Chip>
              <Chip>Launchpads</Chip>
              <Chip>Marketing Agencies</Chip>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <Stat kpi="Lead Gen" v="[N–M] meetings/mo"/>
              <Stat kpi="Listings" v="CEX + DEX v3"/>
              <Stat kpi="Spread target" v="≤ 0.6%"/>
              <Stat kpi="Depth @±2%" v="$[XX]k"/>
            </div>
            <p className="mt-4 text-sm text-black/60">
              Replace placeholders with your metrics. Use ranges if NDAs apply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <Section
        id="services"
        eyebrow="What I do"
        title="Services & Packages"
        subtitle="Fixed-scope sprints or fractional advisory. Global, remote, and KPI-driven."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Service
            icon={BarChart3}
            title="Tokenomics Advisory"
            points={["Utility mapping", "Emissions & vesting", "Incentives & sustainability"]}
          />
          <Service
            icon={Rocket}
            title="Listings & Liquidity"
            points={["Exchange shortlists", "MM RFPs & KPIs", "DEX v3 blueprints"]}
          />
          <Service
            icon={Presentation}
            title="Pitch Decks"
            points={["Narrative & metrics", "Story-market fit", "Investor‑ready data room"]}
          />
          <Service
            icon={Share2}
            title="Lead Gen & Outreach"
            points={["ICPs & lists", "Email/LinkedIn/Telegram", "Deliverability & CRM"]}
          />
        </div>

        {/* Packages */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Package
            name="Readiness Audit"
            desc="1–2 weeks. Scorecard across tokenomics, partners, listings, and outbound. Quick wins + risks."
          />
          <Package
            name="Strategy Sprint"
            desc="3–4 weeks. Listings roadmap, MM RFP, DEX v3 plan, deck tune‑up, outbound sequences, KPI dashboard."
          />
          <Package
            name="Fractional Advisor"
            desc="Monthly. 2–4 calls, async reviews, warm intros, KPI tracking; launch‑week support as needed."
          />
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section
        id="cases"
        eyebrow="Selected Work"
        title="Mini Case Studies"
        subtitle="Swap in your metrics; keep them concise and outcome‑led."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <CaseStudy
            title="Listings & Liquidity"
            context="Pre‑listing token (multi‑chain)"
            actions={["Exchange shortlist + MM RFP", "Pancake/Uni v3 plan", "Launch‑week KPIs"]}
            outcomes={["Spread ≤ 0.6%", "$[XX]k depth @±2%", "[Xk] signups"]}
          />
          <CaseStudy
            title="Partnerships via Network"
            context="Infra + wallet partners"
            actions={["Warm intros", "Co‑marketing + affiliates", "UTM tracking"]}
            outcomes={["[XM] impressions", "[Xk] high‑intent visits", "[X%] signup→stake"]}
          />
          <CaseStudy
            title="Tokenomics Tune‑up"
            context="Emissions vs. runway"
            actions={["Utility hooks", "Vesting & emissions revamp", "LP incentives"]}
            outcomes={["Emissions ↓ [X%]", "TVL ↑ [X%]", "Holder churn ↓ [X%]"]}
          />
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        id="process"
        eyebrow="How we work"
        title="Simple, accountable process"
      >
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            ["Audit", "Understand product, token, traction, risks"],
            ["Blueprint", "Listings, token model, partner map, outbound"],
            ["Execute", "Intros, RFPs, sequences, creator pods"],
            ["Measure", "Spreads, ±2% depth, meetings, MAUs"],
          ].map(([t, d], i) => (
            <li key={i} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
              <div className="text-xs text-black/50">Step {i + 1}</div>
              <div className="mt-1 text-lg font-semibold">{t}</div>
              <p className="mt-1 text-sm text-black/70">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="About"
        title="International advisor with a practical network"
        subtitle={`${SITE.name} helps founders connect with market makers, exchanges, VCs/angels, launchpads, and agencies—then turns those relationships into measurable traction.`}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm md:col-span-2">
            <p className="text-black/80">
              I bridge product, growth, and capital: structuring listing & liquidity readiness (CEX/DEX), coordinating market‑maker RFPs,
              drafting DEX v3 liquidity blueprints, and running multi‑channel outreach with clear KPIs. I care about compliance and clean
              execution—no manipulative trading. Dashboards track spreads, ±2% depth, quoting uptime, and partner conversions.
            </p>
            <p className="mt-3 text-black/70">
              Engagements are fixed‑scope sprints or fractional advisory. Fully remote and global.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold">Quick facts</div>
            <ul className="mt-2 space-y-2 text-sm text-black/70">
              <li>Location: {SITE.location}</li>
              <li>Focus: Tokenomics • Partnerships • Listings • Lead Gen</li>
              <li>Channels: Email • LinkedIn • Telegram</li>
              <li>Tools: HubSpot/Notion • Apollo/Clay • Instantly/Lemlist</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Let’s talk" title="Book a 20‑minute intro">
        <div className="flex flex-wrap items-center gap-3">
          <Button href={SITE.calendly} icon={Calendar}>Book on Calendly</Button>
          <Button href={`mailto:${SITE.email}`} icon={Mail} variant="ghost">Email</Button>
          <Button href={SITE.linkedin} icon={Linkedin} variant="ghost">LinkedIn</Button>
          {SITE.telegram && <Button href={SITE.telegram} icon={Send} variant="ghost">Telegram</Button>}
        </div>
        <p className="mt-3 text-sm text-black/60">Replace the contact links in the config at the top of the file.</p>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 text-sm text-black/60">
          <div>© {year} {SITE.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:opacity-70" href="#services">Services</a>
            <a className="hover:opacity-70" href="#cases">Work</a>
            <a className="hover:opacity-70" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Service({ icon: Icon, title, points }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white">
          <Icon size={18} />
        </div>
        <div className="text-base font-semibold">{title}</div>
      </div>
      <ul className="mt-3 space-y-1 text-sm text-black/70">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <ArrowRight size={14} className="mt-1" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Package({ name, desc }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="text-base font-semibold">{name}</div>
      <p className="mt-2 text-sm text-black/70">{desc}</p>
    </div>
  );
}

function CaseStudy({ title, context, actions, outcomes }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-1 text-sm text-black/60">{context}</p>
      <div className="mt-3 grid grid-cols-1 gap-3">
        <div>
          <div className="text-xs uppercase tracking-wide text-black/50">Actions</div>
          <ul className="mt-1 list-disc pl-5 text-sm text-black/70">
            {actions.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-black/50">Outcomes</div>
          <ul className="mt-1 list-disc pl-5 text-sm text-black/70">
            {outcomes.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Stat({ kpi, v }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-black/50">{kpi}</div>
      <div className="mt-1 text-xl font-semibold">{v}</div>
    </div>
  );
}
