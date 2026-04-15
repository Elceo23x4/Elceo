import type { MacroCalendarProvider } from '@elceo/types';

export class FmpMacroCalendarAdapter implements MacroCalendarProvider {
  async getCalendar(startIso: string, endIso: string): Promise<unknown[]> {
    return [];
  }
}
