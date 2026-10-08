"use client";
import { useState } from "react";

export function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return <div className="divide-y divide-nas-border border-y border-nas-border">{items.map((it, i) => <div key={it.q} className="py-2"><button className="flex w-full items-center justify-between gap-6 py-5 text-left" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><h3 className="text-lg font-bold">{it.q}</h3><span className="text-2xl text-nas-copper">{open === i ? "−" : "+"}</span></button>{open === i && <p className="max-w-3xl pb-6 text-nas-muted">{it.a}</p>}</div>)}</div>;
}

export function Solutions({ items }) {
  const [active, setActive] = useState(0);
  return <div className="mt-10 overflow-hidden rounded-xl border border-nas-border bg-white"><div className="flex overflow-x-auto border-b border-nas-border">{items.map((s, i) => <button key={s.t} onClick={() => setActive(i)} className={`min-w-max px-5 py-4 text-sm font-bold transition ${active === i ? "bg-nas-charcoal text-white" : "text-nas-muted hover:bg-nas-soft"}`}>{s.t}</button>)}</div><div className="grid gap-8 p-6 md:grid-cols-[.8fr_1.2fr] md:p-8"><p className="text-lg leading-8 text-nas-muted">{items[active].d}</p><ol className="grid gap-3 sm:grid-cols-2">{items[active].flow.map((f, i) => <li key={f} className="rounded-lg border border-nas-border bg-nas-cream p-4 text-sm font-semibold"><span className="mr-2 text-nas-copper">0{i + 1}</span>{f}</li>)}</ol></div></div>;
}

export function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("No sales pressure. Tell us about the problem first.");
  async function onSubmit(e) { e.preventDefault(); const form = e.currentTarget; setStatus("sending"); setMessage("Sending your project details…"); const fd = new FormData(form); const data = { name: fd.get("name") || "", email: fd.get("email") || "", company: fd.get("company") || "", website: fd.get("website") || "", service: fd.get("service") || "", project: fd.get("project") || "", budget: fd.get("budget") || "", submittedAt: new Date().toISOString(), source: window.location.href }; try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); const result = await response.json(); if (!response.ok) throw new Error(result.error || "Submission failed"); form.reset(); setStatus("success"); setMessage("Thanks! Your project details have been submitted successfully. We'll get back to you soon."); } catch (error) { console.error("Contact form error:", error); setStatus("error"); setMessage("We couldn't submit the form. Please try again or email support@nascoretech.com."); } }
  const input = "mt-2 w-full rounded-md border border-nas-border bg-white px-4 py-3 text-nas-charcoal outline-none transition placeholder:text-black/30 focus:border-nas-copper focus:ring-2 focus:ring-nas-copper/15";
  return <form onSubmit={onSubmit} className="grid gap-5 rounded-xl border border-nas-border bg-white p-5 shadow-sm sm:grid-cols-2 sm:p-7">
    <label className="text-sm font-semibold">Name *<input className={input} name="name" autoComplete="name" required /></label>
    <label className="text-sm font-semibold">Business email *<input className={input} name="email" type="email" autoComplete="email" required /></label>
    <label className="text-sm font-semibold">Company<input className={input} name="company" autoComplete="organization" /></label>
    <label className="text-sm font-semibold">Website (Optional)<input className={input} name="website" type="url" placeholder="https://" /></label>
    <label className="text-sm font-semibold sm:col-span-2">What do you need help with? *<select className={input} name="service" required defaultValue=""><option value="" disabled>Select</option>{["AI Automation", "SEO", "Web Development", "AWS / Cloud", "Multiple Services", "Not Sure Yet"].map(o => <option key={o}>{o}</option>)}</select></label>
    <label className="text-sm font-semibold sm:col-span-2">Tell us about your project *<textarea className={input} name="project" rows={5} required /></label>
    <label className="text-sm font-semibold sm:col-span-2">Approximate budget<select className={input} name="budget" defaultValue=""><option value="" disabled>Select</option>{["Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"].map(o => <option key={o}>{o}</option>)}</select></label>
    <button className="rounded-md bg-nas-charcoal px-6 py-4 font-bold text-white transition hover:bg-nas-copper disabled:opacity-60 sm:col-span-2" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Start the conversation →"}</button>
    <small className={`sm:col-span-2 ${status === "error" ? "text-red-700" : status === "success" ? "text-green-700" : "text-nas-muted"}`} aria-live="polite">{message}</small>
  </form>;
}
