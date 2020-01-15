import axios from "axios";
import { IKiosk } from "../_interface";

interface IKiosksService {
	getKiosksAsync(): Promise<IKiosk[]>;
}

export class KiosksService implements IKiosksService {
	async getKiosksAsync() {
		return (await axios.get("http://localhost:3000/kiosks")).data;
	}
}
