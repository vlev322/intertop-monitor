import React from "react";
import { useRoutes } from "hookrouter";

import { NotFoundPage } from "../not-found-page";

import { Day } from "../temp/day";
import { Problems } from "../temp/problems";
import { Calendar } from "../temp/calendar";
import { Add } from "../temp/add";
import { Kiosks } from "../kiosks";
import { KioskDetails } from "../kiosks/kiosk-details";
interface QueryParams {
	[key: string]: any;
}
interface RouteObject {
	[key: string]: (params: QueryParams) => any;
}

export const routes = {
	"/": () => <Day />,
	"/day": () => <Day />,
	"/problems": () => <Problems />,
	// '/task/:id': () => <ProblemDetails id={id}/>,
	"/kiosks": () => <Kiosks />,
	"/kiosks/:name": ({ name }: RouteObject) => <KioskDetails _name={name.toString().toUpperCase()} />,
	"/calendar": () => <Calendar />,
	"/add": () => <Add />
};

export const NavigationCore = () => {
	const routeResult = useRoutes(routes);

	return routeResult || <NotFoundPage />;
};
