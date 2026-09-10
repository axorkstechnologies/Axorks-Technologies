import { TeamMember, Project, Service, ProcessStep, WhyItem, FaqItem } from '../types';

// ─── TEAM MEMBERS ────────────────────────────────────────────────────────────

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'mujahid',
    name: 'Muhammad Mujahid',
    role: 'Founder & CEO / Chief Systems Architect',
    description: 'Development, Marketing, Sales, Accounts & Web3. BS Software Engineering.',
    image: '/Images/Founder and CEO SOFTWARE ENGINEER.jpeg',
    accent: 'gold',
  },
  {
    id: 'farhana',
    name: 'Farhana',
    role: 'Co-Founder / Business Lead',
    description: 'Accounts, HR, and business operations. BBA.',
    image: null,
    accent: 'emerald',
  },
  {
    id: 'faisal',
    name: 'Faisal',
    role: 'Software Engineer',
    description: 'Flutter & mobile application development. iOS & Android.',
    image: null,
    accent: 'violet',
  },
  {
    id: 'shayan',
    name: 'Shayan',
    role: 'Web Developer',
    description: 'Frontend & full-stack web development.',
    image: null,
    accent: 'cyan',
  },
  {
    id: 'alina',
    name: 'Alina',
    role: 'AI & Neural Networks Engineer',
    description: 'AI automation, neural networks, and intelligent integrations.',
    image: null,
    accent: 'wine',
  },
  {
    id: 'farwa',
    name: 'Farwa',
    role: 'Marketing & Outreach',
    description: 'Brand strategy, digital marketing, and client outreach.',
    image: '/Images/FARWA Marketing & Outreach.jpeg',
    accent: 'gold',
  },
  {
    id: 'furqan',
    name: 'Furqan',
    role: 'Business Development Officer',
    description: 'Business growth, partnerships, and client relations.',
    image: '/Images/FURQAN Business Development Officer.jpeg',
    accent: 'emerald',
  },
  {
    id: 'web3-dev',
    name: 'Blockchain Developer',
    role: 'Web3 & Decentralized Systems',
    description: 'Smart contracts, DeFi protocols, and decentralized applications.',
    image: null,
    accent: 'violet',
  },
];

