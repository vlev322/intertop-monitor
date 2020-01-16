import React from "react";

import { navigate } from "hookrouter";
import { ITask } from "../_interface";
import { decodeMticode } from "../../../logic/decodeController";
import { IDecodeMticode } from "../../_interface";

export const TaskListItem = ({ id, img, date, info, status, mticode }: ITask): JSX.Element => {

	const decodeInfo: IDecodeMticode = decodeMticode(mticode);
	const {city} = decodeInfo

	const _onClick = () => {
		navigate(`/tasks/${id}`);
	};

	return (
		<div onClick={_onClick} className="list-items">
			<div>#{id}</div>
			<div>{mticode}</div>
			<div>{city}</div>
			<div>{img}</div>
			<div>{date}</div>
			<div>{status ? "is working" : "is not working"}</div>
			<div>{info}</div>
		</div>
	);
};
