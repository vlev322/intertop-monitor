import React, { Component } from "react";

import { Navigation } from "./navigation";

export interface IPresenters {}

interface IProps {
	presenters: IPresenters;
}

export class IndexComposition extends Component<IProps> {
	public render(): JSX.Element {
		return (
			<div>
				<Navigation />
			</div>
		);
	}
}
