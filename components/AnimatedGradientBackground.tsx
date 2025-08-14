import React from 'react';

const AnimatedGradientBackground: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 -z-10 h-screen w-full overflow-hidden">
            {/* Changed dark bg from pitch black to a deep slate blue for a more premium feel */}
            <div className="absolute inset-0 bg-white dark:bg-slate-900"></div>
            
            {/* Light theme colors remain the same, new beautiful "cosmic" colors for dark theme */}
            <div className="blob animate-blob-1 w-[500px] h-[500px] bg-amber-200/30 dark:bg-indigo-600/20"></div>
            <div className="blob animate-blob-2 w-[400px] h-[400px] bg-sky-200/30 dark:bg-purple-600/20"></div>
            <div className="blob animate-blob-3 w-[300px] h-[300px] bg-violet-200/30 dark:bg-teal-600/20"></div>
            <div className="blob animate-blob-4 w-[350px] h-[350px] bg-rose-200/30 dark:bg-fuchsia-600/20"></div>
        </div>
    );
};

export default AnimatedGradientBackground;