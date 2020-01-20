import React, { Component, Fragment } from "react";

const _DAYS = ["1", "2", "3", "4", "5", "6", "7" ];
const _WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export class CalendarMonth extends Component {
	render() {
		return (
			<Fragment>
				{this._getHeader()}
				{this._getDayMonth()}
			</Fragment>
		);
	}

	private _getHeader(): JSX.Element {
		return <ul className="headerWeek">{_WEEK_DAYS.map(this._getWeekDayLi.bind(this))}</ul>;
	}

	private _getWeekDayLi(day: string): JSX.Element {
		return <li>{day}</li>;
	}

	private _getDays(day: string): JSX.Element {
		return <div>{day}</div>;
	}

	private _getDayMonth(): JSX.Element {
		return <div className="gridWeek">{ _DAYS.map(this._getDays.bind(this)) }</div>
	}
}

