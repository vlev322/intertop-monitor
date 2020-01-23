import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { decodeMticode } from "../../../logic/decodeController";
import { IDecodeMticode } from "../../_interface";

import { TicketDetailsPreview } from "./ticket-details-preview";
import { TicketDetailsContent } from "./ticket-details-content";

import { ITicket as props, STATUS } from "../_types";
import { GetAsyncData, ENTITIESDATA } from "../../../services";

interface IProps {
	_id: any;
}
export const TicketDetails = ({ _id }: IProps) => {
	const initialState: props = {
		id: 0,
		img: "",
		info: "",
		date: 0,
		status: STATUS.INWORKING,
		mticode: ""
	};
	useTitle(`Task - #${_id}`);

	const _taskDetailsService = new GetAsyncData<props>(ENTITIESDATA.TICKET);
	const [infoTask, setInfo] = useState(initialState);
	const { mticode } = infoTask;

	useEffect(() => {
		_taskDetailsService.getAsyncEntityData(_id).then(result => {
			console.log(result);

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
