import React from "react";
import moment from "moment";

export function SelectedMonth(): JSX.Element {
	return (
		<div>
			<span className="month">{ moment().format("MMMM YYYY") }</span>
		</div>
	);
}
