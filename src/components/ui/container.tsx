'use client';

import { motion } from 'framer-motion';

interface Props {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    reverse?: boolean;
}

export const Container = ({ children, className, delay = 0.2, duration = 0.5, reverse }: Props) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: reverse ? -20 : 20 }}
            transition={{ delay: delay, duration: duration, ease: 'easeInOut' }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            {children}
        </motion.div>
    );
};
