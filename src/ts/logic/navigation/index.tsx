import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { Navigation } from "../../components/navigation";
import { Day } from "../../components/temp/day";
import { Problems } from "../../components/temp/problems";
import { Kiosks } from "../../components/temp/kiosks";
import { Calendar } from "../../components/temp/calendar";
import { Add } from "../../components/temp/add";

export const NavigationWraper = () => (
	<Router>
		<div>
		<Navigation />
			<Switch>
				<Route exact path="/" component={Day} />
				<Route exact path="/day" component={Day} />
				<Route exact path="/calendar" component={Calendar} />
				<Route path="/kiosks" component={Kiosks} />
				<Route path="/problems" component={Problems} />
				<Route path="/add" component={Add} />
			</Switch>
		</div>
	</Router>
);
