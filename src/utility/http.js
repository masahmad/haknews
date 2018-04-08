/**
 * High-level wrapper for the Fetch API (see this post for explanation - https://medium.com/@shahata/why-i-wont-be-using-fetch-api-in-my-apps-6900e6c6fe78#.o6k6ai5fj)
 *
 */


import request from './request';

export default class http {

    
/* @returns {Promise} which returns the response body in JSON format */
     
	static get(uri) {
		return request('GET', uri);
	}

}