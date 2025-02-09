import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "How does the pricing structure work?",
        answer: "Our pricing structure is based on flexible plans...",
    },
    {
        question: "Can I upgrade or downgrade my plan at any time?",
        answer: "Yes, you can upgrade or downgrade your plan anytime...",
    },
    {
        question: "What kind of customer support is available?",
        answer: "We offer 24/7 customer support via email and live chat...",
    },
    {
        question: "Is my data safe with your SaaS platform?",
        answer: "Yes, we use state-of-the-art security measures...",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="p-[120px] flex flex-col items-center justify-center bg-[#0A0A0A] px-4 relative overflow-hidden">
            {/* FAQ Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-400 mt-2">
                    Get quick answers to the most common questions about our platform.
                </p>
            </div>

            {/* White Blurry Glow Behind FAQ */}
            <div className="w-[750px] h-[750px] md:w-[500px] md:h-[500px] blur-[180px] bg-white/10 animate-rotate absolute top-28 rounded-[30%_70%_70%_30%]"></div>

            <div className="w-full max-w-2xl">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="text-white rounded-lg border border-darkFour shadow-md overflow-hidden"
                    >
                        {/* Question */}
                        <button
                            className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="text-lg">{faq.question}</span>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Plus size={20} />
                            </motion.div>
                        </button>

                        {/* Answer */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={
                                activeIndex === index
                                    ? { height: "auto", opacity: 1 }
                                    : { height: 0, opacity: 0 }
                            }
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden px-5 pb-4 text-gray-300"
                        >
                            {faq.answer}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;


