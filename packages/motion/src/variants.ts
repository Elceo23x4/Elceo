import { motionTokens } from './tokens';

export const revealVariants = {
  hidden: { opacity: 0, y: motionTokens.distance.md, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: motionTokens.duration.base,
      ease: motionTokens.easing.entrance,
    },
  },
};

export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: motionTokens.duration.quick,
      ease: motionTokens.easing.standard,
    },
  },
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};
