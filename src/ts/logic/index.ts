import axios from "axios";

interface ICuisineService {
  getCuisinesAsync()
}

export class CuisineService implements ICuisineService {
  async getCuisinesAsync() {
    const cuisines = (await axios.get('https://jsonplaceholder.typicode.com/todos')).data;

    return cuisines
  }
}