export const envKeys = [
  'APP_ENV',
  'APP_BASE_URL',
  'DATABASE_URL',
  'KAFKA_BROKERS',
  'FINNHUB_API_KEY',
  'ALPHAVANTAGE_API_KEY',
  'FMP_API_KEY',
] as const;

export type EnvKey = (typeof envKeys)[number];
