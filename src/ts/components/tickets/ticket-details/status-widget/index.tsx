import React from "react";
import { STATUS } from "../../_types";

type props = {
	onSelectChange: (func: any) => void;
	currentStatus: string;
};

const arrayOfData = [{ status: STATUS.INWORKING }, { status: STATUS.SOLVED }];

export const DynamicSelectStatus = ({ onSelectChange, currentStatus }: props): JSX.Element => {
	const handleChange = (e: { target: { value: any } }) => {
		let selectedValue = e.target.value;
		onSelectChange(selectedValue);
	};
	let options = arrayOfData
		.filter(({ status }: { status: string }) => status !== currentStatus)
		.map(({ status }: { status: string }) => (
			<option key={status} value={status}>
				{status}
			</option>
		));
	return (
		<select name="selectStatus" className="status-select" onChange={handleChange}>
			<option>Select status below</option>
			{options}
		</select>
	);
};
