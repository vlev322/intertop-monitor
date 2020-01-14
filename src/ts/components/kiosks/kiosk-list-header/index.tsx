import React from "react";

const KIOSK_HEADER: string[] = ["ID", "MTICODE", "CITY", "IP", "STATUS", "INFO"];

export const KiosksTableHeader = () => (
	<div className="kiosks-list-header">
		{KIOSK_HEADER.map((kiosk: string) => (
			<div key={kiosk}>{kiosk}</div>
		))}
	</div>
);
