import React, { useState, useEffect } from "react";

import { ITask } from "../../../tasks/_interface";
import { TaskListItem } from "../../../tasks/task-list-item";
import { TasksService } from "../../../../services/getAsyncTasks";

export const EntityDetailsTable = ({_mticode}) => {
	const _tasksService = new TasksService();
	const initialState: ITask[] = [{ id: 0, mticode: "", city: "", img: "", info: "", date: 0, status: "" }];
	const [tasks, setTasks] = useState(initialState);

	useEffect(() => {
		_tasksService.getTasksAsync().then(result => {
			setTasks(result);
		});
	}, []);

	return (
		<div>
			{tasks.map((task: ITask) => (
				<TaskListItem key={task.city} {...task} />
			))}
		</div>
	);
};
