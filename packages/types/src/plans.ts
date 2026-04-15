export type PlanTier = 'free' | 'premium';

export type Entitlement = {
  plan: PlanTier;
  maxTrackedAssets: number;
  deepReasoningEnabled: boolean;
};
