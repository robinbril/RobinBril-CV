import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import Section from './Section.tsx';
import type { ContactContent, PersonalInfo } from '../types.ts';

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

export default Contact;