import type { MarketDataProvider } from '@elceo/types';

export class AlphaVantageMarketDataAdapter implements MarketDataProvider {
  async getLatestQuote(assetCode: string): Promise<{ price: number; asOf: string }> {
    return { price: 0, asOf: new Date().toISOString() };
  }
}
