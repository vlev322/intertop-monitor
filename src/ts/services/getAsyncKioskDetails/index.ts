import axios from "axios";
import { IKiosk } from "../_interface";

interface IKioskDetailsService {
	getKioskDetailsAsync(name: string): Promise<IKiosk>;
}

export class KioskDetailsService implements IKioskDetailsService {
	async getKioskDetailsAsync(name: string) {
		return (await axios.get(`http://localhost:3000/kiosk/?name=${name}`)).data;
	}
}
