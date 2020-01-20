import React, { useState, useEffect } from "react";

import { TicketListItem } from "../../../tickets/ticket-list-item";
import { TicketsService } from "../../../../services/getAsyncTickets";
import { ITicket, STATUS } from "../../../tickets/_types";
import { decodeMticode } from "../../../../logic/decodeController";
import { IDecodeMticode } from "../../../_interface";

export const EntityDetailsTable = ({ _mticode }) => {
	const _ticketsService = new TicketsService();
	const initialState: ITicket[] = [{ id: 0, mticode: "", img: "", info: "", date: 0, status: STATUS.INWORKING }];
	const [tickets, setTasks] = useState(initialState);

	useEffect(() => {
		_ticketsService.getTicketsAsync().then(result => {
			setTasks(result);
		});
	}, []);
	const { city }: IDecodeMticode = decodeMticode(_mticode);
	return (
		<div>
			{tickets.map((ticket: ITicket) => (
				<TicketListItem key={city} {...ticket} />
			))}
		</div>
	);
};
