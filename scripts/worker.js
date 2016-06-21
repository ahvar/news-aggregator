
var HN_STORYDETAILS_URL = HN_API_BASE + '/v0/item/[ID].json';

function getStoryComment(id, callback) {

    var storyCommentURL = HN_STORYDETAILS_URL.replace(/\[ID\]/, id);

    request(storyCommentURL, function(evt) {
      callback(evt.target.response);
    });
  }