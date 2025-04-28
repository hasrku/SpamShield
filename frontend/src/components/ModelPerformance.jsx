import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { FiServer, FiShield, FiClock } from "react-icons/fi";

const ModelMetricCard = ({ title, icon, children }) => (
    <Card className="bg-black/40 border border-gray-800 hover:bg-black/50 transition-all hover:border-gray-700 hover:shadow-lg h-full cursor-pointer">
        <CardHeader>
            <CardTitle className="flex items-center text-white">
                {icon}
                <span className="ml-2">{title}</span>
            </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
    </Card>
);

const AccuracyIndicator = ({ value = 98.2 }) => {
    const [displayValue, setDisplayValue] = React.useState(0);
    const [hasAnimated, setHasAnimated] = React.useState(false);
    const circumference = 251.2; // 2 * PI * radius (40)

    const triggerAnimation = () => {
        if (!hasAnimated) {
            setHasAnimated(true);
            const timer = setTimeout(() => {
                setDisplayValue(value);
            }, 500);
            return () => clearTimeout(timer);
        }
    };

    return (
        <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={triggerAnimation}
        >
            <div className="relative w-32 h-32">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                >
                    <circle
                        className="text-gray-700"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                    />
                    <motion.circle
                        className="text-indigo-500"
                        strokeWidth="5"
                        initial={{ strokeDasharray: `0, ${circumference}` }}
                        animate={
                            hasAnimated
                                ? {
                                      strokeDasharray: `${(displayValue / 100) * circumference}, ${circumference}`,
                                  }
                                : {}
                        }
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                        className="text-3xl font-bold text-white"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        {displayValue}%
                    </motion.span>
                </div>
            </div>
            <motion.p
                className="mt-4 text-gray-300 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.5 }}
            >
                Our model achieves {value}% accuracy on standardized spam detection benchmarks.
            </motion.p>
        </motion.div>
    );
};

const PerformanceMetric = ({ label, value, colorClass, index }) => {
    const [displayValue, setDisplayValue] = React.useState(0);
    const [hasAnimated, setHasAnimated] = React.useState(false);

    const triggerAnimation = () => {
        if (!hasAnimated) {
            setHasAnimated(true);
            const timer = setTimeout(() => {
                setDisplayValue(value);
            }, 500 + index * 200);
            return () => clearTimeout(timer);
        }
    };

    return (
        <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onViewportEnter={triggerAnimation}
        >
            <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">{label}</span>
                <motion.span
                    className="text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={hasAnimated ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                >
                    {displayValue.toFixed(1)}%
                </motion.span>
            </div>
            <Progress
                value={displayValue}
                className="h-2.5"
                indicatorClassName={colorClass}
            />
        </motion.div>
    );
};

const ModelPerformance = () => {
    const metrics = [
        { label: "Precision", value: 98, color: "bg-gradient-to-r from-blue-500 to-indigo-500" },
        { label: "Recall", value: 94, color: "bg-gradient-to-r from-blue-500 to-indigo-500" },
        { label: "F1 Score", value: 96, color: "bg-gradient-to-r from-indigo-500 to-blue-500" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <>
            <motion.h2
                className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                Our AI Technology
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-5xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <motion.div variants={itemVariants}>
                    <ModelMetricCard
                        title="AI Technology"
                        icon={<FiServer className="mr-2" />}
                    >
                        <motion.p
                            className="text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Our spam detection system utilizes a powerful stacking model combining Logistic Regression and Random Forest, optimized
                            for precise email classification.
                        </motion.p>
                    </ModelMetricCard>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <ModelMetricCard
                        title="Accuracy"
                        icon={<FiShield className="mr-2" />}
                    >
                        <AccuracyIndicator />
                    </ModelMetricCard>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <ModelMetricCard
                        title="Performance"
                        icon={<FiClock className="mr-2" />}
                    >
                        <div className="space-y-3">
                            {metrics.map((metric, index) => (
                                <PerformanceMetric
                                    key={index}
                                    index={index}
                                    label={metric.label}
                                    value={metric.value}
                                    colorClass={metric.color}
                                />
                            ))}
                        </div>
                    </ModelMetricCard>
                </motion.div>
            </motion.div>
        </>
    );
};

export default ModelPerformance;
