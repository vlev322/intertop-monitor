import axios from "axios";

interface IKiosksService {
	// getCuisinesAsync(): Promise<ICuisineProps[]>
	getKiosksAsync();
}

export class KiosksService implements IKiosksService {
	async getKiosksAsync() {
		return (await axios.get("http://localhost:3000/kiosks")).data;
	}
}
