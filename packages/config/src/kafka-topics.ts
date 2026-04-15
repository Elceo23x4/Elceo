export const kafkaTopics = {
  sourceMarketRaw: 'elceo.source.market.raw',
  sourceMacroRaw: 'elceo.source.macro.raw',
  sourceNewsRaw: 'elceo.source.news.raw',
  sourceGeopoliticsRaw: 'elceo.source.geopolitics.raw',
  sourceCrawlRaw: 'elceo.source.crawl.raw',
  eventNormalized: 'elceo.event.normalized',
  eventReasoned: 'elceo.event.reasoned',
  assetStateUpdated: 'elceo.asset.state-updated',
} as const;
