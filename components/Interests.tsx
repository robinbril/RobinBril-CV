import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import Section from './Section.tsx';
import type { SectionContent, Interest, Language } from '../types.ts';


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

export default Interests;