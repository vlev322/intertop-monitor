import React from "react";

export const TableHeader = ({VARIANT_HEADER}) => (
	<div className="list-header">
		{VARIANT_HEADER.map((kiosk: string) => (
			<div key={kiosk}>{kiosk}</div>
		))}
	</div>
);
