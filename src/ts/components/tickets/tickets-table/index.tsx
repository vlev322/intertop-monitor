import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { TicketListItem } from "../ticket-list-item";

import { ITicket, STATUS } from "../_types";
import { GetAsyncData, ENTITIESDATA } from "../../../services";

export const TicketsTable = () => {
	useTitle("All tickets");
	const _ticketsService = new GetAsyncData<ITicket>(ENTITIESDATA.TICKETS);
	const initialState: ITicket[] = [{ id: 0, mticode: "", img: "", info: "", date: 0, status: STATUS.INWORKING }];
	const [tickets, setTickets] = useState(initialState);

	useEffect(() => {
		_ticketsService.getAsyncData().then(result => {
			setTickets(result);
		});
	}, []);

	return (
		<div>
			{tickets.map((ticket: ITicket) => (
				<TicketListItem key={ticket.date} {...ticket} />
			))}
		</div>
	);
};
