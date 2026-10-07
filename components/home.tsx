import Image from "next/image";
import { categories, galleryTiles, navigation, processSteps, socialLinks, type IconName } from "@/lib/site-data";

const colorClass: Record<string, string> = { lavender: "tone-lavender", pink: "tone-pink", mint: "tone-mint", yellow: "tone-yellow", cream: "tone-cream", plum: "tone-plum" };

export function Doodle({ name, className = "" }: { name: IconName; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
    {name === "sparkle" && <path {...common} d="M32 7c1.6 15.2 8.9 23 24 25-15.1 2-22.4 9.8-24 25-1.6-15.2-8.9-23-24-25 15.1-2 22.4-9.8 24-25Z" />}
    {name === "star" && <path {...common} d="m32 8 6.7 15.4L55 25l-12.3 11 3.6 16L32 43.7 17.7 52l3.6-16L9 25l16.3-1.6L32 8Z" />}
    {name === "moon" && <path {...common} d="M48.5 44.4A23.5 23.5 0 0 1 25.6 8.8 23.6 23.6 0 1 0 48.5 44.4Z" />}
    {name === "heart" && <path {...common} d="M32 52S10 40 10 24.5C10 15 22 11 32 21c10-10 22-6 22 3.5C54 40 32 52 32 52Z" />}
  </svg>;
}

function Logo({ compact = false }: { compact?: boolean }) {
  return <span className={`brand ${compact ? "brand-compact" : ""}`}><span className="brand-mark"><Doodle name="moon" /></span>{!compact && <span>Dreamy Sweets</span>}</span>;
}

export function Header() {
  return <header className="site-header">
    <a href="#top" aria-label="Dreamy Sweets home"><Logo /></a>
    <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map((item) => <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>{item.label}</a>)}</nav>
    <a className="pill button-yellow desktop-cta" href="#order">Dream Up an Order</a>
    <details className="mobile-menu"><summary aria-label="Open menu"><span /><span /><span /></summary><nav aria-label="Mobile navigation">{navigation.map((item) => <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>{item.label}</a>)}<a className="pill button-yellow" href="#order">Dream Up an Order</a></nav></details>
  </header>;
}

export function PlaceholderArtwork({ color, icon, image, alt = "" }: { color: string; icon: IconName; image?: string; alt?: string }) {
  return <div className={`placeholder-art ${colorClass[color]}`}>{image ? <Image src={image} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /> : <Doodle name={icon} />}</div>;
}

export function Hero() {
  return <section className="hero shell" id="top"><div className="hero-copy"><p className="eyebrow"><span>✦</span> Custom characters · French macarons · San Antonio</p><h1>Your sweetest<br />ideas, made edible.</h1><p className="hero-intro">Handcrafted French macarons in San Antonio, dreamed up for birthdays, celebrations, fandoms and everything worth making a little sweeter.</p><div className="hero-actions"><a className="pill button-plum" href="#order">Dream Up an Order</a><a className="text-link" href="#creations">See the Creations</a></div></div><div className="hero-collage" aria-label="Colorful placeholders for custom macaron photography"><div className="hero-card card-a tone-lavender"><Doodle name="sparkle" /></div><div className="hero-card card-b tone-pink"><Doodle name="moon" /></div><div className="hero-card card-c tone-yellow"><Doodle name="star" /></div><div className="hero-card card-d tone-mint"><Doodle name="sparkle" /></div><span className="sticker hero-sticker">One of a kind</span></div></section>;
}

export function Marquee() {
  const items = ["One of a kind", "Character macarons", "Custom creations", "San Antonio", "Handcrafted"];
  return <div className="marquee" aria-label="Dreamy Sweets specialties"><div className="marquee-track">{[...items, ...items].map((item, index) => <span key={`${item}-${index}`}>{index % 2 ? "☾" : "✦"} {item}</span>)}</div></div>;
}

export function CategoryCard({ item, index }: { item: (typeof categories)[number]; index: number }) {
  return <article className={`category-card ${colorClass[item.color]} ${item.featured ? "category-featured" : ""}`}><span className="sticker category-sticker">{item.label}</span><div className="category-art"><Doodle name={item.icon} /></div><div className="category-copy"><span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></div></article>;
}

export function CategorySection() { return <section className="section shell categories" id="popups"><h2>Pick your kind of dreamy.</h2><div className="category-grid">{categories.map((item, index) => <CategoryCard key={item.title} item={item} index={index} />)}</div></section>; }

export function GalleryTile({ tile }: { tile: (typeof galleryTiles)[number] }) { return <article className={`gallery-tile ${colorClass[tile.color]} ${tile.className}`}><Doodle name={tile.icon} />{tile.sticker && <span className={`sticker ${tile.position ?? ""}`}>{tile.sticker}</span>}</article>; }

export function GalleryGrid() { return <section className="gallery-section" id="creations"><div className="shell"><p className="eyebrow centered"><span>✦</span> A little look at what is possible</p><h2>The Macaron Multiverse</h2><div className="gallery-grid">{galleryTiles.map((tile, index) => <GalleryTile key={`${tile.color}-${index}`} tile={tile} />)}</div></div></section>; }

export function StorySection() {
  return <section className="section shell story" id="story"><div className="story-art"><PlaceholderArtwork color="mint" icon="heart" /><span className="sticker">A mom, a mixer, a dream</span></div><div className="story-copy"><p className="eyebrow"><span>✦</span> It started with one birthday wish.</p><p>Dreamy Sweets began when a mom went looking for custom macarons for her son’s birthday and could not find anyone making what she imagined. So she learned to make them herself.</p><p>What began as one idea became a San Antonio macaron studio built around creativity, family, faith and the joy of helping other people bring their own celebrations to life.</p><h2>Made with joy. Made with purpose. Made to be remembered.</h2></div></section>;
}

export function ProcessStep({ step }: { step: (typeof processSteps)[number] }) { return <article className="process-step"><div className={`process-icon ${colorClass[step.color]}`}><Doodle name={step.icon} /></div><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>; }

export function ProcessSection() { return <section className="section shell process"><p className="eyebrow centered"><span>✦</span> From idea to delicious</p><h2>You dream it. She makes it sweet.</h2><div className="process-grid">{processSteps.map((step) => <ProcessStep key={step.number} step={step} />)}</div></section>; }

export function CTASection() {
  return <section className="cta-section" id="order"><div className="float-card float-a tone-lavender"><Doodle name="star" /></div><div className="float-card float-b tone-mint"><Doodle name="moon" /></div><div className="float-card float-c tone-pink"><Doodle name="heart" /></div><div className="float-card float-d tone-yellow"><Doodle name="sparkle" /></div><div className="cta-copy"><p className="eyebrow centered"><span>✦</span> Let&apos;s make something unforgettable</p><h2>Got a wild idea? Good.</h2><p>Characters, colors, celebrations or something nobody has asked for before. That is where the fun starts.</p><a className="pill button-yellow" href="#order">Dream Up My Order</a><a className="cta-link" href={socialLinks.instagram} target="_blank" rel="noreferrer">See more on Instagram</a></div></section>;
}

export function Footer() { return <footer><Logo compact /><h2>Dreamy Sweets by Blondee</h2><p>Macaron Artist · San Antonio, Texas</p><a href={socialLinks.instagram} target="_blank" rel="noreferrer">Instagram: {socialLinks.handle}</a><hr /><p className="verse">“O, taste and see that the Lord is good.”</p></footer>; }
