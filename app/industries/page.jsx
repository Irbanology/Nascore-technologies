import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
// import Footer from "../../components/Footer";
// import Header from "../../../components/Header";


export const metadata = {
    title: "Industries We Serve | NasCore Technologies",
    description:
        "Explore tailored AI automation, web development, SEO and AWS cloud solutions for real estate, healthcare, retail, SaaS and other industries.",
    alternates: { canonical: "https://nascoretech.com/industries" },
};

const industries = [
    { name: "Healthcare & Wellness", icon: "✳", label: "PATIENT-CENTERED SYSTEMS", description: "Reduce administrative friction and create more connected patient experiences with thoughtfully designed digital workflows.", services: ["Appointment workflows", "Patient portals", "Operational automation"] },
    { name: "IT & SaaS", icon: "⌘", label: "BUILT TO SCALE", description: "Build reliable digital products with modern web applications, integrations, cloud infrastructure and practical automation.", services: ["SaaS development", "API integrations", "Cloud infrastructure"] },
    { name: "Agriculture & Farming", icon: "❋", label: "SMARTER OPERATIONS", description: "Help agricultural businesses simplify inventory, supplier coordination, reporting and daily operations.", services: ["Farm management tools", "Inventory tracking", "Data dashboards"] },
    { name: "AI & Emerging Tech", icon: "✦", label: "INTELLIGENCE IN ACTION", description: "Turn useful AI ideas into tools that support teams, improve response times and reduce repetitive work.", services: ["AI assistants", "Workflow automation", "Custom AI integrations"] },
    { name: "Finance & Fintech", icon: "◈", label: "CONFIDENCE BY DESIGN", description: "Create efficient financial workflows and clear digital experiences with appropriate security controls in mind.", services: ["Client dashboards", "Process automation", "Platform development"] },
    { name: "E-commerce & Retail", icon: "▣", label: "COMMERCE THAT CONVERTS", description: "Connect storefronts, marketing and operations to make buying easier and support growing teams.", services: ["Online stores", "CRM integrations", "Conversion optimization"] },
    { name: "Education & EdTech", icon: "◇", label: "BETTER LEARNING TOOLS", description: "Build accessible learning platforms and simplify the administration that takes time away from teaching.", services: ["Learning portals", "Student dashboards", "Admissions automation"] },
    { name: "Real Estate", icon: "⌂", label: "CONNECTED PROPERTY JOURNEYS", description: "Improve property discovery, lead management and client communication with tailored digital experiences.", services: ["Property platforms", "Lead management", "Marketing automation"] },
    { name: "Logistics & Supply Chain", icon: "↗", label: "VISIBILITY AT EVERY STEP", description: "Improve operational visibility and simplify coordination with connected dashboards and automated processes.", services: ["Tracking dashboards", "Operations portals", "Workflow integrations"] },
    { name: "Manufacturing", icon: "⬡", label: "DIGITAL OPERATIONS", description: "Give teams better tools to monitor processes, organize data and reduce repetitive manual work.", services: ["Internal tools", "Reporting systems", "Process automation"] },
    { name: "Hospitality & Travel", icon: "✧", label: "SEAMLESS GUEST EXPERIENCES", description: "Simplify bookings, guest communication and service operations through connected digital systems.", services: ["Booking experiences", "Customer support AI", "Digital marketing"] },
    { name: "Professional Services", icon: "◎", label: "WORK SMARTER", description: "Help agencies, consultancies and service businesses improve client acquisition and delivery with practical technology.", services: ["Client portals", "CRM automation", "SEO & growth"] },
];

const capabilities = [
    { title: "AI & Automation", text: "Connect tools, automate routine work and free up your team for higher-value decisions.", href: "/services/ai-automation" },
    { title: "Web & Software", text: "Create fast, intuitive websites, portals and applications built around real business needs.", href: "/services/web-development" },
    { title: "Cloud & Infrastructure", text: "Deploy, optimize and maintain infrastructure with a practical AWS-first approach.", href: "/services/aws-cloud" },
    { title: "SEO & Digital Growth", text: "Improve discoverability, attract relevant visitors and turn attention into qualified enquiries.", href: "/services/seo" },
];