// ─── PROJECTS / CASE STUDIES ─────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: 'agrotrace',
    title: 'AgroTrace',
    tagline: 'Real-Time Food Supply-Chain Tracking',
    description:
      'Real-time food supply-chain tracking platform for Sindh & Punjab. Live logistics, thermal monitoring, export compliance, dashboards, alerts, and supply node management across the entire agricultural distribution network.',
    images: [
      { src: '/Images/Agrotrace.jpeg', alt: 'AgroTrace — supply chain tracking dashboard with live logistics map' },
      { src: '/Images/agrotrace2.jpeg', alt: 'AgroTrace — operations overview and monitoring panel' },
      { src: '/Images/Agrotrace3.jpeg', alt: 'AgroTrace — delay analytics and performance metrics' },
      { src: '/Images/Agrotrace4.jpeg', alt: 'AgroTrace — recent shipments tracking interface' },
      { src: '/Images/Agrotrace5.jpeg', alt: 'AgroTrace — supply nodes network visualization' },
    ],
    tags: ['Real-Time Tracking', 'IoT Sensors', 'Thermal Monitoring', 'Export Compliance'],
    statusBadge: 'Production',
    categoryBadge: 'Supply Chain • AgriTech',
    metrics: [
      { value: '42%', label: 'Spoilage Reduction' },
      { value: '14K+', label: 'Active Supply Nodes' },
    ],
    accent: 'emerald',
  },
  {
    id: 'ipmi-os',
    title: 'IPMI-OS 2.0',
    tagline: 'AI-Powered Trading & Decision System',
    description:
      'Advanced AI-powered trading and decision system with multi-tier TQE analysis, opportunity scanner, risk governor, order flow intelligence, and a live execution engine for data-driven market decisions.',
    images: [
      { src: '/Images/IPMI-OS.jpeg', alt: 'IPMI-OS 2.0 — AI trading dashboard with opportunity scanner' },
      { src: '/Images/IPMI-OS2.jpeg', alt: 'IPMI-OS 2.0 — multi-tier TQE analysis engine' },
      { src: '/Images/IPMI-OS3.jpeg', alt: 'IPMI-OS 2.0 — risk governor and order flow intelligence' },
      { src: '/Images/IPMI-OS4.jpeg', alt: 'IPMI-OS 2.0 — live execution engine interface' },
    ],
    tags: ['AI Engine', 'Risk Analysis', 'Order Flow', 'Live Trading'],
    statusBadge: 'Live System',
    categoryBadge: 'FinTech • AI Trading',
    metrics: [
      { value: 'Multi-Tier', label: 'TQE Analysis Depth' },
      { value: 'Real-Time', label: 'Execution Engine' },
    ],
    accent: 'gold',
  },
  {
    id: 'mediverse',
    title: 'MediVerse',
    tagline: 'AI-Powered Global Healthcare Platform',
    description:
      'AI-powered global healthcare platform providing digital care access, specialist connections, and home medical assistance. Built with compliance for WHO, SDG 3, HIPAA, and GDPR standards.',
    images: [
      { src: '/Images/Mediverse.jpeg', alt: 'MediVerse — AI healthcare platform main dashboard' },
      { src: '/Images/mediverse2.jpeg', alt: 'MediVerse — digital care access and specialist directory' },
      { src: '/Images/Mediverse3.jpeg', alt: 'MediVerse — home medical assistance interface' },
      { src: '/Images/Mediverse4.jpeg', alt: 'MediVerse — compliance and patient records management' },
    ],
    tags: ['Healthcare AI', 'HIPAA Compliant', 'Telemedicine', 'WHO / SDG 3'],
    statusBadge: 'Deployed',
    categoryBadge: 'Healthcare • AI',
    metrics: [
      { value: 'Global', label: 'Patient Access Reach' },
      { value: 'HIPAA', label: 'Compliance Grade' },
    ],
    accent: 'violet',
  },
  {
    id: 'fume',
    title: 'FUME Fragrances',
    tagline: 'Premium Fragrance Brand & E-Commerce',
    description:
      'Premium fragrance brand website and full e-commerce experience. Haute parfumerie presentation, discovery collection showcase, product pages, and elegant packaging — designed and built end-to-end by AXORKS.',
    images: [
      { src: '/Images/Fume prints-04.png', alt: 'FUME Fragrances — brand logo and identity' },
      { src: '/Images/4bVSv.jpg', alt: 'FUME Fragrances — premium product bottle presentation' },
      { src: '/Images/MCraF.jpg', alt: 'FUME Fragrances — discovery collection and packaging' },
      { src: '/Images/4ma95.jpg', alt: 'FUME Fragrances — e-commerce product page design' },
    ],
    tags: ['E-Commerce', 'Brand Design', 'Product Pages', 'Luxury UI'],
    statusBadge: 'Live',
    categoryBadge: 'E-Commerce • Luxury Brand',
    metrics: [
      { value: 'Full', label: 'End-to-End Build' },
      { value: 'Premium', label: 'Design System' },
    ],
    accent: 'wine',
  },
];

// ─── SERVICES ────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    id: 'web-apps',
    title: 'Custom Web Applications',
    description:
      'Full-stack bespoke platforms — client portals, dashboards, SaaS products — engineered for performance, security, and scale.',
    icon: 'Globe',
    features: [
      'React / Next.js / Node.js',
      'Real-time dashboards & data visualization',
      'Role-based access control',
      'CI/CD deployment pipelines',
    ],
    accent: 'gold',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Integrations',
    description:
      'Intelligent workflows, RAG engines, document processing, and multi-agent coordination to automate complex operations.',
    icon: 'Brain',
    features: [
      'Custom AI agents & pipelines',
      'Document intelligence & OCR',
      'Vector search & RAG systems',
      'API integrations & sync',
    ],
    accent: 'emerald',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description:
      'Native-performance iOS and Android applications with Flutter. Offline-first, biometric auth, and app store deployment.',
    icon: 'Smartphone',
    features: [
      'Flutter / iOS / Android',
      'Offline-first architecture',
      'Push notifications & real-time',
      'App Store & Play Store publishing',
    ],
    accent: 'violet',
  },
  {
    id: 'web3-blockchain',
    title: 'Web3 & Blockchain',
    description:
      'Decentralized applications, smart contracts, DeFi protocols, and blockchain integrations for the next generation of the web.',
    icon: 'Blocks',
    features: [
      'Smart contracts (Solidity / Rust)',
      'DeFi & tokenization',
      'NFT marketplaces',
      'Wallet integration & dApps',
    ],
    accent: 'cyan',
  },
  {
    id: 'support',
    title: 'Ongoing Support & Maintenance',
    description:
      'Reliable infrastructure management, monitoring, security patching, and performance optimization on an ongoing basis.',
    icon: 'Shield',
    features: [
      'DevOps & CI/CD',
      '24/7 monitoring & alerts',
      'Security audits & patching',
      'Performance optimization',
    ],
    accent: 'wine',
  },
  {
    id: 'product-dev',
    title: 'Product Development',
    description:
      'We also build and sell our own products. From concept to launch, we create proprietary platforms and tools.',
    icon: 'Rocket',
    features: [
      'MVP to production',
      'Product strategy & roadmap',
      'Scalable architecture',
      'Full IP ownership',
    ],
    accent: 'burgundy',
  },
];

