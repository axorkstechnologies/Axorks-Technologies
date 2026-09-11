export interface CareerRole {
  id: string;
  title: string;
  experience: string;
  department: string;
  location: string;
  overview: string;
  requirements: string[];
  tags: string[];
  accent: 'gold' | 'emerald' | 'violet' | 'cyan' | 'wine';
}

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'bdo-sales',
    title: 'Business Development Officers & Sales Executives',
    experience: 'Minimum 3+ Years',
    department: 'Commercial & Growth',
    location: 'Karachi / Islamabad / Remote',
    overview:
      'Lead international client qualification, enterprise proposal synthesis, and commercial negotiations for bespoke engineering engagements.',
    requirements: [
      'Documented B2B software sales track record with North American and European enterprise clients',
      'Strong technical literacy in custom software, AI automations, and cloud delivery models',
      'Experience authoring milestone-based technical proposals and scope definitions',
    ],
    tags: ['B2B Sales', 'Enterprise', 'Proposals', 'Client Relations'],
    accent: 'gold',
  },
  {
    id: 'fullstack-dev',
    title: 'Software Engineers / Full-Stack Developers',
    experience: '3 to 5 Years',
    department: 'Core Engineering',
    location: 'Karachi / Islamabad',
    overview:
      'Design, architect, and ship high-throughput web applications, microservices, and secure relational database architectures.',
    requirements: [
      'Deep proficiency in TypeScript, React, Next.js, Node.js, and PostgreSQL',
      'Proven expertise designing clean REST and GraphQL APIs with role-based access control',
      'Experience with Docker, CI/CD automated deployment pipelines, and cloud infrastructure',
    ],
    tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
    accent: 'emerald',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Application Developers (Flutter / Native)',
    experience: '3 to 5 Years',
    department: 'Mobile Engineering',
    location: 'Karachi / Islamabad',
    overview:
      'Build native-performance cross-platform iOS and Android applications with smooth animations and resilient offline-first data sync.',
    requirements: [
      'Advanced Flutter and Dart architecture (Bloc / Riverpod / clean architecture)',
      'Native iOS/Android platform bridging, background execution, and push notifications',
      'Published production applications on Apple App Store and Google Play Store',
    ],
    tags: ['Flutter', 'Dart', 'iOS', 'Android', 'Firebase'],
    accent: 'violet',
  },
  {
    id: 'web-dev',
    title: 'Web Developers',
    experience: '3 to 5 Years',
    department: 'Frontend & Systems',
    location: 'Karachi / Islamabad',
    overview:
      'Engineer responsive, accessible, high-performance web interfaces and design systems with micro-interactions and liquid layouts.',
    requirements: [
      'Mastery of modern CSS, Tailwind CSS, semantic HTML5, and Core Web Vitals optimization',
      'Solid component-driven development with React, TypeScript, and state management',
      'Experience implementing complex e-commerce, portal, and dashboard interfaces',
    ],
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'HTML5', 'UX'],
    accent: 'cyan',
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineers & Neural Networks Engineers',
    experience: '3 to 5 Years',
    department: 'Applied AI & Neural Systems',
    location: 'Karachi / Islamabad / Remote',
    overview:
      'Architect autonomous multi-agent pipelines, RAG systems, vector embeddings, and domain-specific fine-tuned neural models.',
    requirements: [
      'Hands-on experience with LLM orchestration frameworks, LangChain/LlamaIndex, and Vector DBs',
      'Strong background in PyTorch, Python, model quantization, and production inference optimization',
      'Proven delivery of operational enterprise automation workflows or document intelligence',
    ],
    tags: ['Python', 'PyTorch', 'LangChain', 'RAG', 'LLM'],
    accent: 'wine',
  },
  {
    id: 'web3-dev',
    title: 'Web3 / Blockchain Developers (including Smart Contracts)',
    experience: '3 to 5 Years',
    department: 'Decentralized Systems',
    location: 'Karachi / Islamabad / Remote',
    overview:
      'Develop, audit, and deploy secure smart contracts, DeFi protocols, tokenomics architectures, and decentralized integrations.',
    requirements: [
      'Deep expertise in Solidity, Hardhat/Foundry, EVM architecture, and smart contract security',
      'Experience integrating wallet providers, ethers.js/viem, and indexers (The Graph)',
      'Track record of mainnet contract deployments with zero critical vulnerabilities',
    ],
    tags: ['Solidity', 'Hardhat', 'Ethereum', 'DeFi', 'Web3.js'],
    accent: 'gold',
  },
];
