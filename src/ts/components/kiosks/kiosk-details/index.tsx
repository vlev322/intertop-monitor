import React, { Component } from "react";

interface IProps {
	id: any;
}
interface IState {}

export class KioskDetails extends Component<IProps, IState> {
	componentDidMount() {}
	render() {
		return <div>Kiosk - {this.props.id}</div>;
	}
}
