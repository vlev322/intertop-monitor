import React from "react";
import { useRoutes } from "hookrouter";

import { NotFoundPage } from "../not-found-page";

import { Day } from "../temp/day";
import { Calendar } from "../calendar";
import { Add } from "../temp/add";
import { Kiosks } from "../kiosks";
import { KioskDetails } from "../kiosks/kiosk-details";
import { Tasks } from "../tasks";
import { TaskDetails } from "../tasks/tasks-details";
interface QueryParams {
	[key: string]: any;
}
interface RouteObject {
	[key: string]: (params: QueryParams) => any;
}

export const routes = {
	"/": () => <Day />,
	"/day": () => <Day />,
	"/tasks": () => <Tasks />,
	'/tasks/:id': ({id}: RouteObject) => <TaskDetails _id={id}/>,
	"/kiosks": () => <Kiosks />,
	"/kiosks/:mticode": ({ mticode }: RouteObject) => <KioskDetails _mticode={mticode.toString().toUpperCase()} />,
	"/calendar": () => <Calendar />,
	"/add": () => <Add />
};

export const NavigationCore = () => {
	const routeResult = useRoutes(routes);

	return routeResult || <NotFoundPage />;
};
