import { Faq, Solutions, ContactForm } from "../components/Interactive";

const services = [
  { n: "01", h: "AI Automation & Intelligent Workflows", d: "Reduce repetitive work and connect your business processes with intelligent automation built around the way your team actually works.", l: ["AI Workflow Automation","AI Agents & Assistants","Lead Qualification Automation","CRM Automation","Customer Support Automation","n8n Integrations","API Integrations","Business Process Automation","Custom AI Solutions"], c: "Explore AI Automation →" },
  { n: "02", h: "SEO That Turns Search Into Growth", d: "Build sustainable organic visibility with a strategy that combines technical SEO, high-intent content, search architecture and measurable optimization.", l: ["Technical SEO","On-Page SEO","SEO Audits","Keyword Research","Content Strategy","Local SEO","Programmatic SEO","Core Web Vitals","Search Console Optimization"], c: "Grow Organic Traffic →" },
  { n: "03", h: "High-Performance Web Development", d: "We build fast, scalable and conversion-focused websites and web applications designed around your users, business goals and future growth.", l: ["Next.js Development","React Development","MERN Stack Development","Node.js APIs","Custom Web Applications","SaaS Development","PostgreSQL / MongoDB","Third-Party Integrations","Performance Optimization"], c: "Build Your Product →" },
  { n: "04", h: "AWS Cloud & Infrastructure", d: "Build and deploy reliable cloud infrastructure designed for performance, security and scalability — without unnecessary complexity.", l: ["AWS Cloud Deployment","EC2 Infrastructure","S3 Storage","CloudFront CDN","Route 53 & DNS","Nginx Configuration","CI/CD Pipelines","Cloud Migration","Performance Optimization","Infrastructure Management"], c: "Scale Your Infrastructure →" },
];

const solutions = [
  { t: "Lead Management", d: "Capture leads from your website, ads or forms, qualify them automatically, update your CRM and trigger personalized follow-ups.", flow: ["Lead","AI Qualification","CRM","Follow-up","Sales"] },
  { t: "Customer Support", d: "Create AI-assisted support systems that answer common questions, route complex requests and keep customer information synchronized.", flow: ["Customer","AI Support","Knowledge Base","Human Escalation"] },
  { t: "SEO Growth Engine", d: "Build a structured SEO system around technical performance, search intent, content opportunities and ongoing optimization.", flow: ["Research","Technical SEO","Content","Rankings","Leads"] },
  { t: "Cloud Application", d: "Design, develop and deploy production-ready web applications on scalable AWS infrastructure.", flow: ["Next.js","Node.js","Database","AWS","Monitoring"] },
];

const principles = [
  ["Business First", "Technology decisions start with the problem and expected outcome."],
  ["Built to Scale", "We design systems that can evolve as your users, data and operations grow."],
  ["Automation With Purpose", "We automate work where automation actually saves time, reduces friction or creates measurable value."],
  ["Clear Communication", "No unnecessary technical complexity. You understand what we're building and why."],
];

const steps = [
  ["Discover", "We understand your business, customers, workflows, existing technology and the problem you want to solve."],
  ["Architect", "We define the right strategy, technology stack, integrations, scope and measurable outcomes."],
  ["Build", "Our team develops, integrates and tests the solution with performance, usability and scalability in mind."],
  ["Launch & Improve", "We deploy, monitor and continuously improve the system using real-world performance and business data."],
];

