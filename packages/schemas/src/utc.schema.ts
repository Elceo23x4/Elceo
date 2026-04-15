import { z } from 'zod';

export const utcIsoSchema = z
  .string()
  .datetime({ offset: true })
  .refine((value) => value.endsWith('Z') || /[+-]\d{2}:\d{2}$/.test(value), {
    message: 'Expected a UTC-compatible ISO timestamp',
  });
