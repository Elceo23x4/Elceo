import { z } from 'zod';

import { utcIsoSchema } from './utc.schema';

export const eventSchema = z.object({
  eventId: z.string().min(1),
  eventType: z.string().min(1),
  sourceType: z.enum(['market', 'macro', 'news', 'geopolitics', 'crawl']),
  sourceProvider: z.string().min(1),
  occurredAt: utcIsoSchema,
  headline: z.string().min(1),
  summary: z.string().optional(),
  assetCandidates: z.array(z.string().min(1)).default([]),
});
