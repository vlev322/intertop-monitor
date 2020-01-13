import React, { Component } from "react";

export interface IPresenters {}

interface IProps {
	presenters: IPresenters;
}

export class IndexComposition extends Component<IProps> {
	public render(): JSX.Element {
		return <div>Index composition</div>;
	}
}
