import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FiCheckCircle, FiAlertTriangle, FiMail } from "react-icons/fi";
import { AnimatedBackground, Header, ScrollToTopButton, ModelPerformance, Features, ConfidenceBar } from "@/components";
import { Element } from "react-scroll";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
    const [email, setEmail] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);
    const textareaRef = React.useRef(null);
    const serverUrl = import.meta.env.VITE_API_URL;

    const handleDetect = async () => {
        if (!email) return;
        setIsAnalyzing(true);

        try {
            const response = await fetch(`${serverUrl}/api/check-spam`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error("Failed to analyze email");
            }

            const data = await response.json();
            console.log(data);
            setResult({
                isSpam: data.isSpam,
                confidence: parseFloat(data.confidence.toFixed(1)),
            });
        } catch (error) {
            console.error("Error analyzing email:", error);
            toast.error("An error occurred while analyzing the email", {
                description: "Please try again later",
                duration: 3000,
            });
        } finally {
            setIsAnalyzing(false);
        }
    };

    const resetForm = () => {
        setEmail("");
        setResult(null);
        setTimeout(() => {
            if (textareaRef.current) {
                textareaRef.current.focus();
            }
        }, 0);
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="font flex flex-col text-white min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <AnimatedBackground />
            <Header />
            <ScrollToTopButton />
            <Toaster />

            <motion.div
                className="container px-4 mx-auto pt-24"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
                    variants={fadeIn}
                >
                    SpamShield AI
                </motion.h1>

                <motion.p
                    className="text-center text-lg max-w-3xl mx-auto mt-6 text-gray-300"
                    variants={fadeIn}
                    transition={{ delay: 0.1 }}
                >
                    Detect spam effortlessly with our smart, fast, and accurate machine learning models. Built for reliability and ease, our system
                    helps you filter messages with just a click.
                </motion.p>

                <Element name="demo-section">
                    <motion.div
                        id="demo-section-top"
                        className="mt-10 lg:mt-16 px-1 sm:px-8 md:px-16 lg:px-32 xl:px-60"
                        variants={fadeIn}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="w-full mx-auto bg-black/40 border border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-center text-xl text-gray-300 flex items-center justify-center">
                                    <FiMail className="mr-2" />
                                    Try It Now
                                </CardTitle>
                                <CardDescription className="text-center text-gray-400">Enter an email message to check if it's spam</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        if (email.trim() && !isAnalyzing && !result) {
                                            handleDetect();
                                        }
                                    }}
                                >
                                    <div className="space-y-4">
                                        <Textarea
                                            ref={textareaRef}
                                            className="min-h-32 resize-y text-gray-200 bg-black/30 text-base sm:text-lg p-4 sm:p-4"
                                            placeholder="Enter email content here..."
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            rows={4}
                                            disabled={isAnalyzing || result}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" && !e.shiftKey) {
                                                    e.preventDefault();
                                                    if (email.trim() && !isAnalyzing && !result) {
                                                        handleDetect();
                                                    }
                                                }
                                            }}
                                        />

                                        {isAnalyzing ? (
                                            <div className="w-full flex flex-col items-center justify-center py-2">
                                                <div className="flex space-x-2 justify-center items-center">
                                                    <motion.div
                                                        className="h-3 w-3 bg-indigo-400 rounded-full"
                                                        animate={{
                                                            scale: [1, 1.5, 1],
                                                            opacity: [1, 0.5, 1],
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                        }}
                                                    />
                                                    <motion.div
                                                        className="h-3 w-3 bg-indigo-400 rounded-full"
                                                        animate={{
                                                            scale: [1, 1.5, 1],
                                                            opacity: [1, 0.5, 1],
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            delay: 0.2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                        }}
                                                    />
                                                    <motion.div
                                                        className="h-3 w-3 bg-indigo-400 rounded-full"
                                                        animate={{
                                                            scale: [1, 1.5, 1],
                                                            opacity: [1, 0.5, 1],
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            delay: 0.4,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                        }}
                                                    />
                                                </div>
                                                <p className="text-sm text-gray-300 mt-2">Analyzing content...</p>
                                            </div>
                                        ) : (
                                            <Button
                                                className="w-full bg-gray-700 hover:bg-gray-600 cursor-pointer"
                                                onClick={handleDetect}
                                                disabled={isAnalyzing || !email.trim() || result}
                                                type="submit"
                                            >
                                                Detect Spam
                                            </Button>
                                        )}
                                    </div>
                                </form>
                            </CardContent>

                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.5 }}
                                    className="overflow-hidden"
                                >
                                    <CardFooter className="flex flex-col p-2 border-t border-gray-800">
                                        <ConfidenceBar
                                            confidence={result.confidence}
                                            isSpam={result.isSpam}
                                        />
                                        <motion.div
                                            className="flex items-center justify-center mb-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            {result.isSpam ? (
                                                <motion.div
                                                    className="flex items-center text-red-500"
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                                >
                                                    <FiAlertTriangle className="mr-2 text-2xl" />
                                                    <span className="text-xl font-medium">Spam Detected</span>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    className="flex items-center text-green-500"
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                                >
                                                    <FiCheckCircle className="mr-2 text-2xl" />
                                                    <span className="text-xl font-medium">Not Spam</span>
                                                </motion.div>
                                            )}
                                        </motion.div>

                                        <motion.div
                                            className="mt-2 w-full flex justify-center"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.5 }}
                                        >
                                            <Button
                                                onClick={resetForm}
                                                className="w-fit bg-gray-800 hover:bg-gray-700 cursor-pointer"
                                            >
                                                Try Another
                                            </Button>
                                        </motion.div>
                                    </CardFooter>
                                </motion.div>
                            )}
                        </Card>
                    </motion.div>
                </Element>

                <Element name="features-section">
                    <Features />
                </Element>

                <Element name="info-section">
                    <div className="mt-24 mb-10 ">
                        <ModelPerformance />
                    </div>
                </Element>

                {/* Footer */}
                <div className="w-full h-1 bg-black/30"></div>
                <motion.footer
                    className="mt-8 mb-8 flex items-center justify-center text-center text-gray-400 text-sm"
                    variants={fadeIn}
                    transition={{ delay: 0.4 }}
                >
                    <span>© {new Date().getFullYear()} &nbsp; SpamShield AI&nbsp;&nbsp;&nbsp;-&nbsp;</span>
                    <span>
                        <a
                            href="https://github.com/hasrku/"
                            className="flex justify-center items-center"
                        >
                            &nbsp; @hasrku
                        </a>
                    </span>
                </motion.footer>
            </motion.div>
        </div>
    );
};

export default App;
