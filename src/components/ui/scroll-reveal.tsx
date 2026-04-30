import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    staggerDuration?: number;
    delay?: number;
}

export const ScrollReveal = ({ children, staggerDuration = 0.1, delay = 0, className, ...props }: ScrollRevealProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDuration,
                        delayChildren: delay,
                    },
                },
                hidden: {},
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

interface ScrollRevealItemProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    yOffset?: number;
    duration?: number;
}

export const ScrollRevealItem = ({ children, yOffset = 24, duration = 0.6, className, ...props }: ScrollRevealItemProps) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: yOffset },
                visible: { opacity: 1, y: 0, transition: { duration, ease: "easeOut" } },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};
