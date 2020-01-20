import React from "react";

import { TableHeader } from "../list-header";
import { TICKETS_HEADER } from "../list-header/caseHeader";
import { TicketsTable } from "./tickets-table";

export const Tickets = () => (
	<div>
		<TableHeader VARIANT_HEADER={TICKETS_HEADER} />
		<TicketsTable />
	</div>
);
