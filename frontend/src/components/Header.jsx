import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiServer, FiFilter, FiZap, FiMenu, FiX } from "react-icons/fi";
import { RiRobot2Fill } from "react-icons/ri";
import { Link } from "react-scroll";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        {
            to: "demo-section",
            icon: <FiMail className="text-sm" />,
            label: "Try It",
        },
        {
            to: "features-section",
            icon: <FiZap className="text-sm" />,
            label: "Features",
        },
        {
            to: "info-section",
            icon: <FiServer className="text-sm" />,
            label: "AI Model",
        },
    ];

    return (
        <motion.header
            className="fixed md:px-30 top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-gray-800"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <a
                    href="/"
                    className="flex items-center gap-2"
                >
                    <div>
                        <RiRobot2Fill className="text-2xl text-indigo-400" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                        SpamShield AI
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-6">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={700}
                                    className="text-gray-300 transition-colors flex items-center gap-1 hover:text-indigo-300 cursor-pointer"
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-indigo-300"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-black/80 border-b border-gray-800"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="flex flex-col container mx-auto px-4 py-2">
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="py-2"
                                >
                                    <Link
                                        to={item.to}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={700}
                                        className="text-gray-300 transition-colors flex items-center gap-2 hover:text-indigo-300 cursor-pointer"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
