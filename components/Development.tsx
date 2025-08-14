import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import Section from './Section.tsx';
import type { SectionContent, DevelopmentItem, Language } from '../types.ts';

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

export default Development;