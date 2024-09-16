import { addDays, addMonths, addYears, eachDayOfInterval, eachMonthOfInterval, interval } from "date-fns";

export interface CalendarStructure {
	/** Get the definition of the year containing the given date. */
	getYear(date: Date): YearStructure;
}

/** Defines the structure of one year, namely, what months it contains. */
export class YearStructure  {
	constructor(public months: MonthStructure[]) { }
}

/** Defines one month - the start and end. */
export class MonthStructure {
	constructor(public first: Date, public last: Date) { }
	
	/** Get all the dates contained within this month. */
	dates(): Date[] {
		const monthDays = interval(this.first, this.last);
		return eachDayOfInterval(monthDays);
	}
}

export class GregorianCalendarWindow implements CalendarStructure {
	getYear(date: Date): YearStructure {
		const startOfYear = new Date(date.getFullYear(), 0);
		const endOfYear = addDays(addYears(startOfYear, 1), -1);
		const distance = interval(startOfYear, endOfYear);
		const months = eachMonthOfInterval(distance);

		return new YearStructure(months.map(month => new MonthStructure(month, lastDayOfMonth(date))));
	}
}

function lastDayOfMonth(startOfMonth: Date) {
	return addDays(addMonths(startOfMonth, 1), -1);
}