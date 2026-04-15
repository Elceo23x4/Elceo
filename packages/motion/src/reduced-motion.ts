export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const motionDurationForPreference = (seconds: number): number =>
  prefersReducedMotion() ? Math.min(seconds, 0.01) : seconds;
