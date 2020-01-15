import React from "react";

import { TableHeader } from "../list-header";
import { TASKS_HEADER } from "../list-header/caseHeader";
import { TasksTable } from "./tasks-table";

export const Tasks = () => (
	<div>
		<TableHeader VARIANT_HEADER={TASKS_HEADER} />
		<TasksTable />
	</div>
);
