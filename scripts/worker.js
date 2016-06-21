self.onmessage = function(e) {
	console.log('Message received from main script');
	getStoryComment(e, function(commentDetails) {
		
	}) {
    	var storyCommentURL = HN_STORYDETAILS_URL.replace(/\[ID\]/, id);
    	postMessage(request(storyCommentURL, function(evt) { callback(evt.target.response); } );
    	);
  	}
}

function getStoryComment(id, callback) {
    var storyCommentURL = HN_STORYDETAILS_URL.replace(/\[ID\]/, id);
   	postMessage(request(storyCommentURL, function(evt) { callback(evt.target.response); } );
   	);
}

function request(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = callback;
    xhr.send();
}
