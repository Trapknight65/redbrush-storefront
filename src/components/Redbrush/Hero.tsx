"use client"

import { motion } from "framer-motion"

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black text-brand-gray">
            {/* Background Brush Stroke Animation */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-brand-red origin-left opacity-20 transform -skew-x-12"
            />

            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
                >
                    Redbrush Store
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="overflow-hidden"
                >
                    <p className="text-xl md:text-2xl font-light italic">
                        Gear for Makers & Dreamers.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="h-1 bg-brand-red mt-6 mx-auto max-w-[200px]"
                />
            </div>
        </section>
    )
}

export default Hero