const faqs = [
  { q: "What does NasCore Technologies do?", a: "NasCore Technologies provides AI automation, SEO, modern web development and AWS cloud services for businesses looking to improve operations, digital visibility and scalability." },
  { q: "What business processes can you automate?", a: "We can automate workflows such as lead capture, lead qualification, CRM updates, customer support, reporting, notifications, data synchronization and repetitive administrative processes. The exact solution depends on your existing workflow and tools." },
  { q: "Do you build custom AI automation solutions?", a: "Yes. We design custom AI-powered workflows, integrations, assistants and automation systems based on specific business requirements rather than forcing every business into the same template." },
  { q: "Do you provide MERN and Next.js development?", a: "Yes. We develop modern web applications using technologies including React, Next.js, Node.js, Express, MongoDB and PostgreSQL depending on the requirements of the project." },
  { q: "Can you deploy and manage applications on AWS?", a: "Yes. NasCore can help with AWS architecture and deployments involving services such as EC2, S3, CloudFront and Route 53, along with Nginx, DNS and deployment pipelines." },
  { q: "Can NasCore handle SEO and development together?", a: "Yes. Combining development and SEO allows technical improvements, website architecture, performance and search optimization to be considered together instead of being handled independently." },
];

const orgSchema = {
  "@context": "https://schema.org", "@type": "Organization", "@id": "https://nascoretech.com/#organization",
  name: "NasCore Technologies", url: "https://nascoretech.com", logo: "https://nascoretech.com/logo.png",
  description: "NasCore Technologies provides AI automation, SEO, web development and AWS cloud solutions for growing businesses.",
  knowsAbout: ["Artificial Intelligence","Business Process Automation","Search Engine Optimization","MERN Stack Development","Next.js Development","Amazon Web Services","Cloud Infrastructure"],
};
const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const ins = ["Leads","Customer Data","Manual Tasks","Website Traffic","Operations"];
const outs = ["Qualified Leads","Automated Workflows","Better Rankings","Scalable Systems","Actionable Data"];
const journey = ["Discovery: Google Search, Paid Traffic, Social, Referrals","SEO + Website","Lead / Customer","AI Automation","CRM / Database / APIs","AWS Cloud","Growth"];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="nav">
        <div className="nav-in">
          <a href="#top" className="logo" aria-label="NasCore Technologies home">
            <span>Nas<b>Core</b></span><small>Technologies</small>
          </a>
          <nav aria-label="Primary">
            {["Services","Solutions","About","Process","Contact"].map((n) => (<a key={n} href={`#${n.toLowerCase()}`}>{n}</a>))}
            <a href="#contact" className="btn primary nav-cta">Start a Project <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero dark">
          <div className="wrap hero-in">
            <div>
              {/* <p className="eyebrow dashed">AI · Automation · Development · Gr.owth</p> */}
              <h1>We Build Digital Systems <span>That Help Businesses Grow.</span></h1>
              <p className="lead">NasCore Technologies combines AI automation, SEO, MERN &amp; Next.js development, and AWS cloud solutions to help businesses automate repetitive work, build better digital products, improve search visibility, and scale with reliable technology.</p>
              <div className="cta-row">
                <a href="#contact" className="btn sand">Start Your Project <span aria-hidden="true">↗</span></a>
                <a href="#services" className="btn textlink">Explore Our Services <span aria-hidden="true">↓</span></a>
              </div>
              <p className="trust">Strategy. Development. Automation. Infrastructure. Growth.</p>
            </div>
            <div className="sys" aria-label="Diagram: business inputs flow through the NasCore core into outputs">
              <div className="sys-head"><span>The NasCore approach</span><span>Build. Automate. Optimize. Scale.</span></div>
              <div className="sys-box"><h4>Business input</h4>
                <div className="chips">{ins.map((t, i) => (<span key={t} className="chip in" style={{ animationDelay: `${i * 0.5}s` }}>{t}</span>))}</div></div>
              <div className="sys-line" />
              <div className="sys-core"><small>NasCore Core</small><strong>AI + Automation · Development · SEO · Cloud</strong></div>
              <div className="sys-line" />
              <div className="sys-box"><h4>Business output</h4>
                <div className="chips">{outs.map((t, i) => (<span key={t} className="chip out" style={{ animationDelay: `${i * 0.5 + 0.9}s` }}>{t}</span>))}</div></div>
            </div>
          </div>
        </section>

        <section id="services" className="sec">
          <div className="wrap">
            <p className="eyebrow cu">What we do</p>
            <h2>Technology Built Around Your Business</h2>
            <p className="sub">From customer acquisition to internal operations, we design and build technology that solves real business problems — not technology for technology&apos;s sake.</p>
            <div className="grid4">
              {services.map((s) => (
                <article key={s.n} className="card">
                  <span className="num">{s.n}</span>
                  <h3>{s.h}</h3><p>{s.d}</p>
                  <ul>{s.l.map((x) => <li key={x}>{x}</li>)}</ul>
                  <a href="#contact" className="link">{s.c}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec dark">
          <div className="wrap split">
            <div>
              <p className="eyebrow">One technology partner</p>
              <h2>Stop Managing Five Different Vendors</h2>
              <p className="lead">Your website, automation, search strategy and cloud infrastructure shouldn&apos;t operate as separate systems. NasCore brings them together.</p>
              <p className="lead">We design digital ecosystems where your marketing generates demand, your software captures it, automation processes it, and your infrastructure scales with it.</p>
            </div>
            <ol className="journey">{journey.map((j, i) => (<li key={j} style={{ animationDelay: `${i * 0.15}s` }}>{j}</li>))}</ol>
          </div>
        </section>

        <section id="solutions" className="sec alt">
          <div className="wrap">
            <p className="eyebrow cu">Solutions</p>
            <h2>What Can We Automate or Build For You?</h2>
            <Solutions items={solutions} />
          </div>
        </section>

        <section id="about" className="sec">
          <div className="wrap">
            <p className="eyebrow cu">About NasCore</p>
            <h2>Technology Should Solve Problems, Not Create New Ones</h2>
            <div className="about">
              <div>
                <p>NasCore Technologies is a technology and digital growth company helping businesses build, automate and scale.</p>
                <p>We work across AI automation, search engine optimization, modern web development and cloud infrastructure, allowing us to approach problems as complete systems rather than isolated tasks.</p>
                <p>Instead of recommending technology because it&apos;s trending, we start with the business problem, understand the workflow, and build the simplest effective solution around it.</p>
              </div>
              <div className="princ">{principles.map(([t, d]) => (<div key={t}><h3>{t}</h3><p>{d}</p></div>))}</div>
            </div>
          </div>
        </section>

        <section id="process" className="sec dark">
          <div className="wrap">
            <p className="eyebrow">How we work</p>
            <h2>From Idea to Working System</h2>
            <ol className="steps">{steps.map(([t, d], i) => (<li key={t}><span className="num sand">0{i + 1}</span><h3>{t}</h3><p>{d}</p></li>))}</ol>
          </div>
        </section>

        <section id="contact" className="sec alt">
          <div className="wrap split">
            <div>
              <p className="eyebrow cu">Have a project in mind?</p>
              <h2>Tell Us What&apos;s Slowing Your Business Down</h2>
              <p className="sub">Whether you need to automate a repetitive process, improve your Google visibility, build a custom web application or scale your cloud infrastructure — tell us what you&apos;re trying to achieve.</p>
              <p className="sub">We&apos;ll help you identify the right next step.</p>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="sec">
          <div className="wrap narrow">
            <h2>Frequently Asked Questions</h2>
            <Faq items={faqs} />
          </div>
        </section>
      </main>

      <footer className="dark foot">
        <div className="wrap foot-in">
          <div><div className="logo">Nas<b>Core</b> Technologies</div><p className="motto">Build. Automate. Optimize. Scale.</p><a href="mailto:hello@nascoretech.com">hello@nascoretech.com</a></div>
          <ul><li>AI Automation</li><li>SEO</li><li>Web Development</li><li>AWS Cloud</li></ul>
          <div className="legal"><p>© 2026 NasCore Technologies. All rights reserved.</p><p><a href="/privacy">Privacy Policy</a> • <a href="/terms">Terms</a> • <a href="https://linkedin.com">LinkedIn</a></p></div>
        </div>
      </footer>
    </>
  );
}
