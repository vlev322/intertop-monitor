import React, { Component } from "react";

import { NavigationWraper } from "../logic/navigation";

export interface IPresenters {}

interface IProps {
	presenters: IPresenters;
}

export class IndexComposition extends Component<IProps> {
	public render(): JSX.Element {
		return (
			<div>
				<NavigationWraper />
			</div>
		);
	}
}
