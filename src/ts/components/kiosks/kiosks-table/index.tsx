import React, { Component } from "react";

import { KiosksService } from "../../../services/getAsyncKiosks";

import { IProps as IKioskListItem } from "../kiosk-list-item/index";
import { KioskListItem } from "../kiosk-list-item";

interface IState {
	kiosks: IKioskListItem[];
}

export class KiosksTable extends Component<{}, IState> {
	public state = { kiosks: [] };
	componentDidMount() {
		const _kiosksService = new KiosksService();
		_kiosksService.getKiosksAsync().then(result => {
			this.setState({ kiosks: result });
		});
	}

	render() {
		return (
			<div>
				{this.state.kiosks.map((kiosk: IKioskListItem) => (
					<KioskListItem key={kiosk.ip} {...kiosk} />
				))}
			</div>
		);
	}
}
