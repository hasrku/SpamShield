import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            className="bg-black/30 border border-gray-800 rounded-lg p-6 hover:bg-black/50 transition-colors cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <motion.div
                className="rounded-full bg-indigo-500/10 w-12 h-12 flex items-center justify-center mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                viewport={{ once: true }}
            >
                {icon}
            </motion.div>
            <motion.h3
                className="text-xl font-medium text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                viewport={{ once: true }}
            >
                {title}
            </motion.h3>
            <motion.p
                className="text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                viewport={{ once: true }}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

export default FeatureCard;
