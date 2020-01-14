import React from "react";
import { A } from "hookrouter";
interface IPropsNavItem {
	to: string;
}

export const NavItem = (to: IPropsNavItem) => (
	<span>
		<A href={`/${to}`}>{to}</A>
	</span>
);
