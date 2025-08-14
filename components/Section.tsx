import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
    const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
    
    return (
        <section
            id={id}
            ref={sectionRef}
            className={`py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}
        >
            <div className="container mx-auto">
                <h2
                    className={`relative text-4xl md:text-5xl font-extrabold mb-20 text-center text-slate-900 dark:text-white pb-4 transition-all duration-700 ease-out text-glow ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                >
                    {title}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-brand-accent rounded-full"></span>
                </h2>
                {children}
            </div>
        </section>
    );
};

export default Section;