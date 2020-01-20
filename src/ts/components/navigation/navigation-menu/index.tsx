import React from "react";
import { NavItem } from "../navigation-item";

const NAVITEMS: string[] = ["day", "calendar", "kiosks", "tickets", "add"];

export const NavMenu = () => (
	<div className="navigation">
		{NAVITEMS.map((item: any) => (
			<div key={item}>{NavItem(item)}</div>
		))}
	</div>
);
