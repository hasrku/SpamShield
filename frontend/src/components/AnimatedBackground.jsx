import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
    const variants = {
        initial: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)",
        },
        animate: {
            opacity: [0.2, 0.3, 0.2],
            scale: [0.8, 1.1, 0.8],
            filter: ["blur(10px)", "blur(20px)", "blur(10px)"],
        },
    };

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
                className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20"
                initial="initial"
                animate="animate"
                variants={variants}
                transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-[60%] -right-[5%] w-[35%] h-[35%] rounded-full bg-purple-500/20"
                initial="initial"
                animate="animate"
                variants={variants}
                transition={{
                    repeat: Infinity,
                    duration: 18,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
            <motion.div
                className="absolute top-[10%] right-[20%] w-[25%] h-[25%] rounded-full bg-blue-500/10"
                initial="initial"
                animate="animate"
                variants={variants}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "easeInOut",
                    delay: 5,
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
