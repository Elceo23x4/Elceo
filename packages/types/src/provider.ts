export interface MarketDataProvider {
  getLatestQuote(assetCode: string): Promise<{ price: number; asOf: string }>;
}

export interface MacroCalendarProvider {
  getCalendar(startIso: string, endIso: string): Promise<unknown[]>;
}

export interface NewsProvider {
  searchNews(query: string, fromIso: string, toIso: string): Promise<unknown[]>;
}
