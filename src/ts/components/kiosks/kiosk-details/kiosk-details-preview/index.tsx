import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { KioskDetailsService } from "../../../../services/getAsyncKioskDetails";
import { decodeMticode } from "../../../../logic/decodeController";
import { IKiosk } from "../../_interface";
import { IDecodeMticode } from "../../../_interface";

interface IProps {
	_mticode: any;
}

interface IState extends IKiosk {
	brand: string;
	shopNumber: number;
}

export const KioskDetailsPreview = ({ _mticode }: IProps) => {
	const initialState: IState = {
		id: 0,
		mticode: "",
		ip: "",
		city: "",
		brand: "",
		shopNumber: 0
	};
	useTitle(`${_mticode}`);
	const _kioskDetailsService = new KioskDetailsService();
	const decodeInfo: IDecodeMticode = decodeMticode(_mticode);
	const [info, setInfo] = useState(initialState);
	const { id, mticode, ip } = info;
	const { city, brand, shopNumber } = decodeInfo;

	useEffect(() => {
		_kioskDetailsService.getKioskDetailsAsync(_mticode).then(result => {
			setInfo({ ...result, city, brand, shopNumber });
		});
	}, []);

	return (
		<div className="entityDetails-preview">
			<div>{id}</div>
			<div>{mticode}</div>
			<div>{city}</div>
			<div>{brand}</div>
			<div>{shopNumber}</div>
			<div>{ip}</div>
		</div>
	);
};
