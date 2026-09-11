import { TeamMember, Project, Service, ProcessStep, WhyItem, FaqItem } from '../types';

// ─── TEAM MEMBERS (Only Founder has photo; intentional placeholders for rest) ─

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'mujahid',
    name: 'Muhammad Mujahid',
    role: 'Founder & CEO / Chief Systems Architect',
    description: 'System architecture, AI automation, full-stack engineering, accounts, and client partnerships. BS Software Engineering.',
    image: '/Images/Founder and CEO SOFTWARE ENGINEER.jpeg',
    accent: 'gold',
  },
  {
    id: 'yousaf-piryani',
    name: 'Yousaf Piryani',
    role: 'Principal AI Engineer',
    description: '30 years experience in neural networks, deep learning, and advanced AI architectures. US-returned.',
    image: null,
    accent: 'gold',
  },
  {
    id: 'alina',
    name: 'Alina',
    role: 'AI & Neural Networks Engineer',
    description: 'Autonomous multi-agent pipelines, RAG retrieval engines, vector embeddings, and intelligent workflow integrations.',
    image: null,
    accent: 'wine',
  },
  {
    id: 'shayan',
    name: 'Shayan',
    role: 'Full-Stack Web Developer',
    description: 'Frontend and full-stack web platforms with modern React, TypeScript, Next.js, and Node.js ecosystems.',
    image: null,
    accent: 'cyan',
  },
  {
    id: 'faisal',
    name: 'Faisal',
    role: 'Mobile Application Developer',
    description: 'Cross-platform mobile application development with Flutter for iOS and Android with offline-first synchronization.',
    image: null,
    accent: 'violet',
  },
  {
    id: 'ali-haider',
    name: 'Ali Haider',
    role: 'Web3 & Blockchain Developer',
    description: 'Smart contracts, Ethereum EVM systems, DeFi protocols, and decentralized blockchain systems.',
    image: null,
    accent: 'cyan',
  },
  {
    id: 'qasim',
    name: 'Qasim',
    role: 'Software Engineer & Certified Blockchain Developer',
    description: 'Certified blockchain developer building robust web applications and smart contract integrations.',
    image: null,
    accent: 'violet',
  },
  {
    id: 'farhana',
    name: 'Farhana',
    role: 'Co-Founder & Head of Business Operations',
    description: 'Financial governance, human resources, operational management, and business administration. BBA.',
    image: null,
    accent: 'emerald',
  },
  {
    id: 'furqan',
    name: 'Furqan',
    role: 'Business Development Officer',
    description: 'Enterprise relationships, client acquisitions, and strategic partnerships across North America and Europe.',
    image: '/Images/FURQAN Business Development Officer.jpeg',
    accent: 'emerald',
  },
  {
    id: 'farwa',
    name: 'Farwa',
    role: 'Marketing & Outreach Specialist',
    description: 'Brand strategy, technical content campaigns, and digital outreach for enterprise client development.',
    image: '/Images/FARWA Marketing & Outreach.jpeg',
    accent: 'gold',
  },
];

// ─── PROJECTS / CASE STUDIES (Problem, Solution, Result Framework) ───────────

