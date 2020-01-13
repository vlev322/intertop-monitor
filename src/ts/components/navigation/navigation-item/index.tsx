import React from "react";
import { NavLink } from "react-router-dom";

interface IPropsNavItem {
	to: string;
}

export const NavItem = (to: IPropsNavItem) => (
	<span>
		<NavLink to={`/${to}`}>{to}</NavLink>
	</span>
);
