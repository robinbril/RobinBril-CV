import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import Section from './Section.tsx';
import type { SectionContent, Project, Language } from '../types.ts';

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

export default Projects;