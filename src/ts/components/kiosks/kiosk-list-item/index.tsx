import React from "react";

import { navigate } from "hookrouter";

export interface IProps {
	id: number;
	name: string;
	ip: string;
	city: string;
	info?: string;
	status?: boolean;
}

export const KioskListItem = ({ id, name, ip, city, info = "-", status = true }: IProps): JSX.Element => {
	const _onClick = () => {
		navigate(`/kiosks/${name}`);
	};
	return (
		<div onClick={_onClick} className="kiosks-list-items">
			<div>{id}</div>
			<div>{name}</div>
			<div>{city}</div>
			<div>{ip}</div>
			<div>{status ? "is working" : "is not working"}</div>
			<div>{info}</div>
		</div>
	);
};
