export const decayWindowsHours = {
  macro: 72,
  news: 24,
  geopolitics: 96,
  market: 12,
} as const;

export type DecayClass = keyof typeof decayWindowsHours;
