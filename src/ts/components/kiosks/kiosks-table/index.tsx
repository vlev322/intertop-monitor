import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { KiosksService } from "../../../services/getAsyncKiosks";

import { IProps as IKioskListItem } from "../kiosk-list-item/index";
import { KioskListItem } from "../kiosk-list-item";

export const KiosksTable = () => {
	useTitle("All kiosks");
	const _kiosksService = new KiosksService();
	const initialState: IKioskListItem[] = [{ id: 0, name: "", ip: "", city: "" }];
	const [kiosks, setKiosks] = useState(initialState);
	useEffect(() => {
		_kiosksService.getKiosksAsync().then(result => {
			setKiosks(result);
		});
	}, []);

	return (
		<div>
			{kiosks.map((kiosk: IKioskListItem) => (
				<KioskListItem key={kiosk.ip} {...kiosk} />
			))}
		</div>
	);
};
