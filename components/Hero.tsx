import React from 'react';
import type { HeroContent, PersonalInfo } from '../types.ts';

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

export default Hero;