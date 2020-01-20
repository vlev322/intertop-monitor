import axios from "axios";
import { ITask } from "../_interface";

interface ITicketsService {
	getTicketsAsync(): Promise<ITask[]>;
}

export class TicketsService implements ITicketsService {
	async getTicketsAsync() {
		return (await axios.get("http://localhost:3000/tickets")).data;
	}
}
