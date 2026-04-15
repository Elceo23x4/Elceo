export class PlaywrightExtractionFallbackAdapter {
  async extract(url: string): Promise<{ title?: string; text: string }> {
    return { text: '' };
  }
}
