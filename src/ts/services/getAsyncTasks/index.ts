import axios from "axios";
import { ITask } from "../_interface";

interface ITasksService {
	getTasksAsync(): Promise<ITask[]>;
}

export class TasksService implements ITasksService {
	async getTasksAsync() {
		return (await axios.get("http://localhost:3000/tasks")).data;
	}
}
