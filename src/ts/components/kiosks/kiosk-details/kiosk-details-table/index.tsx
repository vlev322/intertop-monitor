import React, { useState, useEffect } from "react";

import { TicketListItem } from "../../../tickets/ticket-list-item";

import { ITicket, STATUS } from "../../../tickets/_types";
import { GetAsyncData, ENTITIESDATA } from "../../../../services";

export const EntityDetailsTable = ({ _mticode }) => {
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
				<TicketListItem key={ticket.id} {...ticket} />
			))}
		</div>
	);
};
