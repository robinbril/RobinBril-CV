export type Language = 'en' | 'nl';

export interface PersonalInfo {
    name: string;
    phone: string;
    email: string;
    linkedin: string;
    linkedinHandle: string;
}

export interface NavLink {
    href: string;
    text: string;
}

export interface HeroContent {
    subtitle: string;
    name: string;
    description: string;
    cta1: string;
    cta2: string;
}

export interface AboutContent {
    title: string;
    overview: string;
    description: string;
    highlights: string[];
}

export interface SectionContent {
    title: string;
}

export interface ExperienceItem {
    role: { en: string; nl: string };
    company: string;
    period: string;
    tasks: string[];
    skills: string[];
}

export interface Project {
    title: { en: string; nl: string };
    icon: string;
}

export interface SkillCategory {
    title: { en: string; nl: string };
    icon: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    level: number;
}

export interface LanguageSkill {
    name: string;
    level: { en: string; nl: string };
    value: number;
}

export interface ProgrammingLang {
    name: string;
    category: string;
}

export interface EducationItem {
    degree: { en: string; nl: string };
    institution: string;
    period: string;
    icon: string;
}

export interface DevelopmentItem {
    title: { en: string; nl: string };
    issuer: string;
    period: string;
    description: { en: string; nl: string };
    tools?: string[];
    icon: string;
}

export interface Interest {
    name: { en: string; nl: string };
    icon: string;
    color: string;
}

export interface ContactContent {
    title: string;
    description: string;
    linkedinProfile: string;
}

export interface LanguageData {
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

export interface CVData {
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