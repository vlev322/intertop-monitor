import axios from "axios";
import { ITask } from "../_interface";

interface ITaskDetailsService {
	getTaskDetailsAsync(id: number): Promise<ITask>;
}

export class TaskDetailsService implements ITaskDetailsService {
	async getTaskDetailsAsync(id: number) {
		return (await axios.get(`http://localhost:3000/task/?id=${id}`)).data;
	}
}
