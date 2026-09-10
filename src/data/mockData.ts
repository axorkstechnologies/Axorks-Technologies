import { ServiceCapability, CaseStudy, AcceleratorProduct, FaqItem } from '../types';

export const SERVICES: ServiceCapability[] = [
  {
    id: 'web-apps',
    title: 'Custom Web Applications',
    subtitle: 'High-Throughput Full-Stack Platforms',
    priceTag: 'Milestone from $1,500',
    description:
      'Full-stack bespoke cloud platforms engineered with zero bloat. We build high-throughput client portals, administrative dashboards, and subscription SaaS products tailored for massive data concurrency.',
    technologies: ['Next.js 15 (App Router)', 'Serverless PostgreSQL', 'WebSockets', 'Dynamic RBAC'],
    colorAccent: 'gold',
    features: [
      'Sub-second page transitions with React Server Components',
      'Granular role-based access control (RBAC) & tenant isolation',
      'Real-time bi-directional telemetry via WebSocket / SSE',
      'Automated zero-downtime CI/CD deployment pipelines'
    ],
    typicalTimeline: '2 to 4 weeks'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Autonomous Agents',
    subtitle: 'Intelligent Operational Pipelines',
    priceTag: 'Milestone from $1,200',
    description:
      'Bridge complex manual operational workflows with self-healing AI agents, fine-tuned domain RAG engines, automated document intelligence, and multi-agent coordination frameworks.',
    technologies: ['Vector RAG Engine', 'FastAPI Python Core', 'Document Vision AI', 'Multi-Agent ERP Sync'],
    colorAccent: 'emerald',
    features: [
      'Sub-50ms vector semantic similarity search & retrieval',
      'Deterministic output schemas with automated guardrails',
      'Multi-modal document parsing (PDF, scanned images, invoices)',
      'Autonomous queue retry mechanics with human escalation fallback'
    ],
    typicalTimeline: '2 to 3 weeks'
  },
  {
    id: 'mobile-apps',
    title: 'Scalable Cross-Platform Mobile',
    subtitle: 'Native-Performance iOS & Android',
    priceTag: 'Milestone from $1,400',
    description:
      'Native-performance iOS and Android applications developed for high operational dependability. Features local offline SQLite replication, biometric hardware authorization, and low-battery background sync.',
    technologies: ['React Native / Flutter', 'Offline-First WatermelonDB', 'Biometrics', 'App Store Deployment'],
    colorAccent: 'violet',
    features: [
      'Zero-latency offline data mutations with sync conflict resolution',
      'Biometric authentication (FaceID, fingerprint, secure enclave)',
      'Optimized 60fps animations with minimal memory footprint',
      'Complete Apple App Store & Google Play Store publishing handling'
    ],
    typicalTimeline: '3 to 5 weeks'
  },
  {
    id: 'devops-sla',
    title: 'Continuous DevOps & Engineering SLA',
    subtitle: 'On-Demand Infrastructure Reliability',
    priceTag: 'Sprint from $1,000',
    description:
      'Reliable on-demand infrastructure management, CI/CD pipeline automation, automated penetration testing, vulnerability remediation, and 24/7 cluster telemetry without locking into expensive permanent hires.',
    technologies: ['Docker / K8s', 'GitHub Actions CI/CD', 'Cloudflare Enterprise', 'Grafana Alerts'],
    colorAccent: 'wine',
    features: [
      'Automated containerized staging environments per pull request',
      '24/7 uptime monitoring with sub-minute threshold incident alerts',
      'Automated vulnerability scanning & dependency security patching',
      'Cloud compute cost optimization & auto-scaling tuning'
    ],
    typicalTimeline: 'Ongoing Sprint Basis'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'agrotrace',
    title: 'AgroTrace',
    client: 'GCC Agro Corp',
    tagline: 'Farm-to-Distributor Perishable Telemetry',
    description:
      'Enterprise farm-to-distributor batch telemetry and quality grading engine. Integrated real-time edge IoT sensors across agricultural holdings with custom computer vision models to track perishables and eliminate transport degradation.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfPI73QNSb0X5zDBpB-9-Gnl1lIweK7xxrExL6S5ed9DFRi4mxtU2coAdlCrKKBygWheVavkf6TVk55hjX0e7ywAwGtkHDm9ldkA-7oAuZHZbZZpy4ERnG30Xm6UQXUhRHevtfVQJ_IALl3QVeuazad5ywlc4KM7C_r_WPJBVHBBli94aurae2NHX0qtQkcrAVmsXBEORHcXgDjHyrK18SoWiRfCtY2gZ29kuOz_tLpQg1Fzjz8rM5',
    imageAlt:
      'Dark high-contrast futuristic control dashboard for an agricultural telemetry platform called AgroTrace with live data graphs, geographic field maps in neon green and cyan accents.',
    tags: ['FastAPI', 'PostGIS', 'TensorFlow Lite', 'Edge IoT'],
    statusBadge: 'Production Deployed',
    categoryBadge: 'IoT • Supply Chain',
    metrics: [
      { value: '42%', label: 'Perishable Spoilage Reduction' },
      { value: '14,000+', label: 'Live Ingestion Telemetry Nodes' }
    ],
    architecture: {
      backend: 'FastAPI microservices running on edge container clusters',
      database: 'PostGIS with distributed TimescaleDB time-series partitions',
      aiModel: 'Quantized TensorFlow Lite edge model running on field gateways',
      highlights: [
        'Real-time temperature and humidity anomaly detection within 1.4 seconds',
        'Automated bill-of-lading quality certifications generated at delivery dock',
        'Zero data loss during satellite uplink connectivity drops'
      ]
    }
  },
  {
    id: 'mediverse',
    title: 'MediVerse',
    client: 'US Health Group',
    tagline: 'HIPAA-Compliant Clinical Documentation Synthesizer',
    description:
      'HIPAA-compliant clinical documentation synthesizer and telehealth gateway. Connects doctor-patient audio consultations directly to an on-premise localized LLM, transcribing clinical notes into standardized EHR structures in real-time.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBiyy3pNVeZXn1IFL8hM5meBKDRBSQCARhBg8Twu5c9JVwXd-3lTPVYT1XE8WF06mXqqKPAMH5ZKnHcoj-Y9Xx4Gnkvy9AU2JTY3jtWHzS31vi7jt549quwp0LB4m7zKZKhUIWBiVsztoqA_ql0M9c5BIvvFKQWPcLfMqjqtr1joEsV5vb7q7grWhKsVckHux6cbO_OUGRV-HmhpznbXopivQaI9iPP6s99RF_l4g_mgEK6EDEaq4-h',
    imageAlt:
      'High-end dark medical software UI mockup representing MediVerse, showing clinical records with clean translucent frosted cards, real-time AI transcription waveforms.',
    tags: ['Next.js 15', 'Local LLM', 'HL7 / FHIR', 'WebRTC'],
    statusBadge: 'HIPAA Certified',
    categoryBadge: 'Healthcare AI • Telehealth',
    metrics: [
      { value: '80%', label: 'Documentation Time Saved' },
      { value: '< 1.2s', label: 'Diagnostic EHR Retrieval Latency' }
    ],
    architecture: {
      backend: 'Zero-knowledge encrypted WebRTC gateway with Node.js stream processor',
      database: 'Encrypted PostgreSQL with hardware security module (HSM) encryption keys',
      aiModel: 'Air-gapped on-premise localized clinical LLM fine-tuned on medical ontologies',
      highlights: [
        'Fully complies with HIPAA Title II administrative and security standards',
        'Automatic FHIR resource mapping with EHR bi-directional synchronization',
        'Physician voice authentication with noise-suppressed ambient mic intake'
      ]
    }
  },
  {
    id: 'risk-engine',
    title: 'Autonomous Risk Engine',
    client: 'UK Trade Desk',
    tagline: 'Ultra-Low-Latency Anomaly Scoring System',
    description:
      'Ultra-low-latency compliance and trade anomaly scoring system. Evaluates multi-jurisdiction risk matrices across parallel transaction streams, executing automated circuit breakers and tamper-proof immutable audit records.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDK4t82lf4GWcy1J2goWGE5EQ_JaT_6MuH7S3ms-nXKQRpXzYbspksCeErGbIbeUxpEj95opUHQpI4YJXNs2TcPpJy2CosiJPEtMIqakTl9QpiBX_JA_PIIwZpMTClH919UJug1jPaX56vKXir33jqz-_ZCZv3aumqJcUS0-kDUr89uBCMA_tiLCWBfeK1_S2Iu7owjKNAdPau8S63AbbXQyfd_2k7ydcgQwyZOnrnxNqt1tz3myp7L',
    imageAlt:
      'High-frequency financial trade fraud and autonomous risk calculation system screen on a dark glass monitor with live candlestick graphs and anomaly detection tags.',
    tags: ['Go Core', 'Redis Streams', 'Vector Graph', 'eBPF Guard'],
    statusBadge: 'High-Frequency',
    categoryBadge: 'FinTech • Risk AI',
    metrics: [
      { value: '99.4%', label: 'Precision Anomaly Trigger' },
      { value: '$80M+', label: 'Monthly Volume Monitored' }
    ],
    architecture: {
      backend: 'High-concurrency compiled Go service with zero-allocation memory pools',
      database: 'Redis Enterprise in-memory stream cluster with ClickHouse analytics mirror',
      aiModel: 'Dynamic isolation forest and graph neural network anomaly classifier',
      highlights: [
        'Sub-8 millisecond trade risk decision latency under peak market volatility',
        'Multi-currency balance reconciliation across 14 financial exchanges',
        'Cryptographically signed tamper-evident compliance audit trail'
      ]
    }
  }
];

