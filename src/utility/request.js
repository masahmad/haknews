
export default function request(method, URI) {
 

	return new Promise(function (resolve, reject) {
		tryFetch(resolve, reject, URI);
	});


	function tryFetch(resolve, reject, URI) {
		fetch(URI)
			.then((resp) => resp.json())
			.then(function(data) {
				resolve(data);
				return data;
				
			}).catch((fetchError = { message: ' error' }) => {
				console.log(fetchError);
			});
	}
}