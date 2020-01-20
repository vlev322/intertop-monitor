import React, { useState, useEffect } from "react";

import { TicketsService } from "../../../../services/getAsyncTickets";

import { TicketListItem } from "../../../tickets/ticket-list-item";
import { ITicket, STATUS } from "../../../tickets/_types";

export const EntityDetailsTable = ({ _mticode }) => {
	const _ticketsService = new TicketsService();
	const initialState: ITicket[] = [{ id: 0, mticode: "", img: "", info: "", date: 0, status: STATUS.INWORKING }];
	const [tickets, setTasks] = useState(initialState);

	useEffect(() => {
		_ticketsService.getTicketsAsync().then(result => {
			setTasks(result);
		});
	}, []);

	return (
		<div>
			{tickets.map((ticket: ITicket) => (
				<TicketListItem key={ticket.id} {...ticket} />
			))}
		</div>
	);
};
