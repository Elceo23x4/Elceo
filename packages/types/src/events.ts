export type SourceType = 'market' | 'macro' | 'news' | 'geopolitics' | 'crawl';

export type NormalizedEvent = {
  eventId: string;
  eventType: string;
  sourceType: SourceType;
  sourceProvider: string;
  occurredAt: string;
  headline: string;
  summary?: string;
  assetCandidates: string[];
};
