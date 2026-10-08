import ServicePage from "../../../components/ServicePage";

export const metadata = {
  "title": "SEO Services for Qualified Organic Leads | NasCore",
  "description": "Improve search visibility with technical SEO, keyword research, content planning, and local SEO focused on relevant enquiries and business goals.",
  "alternates": {
    "canonical": "https://nascoretech.com/services/seo"
  },
  "openGraph": {
    "title": "SEO Services for Qualified Organic Leads | NasCore",
    "description": "Improve search visibility with technical SEO, keyword research, content planning, and local SEO focused on relevant enquiries and business goals.",
    "url": "https://nascoretech.com/services/seo",
    "siteName": "NasCore Technologies",
    "type": "website"
  },
  "twitter": {
    "card": "summary",
    "title": "SEO Services for Qualified Organic Leads | NasCore",
    "description": "Improve search visibility with technical SEO, keyword research, content planning, and local SEO focused on relevant enquiries and business goals."
  }
};

const page = {
  // "eyebrow": "SEO Services",
  "h1": "Get found by people looking for what you sell.",
  "intro": "Search visibility is valuable when it brings the right visitors. We build SEO plans around your services, your customers, and the searches that signal a real need.",
  "lead": "A stronger search presence starts with a site that search engines can access, pages that answer buyer questions, and clear ways for visitors to get in touch. We work on those foundations before chasing vanity metrics.",
  "who": "For service businesses, local companies, and growing websites that need better organic visibility and more relevant enquiries.",
  "deliverables": [
    [
      "SEO audit and technical fixes",
      "Review indexing, crawl paths, internal links, redirects, mobile usability, and page performance. Prioritize issues by likely business impact."
    ],
    [
      "Keyword and search intent mapping",
      "Group commercial and informational searches, then assign each important topic to the most relevant page."
    ],
    [
      "Service page optimization",
      "Improve titles, headings, content structure, internal links, and calls to action without forcing keywords into every sentence."
    ],
    [
      "Local SEO",
      "Improve location relevance, business information consistency, and Google Business Profile content where applicable."
    ],
    [
      "Content planning",
      "Develop useful articles, comparisons, and FAQs that address real customer questions and support service pages."
    ],
    [
      "Measurement and reporting",
      "Use Search Console and analytics data to review visibility, landing pages, enquiries, and the work completed."
    ]
  ],
  "usecases": [
    [
      "Your services do not appear for relevant searches",
      "We check whether the issue is indexing, page relevance, competition, or missing content before recommending fixes."
    ],
    [
      "Traffic arrives but enquiries are weak",
      "We examine the intent behind target searches and improve how service pages explain fit and next steps."
    ],
    [
      "Local customers cannot find your business",
      "We review location signals, business listings, service information, and relevant local landing pages."
    ]
  ],
  "process": [
    [
      "Understand your market",
      "We review services, target locations, buyer questions, competitors, and existing performance."
    ],
    [
      "Build the search plan",
      "We prioritize pages and fixes according to commercial intent, feasibility, and business value."
    ],
    [
      "Implement improvements",
      "We address technical issues, refine existing pages, and create content where genuine gaps exist."
    ],
    [
      "Measure and refine",
      "We monitor meaningful changes and update priorities as search data and customer behavior develop."
    ]
  ],
  "faqs": [
    [
      "How soon will SEO produce results?",
      "SEO timelines vary by competition, website condition, and the work required. Technical fixes can be visible sooner, while competitive commercial searches often need sustained effort."
    ],
    [
      "Do you guarantee first-page rankings?",
      "No. Search results are controlled by search engines and change over time. We focus on transparent work, relevant visibility, and measurable business outcomes."
    ],
    [
      "Can you help a Karachi-based business?",
      "Yes. We can plan location-relevant content and local SEO work for businesses serving Karachi or other defined areas."
    ],
    [
      "Do we need new blog posts every month?",
      "Not automatically. We prioritize improving important existing pages and publish new content only when it answers a worthwhile search need."
    ]
  ],
  "cta": "Show us the searches your customers should find you for."
};

export default function Page() {
  return <ServicePage page={page} />;
}
