import React from "react";
import { SelectedMonth } from "./header/selected-month/index";
import { CalendarMonth } from "./grid/index";

export function CalendarHeader(): JSX.Element {
	return (
		<div className="calendar-header">
			<SelectedMonth />
			<CalendarMonth/>
		</div>
	);
}
