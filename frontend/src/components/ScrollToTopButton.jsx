import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 800,
            smooth: true,
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="fixed bottom-4 md:bottom-6 right-4 md:right-6 p-2 md:p-3 bg-indigo-500/80 hover:bg-indigo-600/90 text-white rounded-full shadow-lg z-50 cursor-pointer"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                >
                    <FiArrowUp className="text-xl" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
