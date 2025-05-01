import { motion } from "framer-motion";

const ConfidenceBar = ({ confidence, isSpam }) => {
    const radius = 50;
    const circumference = 1.4 * Math.PI * radius;
    const offset = circumference - (confidence.toFixed(0) / 100) * circumference;
    const strokeColor = isSpam ? "#ef4444" : "#22c55e";

    return (
        <div className="flex flex-col items-center justify-center w-40 h-40 relative">
            <svg
                width="200"
                height="200"
                viewBox="0 0 120 120"
                className="transform -rotate-216 p-3"
            >
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                    stroke="#e5e7eb"
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    strokeDashoffset={0}
                    strokeLinecap="round"
                />

                <motion.circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                    stroke={strokeColor}
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1 }}
                />
            </svg>

            <div className="text-center flex justify-between flex-col absolute top-0 h-34">
                <p></p>
                <p className={`text-3xl mt-8 font-semibold ${isSpam ? "text-red-500" : "text-green-500"}`}>
                    {confidence.toFixed(0)}
                    <span className="text-xl">%</span>
                </p>
                <p className="text-sm  text-gray-500 ">Confidence</p>
            </div>
        </div>
    );
};

export default ConfidenceBar;
