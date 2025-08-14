
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// --- TYPES ---
type Language = 'en' | 'nl';

interface PersonalInfo {
    name: string;
    phone: string;
    email: string;
    linkedin: string;
    linkedinHandle: string;
}

interface NavLink {
    href: string;
    text: string;
}

interface HeroContent {
    subtitle: string;
    name: string;
    description: string;
    cta1: string;
    cta2: string;
}

interface AboutContent {
    title: string;
    overview: string;
    description: string;
    highlights: string[];
}

interface SectionContent {
    title: string;
}

interface ExperienceItem {
    role: { en: string; nl: string };
    company: string;
    period: string;
    tasks: string[];
    skills: string[];
}

interface Project {
    title: { en: string; nl: string };
    icon: string;
}

interface SkillCategory {
    title: { en: string; nl: string };
    icon: string;
    skills: Skill[];
}

interface Skill {
    name: string;
    level: number;
}

interface LanguageSkill {
    name: string;
    level: { en: string; nl: string };
    value: number;
}

interface ProgrammingLang {
    name: string;
    category: string;
}

interface EducationItem {
    degree: { en: string; nl: string };
    institution: string;
    period: string;
    icon: string;
}

interface DevelopmentItem {
    title: { en: string; nl: string };
    issuer: string;
    period: string;
    description: { en: string; nl: string };
    tools?: string[];
    icon: string;
}

interface Interest {
    name: { en: string; nl: string };
    icon: string;
    color: string;
}

interface ContactContent {
    title: string;
    description: string;
    linkedinProfile: string;
}

interface LanguageData {
    navLinks: NavLink[];
    hero: HeroContent;
    about: AboutContent;
    experienceSection: SectionContent;
    projectsSection: SectionContent;
    skillsSection: SectionContent;
    educationSection: SectionContent;
    developmentSection: SectionContent;
    interestsSection: SectionContent;
    contactSection: ContactContent;
}

interface CVData {
    personal: PersonalInfo;
    en: LanguageData;
    nl: LanguageData;
    experience: ExperienceItem[];
    projects: Project[];
    skills: {
        core: SkillCategory;
        languages: LanguageSkill[];
    };
    programmingLanguages: ProgrammingLang[];
    education: EducationItem[];
    development: DevelopmentItem[];
    interests: Interest[];
}

// --- HOOKS ---
interface ObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

const useIntersectionObserver = <T extends HTMLElement,>(
    options: ObserverOptions
): [React.RefObject<T>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // No need to unobserve if you want animations to re-trigger
                // observer.unobserve(entry.target);
            } else {
                // Optional: reset if you want animation to re-trigger on scroll up/down
                // setIsVisible(false);
            }
        }, options);

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [elementRef, options]);

    return [elementRef, isVisible];
};


// --- DATA ---
const cvData: CVData = {
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


// --- COMPONENTS ---

const AnimatedGradientBackground: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 -z-10 h-screen w-full overflow-hidden">
            <div className="absolute inset-0 bg-white dark:bg-slate-900"></div>
            <div className="blob animate-blob-1 w-[500px] h-[500px] bg-amber-200/30 dark:bg-indigo-600/20"></div>
            <div className="blob animate-blob-2 w-[400px] h-[400px] bg-sky-200/30 dark:bg-purple-600/20"></div>
            <div className="blob animate-blob-3 w-[300px] h-[300px] bg-violet-200/30 dark:bg-teal-600/20"></div>
            <div className="blob animate-blob-4 w-[350px] h-[350px] bg-rose-200/30 dark:bg-fuchsia-600/20"></div>
        </div>
    );
};

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
    const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
    
    return (
        <section
            id={id}
            ref={sectionRef}
            className={`py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}
        >
            <div className="container mx-auto">
                <h2
                    className={`relative text-4xl md:text-5xl font-extrabold mb-20 text-center text-slate-900 dark:text-white pb-4 transition-all duration-700 ease-out text-glow ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                >
                    {title}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-brand-accent rounded-full"></span>
                </h2>
                {children}
            </div>
        </section>
    );
};

