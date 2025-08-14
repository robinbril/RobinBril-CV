import React, { useState, useEffect, useRef } from 'react';

interface ObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

const useIntersectionObserver = <T extends HTMLElement,>(
    options: ObserverOptions
): [React.RefObject<T>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // No need to unobserve if you want animations to re-trigger
                // observer.unobserve(entry.target);
            } else {
                // Optional: reset if you want animation to re-trigger on scroll up/down
                // setIsVisible(false);
            }
        }, options);

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [elementRef, options]);

    return [elementRef, isVisible];
};

export default useIntersectionObserver;
