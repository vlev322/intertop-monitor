import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { TicketsService } from "../../../services/getAsyncTickets";
import { ITicket, STATUS } from "../_types";
import { IDecodeMticode } from "../../_interface";
import { decodeMticode } from "../../../logic/decodeController";
import { TicketListItem } from "../ticket-list-item";

export const TasksTable = () => {
	useTitle("All tickets");
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
				<TicketListItem key={ticket.date} {...ticket} />
			))}
		</div>
	);
};
