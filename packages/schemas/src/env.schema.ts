import { z } from 'zod';

export const envSchema = z.object({
  APP_ENV: z.enum(['development', 'staging', 'production']),
  APP_BASE_URL: z.string().url(),
  DATABASE_URL: z.string().url(),
  KAFKA_BROKERS: z.string().min(1),
});

export type EnvSchema = z.infer<typeof envSchema>;