export const ACCELERATORS: AcceleratorProduct[] = [
  {
    id: 'flux-engine',
    code: 'FX',
    title: 'Axorks FluxEngine',
    category: 'Turnkey AI Automation Pipeline & Agent Harness',
    badge: 'Instant Deploy',
    description:
      'Plug-and-play ingestion system for complex invoices, scanned PDFs, KYC paperwork, and tabular data. Exports pre-validated typed JSON structures into any database with custom human-in-the-loop exception workflows.',
    stats: [
      { label: 'Throughput Capability', value: '2,500 docs/min' },
      { label: 'Extraction Accuracy', value: '99.8% Normalized', highlight: true },
      { label: 'Deployment Model', value: 'Docker / AWS ECS / VPC Private' }
    ],
    demoFeatures: [
      'Multi-page invoice & receipt OCR extraction',
      'Table header reconstruction with bounding box verification',
      'Automated schema mapping to QuickBooks, Xero, or PostgreSQL',
      'Real-time confidence scoring with human approval dashboard'
    ]
  },
  {
    id: 'omniportal-core',
    code: 'OP',
    title: 'OmniPortal Core',
    category: 'Multi-Tenant SaaS Foundation Architecture',
    badge: 'White-Label Ready',
    description:
      'The enterprise starter skeleton used in AXORKS web apps. Pre-configured with Next.js 15, Supabase Auth, hierarchical multi-tenant schemas, Stripe recurring meter billing, audit trails, and transactional email triggers.',
    stats: [
      { label: 'Time-to-Market Acceleration', value: 'Saves 120+ Eng Hours', highlight: true },
      { label: 'Included Integrations', value: 'Stripe Billing + Supabase + Postmark' },
      { label: 'Ownership Clause', value: '100% Unrestricted IP Handover' }
    ],
    demoFeatures: [
      'Ready multi-tenant database partitioning with RLS security',
      'Subscription checkout, invoices, and tiered usage quotas',
      'Team member invitations, granular permissions, and audit logs',
      'Custom domain routing with SSL certificate generation'
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do fixed-price milestone contracts work at AXORKS?',
    answer:
      'Before writing a single line of code, we produce a comprehensive Technical Specification Document that defines every user story, architectural boundary, and acceptance criterion. We divide the total cost into deliverable milestones (with projects starting from $1,000). You review and test functioning builds on staging before approving payment for each milestone.'
  },
  {
    id: 'faq-2',
    question: 'Do I get 100% intellectual property ownership of the source code?',
    answer:
      'Yes, without exceptions. Upon milestone completion and final settlement, all source code, design assets, database schemas, and documentation are transferred directly to your private GitHub/GitLab repositories under full commercial ownership. We do not retain proprietary lock-in.'
  },
  {
    id: 'faq-3',
    question: 'Who will actually work on my system?',
    answer:
      'Every project is spearheaded directly by Muhammad Mujahid (Founder & CEO / Chief Systems Architect) and experienced senior software engineers. We never outsource work to unsupervised junior contractors or third-party offshore shops.'
  },
  {
    id: 'faq-4',
    question: 'How do you handle time zone overlap with US, UK, and European clients?',
    answer:
      'Our engineering desks maintain dedicated daily synchronous working hours spanning UTC-5 (US Eastern) to UTC+5 (Pakistan / South Asia), providing reliable 4 to 6 hours of direct overlap every single business day via Slack, WhatsApp, and Google Meet.'
  },
  {
    id: 'faq-5',
    question: 'What is the minimum engagement threshold to work with AXORKS?',
    answer:
      'Our focused project sprints and starter architectural milestones start from $1,000. This allows emerging founders and growing businesses to validate MVPs and mission-critical automations without enterprise-scale retainer commitments.'
  }
];