interface HeaderProps {
    lang: Language;
    setLang: (lang: Language) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    personalInfo: PersonalInfo;
    navLinks: NavLink[];
    isScrolled: boolean;
    isHidden: boolean;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, theme, toggleTheme, personalInfo, navLinks, isScrolled, isHidden }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const hamburgerRef = useRef<HTMLDivElement>(null);

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'nl' : 'en';
        setLang(newLang);
        setIsMenuOpen(false);
    };

    const handleThemeToggle = () => {
        toggleTheme();
    }

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const headerHeight = document.getElementById('header-container')?.offsetHeight || 75;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 15;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMenuOpen(false);
        }
    };
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMenuOpen &&
                navRef.current &&
                !navRef.current.contains(event.target as Node) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);


    return (
        <>
            <div id="header-container" className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
                <header
                    id="header"
                    className={`flex justify-center transition-all duration-300 mx-auto px-4 ${isScrolled || isMenuOpen ? 'pt-2' : 'pt-4'}`}
                >
                    <div className={`
                        flex justify-between items-center w-full max-w-3xl px-4 py-2.5 transition-all duration-300 rounded-full shadow-lg shadow-black/5
                        ${theme === 'light'
                            ? 'bg-white/50 backdrop-blur-2xl border border-white/30'
                            : 'bg-slate-900/50 backdrop-blur-2xl border border-white/10'
                        }
                    `}>
                        <div className="flex flex-1 items-baseline gap-x-6">
                            <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="text-lg font-bold text-slate-900 dark:text-white hover:text-brand-accent transition-colors">
                                {personalInfo.name.split(' ')[0]}
                            </a>
                            <nav className="hidden md:block">
                                <ol className="flex items-baseline gap-x-6">
                                    {navLinks.map((link) => (
                                        <li key={link.href}>
                                            <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-sm font-medium tracking-wider text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3">
                            <button onClick={toggleLanguage} className="font-semibold text-xs uppercase bg-black/10 dark:bg-black/20 border border-black/10 dark:border-white/10 text-slate-800 dark:text-gray-200 px-2.5 py-1.5 rounded-full hover:bg-black/20 dark:hover:bg-black/30 transition-all duration-300">
                                {lang === 'en' ? 'NL' : 'EN'}
                            </button>
                            <button
                                onClick={handleThemeToggle}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-black/10 dark:bg-black/20 text-brand-accent"
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? <i className="fas fa-sun text-sm"></i> : <i className="fas fa-moon text-sm"></i>}
                            </button>
                             <div
                                ref={hamburgerRef}
                                className="hamburger md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer z-20 ml-1"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <span className={`block h-0.5 w-full bg-slate-900 dark:bg-white rounded-full transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                                <span className={`block h-0.5 w-full bg-slate-900 dark:bg-white rounded-full transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`block h-0.5 w-full bg-slate-900 dark:bg-white rounded-full transition-transform duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <nav ref={navRef} className={`fixed md:hidden top-0 right-0 h-full w-3/4 max-w-xs p-24 pt-32 shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-40 ${theme === 'light' ? 'bg-white/70 backdrop-blur-2xl border-l border-white/30' : 'bg-slate-900/80 backdrop-blur-2xl border-l border-white/10'}`}>
                <ol className="flex flex-col items-start list-none gap-8">
                     {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-lg font-medium tracking-wider text-slate-900 dark:text-gray-200 hover:text-brand-accent dark:hover:text-white transition-colors">
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
};

interface HeroProps {
    content: HeroContent;
    personalInfo: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ content, personalInfo }) => {
    const nameChars = content.name.split('');
    
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.getElementById('header-container')?.offsetHeight || 75;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 15;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="hero" className="hero min-h-screen flex items-center justify-center relative overflow-hidden p-8 text-center" style={{ perspective: '1000px' }}>
            <div className="hero-content max-w-4xl relative z-10 flex flex-col items-center">
                <div className="hero-text max-w-3xl">
                    <p className="hero-subtitle uppercase tracking-[3px] text-brand-accent dark:text-brand-accent mb-3 text-sm font-semibold animate-[hero-subtitle-in_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_backwards]">
                        {content.subtitle}
                    </p>
                    <h1 className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-slate-900 dark:text-white font-extrabold leading-tight text-glow" style={{ transformStyle: 'preserve-3d' }}>
                         {nameChars.map((char, index) => (
                            <span
                                key={index}
                                className="inline-block animate-[letter-flip-in_0.8s_cubic-bezier(0.2,0.8,0.2,1)_backwards]"
                                style={{ animationDelay: `${0.2 + index * 0.03}s` }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h1>
                    <p className="hero-description text-base md:text-lg mb-8 text-slate-700 dark:text-slate-300 max-w-xl mx-auto leading-relaxed animate-[hero-desc-in_0.8s_cubic-bezier(0.2,0.8,0.2,1)_1.4s_backwards]">
                        {content.description}
                    </p>

                    <div className="hero-buttons flex flex-col sm:flex-row gap-4 mt-4 justify-center">
                        <a href="#experience" onClick={(e) => handleScrollTo(e, '#experience')} className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl
                        bg-brand-accent text-slate-900 hover:bg-brand-accent-hover shadow-amber-500/20 hover:shadow-amber-400/30
                        animate-[hero-button-in_0.8s_cubic-bezier(0.2,0.8,0.2,1)_1.7s_backwards]">
                           <i className="fas fa-briefcase mr-2"></i>
                           <span>{content.cta1}</span>
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1
                        bg-black/5 text-slate-800 border border-black/10 hover:bg-black/10 backdrop-blur-md
                        dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20 dark:shadow-none
                        animate-[hero-button-in_0.8s_cubic-bezier(0.2,0.8,0.2,1)_1.9s_backwards]">
                           <i className="fas fa-paper-plane mr-2"></i>
                           <span>{content.cta2}</span>
                        </a>
                    </div>
                </div>
            </div>
            <style>{`
              @keyframes hero-subtitle-in {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes hero-desc-in {
                from { opacity: 0; transform: translateY(20px); filter: blur(3px); }
                to { opacity: 1; transform: translateY(0); filter: blur(0); }
              }
              @keyframes letter-flip-in {
                0% {
                    opacity: 0;
                    transform: translateY(40px) rotateX(-90deg);
                    filter: blur(5px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0) rotateX(0deg);
                    filter: blur(0);
                }
              }
              @keyframes hero-button-in {
                from { opacity: 0; transform: translateY(20px) scale(0.95); }
                to { opacity: 1; transform: translateY(0) scale(1); }
              }
            `}</style>
        </section>
    );
};

interface AboutProps {
    content: AboutContent;
}

const About: React.FC<AboutProps> = ({ content }) => {
    const [contentRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

    const createMarkup = (htmlString: string) => {
        const styledString = htmlString.replace(/<strong>(.*?)<\/strong>/g, '<strong class="font-semibold text-brand-accent dark:text-amber-400">$1</strong>');
        return { __html: styledString };
    };
    
    return (
        <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 relative">
             <div className="container mx-auto max-w-4xl flex flex-col items-center">
                <h2
                    className={`relative text-4xl md:text-5xl font-extrabold mb-20 text-center text-slate-900 dark:text-white pb-4 transition-all duration-700 ease-out text-glow ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {content.title}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-brand-accent rounded-full"></span>
                </h2>
                <div
                    ref={contentRef}
                    className={`transition-all duration-1000 ease-out w-full ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="about-card w-full p-8 md:p-12 rounded-2xl shadow-2xl shadow-black/10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700">
                        
                        <span className="professional-overview text-sm font-semibold text-brand-accent dark:text-amber-400 uppercase tracking-widest mb-6 inline-block">
                            {content.overview}
                        </span>

                        <p
                            className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-10"
                            dangerouslySetInnerHTML={createMarkup(content.description)}
                        />
                        
                        <div className="skill-highlights flex flex-wrap gap-4 justify-center md:justify-start">
                            {content.highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="skill-highlight px-5 py-2.5 rounded-full text-sm font-medium flex items-center transition-all duration-300
                                            bg-black/5 border border-black/10 text-slate-700
                                            dark:bg-slate-700/50 dark:border-slate-600 dark:text-amber-300
                                            hover:shadow-lg hover:bg-black/10 dark:hover:bg-slate-700 hover:-translate-y-1"
                                >
                                    <i className="fas fa-check-circle text-brand-accent mr-2.5"></i>
                                    {highlight}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface TimelineItemProps {
    item: ExperienceItem;
    lang: Language;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, lang }) => {
    const [itemRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    return (
        <div
            ref={itemRef}
            className={`timeline-item relative pl-16 mb-12 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
            <div className="timeline-marker absolute w-4 h-4 rounded-full bg-brand-accent ring-4 ring-white/80 dark:ring-[#0f172a] left-3 top-2 z-10 group-hover:scale-110 transition-transform shadow-lg"></div>
            <div className="timeline-content p-6 rounded-xl shadow-xl shadow-black/10 relative group bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.role[lang]}</h3>
                <h4 className="text-brand-accent dark:text-amber-400 mb-3 font-semibold text-sm">
                    {item.company} <span className="text-slate-600 dark:text-slate-400 ml-2 text-xs font-normal">({item.period})</span>
                </h4>
                <ul className="list-none p-0 mb-4">
                    {item.tasks.map((task, index) => (
                        <li key={index} className="relative pl-6 mb-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                            <span className="absolute left-1 top-1.5 w-1.5 h-1.5 bg-brand-accent rounded-full"></span>
                            {task}
                        </li>
                    ))}
                </ul>
                <div className="tools-used mt-4 pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-2">
                    {item.skills.map((skill, index) => (
                        <span key={index} className="tool-badge text-xs font-medium bg-amber-500/10 dark:bg-brand-accent/20 text-amber-700 dark:text-brand-accent py-1 px-3 rounded-full">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

interface ExperienceProps {
    content: SectionContent;
    experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ content, experience }) => {
    const lang = (document.documentElement.lang as Language) || 'en';

    return (
        <Section id="experience" title={content.title}>
            <div className="timeline relative max-w-3xl mx-auto py-12">
                <div className="absolute w-0.5 h-full bg-slate-300 dark:bg-slate-700/50 left-5 top-0"></div>
                {experience.map((item, index) => (
                    <TimelineItem key={index} item={item} lang={lang} />
                ))}
            </div>
        </Section>
    );
};

interface ProjectCardProps {
    item: Project;
    delay: number;
    lang: Language;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item, delay, lang }) => {
    const [itemRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div
            ref={itemRef}
            className={`w-full transition-all duration-700 ease-out h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay * 50}ms` }}
        >
            <div className="project-card h-full p-6 rounded-xl shadow-xl shadow-black/10 flex items-center gap-5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700 hover:-translate-y-1.5 transition-transform duration-300">
                <div className="project-icon text-3xl text-brand-accent dark:text-amber-400 flex-shrink-0 w-10 text-center">
                    <i className={item.icon}></i>
                </div>
                <h4 className="font-bold text-base text-slate-800 dark:text-white">{item.title[lang]}</h4>
            </div>
        </div>
    );
};

interface ProjectsProps {
    content: SectionContent;
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ content, projects }) => {
    const lang = (document.documentElement.lang as Language) || 'en';
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <Section id="projects" title={content.title}>
            <div className="projects-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {visibleProjects.map((item, index) => (
                    <ProjectCard key={index} item={item} delay={index} lang={lang}/>
                ))}
            </div>
            {projects.length > 6 && (
                <div className="mt-12 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="font-semibold tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl
                        bg-brand-accent text-slate-900 hover:bg-brand-accent-hover shadow-amber-500/20 hover:shadow-amber-400/30
                        px-7 py-3.5 rounded-full"
                    >
                        {showAll ? (lang === 'nl' ? 'Minder weergeven' : 'Show Less') : (lang === 'nl' ? 'Meer weergeven' : 'Show More')}
                    </button>
                </div>
            )}
        </Section>
    );
};

interface SkillBarProps {
    skill: Skill;
    isVisible: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, isVisible }) => {
    return (
        <div className="skill-item mb-6">
            <div className="skill-info flex justify-between mb-2 font-medium text-sm">
                <span className="skill-name text-slate-700 dark:text-gray-200">{skill.name}</span>
                <span className="skill-percent text-brand-accent dark:text-amber-400 font-semibold">{skill.level}%</span>
            </div>
            <div className="skill-bar w-full h-2 bg-black/10 dark:bg-black/20 rounded-full overflow-hidden">
                <div
                    className="skill-level h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-[1800ms] ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
};

interface LanguageBarProps {
    skill: LanguageSkill;
    isVisible: boolean;
}

const LanguageBar: React.FC<LanguageBarProps> = ({ skill, isVisible }) => {
     const lang = (document.documentElement.lang as 'en' | 'nl') || 'en';
     return (
        <div className="skill-item mb-6">
            <div className="skill-info flex justify-between mb-2 font-medium text-sm">
                <span className="skill-name text-slate-700 dark:text-gray-200">{skill.name}</span>
                <span className="skill-percent text-brand-accent dark:text-amber-400 font-semibold">{skill.level[lang]}</span>
            </div>
            <div className="skill-bar w-full h-2 bg-black/10 dark:bg-black/20 rounded-full overflow-hidden">
                <div
                    className="skill-level h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-[1800ms] ease-out"
                    style={{ width: isVisible ? `${skill.value}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
}

const badgeColors: { [key: string]: string } = {
    'Backend': 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-400/20 dark:text-blue-300 dark:border-blue-400/30',
    'Data': 'bg-green-100 text-green-800 border-green-200 dark:bg-green-400/20 dark:text-green-300 dark:border-green-400/30',
    'Frontend': 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-400/20 dark:text-purple-300 dark:border-purple-400/30',
    'default': 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-gray-400/20 dark:text-gray-300 dark:border-gray-400/30'
};

const badgeIcons: { [key: string]: string } = {
    'Python': 'fab fa-python',
    'SQL': 'fas fa-database',
    'OpenSQL': 'fas fa-database',
    'ABAP': 'fas fa-cogs',
    'TypeScript': 'fas fa-code',
    'JavaScript': 'fab fa-js',
    'React': 'fab fa-react',
    'HTML/CSS': 'fab fa-html5',
};

interface SkillsProps {
    content: SectionContent;
    skills: { core: SkillCategory; languages: LanguageSkill[] };
    programmingLanguages: ProgrammingLang[];
}

const Skills: React.FC<SkillsProps> = ({ content, skills, programmingLanguages }) => {
    const [ref1, isVisible1] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    const [ref2, isVisible2] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    const [ref3, isVisible3] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    const lang = (document.documentElement.lang as 'en' | 'nl') || 'en';

    return (
        <Section id="skills" title={content.title}>
            <div className="skills-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div ref={ref1} className={`skill-category p-8 rounded-xl shadow-2xl shadow-black/10 transition-all duration-700 ease-out hover:-translate-y-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center"><i className={`${skills.core.icon} mr-3 text-brand-accent dark:text-amber-400`}></i>{skills.core.title[lang]}</h3>
                    {skills.core.skills.map(skill => <SkillBar key={skill.name} skill={skill} isVisible={isVisible1} />)}
                </div>

                <div ref={ref2} className={`skill-category p-8 rounded-xl shadow-2xl shadow-black/10 transition-all duration-700 ease-out delay-200 hover:-translate-y-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center"><i className="fas fa-laptop-code mr-3 text-brand-accent dark:text-amber-400"></i>Programming</h3>
                    <div className="flex flex-wrap gap-3">
                        {programmingLanguages.map(lang => (
                            <span key={lang.name} className={`tool-badge text-sm font-medium py-1.5 px-4 rounded-full border ${badgeColors[lang.category] || badgeColors.default}`}>
                                <i className={`${badgeIcons[lang.name]} mr-2 opacity-70`}></i>
                                {lang.name}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div ref={ref3} className={`skill-category p-8 rounded-xl shadow-2xl shadow-black/10 transition-all duration-700 ease-out delay-300 hover:-translate-y-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700 ${isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center"><i className="fas fa-language mr-3 text-brand-accent dark:text-amber-400"></i>Languages</h3>
                    {skills.languages.map(skill => <LanguageBar key={skill.name} skill={skill} isVisible={isVisible3} />)}
                </div>
            </div>
        </Section>
    );
};

interface EducationItemProps {
    item: EducationItem;
    delay: number;
    lang: Language;
}

const EducationCard: React.FC<EducationItemProps> = ({ item, delay, lang }) => {
    const [itemRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

    return (
        <div
            ref={itemRef}
            className={`w-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay * 100}ms` }}
        >
             <div className="education-item p-6 rounded-xl shadow-xl shadow-black/10 flex items-start gap-5 w-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700 hover:-translate-y-1.5 transition-transform duration-300">
                <div className="edu-cert-icon text-2xl text-brand-accent dark:text-amber-400 mt-1 flex-shrink-0">
                    <i className={item.icon}></i>
                </div>
                <div className="edu-cert-details">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.degree[lang]}</h3>
                    <h4 className="text-slate-700 dark:text-slate-300 mb-1 font-medium">{item.institution}</h4>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{item.period}</span>
                </div>
            </div>
        </div>
    );
};

interface EducationProps {
    content: SectionContent;
    education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ content, education }) => {
     const lang = (document.documentElement.lang as Language) || 'en';
    return (
        <Section id="education" title={content.title}>
            <div className="education-container max-w-3xl mx-auto flex flex-col items-center gap-6">
                {education.map((item, index) => (
                    <EducationCard key={index} item={item} delay={index} lang={lang} />
                ))}
            </div>
        </Section>
    );
};

interface DevelopmentCardProps {
    item: DevelopmentItem;
    delay: number;
    lang: Language;
}

const DevelopmentCard: React.FC<DevelopmentCardProps> = ({ item, delay, lang }) => {
    const [itemRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div
            ref={itemRef}
            className={`w-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay * 100}ms` }}
        >
            <div className="development-item p-6 rounded-xl shadow-xl shadow-black/10 flex items-start gap-5 w-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700 hover:-translate-y-1.5 transition-transform duration-300">
                <div className="dev-icon text-2xl text-brand-accent dark:text-amber-400 mt-1 flex-shrink-0">
                    <i className={item.icon}></i>
                </div>
                <div className="dev-details">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title[lang]}</h3>
                    <h4 className="text-slate-700 dark:text-slate-300 mb-1 font-medium text-sm">{item.issuer}</h4>
                    <span className="text-xs text-slate-600 dark:text-slate-400 mb-3 block">{item.period}</span>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">{item.description[lang]}</p>
                    {item.tools && (
                        <div className="tools-used flex flex-wrap gap-2">
                            {item.tools.map(tool => (
                                <span key={tool} className="tool-badge text-xs font-medium bg-amber-500/10 dark:bg-brand-accent/20 text-amber-700 dark:text-brand-accent py-1 px-3 rounded-full">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

interface DevelopmentProps {
    content: SectionContent;
    development: DevelopmentItem[];
}

const Development: React.FC<DevelopmentProps> = ({ content, development }) => {
     const lang = (document.documentElement.lang as Language) || 'en';
    return (
        <Section id="development" title={content.title}>
            <div className="development-container max-w-3xl mx-auto flex flex-col items-center gap-6">
                {development.map((item, index) => (
                    <DevelopmentCard key={index} item={item} delay={index} lang={lang} />
                ))}
            </div>
        </Section>
    );
};

interface InterestItemProps {
    item: Interest;
    delay: number;
}

const InterestItem: React.FC<InterestItemProps> = ({ item, delay }) => {
    const [itemRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    const lang = (document.documentElement.lang as Language) || 'en';

    return (
        <div ref={itemRef} className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: `${delay * 100}ms`}}>
            <div className="interest-item text-center p-6 rounded-xl shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-2 group bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700">
                <i className={`${item.icon} ${item.color} text-4xl mb-3 block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}></i>
                <h4 className="text-sm font-semibold text-slate-800 dark:text-gray-200 transition-colors duration-300 group-hover:text-brand-accent dark:group-hover:text-brand-accent">{item.name[lang]}</h4>
            </div>
        </div>
    )
}

interface InterestsProps {
    content: SectionContent;
    interests: Interest[];
}

const Interests: React.FC<InterestsProps> = ({ content, interests }) => {
    return (
        <Section id="interests" title={content.title}>
            <div className="interests-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
                {interests.map((item, index) => (
                   <InterestItem key={index} item={item} delay={index} />
                ))}
            </div>
        </Section>
    );
};

interface ContactProps {
    content: ContactContent;
    personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ content, personalInfo }) => {
    const [containerRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    const lang = (document.documentElement.lang as 'en' | 'nl') || 'en';

    return (
        <Section id="contact" title={content.title}>
            <div
                ref={containerRef}
                className={`contact-container max-w-3xl mx-auto text-center p-8 md:p-12 rounded-xl shadow-2xl shadow-black/10 relative transition-all duration-1000 ease-out bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <p className="mb-8 text-slate-700 dark:text-slate-300 max-w-lg mx-auto">{content.description}</p>
                <div className="contact-info flex flex-col md:flex-row justify-center gap-8 mb-10 flex-wrap">
                    <a href={`tel:${personalInfo.phone}`} className="contact-item group flex flex-col items-center transition-transform duration-300 hover:-translate-y-1">
                        <i className="fas fa-mobile-alt text-xl text-brand-accent mb-3 w-14 h-14 flex items-center justify-center rounded-full bg-black/5 dark:bg-slate-700/50 border border-black/10 dark:border-slate-600 transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white dark:group-hover:text-slate-900 group-hover:scale-110 shadow-lg"></i>
                        <span className="font-medium text-slate-800 dark:text-gray-200 group-hover:text-brand-accent dark:group-hover:text-amber-400 transition-colors duration-300">{personalInfo.phone}</span>
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="contact-item group flex flex-col items-center transition-transform duration-300 hover:-translate-y-1">
                        <i className="far fa-envelope text-xl text-brand-accent mb-3 w-14 h-14 flex items-center justify-center rounded-full bg-black/5 dark:bg-slate-700/50 border border-black/10 dark:border-slate-600 transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white dark:group-hover:text-slate-900 group-hover:scale-110 shadow-lg"></i>
                        <span className="font-medium text-slate-800 dark:text-gray-200 group-hover:text-brand-accent dark:group-hover:text-amber-400 transition-colors duration-300">{personalInfo.email}</span>
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item group flex flex-col items-center transition-transform duration-300 hover:-translate-y-1">
                        <i className="fab fa-linkedin-in text-xl text-brand-accent mb-3 w-14 h-14 flex items-center justify-center rounded-full bg-black/5 dark:bg-slate-700/50 border border-black/10 dark:border-slate-600 transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white dark:group-hover:text-slate-900 group-hover:scale-110 shadow-lg"></i>
                        <span className="font-medium text-slate-800 dark:text-gray-200 group-hover:text-brand-accent dark:group-hover:text-amber-400 transition-colors duration-300">
                          {lang === 'nl' ? 'LinkedIn Profiel' : 'LinkedIn Profile'}
                        </span>
                    </a>
                </div>
            </div>
        </Section>
    );
};

interface FooterProps {
    lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center py-6 px-4 border-t border-black/5 dark:border-white/10 text-slate-600 dark:text-gray-500 text-xs bg-transparent">
            <p>
                &copy;{currentYear} Robin Bril. {lang === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}
            </p>
        </footer>
    );
};


// --- APP ---
type Theme = 'light' | 'dark';

function App(): React.ReactNode {
    const [lang, setLang] = useState<Language>('en');
    const [theme, setTheme] = useState<Theme>('light');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    
    useEffect(() => {
        const preferredLanguage = localStorage.getItem('preferredLanguage') as Language;
        if (preferredLanguage && (preferredLanguage === 'en' || preferredLanguage === 'nl')) {
            setLang(preferredLanguage);
        }

        const storedTheme = localStorage.getItem('theme') as Theme;
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 75) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            setIsScrolled(scrollTop > 50);
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const data = cvData[lang];

    return (
        <div className="relative">
            <AnimatedGradientBackground />
            <Header
                lang={lang}
                setLang={setLang}
                theme={theme}
                toggleTheme={toggleTheme}
                personalInfo={cvData.personal}
                navLinks={data.navLinks}
                isScrolled={isScrolled}
                isHidden={isHidden}
            />
            <main>
                <Hero content={data.hero} personalInfo={cvData.personal} />
                <About content={data.about} />
                <Experience content={data.experienceSection} experience={cvData.experience} />
                <Projects content={data.projectsSection} projects={cvData.projects} />
                <Skills content={data.skillsSection} skills={cvData.skills} programmingLanguages={cvData.programmingLanguages} />
                <Education content={data.educationSection} education={cvData.education} />
                <Development content={data.developmentSection} development={cvData.development} />
                <Interests content={data.interestsSection} interests={cvData.interests} />
                <Contact content={data.contactSection} personalInfo={cvData.personal} />
            </main>
            <Footer lang={lang} />
        </div>
    );
}

// --- RENDER ---
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
