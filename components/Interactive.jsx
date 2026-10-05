"use client";
import { useState } from "react";

export function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((it, i) => (
        <div key={it.q} className={`faq-item ${open === i ? "open" : ""}`}>
          <button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            <h3>{it.q}</h3><span aria-hidden>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <p>{it.a}</p>}
        </div>
      ))}
    </div>
  );
}

export function Solutions({ items }) {
  const [active, setActive] = useState(0);
  return (
    <div className="sol">
      <div className="sol-tabs" role="tablist">
        {items.map((s, i) => (
          <button key={s.t} role="tab" aria-selected={active === i} className={active === i ? "on" : ""} onClick={() => setActive(i)}>{s.t}</button>
        ))}
      </div>
      <div className="sol-panel" key={active}>
        <p>{items[active].d}</p>
        <ol className="flow">
          {items[active].flow.map((f, i) => (<li key={f} style={{ animationDelay: `${i * 120}ms` }}>{f}</li>))}
        </ol>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("No sales pressure. Tell us about the problem first.");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const endpoint = process.env.GOOGLE_SHEET_URL;

    if (!endpoint) {
      setStatus("error");
      setMessage("Form endpoint is not configured yet.");
      return;
    }

    setStatus("sending");
    setMessage("Sending your project details…");

    const data = new FormData(form);
    data.append("submittedAt", new Date().toISOString());
    data.append("source", window.location.href);

    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams([...data.entries()]),
      });
      form.reset();
      setStatus("success");
      setMessage("Thanks — your project details have been submitted successfully. We'll get back to you soon.");
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
      setMessage("We couldn't submit the form. Please try again or email hello@nascoretech.com.");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Name *<input name="name" autoComplete="name" required /></label>
      <label>Business email *<input name="email" type="email" autoComplete="email" required /></label>
      <label>Company<input name="company" autoComplete="organization" /></label>
      <label>Website<input name="website" type="url" inputMode="url" placeholder="https://" /></label>
      <label className="full">What do you need help with? *
        <select name="service" required defaultValue="">
          <option value="" disabled>Select</option>
          {["AI Automation","SEO","Web Development","AWS / Cloud","Multiple Services","Not Sure Yet"].map(o => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label className="full">Tell us about your project *<textarea name="project" rows={5} required /></label>
      <label className="full">Approximate budget
        <select name="budget" defaultValue="">
          <option value="" disabled>Select</option>
          {["Under $1,000","$1,000 – $5,000","$5,000 – $15,000","$15,000+","Not sure yet"].map(o => <option key={o}>{o}</option>)}
        </select>
      </label>
      <button className="btn primary full" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Start the conversation →"}
      </button>
      <small className={`full form-status ${status}`} aria-live="polite">{message}</small>
    </form>
  );
}
