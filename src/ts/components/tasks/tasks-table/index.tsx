import React, { useState, useEffect } from "react";
import { useTitle } from "hookrouter";


import { TaskListItem } from "../task-list-item";
import { ITask } from "../_interface";
import { TasksService } from "../../../services/getAsyncTasks";

export const TasksTable = () => {
	useTitle("All tasks");
	const _tasksService = new TasksService();
	const initialState: ITask[] = [{ id: 0, name: "", city: "", img: "", info: "", date: 0, status: "" }];
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
