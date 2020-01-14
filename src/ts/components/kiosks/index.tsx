import React from "react";
import { KiosksTable } from "./kiosks-table";
import { KiosksTableHeader } from "./kiosk-list-header/index";

export const Kiosks = () => (
	<div className="kiosks">
		<KiosksTableHeader />
		<KiosksTable />
	</div>
);
