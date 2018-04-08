
import http from './http';


export default class DataService {

   

	static getHackerNewsIds(uri) {
		return http.get(uri)
			.then(response => {
				return response;
			});
	}


}