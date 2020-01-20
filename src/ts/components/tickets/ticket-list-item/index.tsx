import React from "react";
import { navigate } from "hookrouter";

import { decodeMticode } from "../../../logic/decodeController";

import { IDecodeMticode } from "../../_interface";
import { ITicket } from "../_types";

export const TicketListItem = ({ id, date, info, status, mticode }: ITicket): JSX.Element => {
	const decodeInfo: IDecodeMticode = decodeMticode(mticode);
	const { city } = decodeInfo;

	const _onClick = () => {
		navigate(`/tickets/${id}`);
	};

	return (
		<div onClick={_onClick} className="list-items">
			<div>#{id}</div>
			<div>{mticode}</div>
			<div>{city}</div>
			<div>{date}</div>
			<div>{status ? "is working" : "is not working"}</div>
			<div>{info}</div>
		</div>
	);
};
