export const plans = {
  free: {
    id: 'free',
    maxTrackedAssets: 3,
    canUseDeepReasoning: false,
  },
  premium: {
    id: 'premium',
    maxTrackedAssets: 25,
    canUseDeepReasoning: true,
  },
} as const;

export type PlanId = keyof typeof plans;
