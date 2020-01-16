import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { KioskDetailsService } from "../../../services/getAsyncKioskDetails";
import { IKiosk } from "../_interface";

interface IProps {
	_name: any;
}
export const KioskDetails = ({ _name }: IProps) => {
	const initialState: IKiosk = {
		id: 0,
		name: "",
		ip: "",
		city: ""
	};
	useTitle(`${_name}`);
	const _kioskDetailsService = new KioskDetailsService();
	const [info, setInfo] = useState(initialState);
	const { id, name, ip, city } = info;

	useEffect(() => {
		_kioskDetailsService.getKioskDetailsAsync(_name).then(result => {
			setInfo({ ...result });
		});
	}, []);

	return (
		<div className="kioskDetail">
			<div className="kioskDetail-preview">
				<div>{id}</div>
				<div>{name}</div>
				<div>{city}</div>
				<div>{ip}</div>
			</div>

		</div>
	);
};
