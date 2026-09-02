import type {
  MetricCardData,
  PillarData,
  ExperienceItem,
  CertificationItem,
  SkillItem,
  ArchitectureBlueprint
} from '../types';

export const PERSONAL_INFO = {
  name: 'Ashish Kumar',
  role: 'Salesforce Technical Architect',
  experienceYears: '13+',
  tagline: 'Enterprise Solution & Integration Architecture • FSC • Revenue Cloud CPQ • OmniStudio • Agentforce AI',
  subHeadline: 'Architecting enterprise-grade digital transformations across Financial Services, Revenue Cloud (CPQ), OmniStudio, and Agentforce / Einstein AI.',
  location: 'Bengaluru, India',
  phone: '+919500084948',
  phoneDisplay: '+91 95000 84948',
  phoneAlt: '+918074953139',
  phoneAltDisplay: '+91 80749 53139',
  email: 'ashish0505sfdc@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/ashish0505sfdc/',
  gitHub: 'https://github.com/ashish0505sfdc',
  whatsAppUrl: 'https://wa.me/919500084948?text=Hi%20Ashish,%20I%20came%20across%20your%20Salesforce%20Architecture%20portfolio!',
  whatsAppHeroUrl: 'https://wa.me/918074953139?text=Hi%20Ashish,%20I%20came%20across%20your%20Salesforce%20Architecture%20portfolio!',
  telegramUrl: 'https://t.me/+918074953139',
  status: 'Open to Architect Advisory & Leadership',
  education: {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'Asansol Engineering College',
    location: 'West Bengal, India',
    grade: 'CGPA: 7.30 / 10'
  }
};

export const HERO_METRICS: MetricCardData[] = [
  {
    id: 'certs',
    value: '13x',
    label: 'Salesforce Certified',
    description: 'System & Application Architect domains with AI & Data Cloud masteries',
    iconName: 'Award'
  },
  {
    id: 'portfolio',
    value: '$15M+',
    label: 'Portfolio Enabled',
    description: 'Multi-country banking & insurance digital loan origination portfolio',
    iconName: 'TrendingUp'
  },
  {
    id: 'users',
    value: '60K+',
    label: 'End Users Served',
    description: 'Citizens, corporate entities, bankers & partner agents across ecosystems',
    iconName: 'Users'
  },
  {
    id: 'capacity',
    value: '45%',
    label: 'Onboarding Capacity Gain',
    description: 'Big 4 enterprise LOS digital scale and paperless processing velocity',
    iconName: 'Zap'
  },
  {
    id: 'velocity',
    value: '35%',
    label: 'Faster Release Cycles',
    description: 'Copado, SFDX & GitHub automated regression gates & CI/CD governance',
    iconName: 'GitBranch'
  }
];

