import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";

import { KioskListItem } from "../kiosk-list-item";
import { IKiosk } from "../_interface";

import { GetAsyncData, ENTITIESDATA } from "../../../services";

export const KiosksTable = () => {
	useTitle("All kiosks");
	const _kiosksService = new GetAsyncData<IKiosk>(ENTITIESDATA.KIOSKS);
	const initialState: IKiosk[] = [{ mticode: "", host: "", city: "" }];
	const [kiosks, setKiosks] = useState(initialState);

	useEffect(() => {
		_kiosksService.getAsyncData().then(result => {
			setKiosks(result);
		});
	}, []);

	return (
		<div>
			{kiosks.map((kiosk: IKiosk) => (
				<KioskListItem key={kiosk.host} {...kiosk} />
			))}
		</div>
	);
};
