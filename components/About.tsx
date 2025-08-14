import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import type { AboutContent } from '../types';

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

export default About;