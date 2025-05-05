import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Mode = ({ onThemeChange }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;
    
        if (theme === 'light') {
            root.style.setProperty('--bg-color', 'white');
            root.style.setProperty('--text-color', 'black');
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
        } else {
            root.style.setProperty('--bg-color', 'black');
            root.style.setProperty('--text-color', 'white');
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
        }

        // Notify parent component about theme change
        if (onThemeChange) {
            onThemeChange(theme);
        }
    }, [theme, onThemeChange]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'dark');
    };

    const toggleTheme1 = () => {
        setTheme(theme === 'dark' ? 'light' : 'light');
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="fixed top-1/2 -translate-y-1/2 z-40 -right-16">
            <div data-aos="fade-up" className="relative bg-gray-300 w-[10em] md:w-[12em] rounded-full flex justify-between rotate-90 items-center">
                <span
                    className={`transition-transform cursor-pointer text-lg rounded-full md:p-2 w-1/2 text-center ${
                        theme === 'dark' ? 'bg-black text-white' : 'text-black'
                    }`}
                    onClick={toggleTheme}
                >
                    Dark
                </span>
                <span
                    className={`transition-transform cursor-pointer text-lg rounded-full md:p-2 w-1/2 text-center ${
                        theme === 'light' ? 'bg-white text-black' : ''
                    }`}
                    onClick={toggleTheme1}
                >
                    Light
                </span>
            </div>
        </div>
    );
};

export default Mode;
