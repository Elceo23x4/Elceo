export const providerPriority = {
  market: ['finnhub', 'fmp', 'alphavantage'],
  macro: ['finnhub', 'fmp', 'investing_scrape'],
  news: ['marketaux', 'newsapi'],
  geopolitics: ['gdelt'],
  context: ['imf', 'world_bank', 'oecd'],
} as const;
