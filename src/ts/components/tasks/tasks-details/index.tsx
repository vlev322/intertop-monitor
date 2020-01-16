import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { ITask } from "../_interface";
import { TaskDetailsService } from "../../../services/getAsyncTaskDetails";

interface IProps {
	_id: any;
}
export const TaskDetails = ({ _id }: IProps) => {
	const initialState: ITask = {
		id: 0,
		city: "",
		img: "",
		info: "",
		date: 0,
		status: "",
		name: "string"
	};
	useTitle(`###${_id}`);
	const _taskDetailsService = new TaskDetailsService();
	const [infoTask, setInfo] = useState(initialState);
	const { id, city, img, info, date, status, name } = infoTask;

	useEffect(() => {
		_taskDetailsService.getTaskDetailsAsync(_id).then(result => {
			setInfo({ ...result });
			console.log(result);
		});
	}, []);

	return (
		<div className="kioskDetail">
			<div className="kioskDetail-preview">
				<div>{id}</div>
				<div>{city}</div>
				<div>{img}</div>
				<div>{info}</div>
				<div>{date}</div>
				<div>{status}</div>
				<div>{name}</div>
			</div>
		</div>
	);
};
