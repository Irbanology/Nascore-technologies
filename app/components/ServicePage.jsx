"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export default function ServicePage({ page }) {
  const [openFaq, setOpenFaq] = useState(0);

  if (!page) return null;

  const {
    eyebrow,
    h1,
    intro,
    lead,
    who,
    deliverables = [],
    usecases = [],
    process = [],
    faqs = [],
    cta,
  } = page;

  return (
    <>
      <Header />

      <main className="bg-[#FBF7F4] text-[#303438]">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden border-b border-[#303438]/10 bg-[#FBF7F4]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">

            <div className="max-w-4xl">
              {/* <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#9A684D]/25 bg-[#9A684D]/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#9A684D]" />

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#9A684D]">
                  {eyebrow}
                </span>
              </div> */}

              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                {h1}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#303438]/75 sm:text-xl">
                {intro}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 rounded-md bg-[#303438] px-7 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9A684D]"
                >
                  Discuss Your Project
                  <ArrowUpRight size={18} />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-3 py-4 text-sm font-semibold text-[#303438] transition hover:text-[#9A684D]"
                >
                  Explore Our Services
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        {(lead || who) && (
          <section className="border-b border-[#303438]/10 bg-white py-16 sm:py-20">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-8">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A684D]">
                  Our Approach
                </p>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Practical Solutions for Real Business Needs
                </h2>

                <p className="mt-6 text-base leading-8 text-[#303438]/70">
                  {lead}
                </p>
              </div>

              {who && (
                <div className="self-center rounded-xl border border-[#303438]/10 bg-[#FBF7F4] p-7 sm:p-8">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#9A684D]/10 text-[#9A684D]">
                    <CheckCircle2 size={23} />
                  </div>

                  <h3 className="text-xl font-bold">
                    Who This Service Is For
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#303438]/70">
                    {who}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* DELIVERABLES */}
        {deliverables.length > 0 && (
          <section
            id="services"
            className="scroll-mt-24 bg-[#FBF7F4] py-20 sm:py-24"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A684D]">
                  What We Deliver
                </p>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Services Built Around Your Goals
                </h2>

                <p className="mt-5 text-base leading-8 text-[#303438]/65">
                  Every project starts with understanding your requirements,
                  existing systems, and the outcomes you want to achieve.
                </p>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {deliverables.map(([title, description], index) => (
                  <div
                    key={title}
                    className="group rounded-xl border border-[#303438]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#9A684D]/40 hover:shadow-lg"
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <span className="text-sm font-bold text-[#9A684D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FBF7F4] text-[#9A684D] transition-colors group-hover:bg-[#9A684D] group-hover:text-white">
                        <Check size={20} />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold leading-7">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#303438]/65">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* USE CASES */}
        {usecases.length > 0 && (
          <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A684D]">
                  Real Business Scenarios
                </p>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Where This Service Makes a Difference
                </h2>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {usecases.map(([problem, solution], index) => (
                  <div
                    key={problem}
                    className="rounded-xl border border-[#303438]/10 bg-[#FBF7F4] p-7 sm:p-8"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#9A684D]">
                      Scenario {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-5 text-xl font-bold leading-8">
                      {problem}
                    </h3>

                    <div className="my-5 h-px bg-[#303438]/10" />

                    <p className="text-sm leading-7 text-[#303438]/70">
                      {solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PROCESS */}
        {process.length > 0 && (
          <section className="bg-[#303438] py-20 text-white sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D2A98C]">
                  How We Work
                </p>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  A Clear Process From Start to Finish
                </h2>

                <p className="mt-5 text-base leading-8 text-white/65">
                  We keep the process structured, transparent, and focused
                  on what your business needs.
                </p>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {process.map(([title, description], index) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/15 bg-white/5 p-7"
                  >
                    <span className="text-3xl font-extrabold text-[#D2A98C]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-7 text-lg font-bold leading-7">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/65">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="bg-[#FBF7F4] py-20 sm:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A684D]">
                  Frequently Asked Questions
                </p>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Questions Before Getting Started?
                </h2>

                <p className="mt-5 text-base leading-8 text-[#303438]/65">
                  Find answers to common questions about our services,
                  project scope, and working process.
                </p>
              </div>

              <div className="divide-y divide-[#303438]/10 border-y border-[#303438]/10">
                {faqs.map(([question, answer], index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div key={question}>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        className="flex w-full items-center justify-between gap-5 py-6 text-left"
                      >
                        <span className="text-base font-bold leading-7 sm:text-lg">
                          {question}
                        </span>

                        <ChevronDown
                          size={20}
                          className={`shrink-0 text-[#9A684D] transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      <div
                        id={`faq-answer-${index}`}
                        hidden={!isOpen}
                      >
                        <p className="max-w-2xl pb-6 text-sm leading-8 text-[#303438]/70">
                          {answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA */}
        <section className="border-t border-[#303438]/10 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-[#FBF7F4] p-8 sm:p-12 lg:flex-row lg:items-center">

              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A684D]">
                  Let's Work Together
                </p>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                  {cta || "Ready to Discuss Your Next Project?"}
                </h2>

                <p className="mt-5 text-base leading-8 text-[#303438]/65">
                  Share your requirements with NasCore Technologies.
                  We will review your project and discuss the next steps.
                </p>
              </div>

              <Link
                href="/#contact"
                className="inline-flex shrink-0 items-center gap-3 rounded-md bg-[#303438] px-7 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9A684D]"
              >
                Start a Project
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}