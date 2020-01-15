import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { KioskDetailsService } from "../../../services/getAsyncKioskDetails";

interface IProps {
	_name: any;
}
interface IState {
	id: number;
	name: string;
	ip: string;
	city: string;
}

export const KioskDetails = ({ _name }: IProps) => {
	const initialState: IState = {
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
		<>
			<div>Kiosk - {name}</div>
			<div>
				<h2>{id}</h2>
				<h2>{name}</h2>
				<h2>{city}</h2>
				<h2>{ip}</h2>
			</div>
		</>
	);
};
