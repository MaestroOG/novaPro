import React from 'react'
import { MessageSquare, File, User, Forward, ChartNoAxesCombined, Redo } from 'lucide-react';

const Features = () => {
    const features = [
        { icon: <MessageSquare />, title: "Advanced Communication", description: "Efficient, real-time messaging systems streamline communication between teams and clients, reducing delays and boosting productivity." },
        { icon: <File />, title: "Premium Assets", description: "Access exclusive, high-quality resources that empower your team to perform at its best, without distractions or frustrating delays." },
        { icon: <User />, title: "Acquire New Customers", description: "Attract new clients by offering personalized, seamless experiences, designed to improve engagement and long-term loyalty." },
        { icon: <Forward />, title: "Seamless Integrations", description: "Easily connect your tools and platforms to create a unified workflow that eliminates data silos and enhances efficiency." },
        { icon: <ChartNoAxesCombined />, title: "Real-time Analytics", description: "Stay informed with instant data updates that allow you to make proactive decisions and optimize your business strategies on the go." },
        { icon: <Redo />, title: "Customizable Workflows", description: "Adapt your task management process with flexible workflows that align with your team's unique needs, ensuring maximum productivity." }
    ];
    return (
        <div className='py-[120px] px-[20px] md:px-0'>
            <h2 className='text-4xl text-white font-bold text-center mb-4'>Transform Your Task Process</h2>
            <p className='text-center text-base text-darkThree mb-[42px]'>This might involve personally identifying the user, suggesting tailored item <br /> suggestions, or recalling prior tastes.</p>
            <div className="relative mt-10 max-w-6xl mx-auto p-1 rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-gradient-to-r">
                    {features.map((feature, index) => (
                        <div key={index} className="relative p-6 transition rounded-lg card">
                            <div className="absolute inset-0 opacity-40 pointer-events-none"></div>
                            <div className="text-yellow">{feature.icon}</div>
                            <h3 className="text-lg font-semibold mt-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400 text-sm mt-2">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features