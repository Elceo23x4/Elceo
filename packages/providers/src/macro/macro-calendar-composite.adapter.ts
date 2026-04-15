import type { MacroCalendarProvider } from '@elceo/types';

export class MacroCalendarCompositeAdapter implements MacroCalendarProvider {
  constructor(private readonly providers: MacroCalendarProvider[]) {}

  async getCalendar(startIso: string, endIso: string): Promise<unknown[]> {
    for (const provider of this.providers) {
      const rows = await provider.getCalendar(startIso, endIso);
      if (rows.length > 0) return rows;
    }
    return [];
  }
}
