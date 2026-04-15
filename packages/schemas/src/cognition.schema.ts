import { z } from 'zod';

import { utcIsoSchema } from './utc.schema';

export const cognitionSchema = z.object({
  assetCode: z.string().min(1),
  timeHorizon: z.enum(['intraday', 'swing', 'structural']),
  directionalBias: z.enum(['bullish', 'bearish', 'neutral']),
  confidenceTotal: z.number().min(0).max(100),
  contradictionScore: z.number().min(0).max(100),
  updatedAt: utcIsoSchema,
});
