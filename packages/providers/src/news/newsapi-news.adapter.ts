import type { NewsProvider } from '@elceo/types';

export class NewsApiNewsAdapter implements NewsProvider {
  async searchNews(query: string, fromIso: string, toIso: string): Promise<unknown[]> {
    return [];
  }
}
