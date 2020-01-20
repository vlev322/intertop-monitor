import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { TicketListItem } from "../ticket-list-item";

import { TicketsService } from "../../../services/getAsyncTickets";
import { ITicket, STATUS } from "../_types";
import { IDecodeMticode } from "../../_interface";
import { decodeMticode } from "../../../logic/decodeController";

export const TicketsTable = () => {
	useTitle("All tasks");
	const _ticketsService = new TicketsService();
	const initialState: ITicket[] = [{ id: 0, mticode: "", img: "", info: "", date: 0, status: STATUS.INWORKING }];
	const [tasks, setTasks] = useState(initialState);

	useEffect(() => {
		_ticketsService.getTicketsAsync().then(result => {
			setTasks(result);
		});
	}, []);

	return (
		<div>
			{tasks.map((ticket: ITicket) => (
				<TicketListItem key={ticket.date} {...ticket} />
			))}
		</div>
	);
};