// ─── PROCESS STEPS ───────────────────────────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery',
    description: 'Free consultation to understand your goals, challenges, and technical requirements.',
    icon: 'Search',
  },
  {
    step: 2,
    title: 'Proposal',
    description: 'Clear fixed-price proposal with scope, milestones, timeline, and deliverables — before writing a single line of code.',
    icon: 'FileText',
  },
  {
    step: 3,
    title: 'Build',
    description: 'Milestone-based development with staging previews, direct communication, and transparent progress.',
    icon: 'Code',
  },
  {
    step: 4,
    title: 'Launch & Support',
    description: 'Production deployment, knowledge transfer, 100% IP handover, and ongoing support as needed.',
    icon: 'Rocket',
  },
];

// ─── WHY AXORKS ──────────────────────────────────────────────────────────────

export const WHY_ITEMS: WhyItem[] = [
  {
    id: 'pricing',
    title: 'Starting from $1,000',
    description: 'Professional-grade projects at accessible prices. Every engagement starts with a clear fixed-price proposal.',
    icon: 'Tag',
    accent: 'gold',
  },
  {
    id: 'fixed-price',
    title: 'Fixed-Price Milestones',
    description: 'No hourly billing surprises. You know the exact cost before development begins. Pay per milestone.',
    icon: 'ShieldCheck',
    accent: 'emerald',
  },
  {
    id: 'direct-access',
    title: 'Direct Team Access',
    description: 'Talk directly to senior engineers and leadership. No middlemen, no account managers, no outsourced juniors.',
    icon: 'Users',
    accent: 'violet',
  },
  {
    id: 'offices',
    title: 'Real Offices',
    description: 'Registered company with physical offices in Karachi & Islamabad, Pakistan. Axorks Pvt Limited.',
    icon: 'Building2',
    accent: 'wine',
  },
  {
    id: 'response',
    title: '24h Response Time',
    description: 'Every inquiry gets a human response within 24 hours. Direct Slack, WhatsApp, and email availability.',
    icon: 'Clock',
    accent: 'gold',
  },
  {
    id: 'ip',
    title: '100% IP Ownership',
    description: 'All source code, designs, and documentation are transferred to you upon completion. Zero lock-in.',
    icon: 'Key',
    accent: 'emerald',
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do fixed-price milestone contracts work at AXORKS?',
    answer:
      'Before writing a single line of code, we produce a comprehensive Technical Specification Document that defines every deliverable and acceptance criterion. We divide the total cost into milestones (projects start from $1,000). You review and test functioning builds on staging before approving payment for each milestone.',
  },
  {
    id: 'faq-2',
    question: 'Do I get 100% intellectual property ownership?',
    answer:
      'Yes, without exceptions. Upon final settlement, all source code, design assets, database schemas, and documentation are transferred to your private repositories under full commercial ownership. We do not retain proprietary lock-in.',
  },
  {
    id: 'faq-3',
    question: 'Who will actually work on my project?',
    answer:
      'Every project is led directly by Muhammad Mujahid (Founder & CEO / Chief Systems Architect) and senior engineers. We never outsource to unsupervised contractors or third-party shops. You get direct access to the people who build your product.',
  },
  {
    id: 'faq-4',
    question: 'What is the minimum engagement to work with AXORKS?',
    answer:
      'Our projects start from $1,000. This allows founders and growing businesses to validate MVPs and critical automations without enterprise-scale commitments. Every project receives a clear fixed-price proposal before development begins.',
  },
  {
    id: 'faq-5',
    question: 'Where are you located?',
    answer:
      'AXORKS Technologies (Axorks Pvt Limited) is a registered private company with offices in Karachi and Islamabad, Pakistan. We serve clients worldwide with overlapping working hours across US, UK, and European time zones.',
  },
];
