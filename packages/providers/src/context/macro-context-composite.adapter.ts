export class MacroContextCompositeAdapter {
  constructor(
    private readonly providers: Array<{ fetchSeries(seriesCode: string): Promise<unknown[]> }>,
  ) {}

  async fetchSeries(seriesCode: string): Promise<unknown[]> {
    for (const provider of this.providers) {
      const values = await provider.fetchSeries(seriesCode);
      if (values.length > 0) return values;
    }

    return [];
  }
}
