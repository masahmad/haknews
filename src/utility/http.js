import request from './request';

export default class http {
   
	static get(uri) {
		return request('GET', uri);
	}

}