import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { decodeMticode } from "../../../logic/decodeController";
import { IDecodeMticode } from "../../_interface";

import { TicketDetailsService } from "../../../services/getAsyncTicketDetails";
import { TicketDetailsContent } from "../ticket-details/ticket-details-content";
import { TicketDetailsPreview } from "../ticket-details/ticket-details-preview";

import { ITicket as props, STATUS } from "../_types";

interface IProps {
	_id: any;
}
export const TaskDetails = ({ _id }: IProps) => {
	const initialState: props = {
		id: 0,
		img: "",
		info: "",
		date: 0,
		status: STATUS.INWORKING,
		mticode: ""
	};
	useTitle(`Ticket - #${_id}`);

	const _taskDetailsService = new TicketDetailsService();
	const [infoTask, setInfo] = useState(initialState);
	const { mticode } = infoTask;

	useEffect(() => {
		_taskDetailsService.getTicketDetailsAsync(_id).then(result => {
			setInfo({ ...result });
		});
	}, []);

	const decodeInfo: IDecodeMticode = decodeMticode(mticode);
	const props = { ...decodeInfo, ...infoTask };

	return (
		<div className="entityDetails">
			<TicketDetailsPreview {...props} />
			<TicketDetailsContent {...props} />
		</div>
	);
};
