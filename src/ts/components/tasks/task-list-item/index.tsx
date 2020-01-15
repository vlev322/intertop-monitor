import React from "react";

import { navigate } from "hookrouter";
import { ITask } from "../_interface";

export const TaskListItem = ({ id, img, city, date, info, status, name }: ITask): JSX.Element => {
	const _onClick = () => {
		navigate(`/tasks/${id}`);
	};

	return (
		<div onClick={_onClick} className="list-items">
			<div>#{id}</div>
			<div>{name}</div>
			<div>{city}</div>	
			<div>{img}</div>
			<div>{date}</div>
			<div>{status ? "is working" : "is not working"}</div>
			<div>{info}</div>
		</div>
	);
};
