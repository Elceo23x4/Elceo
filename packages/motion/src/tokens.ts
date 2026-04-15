export const motionTokens = {
  duration: {
    instant: 0.12,
    quick: 0.2,
    base: 0.32,
    cinematic: 0.55,
  },
  easing: {
    standard: [0.22, 1, 0.36, 1] as const,
    emphasize: [0.2, 0.8, 0.2, 1] as const,
    entrance: [0.16, 1, 0.3, 1] as const,
  },
  distance: {
    xxs: 4,
    xs: 8,
    sm: 14,
    md: 22,
    lg: 36,
  },
} as const;

export type MotionTokens = typeof motionTokens;
