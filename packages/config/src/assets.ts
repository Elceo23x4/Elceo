export const launchAssets = [
  { code: 'XAUUSD', label: 'Gold / US Dollar', category: 'metal' },
  { code: 'NAS100', label: 'Nasdaq 100', category: 'index' },
  { code: 'SPX500', label: 'S&P 500', category: 'index' },
  { code: 'DE30', label: 'Germany 30', category: 'index' },
  { code: 'BTCUSD', label: 'Bitcoin / US Dollar', category: 'crypto' },
] as const;

export type LaunchAssetCode = (typeof launchAssets)[number]['code'];
