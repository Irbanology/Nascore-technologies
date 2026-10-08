import ServicePage from "../../../components/ServicePage";

export const metadata = {
  "title": "AI Automation Services for Business | NasCore Technologies",
  "description": "Automate repetitive work, connect your tools, and improve response times with practical AI automation services from NasCore Technologies.",
  "alternates": {
    "canonical": "https://nascoretech.com/services/ai-automation"
  },
  "openGraph": {
    "title": "AI Automation Services for Business | NasCore Technologies",
    "description": "Automate repetitive work, connect your tools, and improve response times with practical AI automation services from NasCore Technologies.",
    "url": "https://nascoretech.com/services/ai-automation",
    "siteName": "NasCore Technologies",
    "type": "website"
  },
  "twitter": {
    "card": "summary",
    "title": "AI Automation Services for Business | NasCore Technologies",
    "description": "Automate repetitive work, connect your tools, and improve response times with practical AI automation services from NasCore Technologies."
  }
};

const page = {
  // "eyebrow": "AI Automation Services",
  "h1": "Make repetitive work run without constant follow-up.",
  "intro": "Manual handoffs, disconnected tools, and repeated data entry slow down teams. We design automation around the work your business already does, then connect the systems and people needed to keep it moving.",
  "lead": "From first enquiry to final handoff, we look for the steps that consume time, introduce errors, or leave customers waiting. The result is a workflow your team can understand, monitor, and improve.",
  "who": "For teams handling a growing volume of enquiries, repetitive admin, customer support requests, or information spread across multiple tools.",
  "deliverables": [
    [
      "Lead capture and routing",
      "Capture enquiries from forms and other approved channels, qualify them against agreed rules, and send them to the right person or CRM."
    ],
    [
      "CRM and sales workflow automation",
      "Keep contact records, follow-up tasks, deal stages, and internal notifications aligned without repetitive manual updates."
    ],
    [
      "AI-assisted support workflows",
      "Build assistants that answer from approved business information, escalate uncertain requests, and give staff visibility into conversations."
    ],
    [
      "Document and data processing",
      "Extract and organize information from routine documents, with validation and human review where accuracy matters."
    ],
    [
      "System integrations",
      "Connect existing applications through APIs, webhooks, and scheduled jobs to reduce duplicate entry."
    ],
    [
      "Monitoring and improvements",
      "Document the workflow, track failures, and refine the process as business requirements change."
    ]
  ],
  "usecases": [
    [
      "A lead arrives after business hours",
      "An automated workflow records the enquiry, sends an acknowledgement, and assigns a follow-up for the next working period."
    ],
    [
      "Your team copies data between systems",
      "A validated integration transfers the required fields and flags exceptions instead of silently losing information."
    ],
    [
      "Support repeats the same answers",
      "An assistant uses approved content for common questions and routes complex cases to a person."
    ]
  ],
  "process": [
    [
      "Map the current workflow",
      "We identify the trigger, systems, decision points, exceptions, and owner of each step."
    ],
    [
      "Choose the right level of automation",
      "We separate rule-based tasks from work that benefits from AI and define where human approval stays essential."
    ],
    [
      "Build and test",
      "We connect the tools, test realistic scenarios, and handle failed or incomplete inputs."
    ],
    [
      "Launch with visibility",
      "We provide documentation and agree how errors, access, and future changes will be handled."
    ]
  ],
  "faqs": [
    [
      "Do we need to replace our existing software?",
      "Usually not. We first assess whether your current tools support reliable integrations. A replacement is only considered when the existing setup prevents the required workflow."
    ],
    [
      "Can AI make decisions without staff approval?",
      "Some low-risk steps can run automatically. For sensitive, financial, or customer-impacting decisions, we can add review and approval checkpoints."
    ],
    [
      "How do you protect customer information?",
      "We define what data is needed, restrict access, and review storage and third-party integrations before implementation. Specific security controls depend on the systems involved."
    ],
    [
      "How much does an automation project cost?",
      "Cost depends on the number of systems, workflow complexity, data quality, and ongoing support. Share the process you want to improve for a scoped proposal."
    ]
  ],
  "cta": "Tell us which task your team repeats every day."
};

export default function Page() {
  return <ServicePage page={page} />;
}
