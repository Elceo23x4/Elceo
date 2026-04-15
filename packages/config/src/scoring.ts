export const scoringWeights = {
  confidence: {
    sourceConfidence: 0.2,
    eventStrength: 0.25,
    modelAgreement: 0.2,
    priceConfirmation: 0.2,
    historicalPattern: 0.15,
  },
  contradictionPenalty: 0.35,
  ranking: {
    portfolioRelevance: 0.25,
    recency: 0.2,
    significance: 0.2,
    confidence: 0.2,
    urgency: 0.15,
  },
} as const;
