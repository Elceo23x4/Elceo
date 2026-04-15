import type { MarketDataProvider } from '@elceo/types';

export class MarketDataCompositeAdapter implements MarketDataProvider {
  constructor(private readonly providers: MarketDataProvider[]) {}

  async getLatestQuote(assetCode: string): Promise<{ price: number; asOf: string }> {
    for (const provider of this.providers) {
      const quote = await provider.getLatestQuote(assetCode);
      if (quote.price > 0) return quote;
    }

    return { price: 0, asOf: new Date(0).toISOString() };
  }
}
