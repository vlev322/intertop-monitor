import axios from "axios";

import { baseURL } from "../config";

interface IGetAsyncDataFactory<T> {
	entity: string;
	getAsyncData(): Promise<T[]>;
	getAsyncEntityData(key: string | number): Promise<T>;
}

export enum ENTITIESDATA {
	KIOSKS = "kiosks",
	KIOSK = "kiosk",
	TICKET = "ticket",
	TICKETS = "tickets"
}
export class GetAsyncData<T> implements IGetAsyncDataFactory<T> {
	constructor(entity: ENTITIESDATA) {
		this.entity = entity;
	}
	public entity: ENTITIESDATA;

	async getAsyncData(): Promise<T[]> {
		return (await axios.get(`${baseURL}/${this.entity}`)).data;
	}

	async getAsyncEntityData(key: string | number): Promise<T> {
		const params = this.entity == ENTITIESDATA.KIOSK ? "?mticode=" : "?id=";
		return (await axios.get(`${baseURL}/${this.entity}/${params}${key}`)).data;
	}
}
