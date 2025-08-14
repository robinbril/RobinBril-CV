import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Education from './components/Education.tsx';
import Development from './components/Development.tsx';
import Interests from './components/Interests.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AnimatedGradientBackground from './components/AnimatedGradientBackground.tsx';
import { cvData } from './data/cvData.ts';
import type { Language } from './types.ts';

type Theme = 'light' | 'dark';

function App(): React.ReactNode {
    const [lang, setLang] = useState<Language>('en');
    const [theme, setTheme] = useState<Theme>('light');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    
    useEffect(() => {
        const preferredLanguage = localStorage.getItem('preferredLanguage') as Language;
        if (preferredLanguage && (preferredLanguage === 'en' || preferredLanguage === 'nl')) {
            setLang(preferredLanguage);
        }

        const storedTheme = localStorage.getItem('theme') as Theme;
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            setTheme('light'); // Default to light theme if nothing is stored
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 75) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            setIsScrolled(scrollTop > 50);
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const data = cvData[lang];

    return (
        <div className="relative">
            <AnimatedGradientBackground />
            <Header
                lang={lang}
                setLang={setLang}
                theme={theme}
                toggleTheme={toggleTheme}
                personalInfo={cvData.personal}
                navLinks={data.navLinks}
                isScrolled={isScrolled}
                isHidden={isHidden}
            />
            <main>
                <Hero content={data.hero} personalInfo={cvData.personal} />
                <About content={data.about} />
                <Experience content={data.experienceSection} experience={cvData.experience} />
                <Projects content={data.projectsSection} projects={cvData.projects} />
                <Skills content={data.skillsSection} skills={cvData.skills} programmingLanguages={cvData.programmingLanguages} />
                <Education content={data.educationSection} education={cvData.education} />
                <Development content={data.developmentSection} development={cvData.development} />
                <Interests content={data.interestsSection} interests={cvData.interests} />
                <Contact content={data.contactSection} personalInfo={cvData.personal} />
            </main>
            <Footer lang={lang} />
        </div>
    );
}

export default App;