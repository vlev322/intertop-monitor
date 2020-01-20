import React from "react";

import { navigate } from "hookrouter";
import { IKiosk } from "../_interface";
import { decodeMticode } from "../../../logic/decodeController";

export interface IProps extends IKiosk {
	info?: string;
	status?: boolean;
}

export const KioskListItem = ({ mticode, host, status = true }: IProps): JSX.Element => {
	const _onClick = () => {
		navigate(`/kiosks/${mticode}`);
	};
	const { city, brand, shopNumber } = decodeMticode(mticode);

	return (
		<div onClick={_onClick} className="list-items">
			<div>{mticode}</div>
			<div>{brand}</div>
			<div>{shopNumber}</div>
			<div>{city}</div>
			<div>{host}</div>
			<div>{status ? "is working" : "is not working"}</div>
		</div>
	);
};
