import axios from "axios";
import { ITask } from "../_interface";

interface ITaskDetailsService {
	getTicketDetailsAsync(id: number): Promise<ITask>;
}

export class TicketDetailsService implements ITaskDetailsService {
	async getTicketDetailsAsync(id: number) {
		return (await axios.get(`http://localhost:3000/ticket/?id=${id}`)).data;
	}
}
