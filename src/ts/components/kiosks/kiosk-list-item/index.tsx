import React from "react";

import { navigate } from "hookrouter";
import { IKiosk } from "../_interface";

export interface IProps extends IKiosk {
	info?: string;
	status?: boolean;
}

export const KioskListItem = ({ id, mticode, ip, city, info = "-", status = true }: IProps): JSX.Element => {
	const _onClick = () => {
		navigate(`/kiosks/${mticode}`);
	};
	return (
		<div onClick={_onClick} className="list-items">
			<div>{id}</div>
			<div>{mticode}</div>
			<div>{city}</div>
			<div>{ip}</div>
			<div>{status ? "is working" : "is not working"}</div>
			<div>{info}</div>
		</div>
	);
};