export const PROJECTS: Project[] = [
  {
    id: 'agrotrace',
    title: 'AgroTrace',
    tagline: 'Real-Time Food Supply-Chain Tracking',
    description:
      'Real-time food supply-chain tracking platform for Sindh and Punjab. Live logistics, thermal monitoring, export compliance, dashboards, alerts, and supply node management across agricultural distribution networks.',
    problem:
      'Perishable agricultural shipments across Sindh and Punjab suffered from unmonitored thermal spikes, lack of GPS transit visibility, and manual paper-based export documentation that caused high spoilage and regulatory fines.',
    solution:
      'Axorks engineered a real-time IoT telemetry and multi-agent tracking platform. The system connects vehicle sensors, cold-storage facilities, and border inspection points into a unified live dashboard with automated thermal alerts and electronic compliance certificates.',
    result:
      'Achieved a 42% reduction in cold-chain spoilage across 14,000 active supply nodes, with transit delay notifications delivered in real time to distribution operators.',
    images: [
      { src: '/Images/Agrotrace.jpeg', alt: 'AgroTrace supply chain tracking dashboard with live logistics map' },
      { src: '/Images/agrotrace2.jpeg', alt: 'AgroTrace operations overview and monitoring panel' },
      { src: '/Images/Agrotrace3.jpeg', alt: 'AgroTrace delay analytics and performance metrics' },
      { src: '/Images/Agrotrace4.jpeg', alt: 'AgroTrace recent shipments tracking interface' },
      { src: '/Images/Agrotrace5.jpeg', alt: 'AgroTrace supply nodes network visualization' },
    ],
    tags: ['Real-Time Tracking', 'IoT Sensors', 'Thermal Monitoring', 'Export Compliance'],
    statusBadge: 'Production System',
    categoryBadge: 'Supply Chain · AgriTech',
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
    problem:
      'Discretionary trading desks faced cognitive overload, erratic trade execution during high volatility, and delayed response times when parsing multi-exchange order flows and liquidity shifts.',
    solution:
      'Axorks architected a high-throughput algorithmic decision engine with multi-tier TQE analysis, real-time market microstructure scanners, automated risk governance rules, and sub-second execution triggers.',
    result:
      'Delivered institutional-grade order flow intelligence with automated risk governors that eliminate emotional trade execution and enforce strict risk management parameters.',
    images: [
      { src: '/Images/IPMI-OS.jpeg', alt: 'IPMI-OS 2.0 AI trading dashboard with opportunity scanner' },
      { src: '/Images/IPMI-OS2.jpeg', alt: 'IPMI-OS 2.0 multi-tier TQE analysis engine' },
      { src: '/Images/IPMI-OS3.jpeg', alt: 'IPMI-OS 2.0 risk governor and order flow intelligence' },
      { src: '/Images/IPMI-OS4.jpeg', alt: 'IPMI-OS 2.0 live execution engine interface' },
    ],
    tags: ['AI Engine', 'Risk Analysis', 'Order Flow', 'Live Trading'],
    statusBadge: 'Live System',
    categoryBadge: 'FinTech · AI Trading',
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
    problem:
      'Patients in emerging markets lacked direct access to verified clinical specialists, while cross-border medical consultations suffered from fragmented health records, language barriers, and non-compliant communication channels.',
    solution:
      'Axorks built a secure, HIPAA-compliant digital health platform featuring encrypted video consultations, electronic health record synchronization, automated clinical triage assistance, and multi-language patient guidance.',
    result:
      'Enabled direct access to global medical specialists under verified HIPAA and GDPR privacy safeguards, ensuring complete data security for sensitive health consultations.',
    images: [
      { src: '/Images/Mediverse.jpeg', alt: 'MediVerse AI healthcare platform main dashboard' },
      { src: '/Images/Mediverse4.jpeg', alt: 'MediVerse compliance and patient records management' },
    ],
    tags: ['Healthcare AI', 'HIPAA Compliant', 'Telemedicine', 'WHO / SDG 3'],
    statusBadge: 'Deployed Platform',
    categoryBadge: 'Healthcare · AI',
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
      'Premium fragrance brand website and full e-commerce experience. Haute parfumerie presentation, discovery collection showcase, product pages, and elegant packaging, designed and built end-to-end by Axorks.',
    problem:
      'A luxury fragrance house needed a digital commerce presence that matched the sensory sophistication of haute parfumerie without relying on generic Shopify templates or slow third-party plugins.',
    solution:
      'Axorks created a bespoke luxury e-commerce platform with custom typography, rich editorial product storytelling, an interactive olfactory discovery set selector, and frictionless multi-currency checkout.',
    result:
      'Delivered an ultra-fast, premium digital boutique that elevated brand perception and achieved high conversion rates across high-ticket fragrance collections.',
    images: [
      { src: '/Images/Fume prints-04.png', alt: 'FUME Fragrances brand logo and identity' },
      { src: '/Images/4bVSv.jpg', alt: 'FUME Fragrances premium product bottle presentation' },
      { src: '/Images/MCraF.jpg', alt: 'FUME Fragrances discovery collection and packaging' },
      { src: '/Images/4ma95.jpg', alt: 'FUME Fragrances e-commerce product page design' },
    ],
    tags: ['E-Commerce', 'Brand Design', 'Product Pages', 'Luxury UI'],
    statusBadge: 'Live Boutique',
    categoryBadge: 'E-Commerce · Luxury Brand',
    metrics: [
      { value: 'Full', label: 'End-to-End Build' },
      { value: 'Bespoke', label: 'Design System' },
    ],
    accent: 'wine',
  },
];

// ─── SERVICES (Official Order: 1. AI, 2. Web, 3. Web3, 4. Mobile) ───────────

