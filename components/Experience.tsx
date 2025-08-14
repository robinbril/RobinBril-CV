import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import Section from './Section.tsx';
import type { SectionContent, ExperienceItem, Language } from '../types.ts';

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

export default Experience;