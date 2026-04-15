import type { MacroCalendarProvider } from '@elceo/types';

export class InvestingCalendarScrapeAdapter implements MacroCalendarProvider {
  async getCalendar(startIso: string, endIso: string): Promise<unknown[]> {
    return [];
  }
}
