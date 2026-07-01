'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

/*
  Scroll-reveal wrapper. Subtle fade + slide-up on enter, slow cinematic
  easing, fires once. Honours prefers-reduced-motion by rendering static.
*/

type Direction = 'up' | 'down' | 'none';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  direction?: Direction;
  /** Render as a different element if you need semantic wrapping. */
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
  amount?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  as = 'div',
  amount = 0.35,
}: RevealProps) {
  const reduce = useReducedMotion();

  const offset = direction === 'up' ? 20 : direction === 'down' ? -20 : 0;

  // Gentle, warm easing — soft fade + subtle slide-up (no heavy parallax).
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : offset },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}