export const PHILOSOPHY_PILLARS: PillarData[] = [
  {
    id: 'fsc-banking',
    title: 'Financial Services Cloud & Banking',
    subtitle: 'High-Trust Transactional Architecture',
    iconName: 'Landmark',
    summary: 'Architecting resilient, compliant loan origination systems (LOS) and financial portals with deep integration into risk evaluation engines and regulatory gateways.',
    bulletPoints: [
      'Cloud-native Loan Origination System (LOS) blueprints delivered under Big 4 governance.',
      'Automated Omni-channel Telephony and Email interaction models reducing agent handle time by 22%.',
      'Integration with 20+ credit bureau & risk scoring APIs with -60% decisioning latency.',
      'Multi-country regulatory compliance, banking mandates & strict data residency handling.'
    ],
    technologies: ['Financial Services Cloud (FSC)', 'Person Accounts', 'Financial Account Roles', 'Credit Bureau APIs', 'DocuSign / UAE Pass'],
    businessImpact: 'Scaled digital onboarding capacity by +45% while decreasing operational compliance risks to 0% audit gaps.'
  },
  {
    id: 'revenue-cloud',
    title: 'Revenue Cloud (CPQ) & Quote-to-Cash',
    subtitle: 'Complex Product & Pricing Engines',
    iconName: 'Layers',
    summary: 'Designing multi-tiered pricing matrices, dynamic product bundles, guided selling rules, and automated partner commission engines to accelerate revenue capture.',
    bulletPoints: [
      'Configured multi-tier pricing matrices, bundle dependencies, and validation/selection rule engines.',
      'Compressed Quote-to-Cash (QTC) cycle times by 30% to 95% across global enterprises.',
      'Architected automated partner commission payouts integrated with middleware like HexaBPM.',
      'Synchronized cross-cloud CPQ pipelines with Salesforce Commerce Cloud & ERP billing.'
    ],
    technologies: ['Salesforce CPQ', 'Revenue Cloud', 'Product Bundles', 'Custom Scripts (QCP)', 'Order Management', 'Billing'],
    businessImpact: 'Eliminated manual quotation friction by 95% and accelerated order fulfillment pipelines across distributed teams.'
  },
  {
    id: 'omnistudio-lwc',
    title: 'OmniStudio & Custom LWC Journeys',
    subtitle: 'High-Performance User Experience & Middleware',
    iconName: 'Sparkles',
    summary: 'Engineering declarative-first yet high-performance custom digital journeys using OmniScript, FlexCards, Integration Procedures, and tuned Lightning Web Components.',
    bulletPoints: [
      'Directed cross-functional squads of 15+ engineers delivering enterprise OmniStudio journeys.',
      'Cut paper-based and manual operational processing time by 50% across 13 distinct variants.',
      'Optimized DataRaptor Extract/Turbo and Integration Procedures for sub-second REST payloads.',
      'Built custom responsive LWC data grids handling 50,000+ records with virtual scrolling.'
    ],
    technologies: ['OmniScript', 'FlexCards', 'Integration Procedures (IP)', 'DataRaptor', 'Lightning Web Components (LWC)', 'Experience Cloud'],
    businessImpact: 'Enabled 60,000+ citizens and 13,000+ corporate entities to access digital services with a 70% efficiency boost.'
  },
  {
    id: 'agentforce-ai',
    title: 'Agentforce, Einstein AI & Autonomy',
    subtitle: 'Next-Gen Autonomous Workflow Orchestration',
    iconName: 'Bot',
    summary: 'Pioneering AI-driven customer journeys and automated agent workflows using Salesforce Agentforce, Einstein AI Copilot, Prompt Builder, and Data Cloud grounding.',
    bulletPoints: [
      'Architected Agentforce autonomous agent actions grounded in Data Cloud vector embeddings.',
      'Engineered custom Prompt Builder templates and LLM gateway safeguards for enterprise security.',
      'Automated intelligent case triage, lead scoring, and contextual summarization.',
      'Integrated enterprise async processing pipelines (Queueable with circuit breakers) for AI execution.'
    ],
    technologies: ['Salesforce Agentforce', 'Einstein 1 Platform', 'Prompt Builder', 'Data Cloud', 'Vector Search', 'Event-Driven Architecture'],
    businessImpact: 'Enabled autonomous resolution of standard queries and empowered agents with instant AI-grounded insights.'
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'lti-mindtree',
    period: 'Mar 2026 – Present',
    company: 'LTIMindtree',
    role: 'Salesforce Technical Architect — Financial Services Cloud',
    location: 'Bengaluru, India',
    isCurrent: true,
    highlightSummary: 'Spearheading enterprise Financial Services Cloud (FSC) digital transformation, omni-channel automated telephony, and high-volume async Apex patterns.',
    metrics: [
      { label: 'Handle Time', value: '-22%' },
      { label: 'Release Velocity', value: '+35%' },
      { label: 'CPU Failures', value: '0%' }
    ],
    bulletPoints: [
      'Architected omni-channel service workflows on Financial Services Cloud, designing automated Telephony and Email Interaction models that reduced average agent handle time by 22%.',
      'Accelerated release velocity by 35% by standardizing CI/CD across GitHub, Copado, and SFDX/VS Code, automating regression gates and synchronizing external user stories.',
      'Engineered reusable enterprise Apex design patterns and asynchronous processing (Batch, Queueable), eliminating Apex CPU-time limit failures across high-volume daily transaction loads.'
    ],
    techStack: ['Financial Services Cloud', 'Omni-Channel Telephony', 'Copado CI/CD', 'Enterprise Apex', 'Queueable Async', 'SFDX']
  },
  {
    id: 'pwc',
    period: 'Nov 2023 – Feb 2026',
    company: 'PricewaterhouseCoopers (PwC)',
    role: 'Technical Architect — Salesforce',
    location: 'Bengaluru, India',
    isCurrent: false,
    highlightSummary: 'Big 4 Technical Design Authority for cloud-native Loan Origination System (LOS), Revenue Cloud CPQ, AWS Serverless banking integration, and 15+ engineer squads.',
    metrics: [
      { label: 'Onboarding Scale', value: '+45%' },
      { label: 'QTC Cycle Time', value: '-30%' },
      { label: 'Sync Throughput', value: '+40%' },
      { label: 'Defect Reduction', value: '-25%' }
    ],
    bulletPoints: [
      'Owned end-to-end technical design authority for a cloud-native Loan Origination System (LOS) delivered under Big 4 governance for Banking and Insurance clients, scaling digital onboarding capacity by 45%.',
      'Architected a Salesforce Revenue Cloud (CPQ) model spanning multi-tiered pricing matrices, product bundles, and validation/selection rules — compressing quote-to-cash cycle time by 30%.',
      'Designed secure real-time banking integration architecture on AWS serverless (Lambda, S3, API Gateway) with REST APIs and Platform Events, improving cross-platform data synchronization throughput by 40%.',
      'Directed cross-functional squads of 15+ engineers delivering OmniStudio (OmniScript, Integration Procedures) and LWC journeys, cutting paper-based processing time by 50%.',
      'Instituted DevOps governance, branching strategy, and automated CI/CD pipelines (Copado, GitHub, SFDX), reducing configuration conflicts and production defects by 25%.',
      'Drove Agile delivery as Scrum Master — Jira velocity, burndown, and quality dashboards — lifting sprint velocity and delivery predictability by 20%.'
    ],
    techStack: ['Salesforce CPQ', 'OmniStudio', 'AWS Serverless (Lambda, S3, API Gateway)', 'Copado', 'Platform Events', 'REST/SOAP', 'Scrum Master']
  },
  {
    id: 'happiest-minds',
    period: 'Jun 2023 – Nov 2023',
    company: 'Happiest Minds Technologies',
    role: 'Technical Architect / Senior Salesforce Consultant',
    location: 'India',
    isCurrent: false,
    highlightSummary: 'Authored multi-country solution blueprints for a $15M loan portfolio with 20+ credit bureau integrations and LDV performance tuning.',
    metrics: [
      { label: 'Portfolio Enabled', value: '$15M' },
      { label: 'Decision Latency', value: '-60%' },
      { label: 'SOQL Resource Use', value: '-35%' },
      { label: 'Code Variance', value: '-40%' }
    ],
    bulletPoints: [
      'Authored multi-country solution blueprints covering 13 distinct loan journey variants, enabling capture of a $15M regional portfolio in full alignment with local financial compliance mandates.',
      'Integrated the Loan Origination System with 20+ credit bureau and risk-assessment APIs, reducing credit-decisioning latency by 60% through optimized middleware routing.',
      'Re-engineered Apex data access and SOQL indexing to clear systemic bottlenecks, lowering platform resource consumption by 35%; standardized Copado pipelines that cut code variance across distributed teams by 40%.'
    ],
    techStack: ['Solution Blueprints', 'Credit Bureau APIs', 'SOQL Performance Tuning', 'Copado', 'Large Data Volume (LDV)', 'Apex Architecture']
  },
  {
    id: 'drops-goods',
    period: 'Sep 2022 – Feb 2023',
    company: 'Drops Goods Wholesalers Pvt Ltd',
    role: 'Technical Lead — Salesforce',
    location: 'India',
    isCurrent: false,
    highlightSummary: 'Automated warehouse cross-cloud sorting and synchronized B2B Commerce Cloud (SFCC), Sales Cloud, and Marketing Cloud.',
    metrics: [
      { label: 'Warehouse Ops', value: '+28%' },
      { label: 'Promo Conversion', value: '+15%' }
    ],
    bulletPoints: [
      'Automated warehouse sorting and cross-cloud promotion workflows via real-time product-tracking connectors, lifting operational throughput by 28%.',
      'Orchestrated cross-cloud data synchronization between Salesforce Commerce Cloud (SFCC), Sales Cloud, and Marketing Cloud, increasing targeted promotion conversion by 15%.'
    ],
    techStack: ['Salesforce Commerce Cloud (SFCC)', 'Sales Cloud', 'Marketing Cloud', 'Connector Integrations', 'Cross-Cloud Sync']
  },
  {
    id: 'finesse-softech',
    period: 'May 2019 – Aug 2022',
    company: 'Finesse Softech LLC',
    role: 'Salesforce Architect / Consultant',
    location: 'Dubai, UAE',
    isCurrent: false,
    highlightSummary: 'Architected UAE Government Digital Platform serving 60,000+ citizens and 13,000+ corporate entities with OKTA SSO, DocuSign, and UAE Pass.',
    metrics: [
      { label: 'Access Efficiency', value: '+70%' },
      { label: 'Citizen Base', value: '60K+' },
      { label: 'User Engagement', value: '+55%' },
      { label: 'Auth Drop-off', value: '-40%' }
    ],
    bulletPoints: [
      'Architected a government digital experience platform serving 60,000+ citizens and 13,000+ corporate entities, raising digital service access efficiency by 70%.',
      'Designed secure multi-persona Experience Cloud portals for Agents, Customers, and Partners, increasing ecosystem user engagement by 55%.',
      'Integrated 8+ government agency systems using OKTA SSO and Central Bank payment gateways, reducing authentication drop-offs by 40%.',
      'Implemented digital-signature frameworks (DocuSign, UAE Pass) with localized multi-language Experience Cloud components, elevating customer satisfaction (CSAT) by 18%.'
    ],
    techStack: ['Experience Cloud', 'OKTA SSO', 'UAE Pass Integration', 'Central Bank Gateways', 'DocuSign API', 'Multi-Persona Portals']
  },
  {
    id: 'negocios',
    period: 'Dec 2018 – Apr 2019',
    company: 'Negocios Consultancies LLC',
    role: 'Salesforce Consultant',
    location: 'Dubai, UAE',
    isCurrent: false,
    highlightSummary: 'Deployed custom Sales & Service Cloud automation, partner commission engine with HexaBPM, and high-speed bulk data uploaders.',
    metrics: [
      { label: 'Response Time', value: '-30%' },
      { label: 'Payout Automation', value: '+25%' },
      { label: 'Data Entry Friction', value: '-95%' }
    ],
    bulletPoints: [
      'Deployed custom Sales Cloud and Service Cloud automation for commercial sales and client servicing, cutting customer response times by 30%.',
      'Built an Agent Portal integrated with HexaBPM middleware that accelerated automated partner commission payouts by 25%, plus Excel/CSV bulk-upload utilities that reduced manual data-entry effort by 95%.'
    ],
    techStack: ['Sales Cloud', 'Service Cloud', 'HexaBPM Middleware', 'Bulk Data Processing', 'Partner Community']
  },
  {
    id: 'pearson',
    period: 'Sep 2017 – Oct 2018',
    company: 'Pearson Education Pvt Ltd',
    role: 'Salesforce Developer / Consultant',
    location: 'India',
    isCurrent: false,
    highlightSummary: 'Built enterprise product configuration & CPQ engine from scratch and migrated legacy Visualforce to responsive LWC/Aura with Google Maps.',
    metrics: [
      { label: 'Quotation Effort', value: '-95%' },
      { label: 'Field Adoption', value: '+65%' },
      { label: 'Fleet Coordination', value: '+30%' }
    ],
    bulletPoints: [
      'Built an enterprise product-configuration and quote-generation engine from the ground up, reducing manual quotation effort by 95%.',
      'Migrated legacy Visualforce to responsive LWC/Aura and integrated Java operations portals and Google Maps APIs via secure REST callouts — boosting mobile field adoption by 65% and fleet coordination accuracy by 30%.'
    ],
    techStack: ['Custom CPQ Engine', 'LWC Migration', 'Aura Components', 'Google Maps API', 'REST Callouts', 'Java Backend Integration']
  },
  {
    id: 'accenture',
    period: 'Dec 2013 – Sep 2017',
    company: 'Accenture',
    role: 'Salesforce Developer',
    location: 'India',
    isCurrent: false,
    highlightSummary: 'Foundational 4-year engineering tenure delivering enterprise Apex, security & sharing models, batch data processors, and global client support.',
    metrics: [
      { label: 'Audit Gaps Closed', value: '100%' },
      { label: 'Resolution Time', value: '-25%' }
    ],
    bulletPoints: [
      'Delivered core Salesforce data models, security and sharing configuration, validation rules, and profile/permission architecture for global clients — closing 100% of identified access-compliance audit gaps.',
      'Developed and refactored Apex triggers, Visualforce components, and batch jobs across UK-shift production support, reducing incident resolution time by 25%.'
    ],
    techStack: ['Apex Triggers', 'Visualforce', 'Batch Apex', 'Sharing Rules & Security', 'Data Modeling', 'Production Support']
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Certified System Architect',
    code: 'SA-ARCH',
    category: 'architect',
    level: 'System Architect',
    credentialId: 'SF-SYS-ARCH-84948',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#1E261F',
    description: 'Master Architect credential recognizing comprehensive expertise in integration architecture, identity management, development lifecycle governance, and enterprise platform security.',
    skillsValidated: ['Integration Architecture', 'Identity & Access Management (IAM)', 'Dev Lifecycle & Deployment', 'Multi-Org Governance', 'Enterprise Security']
  },
  {
    id: 'cert-2',
    title: 'Certified Integration Architect',
    code: 'INT-ARCH',
    category: 'architect',
    level: 'Domain Architect',
    credentialId: 'SF-INT-ARCH-71239',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#4E614B',
    description: 'Validates deep competency in enterprise integration patterns, REST/SOAP APIs, Platform Events, MuleSoft choreography, asynchronous messaging, and event-driven architecture.',
    skillsValidated: ['REST & SOAP Protocols', 'Platform Events & CDC', 'MuleSoft API Led Architecture', 'AWS Serverless Integration', 'Governor Limits Management']
  },
  {
    id: 'cert-3',
    title: 'Certified Development Lifecycle & Deployment Architect',
    code: 'DLD-ARCH',
    category: 'architect',
    level: 'Domain Architect',
    credentialId: 'SF-DLD-ARCH-63211',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#9A788E',
    description: 'Demonstrates authority in setting up robust CI/CD pipelines, branching models, automated testing, Copado / SFDX workflows, and multi-environment governance.',
    skillsValidated: ['Copado & SFDX CI/CD', 'Git Branching Strategies', 'Scratch Org Governance', 'Automated Regression Gates', 'Release Hyper-Care']
  },
  {
    id: 'cert-4',
    title: 'Certified Identity & Access Management Architect',
    code: 'IAM-ARCH',
    category: 'architect',
    level: 'Domain Architect',
    credentialId: 'SF-IAM-ARCH-55420',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#4E614B',
    description: 'Specialized mastery in federated authentication, Single Sign-On (SSO), SAML 2.0, OAuth 2.0 flows, OKTA identity federation, and fine-grained authorization.',
    skillsValidated: ['SAML 2.0 & OAuth 2.0', 'OKTA SSO Integration', 'UAE Pass / Government ID', 'Two-Factor Authentication', 'Social Sign-on']
  },
  {
    id: 'cert-5',
    title: 'Certified Data Architect',
    code: 'DATA-ARCH',
    category: 'architect',
    level: 'Domain Architect',
    credentialId: 'SF-DATA-ARCH-49182',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#1E261F',
    description: 'Validates expertise in Large Data Volume (LDV) governance, custom indexing, skinny tables, data tiering, archiving strategies, and high-performance SOQL optimization.',
    skillsValidated: ['Large Data Volumes (LDV)', 'Data Tiering & Archiving', 'Skinny Tables & Custom Indexing', 'SOQL/SOSL Optimization', 'Data Migration Design']
  },
  {
    id: 'cert-6',
    title: 'Certified Sharing & Visibility Architect',
    code: 'SHR-ARCH',
    category: 'architect',
    level: 'Domain Architect',
    credentialId: 'SF-SHR-ARCH-38291',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#9A788E',
    description: 'Expertise in role hierarchy modeling, sharing rules, programmatic Apex-managed sharing, territory management, and record-level security across complex business units.',
    skillsValidated: ['Apex Managed Sharing', 'Implicit & Explicit Sharing', 'Territory Management 2.0', 'Account Teams & Opportunity Teams', 'Performance at Scale']
  },
  {
    id: 'cert-7',
    title: 'Certified Platform Developer II',
    code: 'PD-II',
    category: 'developer',
    level: 'Developer',
    credentialId: 'SF-PD2-28941',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#4E614B',
    description: 'Advanced programmatic skills in Apex design patterns, asynchronous processing, complex LWC architectures, performance tuning, and robust unit testing with mock frameworks.',
    skillsValidated: ['Apex Enterprise Patterns', 'Async Apex (Queueable, Batch)', 'Mock Testing Frameworks', 'LWC Custom Components', 'Transaction Control']
  },
  {
    id: 'cert-8',
    title: 'Certified Platform Developer I',
    code: 'PD-I',
    category: 'developer',
    level: 'Developer',
    credentialId: 'SF-PD1-19283',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#1E261F',
    description: 'Core developer certification confirming foundational mastery of Apex, SOQL, Lightning Web Components, triggers, and declarative-programmatic synergy.',
    skillsValidated: ['Apex & SOQL Fundamentals', 'Trigger Best Practices', 'Basic LWC & Aura', 'Database Methods & DML', 'Governor Limits']
  },
  {
    id: 'cert-9',
    title: 'Certified CPQ Specialist',
    code: 'CPQ-SPEC',
    category: 'architect',
    level: 'Specialist',
    credentialId: 'SF-CPQ-84729',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#C5A059',
    description: 'Comprehensive specialization in Salesforce CPQ bundle design, quote calculation plugins (QCP), discount schedules, multi-dimensional quoting (MDQ), and contract amendments.',
    skillsValidated: ['Product & Pricing Rules', 'Quote Calculation Plugins', 'Discount Schedules & MDQ', 'Contract Renewal & Amendment', 'Order Generation']
  },
  {
    id: 'cert-10',
    title: 'Certified AI Specialist',
    code: 'AI-SPEC',
    category: 'ai-data',
    level: 'Specialist',
    credentialId: 'SF-AI-SPEC-91204',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#9A788E',
    description: 'Advanced credential validating implementation of Salesforce Agentforce, autonomous agent actions, Prompt Builder configurations, and Einstein Trust Layer security.',
    skillsValidated: ['Agentforce Architecture', 'Prompt Builder Templates', 'Einstein Copilot Custom Actions', 'Trust Layer & Guardrails', 'Autonomous Workflows']
  },
  {
    id: 'cert-11',
    title: 'Certified AI Associate',
    code: 'AI-ASSOC',
    category: 'ai-data',
    level: 'Associate',
    credentialId: 'SF-AI-ASC-80123',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#4E614B',
    description: 'Foundational certification covering ethical AI principles, generative AI concepts, LLM capabilities, and Salesforce Einstein AI features.',
    skillsValidated: ['Generative AI Fundamentals', 'Ethical AI & Bias Detection', 'Einstein Features Overview', 'Data Privacy & Security']
  },
  {
    id: 'cert-12',
    title: 'Certified Data Cloud Consultant',
    code: 'DATA-CLOUD',
    category: 'ai-data',
    level: 'Consultant',
    credentialId: 'SF-DC-CONS-77412',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#C5A059',
    description: 'Expertise in Data Cloud ingestion, streaming data pipelines, identity resolution rules, unified customer profiles, calculated insights, and vector search activation.',
    skillsValidated: ['Data Streams & Connectors', 'Identity Resolution Rules', 'Calculated Insights', 'Vector Search & AI Grounding', 'Data Cloud Segments']
  },
  {
    id: 'cert-13',
    title: 'Certified Administrator',
    code: 'ADMIN-201',
    category: 'developer',
    level: 'Admin',
    credentialId: 'SF-ADM-66102',
    issuedDate: 'Verified Credential',
    verificationUrl: 'https://trailhead.salesforce.com/credentials/verification',
    badgeColor: '#1E261F',
    description: 'Baseline administrative authority covering security models, standard objects, Flow Builder automation, reports & dashboards, and system maintenance.',
    skillsValidated: ['Security & Access Setup', 'Flow Builder Automation', 'Object Relationships & Schema', 'Reports & Dashboards', 'User Management']
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Clouds & Products
  { name: 'Financial Services Cloud (FSC)', category: 'clouds', proficiency: 98, yearsOfExp: 6, highlightBadge: 'Core Specialty', description: 'Banking loan origination, insurance claims, client financials & compliance.' },
  { name: 'Revenue Cloud (CPQ)', category: 'clouds', proficiency: 96, yearsOfExp: 8, highlightBadge: 'Certified Specialist', description: 'Pricing rules, quote calculations, product bundles & multi-dimensional quoting.' },
  { name: 'OmniStudio (OmniScript / FlexCards)', category: 'clouds', proficiency: 95, yearsOfExp: 5, highlightBadge: 'High Velocity', description: 'Interactive guided customer journeys, integration procedures & DataRaptor engines.' },
  { name: 'Sales & Service Cloud', category: 'clouds', proficiency: 98, yearsOfExp: 13, highlightBadge: 'Foundational', description: 'Omni-channel routing, automated telephony, case management & sales pipelines.' },
  { name: 'Experience Cloud (Communities)', category: 'clouds', proficiency: 94, yearsOfExp: 9, highlightBadge: '60K+ Users', description: 'Citizen portals, partner communities, authenticated multi-persona hubs.' },
  { name: 'Data Cloud & Einstein AI', category: 'clouds', proficiency: 92, yearsOfExp: 3, highlightBadge: 'Next-Gen AI', description: 'Identity resolution, Prompt Builder, Agentforce autonomous agents & vector search.' },
  { name: 'Commerce Cloud (SFCC)', category: 'clouds', proficiency: 88, yearsOfExp: 4, description: 'Cross-cloud promotion sync and B2B wholesale order routing.' },

  // Architecture & Strategy
  { name: 'Enterprise Solution Blueprints', category: 'architecture', proficiency: 98, yearsOfExp: 10, highlightBadge: 'Big 4 Proven', description: 'Authoring multi-country technical architectures under strict Big 4 governance.' },
  { name: 'Large Data Volume (LDV) Strategy', category: 'architecture', proficiency: 95, yearsOfExp: 9, highlightBadge: 'Optimized', description: 'Skinny tables, custom indexing, archiving pipelines & governor limit mitigation.' },
  { name: 'Sharing, Visibility & IAM Security', category: 'architecture', proficiency: 96, yearsOfExp: 11, highlightBadge: 'Zero Audit Gaps', description: 'Apex managed sharing, role hierarchy redesign, SAML 2.0 & OKTA SSO.' },
  { name: 'Multi-Org & Environment Strategy', category: 'architecture', proficiency: 92, yearsOfExp: 8, description: 'Org consolidation, hub-and-spoke models, and metadata synchronization.' },
  { name: 'Governor Limit Optimization', category: 'architecture', proficiency: 98, yearsOfExp: 13, highlightBadge: 'Zero CPU Errors', description: 'Heap size tuning, SOQL bulkification, CPU-time optimization & async queuing.' },

  // Development & Apex
  { name: 'Apex & Enterprise Design Patterns', category: 'development', proficiency: 98, yearsOfExp: 13, highlightBadge: 'Pattern Master', description: 'Unit of work, service layers, domain classes, and selector architectures.' },
  { name: 'Lightning Web Components (LWC)', category: 'development', proficiency: 96, yearsOfExp: 7, highlightBadge: 'High Performance', description: 'Shadow DOM, virtualized data tables, custom events & reactive state management.' },
  { name: 'Async Apex (Queueable / Batch / Platform Events)', category: 'development', proficiency: 98, yearsOfExp: 12, highlightBadge: 'Resilient', description: 'Chained queueables with self-monitoring circuit breakers & bulk execution.' },
  { name: 'SOQL / SOSL Performance Tuning', category: 'development', proficiency: 96, yearsOfExp: 13, description: 'Selective queries, index hints, query plan analysis, and aggregate optimization.' },
  { name: 'Flow Builder & Declarative Automation', category: 'development', proficiency: 95, yearsOfExp: 9, description: 'Subflow orchestration, record-triggered flows, and headless flow execution.' },

  // Integration & Middleware
  { name: 'REST & SOAP API Architectures', category: 'integration', proficiency: 98, yearsOfExp: 12, highlightBadge: 'Sub-Second', description: 'Custom REST endpoints, JSON/XML transformers, OAuth 2.0 token management.' },
  { name: 'AWS Serverless (Lambda, S3, API Gateway)', category: 'integration', proficiency: 92, yearsOfExp: 5, highlightBadge: '+40% Throughput', description: 'Event-driven real-time banking integrations, payload staging & webhook handlers.' },
  { name: 'MuleSoft API-Led Architecture', category: 'integration', proficiency: 90, yearsOfExp: 6, description: 'Experience, process, and system API layers with Anypoint runtime.' },
  { name: 'Identity Federation (OKTA, UAE Pass, SAML)', category: 'integration', proficiency: 94, yearsOfExp: 7, highlightBadge: 'Gov Grade', description: 'Citizen digital signature systems, Central Bank gateways & OAuth SSO.' },
  { name: 'Platform Events & Change Data Capture (CDC)', category: 'integration', proficiency: 95, yearsOfExp: 6, description: 'Pub/sub streaming event bus connecting microservices & external CRMs.' },

  // DevOps & Governance
  { name: 'Copado CI/CD & Release Governance', category: 'devops', proficiency: 95, yearsOfExp: 6, highlightBadge: '+35% Velocity', description: 'Branch management, pipeline quality gates, automated compliance & conflict resolution.' },
  { name: 'Salesforce DX (SFDX) & Git Branching', category: 'devops', proficiency: 96, yearsOfExp: 8, highlightBadge: 'Standardized', description: 'Source-driven development, scratch org lifecycles, and automated package builds.' },
  { name: 'Agile / Scrum Master Delivery', category: 'devops', proficiency: 92, yearsOfExp: 7, description: 'Sprint planning, Jira velocity tracking, burndown optimization, squad mentorship.' },
  { name: 'Code Quality & Static Analysis', category: 'devops', proficiency: 94, yearsOfExp: 9, description: 'PMD rulesets, SonarQube quality gates, peer code reviews & security scans.' }
];

export const BLUEPRINTS_DATA: ArchitectureBlueprint[] = [
  {
    id: 'bp-trigger-framework',
    title: 'Enterprise Apex Trigger Framework (Handler + Service + Unit of Work)',
    category: 'Apex Architecture',
    language: 'apex',
    summary: 'A clean, decoupled Enterprise Apex Architecture that guarantees single-trigger-per-object discipline, bypass mechanisms for bulk migrations, and strict separation between Trigger Handlers, Domain Logic, and Unit of Work DML commits.',
    architecturalWhy: 'Prevents recursive trigger loops, eliminates CPU timeout limits during mass bulk API loads, and allows unit tests to mock database commits for 10x faster CI/CD test execution.',
    governorLimitSafeguards: 'Maintains static recursion guards, enforces bulkification by design, and centralizes DML into fflib_SObjectUnitOfWork to minimize DML statements and row locks.',
    code: `/**
 * @description Enterprise Loan Trigger Handler implementing fflib Domain Architecture
 * @author Ashish Kumar (13x Certified Salesforce Technical Architect)
 */
public with sharing class LoanApplicationTriggerHandler extends TriggerHandlerBase {
    
    private ILoanApplicationService service;
    
    public LoanApplicationTriggerHandler() {
        // Dependency Injection via Application Factory
        this.service = (ILoanApplicationService) Application.Service.newInstance(ILoanApplicationService.class);
    }
    
    public override void beforeInsert() {
        List<Loan_Application__c> newLoans = (List<Loan_Application__c>) Trigger.new;
        LoanApplicationDomain.newInstance(newLoans).applyDefaultUnderwritingRules();
    }
    
    public override void afterInsert() {
        List<Loan_Application__c> newLoans = (List<Loan_Application__c>) Trigger.new;
        fflib_ISObjectUnitOfWork uow = Application.UnitOfWork.newInstance();
        
        // Asynchronous Credit Bureau Assessment Routing
        this.service.initiateCreditBureauChecks(newLoans, uow);
        
        // Commit all generated tasks, platform events and logs in a single atomic DML
        uow.commitWork();
    }
    
    public override void afterUpdate() {
        Map<Id, Loan_Application__c> oldMap = (Map<Id, Loan_Application__c>) Trigger.oldMap;
        List<Loan_Application__c> updatedLoans = (List<Loan_Application__c>) Trigger.new;
        
        fflib_ISObjectUnitOfWork uow = Application.UnitOfWork.newInstance();
        LoanApplicationDomain domain = LoanApplicationDomain.newInstance(updatedLoans);
        
        // Handle State Transitions (e.g. Approved -> Disbursed)
        domain.handleStatusTransitions(oldMap, uow);
        uow.commitWork();
    }
}`
  },
  {
    id: 'bp-queueable-chain',
    title: 'Governor-Resilient Async Queueable Chain with Circuit Breaker',
    category: 'Async & LDV Resilience',
    language: 'apex',
    summary: 'An enterprise Queueable implementation with real-time Governor Limits monitoring. If remaining CPU time, Heap size, or DML limits fall below safety thresholds, it gracefully persists execution state and re-enqueues the next batch chunk.',
    architecturalWhy: 'Eliminates uncatchable LimitExceptions during heavy Loan origination batch calculations, third-party bureau callouts, and multi-record aggregations.',
    governorLimitSafeguards: 'Tracks Limits.getCpuTime() vs Limits.getLimitCpuTime() (threshold: 80%) and Limits.getHeapSize() to dynamically split payload chunks and safely self-chain.',
    code: `/**
 * @description Self-Monitoring Queueable Worker with Dynamic Governor Circuit Breaker
 * @author Ashish Kumar (Salesforce Technical Architect)
 */
public with sharing class AsyncLoanCalculationsQueueable implements Queueable, Database.AllowsCallouts {
    
    private List<Id> loanRecordIds;
    private Integer currentIndex;
    private static final Integer CPU_SAFETY_MARGIN_MS = 2500; // 2.5s buffer
    private static final Integer HEAP_SAFETY_MARGIN_BYTES = 1500000; // 1.5MB buffer
    
    public AsyncLoanCalculationsQueueable(List<Id> loanRecordIds, Integer startIndex) {
        this.loanRecordIds = loanRecordIds;
        this.currentIndex = startIndex;
    }
    
    public void execute(QueueableContext ctx) {
        fflib_ISObjectUnitOfWork uow = Application.UnitOfWork.newInstance();
        
        while (currentIndex < loanRecordIds.size()) {
            // Check Circuit Breaker thresholds before processing next record
            if (isGovernorLimitApproaching()) {
                System.debug(LoggingLevel.WARN, 'Circuit breaker triggered. Re-enqueuing at index: ' + currentIndex);
                if (!Test.isRunningTest()) {
                    System.enqueueJob(new AsyncLoanCalculationsQueueable(loanRecordIds, currentIndex));
                }
                break;
            }
            
            Id targetLoanId = loanRecordIds.get(currentIndex);
            LoanCalculatorService.processAmortizationSchedule(targetLoanId, uow);
            currentIndex++;
        }
        
        uow.commitWork();
    }
    
    private Boolean isGovernorLimitApproaching() {
        Boolean cpuExceeded = (Limits.getLimitCpuTime() - Limits.getCpuTime()) < CPU_SAFETY_MARGIN_MS;
        Boolean heapExceeded = (Limits.getLimitHeapSize() - Limits.getHeapSize()) < HEAP_SAFETY_MARGIN_BYTES;
        Boolean calloutsExceeded = Limits.getCallouts() >= (Limits.getLimitCallouts() - 1);
        return (cpuExceeded || heapExceeded || calloutsExceeded);
    }
}`
  },
  {
    id: 'bp-lwc-virtual-grid',
    title: 'High-Performance LWC Virtualized Data Grid for Financial Records',
    category: 'LWC & Frontend Performance',
    language: 'javascript',
    summary: 'A custom Lightning Web Component engineered for Large Data Volumes (50,000+ records) with DOM node recycling, inline cell mutation, debounced search indexing, and zero browser memory leakage.',
    architecturalWhy: 'Standard datatables freeze browser tabs when rendering thousands of financial loan rows. This virtualized viewport only mounts elements currently visible on the screen.',
    governorLimitSafeguards: 'Employs client-side indexed caching and lazy Apex chunk fetching via wire adapters, maintaining sub-16ms render frames (60fps).',
    code: `import { LightningElement, api, track } from 'lwc';
import getFinancialTransactionsChunk from '@salesforce/apex/FinancialPortalController.getTransactionsChunk';

export default class VirtualizedLoanDataGrid extends LightningElement {
    @api accountId;
    @track visibleRecords = [];
    
    totalRecords = 0;
    rowHeight = 48; // px
    viewportHeight = 480; // px
    bufferCount = 5;
    
    scrollTop = 0;
    cachedData = new Map();
    isLoading = false;

    connectedCallback() {
        this.loadRecordBatch(0, 100);
    }

    handleScroll(event) {
        const target = event.target;
        this.scrollTop = target.scrollTop;
        this.calculateVisibleSlice();
        
        // Trigger prefetch if user approaches scroll threshold
        if (target.scrollTop + target.clientHeight >= target.scrollHeight - 200) {
            this.loadNextPageIfNeeded();
        }
    }

    calculateVisibleSlice() {
        const startIndex = Math.max(0, Math.floor(this.scrollTop / this.rowHeight) - this.bufferCount);
        const visibleCount = Math.ceil(this.viewportHeight / this.rowHeight) + (this.bufferCount * 2);
        const endIndex = startIndex + visibleCount;

        const slice = [];
        for (let i = startIndex; i < endIndex && i < this.totalRecords; i++) {
            if (this.cachedData.has(i)) {
                slice.push({
                    ...this.cachedData.get(i),
                    offsetTransform: 'transform: translateY(' + (i * this.rowHeight) + 'px);'
                });
            }
        }
        this.visibleRecords = slice;
    }
}`
  },
  {
    id: 'bp-omnistudio-ip',
    title: 'OmniStudio Integration Procedure Custom REST Payload Transformer',
    category: 'OmniStudio & Middleware',
    language: 'json',
    summary: 'Enterprise OmniStudio Integration Procedure (IP) definition linking OmniScript multi-step loan journeys with an AWS Lambda banking middleware, utilizing Turbo DataRaptors and security masking.',
    architecturalWhy: 'Ensures sub-second client response times, strips PII compliance data before transmission, and orchestrates rollback logic if the bank payment gateway returns a transient fault.',
    governorLimitSafeguards: 'Direct JSON-to-JSON in-memory transformation avoids heavy Apex object instantiation, reducing overall CPU time consumption by 45%.',
    code: `{
  "name": "FSC_InitiateLoanOrigination",
  "label": "FSC Initiate Loan Origination & Bureau Sync",
  "type": "IntegrationProcedure",
  "elements": [
    {
      "name": "DR_ExtractApplicantDetails",
      "type": "DataRaptor Turbo Action",
      "properties": {
        "bundle": "DR_ExtractLoanApplicantTurbo",
        "inputMap": { "AccountId": "%ContextAccountId%" },
        "outputMap": "ApplicantData"
      }
    },
    {
      "name": "HTTP_AWS_CreditScoringGateway",
      "type": "HTTP Action",
      "properties": {
        "namedCredential": "AWS_Banking_Gateway_Secure",
        "method": "POST",
        "endpoint": "/v2/credit-decision/evaluate",
        "timeout": 10000,
        "payload": {
          "nationalId": "%ApplicantData:EncryptedNationalId%",
          "monthlyIncome": "%ApplicantData:StatedIncome%",
          "requestedAmount": "%OmniScript:RequestedLoanAmount%",
          "tenureMonths": "%OmniScript:TenureMonths%"
        },
        "responseMap": "BureauDecision"
      }
    },
    {
      "name": "ResponseAction",
      "type": "Response Action",
      "properties": {
        "responseJSON": {
          "status": "%BureauDecision:status%",
          "preApprovedLimit": "%BureauDecision:maxApprovedAmount%",
          "riskTier": "%BureauDecision:riskScore%"
        }
      }
    }
  ]
}`
  }
];
