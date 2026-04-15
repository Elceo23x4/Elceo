'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import type { ReactNode } from 'react';

export type CinematicParallaxProps = {
  children: ReactNode;
  className?: string;
  travel?: number;
};

export function CinematicParallax({ children, className, travel = 40 }: CinematicParallaxProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
