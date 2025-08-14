import React from 'react';
import type { Language } from '../types';

interface FooterProps {
    lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center py-6 px-4 border-t border-black/5 dark:border-white/10 text-slate-600 dark:text-gray-500 text-xs bg-transparent">
            <p>
                &copy;{currentYear} Robin Bril. {lang === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}
            </p>
        </footer>
    );
};

export default Footer;