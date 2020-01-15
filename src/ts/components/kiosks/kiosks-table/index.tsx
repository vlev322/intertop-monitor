import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { KiosksService } from "../../../services/getAsyncKiosks";

import { KioskListItem } from "../kiosk-list-item";
import { IKiosk } from "../_interface";

export const KiosksTable = () => {
	useTitle("All kiosks");
	const _kiosksService = new KiosksService();
	const initialState: IKiosk[] = [{ id: 0, name: "", ip: "", city: "" }];
	const [kiosks, setKiosks] = useState(initialState);

	useEffect(() => {
		_kiosksService.getKiosksAsync().then(result => {
			setKiosks(result);
		});
	}, []);

	return (
		<div>
			{kiosks.map((kiosk: IKiosk) => (
				<KioskListItem key={kiosk.ip} {...kiosk} />
			))}
		</div>
	);
};
