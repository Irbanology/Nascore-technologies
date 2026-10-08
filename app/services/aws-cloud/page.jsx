import ServicePage from "../../../components/ServicePage";

export const metadata = {
  "title": "AWS Cloud Consulting and Deployment Services | NasCore",
  "description": "Plan AWS deployments, cloud migration, infrastructure improvements, and cost reviews with practical AWS cloud services from NasCore Technologies.",
  "alternates": {
    "canonical": "https://nascoretech.com/services/aws-cloud"
  },
  "openGraph": {
    "title": "AWS Cloud Consulting and Deployment Services | NasCore",
    "description": "Plan AWS deployments, cloud migration, infrastructure improvements, and cost reviews with practical AWS cloud services from NasCore Technologies.",
    "url": "https://nascoretech.com/services/aws-cloud",
    "siteName": "NasCore Technologies",
    "type": "website"
  },
  "twitter": {
    "card": "summary",
    "title": "AWS Cloud Consulting and Deployment Services | NasCore",
    "description": "Plan AWS deployments, cloud migration, infrastructure improvements, and cost reviews with practical AWS cloud services from NasCore Technologies."
  }
};

const page = {
  // "eyebrow": "AWS Cloud Services",
  "h1": "Run your applications on cloud infrastructure you can understand.",
  "intro": "A cloud setup should make your application easier to operate, not harder to manage. We help businesses plan, deploy, and improve AWS environments with attention to reliability, access, and cost.",
  "lead": "Whether you are launching an application, moving from shared hosting, or reviewing an existing deployment, we start with the workload and the operational requirements. Then we recommend the AWS services that fit.",
  "who": "For startups, growing web applications, and businesses that need deployment support or a clearer AWS infrastructure plan.",
  "deliverables": [
    [
      "AWS deployment planning",
      "Choose a practical deployment approach based on application architecture, expected traffic, access needs, and budget."
    ],
    [
      "Application hosting and configuration",
      "Configure appropriate AWS services for web applications, including compute, storage, networking, and DNS where required."
    ],
    [
      "Migration assessment and support",
      "Review dependencies, data movement, downtime considerations, and rollback needs before moving workloads."
    ],
    [
      "Security and access review",
      "Examine IAM permissions, secrets handling, network exposure, and baseline configuration against the agreed scope."
    ],
    [
      "Monitoring and backups",
      "Set up relevant logs, alerts, and backup or recovery processes that match the application’s requirements."
    ],
    [
      "Cost visibility and optimization",
      "Review resource usage, identify unnecessary spend, and discuss trade-offs before making changes."
    ]
  ],
  "usecases": [
    [
      "A new app needs a production environment",
      "We plan hosting, domain routing, environment configuration, and a repeatable deployment path."
    ],
    [
      "AWS bills are difficult to explain",
      "We review the resources in use and highlight opportunities to reduce waste without disrupting the application."
    ],
    [
      "Your deployment depends on one person",
      "We document key infrastructure decisions and establish clearer access and operating procedures."
    ]
  ],
  "process": [
    [
      "Assess the workload",
      "We review the application, traffic expectations, dependencies, current setup, and budget."
    ],
    [
      "Design the environment",
      "We choose the required services, access boundaries, deployment path, and monitoring needs."
    ],
    [
      "Implement and verify",
      "We configure the environment and test the agreed application and operational checks."
    ],
    [
      "Document and improve",
      "We provide a handover summary and identify the next priorities for reliability, security, and cost."
    ]
  ],
  "faqs": [
    [
      "Can you deploy a Next.js or Node.js application on AWS?",
      "Yes. We can assess hosting options for these applications and recommend a setup based on the workload and operational needs."
    ],
    [
      "Do you offer AWS migration services?",
      "We can assess and support migrations. The plan depends on the existing infrastructure, data, dependencies, and acceptable downtime."
    ],
    [
      "Will moving to AWS reduce our hosting costs?",
      "Not necessarily. AWS offers flexibility, but cost depends on architecture and usage. We compare options before recommending a move."
    ],
    [
      "Can you review an AWS account we already use?",
      "Yes. An initial review can cover deployment architecture, permissions, visibility, and resource costs within an agreed scope."
    ]
  ],
  "cta": "Share your current setup and what needs to improve."
};

export default function Page() {
  return <ServicePage page={page} />;
}
