import { Moment } from "moment";

export enum PERIOD {
	MONTH = "month",
	DAY = "day"
}

export interface ISelectedDate {
	period: PERIOD;
	date: Moment;
}
