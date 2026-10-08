import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  MapPin,
  Mail,
  ArrowUpRight,
  Linkedin
} from "lucide-react";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/nascoretechnologies/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    // url: "https://www.facebook.com/people/NasCore-Technologies/",
    url: "https://www.facebook.com/profile.php?id=61595174452485",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/nascore-technologies",
    icon: Linkedin,
  },
];

const services = [
  ["AI Automation", "/services/ai-automation"],
  ["SEO", "/services/seo"],
  ["Web Development", "/services/web-development"],
  ["AWS Cloud", "/services/aws-cloud"],
];

export function Footer() {
  return (
    <footer className="w-full border-t border-[#303438]/10 bg-[#FBF7F4] text-[#303438]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.1fr_1fr] lg:gap-8 lg:py-16">

          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="NasCore Technologies home"
              className="relative flex h-[72px] w-[216px] items-center overflow-hidden"
            >
              <Image
                src="/Logo.png"
                width={216}
                height={72}
                alt="NasCore Technologies"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-auto
                  w-[230px]
                  max-w-none
                  -translate-x-1/2
                  -translate-y-1/2
                  scale-[1.00]
                  object-contain
                  object-center
                "
              />
            </Link>

            <p className="mt-5 max-w-[320px] text-sm leading-7 text-[#303438]/70">
              Intelligent digital solutions built to help businesses
              automate, optimize, grow, and scale.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-[#303438]/75">
              <MapPin
                size={17}
                strokeWidth={1.8}
                className="shrink-0 text-[#9A684D]"
              />
              <span>Karachi, Pakistan</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold tracking-wide text-[#303438]">
              Services
            </h3>

            <nav
              aria-label="Footer services"
              className="mt-5 flex flex-col gap-3"
            >
              {services.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="w-fit text-sm text-[#303438]/70 transition-colors duration-200 hover:text-[#9A684D]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-wide text-[#303438]">
              Contact
            </h3>

            <a
              href="mailto:support@nascoretech.com"
              className="mt-5 flex w-fit items-center gap-2 break-all text-sm text-[#303438]/70 transition-colors hover:text-[#9A684D]"
            >
              <Mail size={16} className="shrink-0 text-[#9A684D]" />
              support@nascoretech.com
            </a>

            <Link
              href="/#contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#9A684D] transition-colors hover:text-[#303438]"
            >
              Start a project
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-bold tracking-wide text-[#303438]">
              Follow NasCore
            </h3>

            <p className="mt-5 max-w-[240px] text-sm leading-6 text-[#303438]/65">
              Follow our latest projects, updates, and insights.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`NasCore Technologies on ${name}`}
                  className="
                    inline-flex
                    h-10
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    border
                    border-[#303438]/15
                    px-3.5
                    text-xs
                    font-medium
                    text-[#303438]/80
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-[#9A684D]
                    hover:bg-[#9A684D]
                    hover:text-white
                  "
                >
                  <Icon size={16} />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-[#303438]/10 py-6 text-xs text-[#303438]/60 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} NasCore Technologies.
            All rights reserved.
          </p>

          <nav
            aria-label="Legal links"
            className="flex items-center gap-5"
          >
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#9A684D]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#9A684D]"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}