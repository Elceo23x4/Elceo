import type { NewsProvider } from '@elceo/types';

export class NewsCompositeAdapter implements NewsProvider {
  constructor(private readonly providers: NewsProvider[]) {}

  async searchNews(query: string, fromIso: string, toIso: string): Promise<unknown[]> {
    for (const provider of this.providers) {
      const rows = await provider.searchNews(query, fromIso, toIso);
      if (rows.length > 0) return rows;
    }
    return [];
  }
}
