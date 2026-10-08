import ServicePage from "../../../components/ServicePage";

export const metadata = {
  "title": "Custom Web Development Services | NasCore Technologies",
  "description": "Custom business websites and web applications built with React, Next.js, modern APIs, and maintainable architecture. Discuss your project with NasCore.",
  "alternates": {
    "canonical": "https://nascoretech.com/services/web-development"
  },
  "openGraph": {
    "title": "Custom Web Development Services | NasCore Technologies",
    "description": "Custom business websites and web applications built with React, Next.js, modern APIs, and maintainable architecture. Discuss your project with NasCore.",
    "url": "https://nascoretech.com/services/web-development",
    "siteName": "NasCore Technologies",
    "type": "website"
  },
  "twitter": {
    "card": "summary",
    "title": "Custom Web Development Services | NasCore Technologies",
    "description": "Custom business websites and web applications built with React, Next.js, modern APIs, and maintainable architecture. Discuss your project with NasCore."
  }
};

const page = {
  // "eyebrow": "Custom Web Development",
  "h1": "Build a website that supports the way your business works.",
  "intro": "Your website should do more than look polished. It should explain your offer, help visitors take the next step, and give your team a reliable foundation for growth.",
  "lead": "We build business websites and custom web applications around actual requirements. That can mean a fast marketing site, an internal dashboard, a client portal, or a workflow connected to your existing systems.",
  "who": "For businesses replacing an outdated website, launching a new service, or needing a custom application that standard templates cannot handle.",
  "deliverables": [
    [
      "Business and service websites",
      "Clear page structure, responsive layouts, accessible navigation, and contact paths designed around visitor questions."
    ],
    [
      "Custom web applications",
      "Dashboards, portals, management tools, and workflow interfaces tailored to the way your team operates."
    ],
    [
      "React and Next.js development",
      "Component-based interfaces with attention to performance, maintainability, and search-friendly rendering where needed."
    ],
    [
      "Backend APIs and integrations",
      "Connect forms, databases, payment providers, CRMs, or third-party services according to project requirements."
    ],
    [
      "Performance and technical SEO foundations",
      "Implement semantic markup, metadata, clean routes, and sensible performance practices from the start."
    ],
    [
      "Deployment and handover",
      "Prepare the production setup, test key user journeys, and document the parts your team will maintain."
    ]
  ],
  "usecases": [
    [
      "Your website looks dated and converts poorly",
      "We improve information architecture, service messaging, usability, and enquiry paths."
    ],
    [
      "Spreadsheets are becoming a business system",
      "We assess whether a purpose-built dashboard or portal can reduce manual tracking and errors."
    ],
    [
      "You need a site that can expand",
      "We choose a structure that supports additional services, integrations, and content without a full rebuild."
    ]
  ],
  "process": [
    [
      "Discover the requirements",
      "We define audiences, essential pages, features, integrations, and success criteria."
    ],
    [
      "Plan the experience",
      "We organize the content, user journeys, and technical approach before development."
    ],
    [
      "Build and review",
      "We develop in stages, share progress, and test functionality across screen sizes."
    ],
    [
      "Launch and support",
      "We verify deployment, forms, analytics, and critical paths, then hand over the agreed documentation."
    ]
  ],
  "faqs": [
    [
      "Do you build websites using Next.js and React?",
      "Yes. We can use React and Next.js when they fit the project. The stack should follow the requirements, not the other way around."
    ],
    [
      "Can you work on an existing website?",
      "Yes. We can assess the current codebase and recommend improvements, a phased rebuild, or targeted new features."
    ],
    [
      "Will the website be mobile-friendly?",
      "Responsive layouts and mobile usability are part of our development approach. Final testing covers the agreed devices and key user journeys."
    ],
    [
      "Can you connect our website to a CRM or other software?",
      "Often yes, provided the tools offer suitable integration options and access. We confirm the technical requirements during discovery."
    ]
  ],
  "cta": "Tell us what your website needs to do, not just how it should look."
};

export default function Page() {
  return <ServicePage page={page} />;
}
