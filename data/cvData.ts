import type { CVData } from '../types.ts';

export const cvData: CVData = {
  personal: {
    name: 'Robin Bril (Bsc.)',
    phone: '+(31)640446732',
    email: 'robin.bril@gmail.com',
    linkedin: 'https://www.linkedin.com/in/robin-bril/',
    linkedinHandle: "robin-bril",
  },
  en: {
    navLinks: [
      { href: '#about', text: 'About' },
      { href: '#experience', text: 'Experience' },
      { href: '#projects', text: 'Projects' },
      { href: '#skills', text: 'Skills' },
      { href: '#education', text: 'Education' },
      { href: '#contact', text: 'Contact' },
    ],
    hero: {
      subtitle: 'Senior AI & Data Consultant',
      name: 'Robin Bril',
      description: 'A results-driven Senior Consultant with over 5 years of experience at the intersection of data, AI, and process optimization.',
      cta1: 'View Experience',
      cta2: 'robin.bril@gmail.com',
    },
    about: {
      title: 'About Me',
      overview: 'Professional Overview',
      description: `A results-driven Consultant with over 5 years of experience at the intersection of data, AI, and process optimization. My cum laude degree in Business Administration provides a strategic framework for my deep technical background, allowing me to translate complex business requirements into practical and scalable technical solutions. I specialize in developing <strong>on-premise AI systems</strong> and <strong>automating complex workflows</strong>. Committed to continuous innovation, I also actively coach colleagues in the practical application of <strong>AI</strong>.`,
      highlights: ['Data-Private AI Systems', 'Agentic AI Frameworks', 'Process Automation', 'Stakeholder Management'],
    },
    experienceSection: {
      title: 'Work Experience',
    },
    projectsSection: {
        title: 'Projects',
    },
    skillsSection: {
      title: 'Skills & Expertise',
    },
    educationSection: {
      title: 'Education',
    },
    developmentSection: {
      title: 'Professional Development',
    },
    interestsSection: {
      title: 'Personal Interests',
    },
    contactSection: {
      title: 'Get In Touch',
      description: "Feel free to reach out via phone, email, or LinkedIn. I'm always open to discussing new opportunities and connections.",
      linkedinProfile: 'LinkedIn Profile',
    },
  },
  nl: {
    navLinks: [
      { href: '#about', text: 'Over Mij' },
      { href: '#experience', text: 'Ervaring' },
      { href: '#projects', text: 'Projecten' },
      { href: '#skills', text: 'Vaardigheden' },
      { href: '#education', text: 'Opleiding' },
      { href: '#contact', text: 'Contact' },
    ],
    hero: {
      subtitle: 'Senior AI & Data Consultant',
      name: 'Robin Bril',
      description: 'Een resultaatgerichte Senior Consultant met meer dan 5 jaar ervaring op het snijvlak van data, AI en procesoptimalisatie.',
      cta1: 'Bekijk Ervaring',
      cta2: 'robin.bril@gmail.com',
    },
    about: {
      title: 'Over Mij',
      overview: 'Professioneel Overzicht',
      description: `Een resultaatgerichte Consultant met meer dan 5 jaar ervaring op het snijvlak van data, AI en procesoptimalisatie. Mijn cum laude behaalde diploma Bedrijfskunde vormt een strategisch kader voor mijn diepgaande technische achtergrond, waardoor ik complexe bedrijfsvereisten kan vertalen naar praktische en schaalbare technische oplossingen. Ik ben gespecialiseerd in het ontwikkelen van <strong>on-premise AI-systemen</strong> en het <strong>automatiseren van complexe workflows</strong>. Toegewijd aan continue innovatie, coach ik ook actief collega's in de praktische toepassing van <strong>AI</strong>.`,
      highlights: ['Data-Private AI Systemen', 'Agentic AI Frameworks', 'Procesautomatisering', 'Stakeholdermanagement'],
    },
    experienceSection: {
      title: 'Werkervaring',
    },
    projectsSection: {
        title: 'Projecten',
    },
    skillsSection: {
      title: 'Vaardigheden & Expertise',
    },
    educationSection: {
      title: 'Opleiding',
    },
    developmentSection: {
      title: 'Professionele Ontwikkeling',
    },
    interestsSection: {
      title: 'Persoonlijke Interesses',
    },
    contactSection: {
      title: 'Neem Contact Op',
      description: "Neem gerust contact op via telefoon, e-mail of LinkedIn. Ik sta altijd open voor het bespreken van nieuwe kansen en connecties.",
      linkedinProfile: 'LinkedIn Profiel',
    },
  },
  experience: [
    {
      role: { en: 'Artificial Intelligence Developer (Freelance)', nl: 'Artificial Intelligence Developer (Freelance)' },
      company: 'Virelio',
      period: '2025 – Present',
      tasks: [
        'Built 17 AI tools and 200+ automations for experimentation purposes and clients ranging from scale‑ups to corporates.',
        'Shipped a data-private AI assistant indexing millions of files and answering in < 1s via Slack, Teams, and WebRTC voice.',
        'Built on-premise multi-agent frameworks connected to SharePoint, Jira, HubSpot, and e‑commerce stacks through custom flows, noticeably reducing repetitive follow-up and manual work.',
      ],
      skills: ['Multi-agent Frameworks', 'Data-Private AI', 'Workflow Automation', 'System Integration'],
    },
    {
      role: { en: 'Artificial Intelligence Developer', nl: 'Artificial Intelligence Developer' },
      company: 'Ministry of Defence',
      period: '2024 – Present',
      tasks: [
        'Led the development of the first fully private, on‑prem AI tool ‘DefGPT Pro’ for 100,000+ employees.',
        'Significantly improved the LLM’s capabilities by adding Multi-agent frameworks, MCP-servers, and RAG/knowledge base functionality, and by using OpenAI’s most powerful on-premise tool.',
      ],
      skills: ['On-Premise AI', 'LLM Enhancement', 'RAG', 'Project Leadership'],
    },
    {
      role: { en: 'Data Consultant', nl: 'Data Consultant' },
      company: 'Ministry of Defence',
      period: '2024 – Present',
      tasks: [
        "Led daily stakeholder requirements interviews to identify stakeholders' priorities, translating their operational needs into 187 measurable KPIs.",
        "Gave multiple AI workshops to the analytics department, preparing them to be the first pilot group for the ‘DefGPT Pro’ tool.",
        "Developed 8 dashboards in Power BI and SAP that transform data into actionable intelligence, enabling evidence-based decision-making.",
      ],
      skills: ['Stakeholder Requirements', 'KPI Development', 'Power BI', 'SAP', 'AI Training'],
    },
     {
      role: { en: 'Data Consultant', nl: 'Data Consultant' },
      company: 'Capgemini',
      period: '2024 – Present',
      tasks: [
        'Hosted an “Advanced AI in Practice” workshop to 450 data scientists (AI Software development, RAG, Agentic AI, Data governance).',
      ],
      skills: ['AI Workshop', 'RAG', 'Agentic AI', 'Data Governance'],
    },
    {
      role: { en: 'Data Analyst', nl: 'Data Analyst' },
      company: 'Road',
      period: '2022 – 2024',
      tasks: [
        'Partnered with departments to assess analytical needs and delivered customized dashboards and data insights within the Google ecosystem (Looker, BigQuery, and Google Sheets).',
        'Consulted on market trends, KPIs, and competitor performance, presenting data-driven insights to support board-level decision-making.',
      ],
      skills: ['Looker', 'BigQuery', 'Google Sheets', 'Data Visualization', 'Business Intelligence'],
    },
    {
      role: { en: 'Founder', nl: 'Oprichter' },
      company: 'Quotum Consultancy',
      period: '2021 – 2024',
      tasks: [
        'Built and ran a crypto-focused full stack financial data data platform serving 160 paying members, covering on-chain, derivatives and macro data for informed decision-making.',
      ],
      skills: ['Full Stack Development', 'Financial Data', 'Platform Building', 'Entrepreneurship'],
    },
    {
      role: { en: 'Traineeship Process Management', nl: 'Traineeship Procesmanagement' },
      company: 'SBB',
      period: '2020 - 2021',
      tasks: [
        'Streamlined construction project workflows, saving project costs and reduced rework and clearer documentation.',
        'Interviewed stakeholders and Introduced a standardised documentation system that improved cross‑team collaboration and information clarity.',
      ],
      skills: ['Process Management', 'Workflow Optimization', 'Documentation Systems'],
    },
  ],
  projects: [
    { title: { en: 'AI Image Editor', nl: 'AI Beeldbewerker' }, icon: 'fas fa-image' },
    { title: { en: 'Automated HR Chatbot', nl: 'Automatische HR Chatbot' }, icon: 'fas fa-robot' },
    { title: { en: 'Automated HR Lead Scraper', nl: 'Automatische HR Leadscraper' }, icon: 'fas fa-search' },
    { title: { en: 'AI Meeting Assistant (Auto-Minutes & Scheduling)', nl: 'AI Vergaderassistent (Notulen & Planning)' }, icon: 'fas fa-calendar-check' },
    { title: { en: 'Advanced AI for Defense', nl: 'Geavanceerde AI voor Defensie' }, icon: 'fas fa-shield-halved' },
    { title: { en: 'On-Premise RAG Implementation', nl: 'On-Premise RAG-tool' }, icon: 'fas fa-database' },
    { title: { en: 'AI Outlook Calendar Agent', nl: 'AI Outlook Agenda Agent' }, icon: 'fas fa-calendar-alt' },
    { title: { en: 'LinkedIn Outreach & Prospecting AI', nl: 'LinkedIn Outreach & Prospecting AI' }, icon: 'fab fa-linkedin' },
    { title: { en: 'Automated Grocery Ordering System', nl: 'Geautomatiseerd Boodschappenbestelsysteem' }, icon: 'fas fa-shopping-cart' },
    { title: { en: 'Internal Corporate Knowledge Base', nl: 'Interne Bedrijfskennisbank' }, icon: 'fas fa-book' },
    { title: { en: 'AI-Powered Full-Stack Website for Client', nl: 'AI-Gedreven Full-Stack Website voor Klant' }, icon: 'fas fa-globe' },
    { title: { en: 'Full-Stack AI Agent (Internal @ Capgemini)', nl: 'Full-Stack AI-agent (Intern @ Capgemini)' }, icon: 'fas fa-user-secret' },
    { title: { en: 'Various AI Automations (Internal @ Capgemini)', nl: 'Diverse AI-Automatiseringen (Intern @ Capgemini)' }, icon: 'fas fa-cogs' },
    { title: { en: 'Personal Full-Stack AI Agent', nl: 'Persoonlijke Full-Stack AI-agent' }, icon: 'fas fa-user-astronaut' },
  ],
  skills: {
    core: {
      title: { en: 'Core Business & Consulting', nl: 'Kernvaardigheden & Consulting' },
      icon: 'fas fa-tools',
      skills: [
        { name: 'Process Analysis & Optimization', level: 90 },
        { name: 'Stakeholder Management', level: 95 },
        { name: 'AI Strategy & Implementation', level: 90 },
        { name: 'Project Coordination', level: 85 },
        { name: 'Business Requirements Analysis', level: 95 },
      ],
    },
    languages: [
      { name: 'Dutch', level: { en: 'Native', nl: 'Moedertaal' }, value: 100 },
      { name: 'English', level: { en: 'Fluent', nl: 'Vloeiend' }, value: 95 },
    ],
  },
  programmingLanguages: [
    { name: 'Python', category: 'Backend' },
    { name: 'ABAP', category: 'Backend' },
    { name: 'SQL', category: 'Data' },
    { name: 'OpenSQL', category: 'Data' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'HTML/CSS', category: 'Frontend' },
  ],
  education: [
    {
      degree: { en: 'BSc Business Administration (Cum Laude)', nl: 'BSc Bedrijfskunde (Cum Laude)' },
      institution: 'Amsterdam University of Applied Sciences',
      period: '2018 - 2023',
      icon: 'fas fa-graduation-cap',
    },
    {
      degree: { en: 'Minor: Business Process Analytics Management', nl: 'Minor: Business Process Analytics Management' },
      institution: 'Amsterdam University of Applied Sciences',
      period: '2021 - 2022',
      icon: 'fas fa-chart-line',
    },
    {
      degree: { en: 'Chairman Social Media Committee', nl: 'Voorzitter Social Media Commissie' },
      institution: 'Study Association Nostro',
      period: '2021 - 2022',
      icon: 'fas fa-users',
    },
  ],
  development: [
    {
      title: { en: 'Deep Learning Specialization', nl: 'Deep Learning Specialisatie' },
      issuer: 'Stanford / Deeplearning.AI',
      period: '2025',
      description: {en: "Specialization covering the foundations of Deep Learning, understanding how to build neural networks, and how to lead successful machine learning projects.", nl:"Specialisatie over de fundamenten van Deep Learning, het bouwen van neurale netwerken en het leiden van succesvolle machine learning-projecten."},
      tools: ['Python', 'TensorFlow', 'Neural Networks'],
      icon: 'fas fa-award',
    },
    {
      title: { en: 'Power BI Data Analyst (PL-300)', nl: 'Power BI Data Analyst (PL-300)' },
      issuer: 'Microsoft',
      period: '2025',
      description: {en: "Certification for designing and building scalable data models, cleaning and transforming data, and enabling advanced analytic capabilities that provide meaningful business value.", nl:"Certificering voor het ontwerpen en bouwen van schaalbare datamodellen, het opschonen en transformeren van gegevens en het mogelijk maken van geavanceerde analysemogelijkheden."},
      tools: ['Power BI', 'DAX', 'Data Modeling'],
      icon: 'fas fa-award',
    },
    {
      title: { en: 'Advanced & Dimensional Data Modeling', nl: 'Advanced & Dimensional Data Modeling' },
      issuer: 'Capgemini',
      period: '2024',
      description: {en: "Advanced training in creating robust and scalable data models for analytics.", nl:"Gevorderde training in het creëren van robuuste en schaalbare datamodellen voor analyse."},
      icon: 'fas fa-database',
    },
    {
      title: { en: 'Structured Query Language (SQL) | Advanced', nl: 'Structured Query Language (SQL) | Gevorderd' },
      issuer: 'DataCamp',
      period: '2024',
      description: {en: "Completed advanced SQL training, focusing on complex queries, performance tuning, and database management.", nl: "Voltooide geavanceerde SQL-training, gericht op complexe query's, prestatie-optimalisatie en databasebeheer."},
      icon: 'fas fa-database',
    },
     {
      title: { en: 'Lean Six Sigma Master Black Belt', nl: 'Lean Six Sigma Master Black Belt' },
      issuer: 'LinkedIn',
      period: '2022',
      description: {en: "Master-level certification in process improvement methodologies.", nl: "Master-certificering in methodologieën voor procesverbetering."},
      icon: 'fas fa-ribbon',
    },
    {
      title: { en: '1st Place National ROI Competition', nl: '1e Plaats Nationale ROI Competitie' },
      issuer: 'Mutual Fund Investment Club Amsterdam',
      period: '2022-2024',
      description: {en: "Secured first place in a national ROI competition in the Netherlands.", nl: "Behaalde de eerste plaats in een nationale ROI-competitie in Nederland."},
      icon: 'fas fa-trophy',
    }
  ],
  interests: [
    { name: { en: 'Tennis', nl: 'Tennis' }, icon: 'fas fa-table-tennis-paddle-ball', color: 'text-red-500' },
    { name: { en: 'Fitness', nl: 'Fitness' }, icon: 'fas fa-dumbbell', color: 'text-green-500' },
    { name: { en: 'Biking', nl: 'Fietsen' }, icon: 'fas fa-bicycle', color: 'text-blue-500' },
    { name: { en: 'Travelling', nl: 'Reizen' }, icon: 'fas fa-plane-departure', color: 'text-purple-500' },
    { name: { en: 'Reading', nl: 'Lezen' }, icon: 'fas fa-book-open', color: 'text-orange-500' },
    { name: { en: 'Theatre', nl: 'Theater' }, icon: 'fas fa-masks-theater', color: 'text-pink-500' },
  ],
};