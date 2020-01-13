import ReactDom from "react-dom";
import { createElement } from "react";

export interface IPresenters {}

export function render(component: React.ComponentClass<{ presenters: IPresenters }>, presenters: IPresenters): void {
	const container = document.getElementById("root");
	const indexComponent = createElement(component, { presenters });

	ReactDom.render(indexComponent, container);
}