export const SERVICES: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation & Intelligent Systems',
    tagline: 'Intelligent Systems That Work Autonomously',
    description:
      'Intelligent multi-agent workflows, autonomous pipelines, RAG retrieval engines, and document processing systems that eliminate manual clerical bottlenecks and run 24/7.',
    icon: 'Brain',
    features: [
      'Custom autonomous AI agent pipelines',
      'Multi-agent workflow orchestration with human-in-the-loop triggers',
      'Vector search and high-precision RAG systems',
      'Enterprise API integrations and automated schema validation',
    ],
    deliverables: [
      'Production AI agent or autonomous workflow pipeline',
      'Vector database integration with semantic chunking',
      'Secure API endpoints for inference and webhook triggers',
      'Operational monitoring dashboard and audit logs',
      'Full source code and technical architecture specification',
    ],
    technologies: ['Python', 'LangChain', 'LlamaIndex', 'OpenAI', 'Pinecone', 'FastAPI', 'PyTorch', 'Docker'],
    accent: 'emerald',
  },
  {
    id: 'web-apps',
    title: 'Custom Web Applications',
    tagline: 'Bespoke Platforms Built for Scale',
    description:
      'Full-stack bespoke platforms, client portals, operations dashboards, and SaaS products engineered for high performance, enterprise security, and long-term maintainability.',
    icon: 'Globe',
    features: [
      'Modern Next.js, React, and Node.js architecture',
      'Real-time data visualization and operational telemetry',
      'Granular role-based access control (RBAC)',
      'Automated CI/CD deployment pipelines on AWS or Vercel',
    ],
    deliverables: [
      'Production-ready custom web application',
      'Administrative dashboard and client portal',
      'Structured REST and GraphQL API layer',
      'Staging environment with automated testing',
      'Complete intellectual property transfer and documentation',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS'],
    accent: 'gold',
  },
  {
    id: 'web3-blockchain',
    title: 'Web3 & Decentralized Applications',
    tagline: 'Decentralized Systems & Audited Smart Contracts',
    description:
      'Decentralized applications, audited smart contracts, DeFi settlement rails, and blockchain integrations engineered for security and transparency.',
    icon: 'Blocks',
    features: [
      'Audited smart contracts in Solidity and Rust',
      'DeFi protocols and automated settlement logic',
      'Decentralized application frontends with Web3.js and Viem',
      'Non-custodial wallet integrations and multi-chain bridges',
    ],
    deliverables: [
      'Audited smart contracts with comprehensive test suites',
      'Decentralized application frontend and wallet connection',
      'Deployment scripts and gas optimization reports',
      'Security audit report and documentation',
      'Full source code ownership transfer',
    ],
    technologies: ['Solidity', 'Hardhat', 'Ethers.js', 'Rust', 'IPFS', 'The Graph', 'React', 'Web3.js'],
    accent: 'cyan',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    tagline: 'Native Performance on Every Device',
    description:
      'Cross-platform iOS and Android applications with Flutter. 60fps native performance, offline-first data sync, hardware biometric security, and app store deployment.',
    icon: 'Smartphone',
    features: [
      'Unified Flutter codebase for iOS and Android',
      'Resilient offline-first local database caching',
      'Hardware biometric authentication (Face ID / Fingerprint)',
      'Apple App Store and Google Play Store publishing support',
    ],
    deliverables: [
      'Cross-platform iOS and Android mobile app build',
      'Cloud backend API and real-time push notification setup',
      'App Store and Google Play submission assets and provisioning',
      'Offline data synchronization queue architecture',
      'Full source code and build instructions',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Swift', 'Kotlin', 'Node.js', 'REST API', 'SQLite'],
    accent: 'violet',
  },
  {
    id: 'support',
    title: 'Ongoing Support & Infrastructure',
    tagline: 'Reliable Infrastructure & Proactive Maintenance',
    description:
      'Dedicated infrastructure management, continuous uptime monitoring, security patching, and performance optimization on an ongoing SLA basis.',
    icon: 'Shield',
    features: [
      'DevOps automation and continuous integration pipelines',
      '24/7 uptime monitoring, alerting, and log analysis',
      'Proactive security updates and vulnerability patching',
      'Database profiling, caching, and query optimization',
    ],
    deliverables: [
      'Configured cloud monitoring and automated alerts',
      'Automated disaster recovery and backup systems',
      'Monthly security and performance audit summaries',
      'SLA-backed emergency response guarantees',
      'Dedicated Slack or WhatsApp engineering channel',
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Grafana', 'GitHub Actions', 'CloudFlare', 'Linux'],
    accent: 'wine',
  },
  {
    id: 'product-dev',
    title: 'Proprietary Product Development',
    tagline: 'From Concept to Market-Ready Software Asset',
    description:
      'We also conceive, build, and scale proprietary software products. From initial market validation to rapid MVP release and enterprise scaling.',
    icon: 'Rocket',
    features: [
      'Rapid prototype to market-ready MVP execution',
      'Product strategy, wireframing, and user story mapping',
      'Scalable multi-tenant cloud architecture',
      'Commercial payment gateways and subscription billing',
    ],
    deliverables: [
      'Market-validated minimum viable product',
      'Technical roadmap and architectural blueprint',
      'Scalable cloud infrastructure deployment',
      'Product analytics and telemetry instrumentation',
      'Complete intellectual property transfer',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Stripe', 'Vercel'],
    accent: 'burgundy',
  },
];

// ─── PROCESS STEPS ───────────────────────────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Technical Discovery',
    description: 'Complimentary consultation to understand your business objectives, operational bottlenecks, and architectural requirements.',
    icon: 'Search',
  },
  {
    step: 2,
    title: 'Fixed-Price Specification',
    description: 'Itemized Technical Specification Document with guaranteed fixed pricing, sprint milestones, and clear deliverables before writing any code.',
    icon: 'FileText',
  },
  {
    step: 3,
    title: 'Milestone Development',
    description: 'Sprint-based engineering with private staging previews. You test and verify working software before approving milestone payments.',
    icon: 'Code',
  },
  {
    step: 4,
    title: 'Launch & IP Handover',
    description: 'Production cloud deployment, comprehensive staff onboarding, and 100% intellectual property transfer to your private repositories.',
    icon: 'Rocket',
  },
];

// ─── WHY AXORKS (Commercial Guarantees) ──────────────────────────────────────

export const WHY_ITEMS: WhyItem[] = [
  {
    id: 'pricing',
    title: 'Projects from $1,000',
    description: 'Professional engineering at accessible starting tiers. Every project begins with an itemized fixed-price proposal.',
    icon: 'Tag',
    accent: 'gold',
  },
  {
    id: 'fixed-price',
    title: 'Fixed-Price Milestones',
    description: 'Zero hourly billing surprises. You know the exact investment before development begins. Pay per verified milestone.',
    icon: 'ShieldCheck',
    accent: 'emerald',
  },
  {
    id: 'direct-access',
    title: 'Direct Senior Access',
    description: 'Direct collaboration with founder Muhammad Mujahid and senior engineers. No account managers, no junior runarounds.',
    icon: 'Users',
    accent: 'violet',
  },
  {
    id: 'offices',
    title: 'Offices in Karachi & Islamabad',
    description: 'Registered software company with physical engineering offices in Karachi and Islamabad, Pakistan.',
    icon: 'Building2',
    accent: 'wine',
  },
  {
    id: 'response',
    title: '24-Hour Response Guarantee',
    description: 'Every inquiry receives a substantive response within 24 hours. Direct availability on email, WhatsApp, and Slack.',
    icon: 'Clock',
    accent: 'gold',
  },
  {
    id: 'ip',
    title: '100% IP Ownership',
    description: 'All source code, database architectures, and design assets are transferred to your company. Zero vendor lock-in.',
    icon: 'Key',
    accent: 'emerald',
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do fixed-price milestone contracts work at Axorks?',
    answer:
      'Before writing a single line of code, we produce a comprehensive Technical Specification Document that defines every deliverable and acceptance criterion. We divide the total cost into milestones with projects starting from $1,000. You review and test functioning builds on staging before approving payment for each milestone.',
  },
  {
    id: 'faq-2',
    question: 'Do I get 100% intellectual property ownership?',
    answer:
      'Yes, without exceptions. Upon final milestone settlement, all source code, design assets, database schemas, and documentation are transferred to your private repositories under full commercial ownership. We retain zero proprietary lock-in.',
  },
  {
    id: 'faq-3',
    question: 'Who will actually work on my project?',
    answer:
      'Every project is architected and supervised directly by Muhammad Mujahid, Founder and Chief Systems Architect, working alongside senior domain specialists. We never outsource to unsupervised freelancers or third-party agencies. You collaborate directly with the engineers building your software.',
  },
  {
    id: 'faq-4',
    question: 'What is the minimum investment to work with Axorks?',
    answer:
      'Our projects start from $1,000. This enables growing businesses and founders to validate critical automation workflows or launch targeted MVPs without excessive capital commitments. Every project receives an itemized fixed-price proposal.',
  },
  {
    id: 'faq-5',
    question: 'Where are your offices located?',
    answer:
      'Axorks Technologies (Axorks Pvt Limited) operates physical software engineering offices in Karachi and Islamabad, Pakistan. We serve clients across North America, Europe, the Middle East, and Asia with coordinated overlapping working hours.',
  },
  {
    id: 'faq-6',
    question: 'How quickly can our project begin?',
    answer:
      'Following our initial discovery conversation, we deliver an itemized Technical Specification Document and fixed-price proposal within 24 to 48 hours. Once approved, development typically begins within three business days.',
  },
];