const steps = [
    { title: "Discover", body: "Understand your industry, objectives, users and operational challenges." },
    { title: "Design", body: "Map a focused solution with clear priorities and measurable outcomes." },
    { title: "Build", body: "Develop, integrate, test and launch with attention to quality." },
    { title: "Evolve", body: "Review performance and improve the solution as your needs change." },
];

export default function IndustriesPage() {
    return (
        <>
            <Header/>
            <main className="min-h-screen overflow-hidden bg-[#FBF7F4] text-[#303438] selection:bg-[#9A684D]/25">
                {/* Hero */}
                <section className="relative border-b border-[#303438]/10">
                    <div className="pointer-events-none absolute -right-28 top-0 h-80 w-80 rounded-full bg-[#9A684D]/10 blur-[100px]" aria-hidden="true" />
                    <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24">
                        <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[#9A684D]">Industries We Serve</p>
                        <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
                            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
                                Every industry.<br />
                                <span className="font-serif font-normal italic text-[#9A684D]">A smarter way</span> forward.
                            </h1>
                            <div className="lg:pb-2">
                                <p className="max-w-md text-base leading-8 text-[#303438]/75">
                                    From healthcare to agriculture, we design technology around the challenges that make your business unique, not the other way around.
                                </p>
                                <Link href="/#contact" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#303438] px-6 py-3.5 text-sm font-semibold text-[#FBF7F4] transition hover:bg-[#9A684D]">
                                    Discuss your project <ArrowUpRight size={17} />
                                </Link>
                            </div>
                        </div>
                        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-[#303438]/15 pt-6 text-xs text-[#303438]/65 sm:mt-20">
                            <span><strong className="mr-2 text-xl font-semibold text-[#303438]">12</strong> Industries</span>
                            <span><strong className="mr-2 text-xl font-semibold text-[#303438]">04</strong> Core capabilities</span>
                            <span className="ml-auto hidden uppercase tracking-[0.18em] md:block">Built for what comes next</span>
                        </div>
                    </div>
                </section>

                {/* Industries */}
                <section id="industry-expertise" className="scroll-mt-24 bg-[#303438] py-20 text-[#FBF7F4] sm:py-24">
                    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div>
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#FBF7F4]/70">Our Expertise</p>
                                <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Solutions for <span className="font-serif font-normal italic text-[#FBF7F4]">your world.</span></h2>
                            </div>
                            <p className="max-w-sm text-sm leading-7 text-[#FBF7F4]/75">Different challenges. Different opportunities. One partner focused on making technology work for you.</p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {industries.map((industry, index) => (
                                <article key={industry.name} className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-[#FBF7F4]/15 bg-[#FBF7F4] p-7 text-[#303438] transition duration-300 hover:-translate-y-1 hover:border-[#9A684D]/70 hover:shadow-xl sm:p-8">
                                    <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-[#9A684D]/10 blur-3xl transition group-hover:bg-[#9A684D]/20" aria-hidden="true" />
                                    <div className="relative flex items-start justify-between">
                                        <span className="text-xs font-medium tracking-[0.18em] text-[#303438]/60">{String(index + 1).padStart(2, "0")} / 12</span>
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#9A684D]/20 bg-[#9A684D]/10 text-2xl text-[#9A684D]" aria-hidden="true">{industry.icon}</span>
                                    </div>
                                    <div className="relative mt-9 flex-1">
                                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A684D]">{industry.label}</p>
                                        <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.03em]">{industry.name}</h3>
                                        <p className="mt-4 text-sm leading-7 text-[#303438]/75">{industry.description}</p>
                                    </div>
                                    <div className="relative mt-7 flex flex-wrap gap-2 border-t border-[#303438]/10 pt-5">
                                        {industry.services.map((service) => (
                                            <span key={service} className="rounded-full border border-[#9A684D]/25 bg-[#9A684D]/5 px-3 py-1.5 text-[11px] font-medium text-[#303438]/80">{service}</span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                        <p className="mt-9 text-center text-sm text-[#FBF7F4]/80">
                            Don't see your industry? <Link href="/#contact" className="font-semibold text-[#FBF7F4] underline decoration-[#FBF7F4]/50 underline-offset-4 hover:decoration-[#FBF7F4]">Let's discuss your requirements <ArrowUpRight size={14} className="inline" /></Link>
                        </p>
                    </div>
                </section>

                {/* Capabilities */}
                <section id="capabilities" className="scroll-mt-24 bg-[#FBF7F4] py-20 sm:py-24">
                    <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
                        <div>
                            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#9A684D]">What We Bring</p>
                            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Expertise that <span className="font-serif font-normal italic text-[#9A684D]">moves business.</span></h2>
                            <p className="mt-6 max-w-sm text-sm leading-8 text-[#303438]/75">We combine technical execution with business understanding to create solutions that fit your goals, your team and your customers.</p>
                            <Link href="/#services" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#9A684D] transition hover:text-[#303438]">Explore our services <ArrowUpRight size={17} /></Link>
                        </div>
                        <div className="border-t border-[#303438]/15">
                            {capabilities.map((item, index) => (
                                <Link key={item.title} href={item.href} className="group grid grid-cols-[36px_1fr_20px] gap-4 border-b border-[#303438]/15 py-7 transition hover:bg-[#9A684D]/5 sm:grid-cols-[48px_1fr_20px] sm:py-8">
                                    <span className="pt-1 text-xs font-semibold text-[#9A684D]">{String(index + 1).padStart(2, "0")}</span>
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h3>
                                        <p className="mt-2 max-w-lg text-sm leading-7 text-[#303438]/70">{item.text}</p>
                                    </div>
                                    <ArrowUpRight size={18} className="mt-1 text-[#9A684D] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="border-y border-[#303438]/10 bg-[#9A684D]/10 py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#9A684D]">How We Work</p>
                        <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A clear path from <span className="font-serif font-normal italic text-[#9A684D]">idea to impact.</span></h2>
                        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {steps.map((step, index) => (
                                <div key={step.title} className="border-t-2 border-[#9A684D]/60 pt-5">
                                    <span className="text-sm font-bold text-[#9A684D]">{String(index + 1).padStart(2, "0")}</span>
                                    <h3 className="mt-7 text-2xl font-semibold">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-[#303438]/75">{step.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-[#FBF7F4] py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                        <div className="relative overflow-hidden rounded-3xl bg-[#303438] px-7 py-14 text-[#FBF7F4] sm:px-14 sm:py-20">
                            <div className="pointer-events-none absolute -right-28 -top-40 h-[450px] w-[450px] rounded-full border-[70px] border-[#9A684D]/20" aria-hidden="true" />
                            <p className="relative mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[#FBF7F4]/70">Let's Build What's Next</p>
                            <div className="relative flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
                                <div>
                                    <h2 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-[-0.05em] sm:text-6xl">Your industry is evolving.<br /><span className="font-serif font-normal italic text-[#FBF7F4]">Let's move ahead.</span></h2>
                                    <p className="mt-6 max-w-xl text-sm leading-7 text-[#FBF7F4]/75">Tell us what you're trying to solve. We'll help you identify a practical next step, from first idea to implementation.</p>
                                </div>
                                <Link href="/#contact" className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#FBF7F4] px-7 py-4 text-sm font-semibold text-[#303438] transition hover:bg-[#9A684D] hover:text-[#FBF7F4] lg:self-auto">Start a conversation <ArrowUpRight size={17} /></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
