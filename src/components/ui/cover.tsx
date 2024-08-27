'use client';
import { SparklesCore } from '@/components/ui/sparkles';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useId, useRef, useState } from 'react';

export const Cover = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    const [hovered, setHovered] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [beamPositions, setBeamPositions] = useState<number[]>([]);

    useEffect(() => {
        if (ref.current) {
            setContainerWidth(ref.current?.clientWidth ?? 0);

            const height = ref.current?.clientHeight ?? 0;
            const numberOfBeams = Math.floor(height / 10); // Adjust the divisor to control the spacing
            const positions = Array.from(
                { length: numberOfBeams },
                (_, i) => (i + 1) * (height / (numberOfBeams + 1)),
            );
            setBeamPositions(positions);
        }
    }, []);

    return (
        <div
            className="group/cover relative inline-block rounded-sm bg-foreground p-2 transition duration-200 hover:bg-foreground"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            ref={ref}
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 size-full overflow-hidden"
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        transition={{
                            opacity: {
                                duration: 0.2,
                            },
                        }}
                    >
                        <motion.div
                            animate={{
                                translateX: ['-50%', '0%'],
                            }}
                            className="flex h-full w-[200%]"
                            transition={{
                                translateX: {
                                    duration: 10,
                                    ease: 'linear',
                                    repeat: Infinity,
                                },
                            }}
                        >
                            <SparklesCore
                                background="transparent"
                                className="size-full"
                                maxSize={1}
                                minSize={0.4}
                                particleColor="#FFFFFF"
                                particleDensity={500}
                            />
                            <SparklesCore
                                background="transparent"
                                className="size-full"
                                maxSize={1}
                                minSize={0.4}
                                particleColor="#FFFFFF"
                                particleDensity={500}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {beamPositions.map((position, index) => (
                <Beam
                    delay={Math.random() * 2 + 1}
                    duration={Math.random() * 2 + 1}
                    hovered={hovered}
                    key={index}
                    style={{
                        top: `${position}px`,
                    }}
                    width={containerWidth}
                />
            ))}
            <motion.span
                animate={{
                    scale: hovered ? 0.8 : 1,
                    x: hovered ? [0, -30, 30, -30, 30, 0] : 0,
                    y: hovered ? [0, 30, -30, 30, -30, 0] : 0,
                }}
                className={cn(
                    'relative z-20 inline-block text-background transition duration-200 group-hover/cover:text-background',
                    className,
                )}
                exit={{
                    filter: 'none',
                    scale: 1,
                    x: 0,
                    y: 0,
                }}
                key={String(hovered)}
                transition={{
                    duration: 0.2,
                    filter: {
                        duration: 0.2,
                    },
                    scale: {
                        duration: 0.2,
                    },
                    x: {
                        duration: 0.2,
                        repeat: Infinity,
                        repeatType: 'loop',
                    },
                    y: {
                        duration: 0.2,
                        repeat: Infinity,
                        repeatType: 'loop',
                    },
                }}
            >
                {children}
            </motion.span>
            <CircleIcon className="absolute right-[-2px] top-[-2px]" />
            <CircleIcon className="absolute bottom-[-2px] right-[-2px]" />
            <CircleIcon className="absolute left-[-2px] top-[-2px]" />
            <CircleIcon className="absolute bottom-[-2px] left-[-2px]" />
        </div>
    );
};

export const Beam = ({
    className,
    delay,
    duration,
    hovered,
    width = 600,
    ...svgProps
}: {
    className?: string;
    delay?: number;
    duration?: number;
    hovered?: boolean;
    width?: number;
} & React.ComponentProps<typeof motion.svg>) => {
    const id = useId();

    return (
        <motion.svg
            className={cn('absolute inset-x-0 w-full', className)}
            fill="none"
            height="1"
            viewBox={`0 0 ${width ?? '600'} 1`}
            width={width ?? '600'}
            xmlns="http://www.w3.org/2000/svg"
            {...svgProps}
        >
            <motion.path d={`M0 0.5H${width ?? '600'}`} stroke={`url(#svgGradient-${id})`} />

            <defs>
                <motion.linearGradient
                    animate={{
                        x1: '110%',
                        x2: hovered ? '100%' : '105%',
                        y1: 0,
                        y2: 0,
                    }}
                    gradientUnits="userSpaceOnUse"
                    id={`svgGradient-${id}`}
                    initial={{
                        x1: '0%',
                        x2: hovered ? '-10%' : '-5%',
                        y1: 0,
                        y2: 0,
                    }}
                    key={String(hovered)}
                    transition={{
                        delay: hovered ? Math.random() * (1 - 0.2) + 0.2 : 0,
                        duration: hovered ? 0.5 : (duration ?? 2),
                        ease: 'linear',
                        repeat: Infinity,
                        repeatDelay: hovered ? Math.random() * (2 - 1) + 1 : (delay ?? 1),
                    }}
                >
                    <stop stopColor="#2EB9DF" stopOpacity="0" />
                    <stop stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                </motion.linearGradient>
            </defs>
        </motion.svg>
    );
};

export const CircleIcon = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                `group pointer-events-none h-2 w-2 animate-pulse rounded-full bg-neutral-600 opacity-20 group-hover/cover:hidden group-hover/cover:bg-white group-hover/cover:opacity-100 dark:bg-white`,
                className,
            )}
        ></div>
    );
};
