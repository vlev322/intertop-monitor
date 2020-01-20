import React from "react";

import { IDecodeMticode } from "../../../_interface";
import { decodeMticode } from "../../../../logic/decodeController";

export const TicketDetailsPreview = ({ date, mticode, brand, shopNumber }): JSX.Element => {
	const decodeInfo: IDecodeMticode = decodeMticode(mticode);
	const { city } = decodeInfo;
	return (
		<div className="entityDetails-preview">
			<div>{mticode}</div>
			<div>{city}</div>
			<div>{brand}</div>
			<div>{shopNumber}</div>
			<div>{date}</div>
		</div>
	);
};
