import { z } from 'zod';

import { utcIsoSchema } from './utc.schema';

export const identitySchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  displayName: z.string().min(1),
  createdAt: utcIsoSchema,
});
