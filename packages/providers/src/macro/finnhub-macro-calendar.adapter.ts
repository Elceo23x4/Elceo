import type { MacroCalendarProvider } from '@elceo/types';

export class FinnhubMacroCalendarAdapter implements MacroCalendarProvider {
  async getCalendar(startIso: string, endIso: string): Promise<unknown[]> {
    return [];
  }
}
