import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiShield, FiLock, FiFilter, FiServer, FiAward } from "react-icons/fi";
import { FeatureCard } from "./";

const Features = () => {
    const featuresData = [
        {
            icon: <FiZap className="text-indigo-400 text-xl" />,
            title: "Real-time Detection",
            description: "Our system analyzes email content instantly, providing immediate feedback on potential spam messages.",
        },
        {
            icon: <FiShield className="text-indigo-400 text-xl" />,
            title: "High Accuracy",
            description: "Advanced machine learning algorithms ensure 98.2% accuracy in identifying spam across diverse email formats.",
        },
        {
            icon: <FiLock className="text-indigo-400 text-xl" />,
            title: "Privacy Focused",
            description: "All email content is processed securely and never stored, ensuring complete privacy of your communications.",
        },
        {
            icon: <FiFilter className="text-indigo-400 text-xl" />,
            title: "Smart Filtering",
            description: "Our system learns from detection patterns to continually improve filtering accuracy over time.",
        },
        {
            icon: <FiServer className="text-indigo-400 text-xl" />,
            title: "AI-Powered",
            description: "Utilizing state-of-the-art NLP models to understand email context and detect sophisticated spam techniques.",
        },
        {
            icon: <FiAward className="text-indigo-400 text-xl" />,
            title: "Continuous Updates",
            description: "Our models are regularly retrained on new spam patterns to stay ahead of evolving threats.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="mt-24 max-w-5xl mx-auto">
            <motion.h2
                className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                Powerful Features
            </motion.h2>

            <motion.p
                className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                Our spam detection system offers advanced capabilities to keep your inbox clean and protected
            </motion.p>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {featuresData.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Features;
