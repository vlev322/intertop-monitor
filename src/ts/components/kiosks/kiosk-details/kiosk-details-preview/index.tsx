import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { decodeMticode } from "../../../../logic/decodeController";

import { IKiosk } from "../../_interface";
import { IDecodeMticode } from "../../../_interface";
import { GetAsyncData, ENTITIESDATA } from "../../../../services";

type props = {
	_mticode: any;
};

interface IState extends IKiosk {
	brand: string;
	shopNumber: number;
}

export const KioskDetailsPreview = ({ _mticode }: props) => {
	const initialState: IState = {
		mticode: "",
		host: "",
		city: "",
		brand: "",
		shopNumber: 0
	};
	useTitle(`${_mticode}`);
	const _kioskDetailsService = new GetAsyncData<IState>(ENTITIESDATA.TICKET);
	const decodeInfo: IDecodeMticode = decodeMticode(_mticode);
	const [info, setInfo] = useState(initialState);
	const { mticode, host } = info;
	const { city, brand, shopNumber } = decodeInfo;

	useEffect(() => {
		_kioskDetailsService.getAsyncEntityData(_mticode).then(result => {
			setInfo({ ...result, city, brand, shopNumber });
		});
	}, []);

	return (
		<div className="entityDetails-preview">
			<div>{mticode}</div>
			<div>{city}</div>
			<div>{brand}</div>
			<div>{shopNumber}</div>
			<div>{host}</div>
		</div>
	);
};
