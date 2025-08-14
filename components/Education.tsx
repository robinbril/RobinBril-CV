import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import Section from './Section.tsx';
import type { SectionContent, EducationItem, Language } from '../types.ts';

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

export default Education;