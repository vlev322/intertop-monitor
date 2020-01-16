import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { ITask } from "../_interface";
import { TaskDetailsService } from "../../../services/getAsyncTaskDetails";
import { decodeMticode } from "../../../logic/decodeController";
import { IDecodeMticode } from "../../_interface";

import { TaskDetailsPreview } from "./task-details-preview";
import { TaskDetailsContent } from "./task-details-content";

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
		mticode: ""
	};
	useTitle(`Task - #${_id}`);

	const _taskDetailsService = new TaskDetailsService();
	const [infoTask, setInfo] = useState(initialState);
	const { mticode } = infoTask;

	useEffect(() => {
		_taskDetailsService.getTaskDetailsAsync(_id).then(result => {
			setInfo({ ...result });
		});
	}, []);

	const decodeInfo: IDecodeMticode = decodeMticode(mticode);
	const props = { ...decodeInfo, ...infoTask };

	return (
		<div className="entityDetails">
			<TaskDetailsPreview {...props} />
			<TaskDetailsContent {...props}/>
		</div>
	);
};
