import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Section from './Section';
import type { SectionContent, Skill, SkillCategory, LanguageSkill, ProgrammingLang } from '../types';

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
                {/* Core Skills */}
                <div ref={ref1} className={`skill-category p-8 rounded-xl shadow-2xl shadow-black/10 transition-all duration-700 ease-out hover:-translate-y-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center"><i className={`${skills.core.icon} mr-3 text-brand-accent dark:text-amber-400`}></i>{skills.core.title[lang]}</h3>
                    {skills.core.skills.map(skill => <SkillBar key={skill.name} skill={skill} isVisible={isVisible1} />)}
                </div>

                {/* Programming Languages */}
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
                
                {/* Languages */}
                <div ref={ref3} className={`skill-category p-8 rounded-xl shadow-2xl shadow-black/10 transition-all duration-700 ease-out delay-300 hover:-translate-y-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-2xl border border-white/20 dark:border-slate-700 ${isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center"><i className="fas fa-language mr-3 text-brand-accent dark:text-amber-400"></i>Languages</h3>
                    {skills.languages.map(skill => <LanguageBar key={skill.name} skill={skill} isVisible={isVisible3} />)}
                </div>
            </div>
        </Section>
    );
};

export default Skills;