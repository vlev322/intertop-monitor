import axios from "axios";
import { IKiosk } from "../_interface";

interface IKioskDetailsService {
	getKioskDetailsAsync(mticode: string): Promise<IKiosk>;
}

export class KioskDetailsService implements IKioskDetailsService {
	async getKioskDetailsAsync(mticode: string) {
		return (await axios.get(`http://localhost:3000/kiosk/?mticode=${mticode}`)).data;
	}
}
