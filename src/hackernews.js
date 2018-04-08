import DataService from './utility/dataService';

const ul = document.getElementById('stories');
const idUri = 'https://hacker-news.firebaseio.com/v0/showstories.json';
const storyUri = ' https://hacker-news.firebaseio.com/v0/item/';

export default function HackerNews() {
	
	return startUp();
	

	// for each returned storyid ln collection we retieve the story one by one
	// not ideal to having to hit the story endpoint individually 
	// like this in my opinion. 
	function startUp() {
		GetHackerNewsIdList().then((result) => {   
			return result.map(function(storyId) {
				GetHackerNewsStory(storyId).then((story) => {
					let li = createNode('li');
					let newlink = createNode('a');
					newlink.innerHTML = story.title;
					newlink.setAttribute('href', '#');
					newlink.setAttribute('data-story', storyId);
					newlink.setAttribute('data-kids', story.kids);
					newlink.onclick = dynamicEvent;
					appendNode(li, newlink);
					appendNode(ul, li);
				});

			});
		});
	}



	// we store the story id and  the comment id s in the data attribute of the link
	// to do - wire up the comment id stored in data-kids and call a fetch func.
	function dynamicEvent(event){
		let story = event.target.attributes.getNamedItem('data-story').value;
		let kids = event.target.attributes.getNamedItem('data-kids').value;
		console.log(story);
		console.log(kids); // comment id's
	}


	// Get list of story id's from HackerNews
	//wrapped in promise as we need to fetch the story( title)
	function GetHackerNewsIdList() {
		return new Promise((resolve) => {
			const prm = DataService.getHackerNewsIds(idUri);
			prm.then((result) => {   
				resolve(result);  
			})
				.catch((e)=> {
					console.log('get hacker list error',e);
				});
		});
	}
	



	// GEt story for provided storyId
	function GetHackerNewsStory(storyId) {
		return new Promise((resolve) => {
			let uri = storyUri + storyId +'.json';
			const prm = DataService.getHackerNewsIds(uri);
			prm.then((result) => {  
				resolve(result);  
			})
				.catch((e)=> {
					console.log('get story id error',e);
				});
		});
	}







	// helper functions to help create /add dom elements
	function createNode(element) {
		return document.createElement(element); // Create the type of element you pass in the parameters
	}

	// helper functions to help create /add dom elements
	function appendNode(parent, el) {
		return parent.appendChild(el); // Append the second parameter(element) to the first one
	}
      


	// test function for checking unit test is configured - see index.spac.js
	// out of time for any meaningful testing
	/* eslint-disable */
	function sayHello() {
		return 'Hello World!';
	}

}





