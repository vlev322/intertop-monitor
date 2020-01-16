import React, { Component } from "react";

import { Navigation } from "./navigation";
import { Back } from "./button-back";
import { NavigationCore } from "./navigation/routes";

export interface IPresenters {}

interface IProps {
	presenters: IPresenters;
}

export class IndexComposition extends Component<IProps> {
	public render(): JSX.Element {
		return (
			<>
				<Navigation />
				<Back />
				<div className="container">
					<NavigationCore />
				</div>
			</>
		);
	}
}
