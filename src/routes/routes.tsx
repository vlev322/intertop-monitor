import React from "react";
import { useRoutes } from "hookrouter";

import { NotFoundPage } from "../ts/components/not-found-page";

import { Day } from "../ts/components/temp/day";
import { Calendar } from "../ts/components/temp/calendar";
import { Add } from "../ts/components/temp/add";
import { KioskDetails } from "../ts/components/kiosks/kiosk-details";
import { TicketDetails } from "../ts/components/tickets/ticket-details";
import { Tickets } from "../ts/entities/tickets";
import { Kiosks } from "../ts/entities/kiosks";
interface QueryParams {
	[key: string]: any;
}
interface RouteObject {
	[key: string]: (params: QueryParams) => any;
}

export const routes = {
	"/": () => <Day />,
	"/day": () => <Day />,
	"/tickets": () => <Tickets />,
	"/tickets/:id": ({ id }: RouteObject) => <TicketDetails _id={id} />,
	"/kiosks": () => <Kiosks />,
	"/kiosks/:mticode": ({ mticode }: RouteObject) => <KioskDetails _mticode={mticode.toString().toUpperCase()} />,
	"/calendar": () => <Calendar />,
	"/add": () => <Add />
};

export const NavigationCore = () => {
	const routeResult = useRoutes(routes);

	return routeResult || <NotFoundPage />;
};
