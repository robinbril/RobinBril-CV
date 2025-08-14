import React, { useState, useEffect, useRef } from 'react';
import type { Language, NavLink, PersonalInfo } from '../types';

type Theme = 'light' | 'dark';

interface HeaderProps {
    lang: Language;
    setLang: (lang: Language) => void;
    theme: Theme;
    toggleTheme: () => void;
    personalInfo: PersonalInfo;
    navLinks: NavLink[];
    isScrolled: boolean;
    isHidden: boolean;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, theme, toggleTheme, personalInfo, navLinks, isScrolled, isHidden }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const hamburgerRef = useRef<HTMLDivElement>(null);

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'nl' : 'en';
        setLang(newLang);
        setIsMenuOpen(false);
    };

    const handleThemeToggle = () => {
        toggleTheme();
    }

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const headerHeight = document.getElementById('header-container')?.offsetHeight || 75;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 15;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMenuOpen(false);
        }
    };
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMenuOpen &&
                navRef.current &&
                !navRef.current.contains(event.target as Node) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);


    return (
        <>
            <div id="header-container" className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
                <header
                    id="header"
                    className={`flex justify-center transition-all duration-300 mx-auto px-4 ${isScrolled || isMenuOpen ? 'pt-2' : 'pt-4'}`}
                >
                    <div className={`
                        flex justify-between items-center w-full max-w-3xl px-4 py-2.5 transition-all duration-300 rounded-full shadow-lg shadow-black/5
                        ${theme === 'light'
                            ? 'bg-white/50 backdrop-blur-2xl border border-white/30'
                            : 'bg-slate-900/50 backdrop-blur-2xl border border-white/10'
                        }
                    `}>
                        {/* LEFT/CENTER PART */}
                        <div className="flex flex-1 items-baseline gap-x-6">
                            <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="text-lg font-bold text-slate-900 dark:text-white hover:text-brand-accent transition-colors">
                                {personalInfo.name.split(' ')[0]}
                            </a>
                            {/* Desktop Nav */}
                            <nav className="hidden md:block">
                                <ol className="flex items-baseline gap-x-6">
                                    {navLinks.map((link) => (
                                        <li key={link.href}>
                                            <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-sm font-medium tracking-wider text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        </div>

                        {/* RIGHT PART (CONTROLS) */}
                        <div className="flex items-center gap-2 md:gap-3">
                            <button onClick={toggleLanguage} className="font-semibold text-xs uppercase bg-black/10 dark:bg-black/20 border border-black/10 dark:border-white/10 text-slate-800 dark:text-gray-200 px-2.5 py-1.5 rounded-full hover:bg-black/20 dark:hover:bg-black/30 transition-all duration-300">
                                {lang === 'en' ? 'NL' : 'EN'}
                            </button>
                            <button
                                onClick={handleThemeToggle}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-black/10 dark:bg-black/20 text-brand-accent"
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? <i className="fas fa-sun text-sm"></i> : <i className="fas fa-moon text-sm"></i>}
                            </button>
                            {/* Hamburger */}
                             <div
                                ref={hamburgerRef}
                                className="hamburger md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer z-20 ml-1"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <span className={`block h-0.5 w-full bg-slate-900 dark:bg-white rounded-full transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                                <span className={`block h-0.5 w-full bg-slate-900 dark:bg-white rounded-full transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`block h-0.5 w-full bg-slate-900 dark:bg-white rounded-full transition-transform duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            {/* MOBILE NAV (overlay) */}
            <nav ref={navRef} className={`fixed md:hidden top-0 right-0 h-full w-3/4 max-w-xs p-24 pt-32 shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-40 ${theme === 'light' ? 'bg-white/70 backdrop-blur-2xl border-l border-white/30' : 'bg-slate-900/80 backdrop-blur-2xl border-l border-white/10'}`}>
                <ol className="flex flex-col items-start list-none gap-8">
                     {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-lg font-medium tracking-wider text-slate-900 dark:text-gray-200 hover:text-brand-accent dark:hover:text-white transition-colors">
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
};

export default Header;