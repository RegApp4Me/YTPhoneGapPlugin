var youtube = {
    playVideo: function(videoid, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'YouTube', // mapped to our native Java class called "YouTubePlugin"
            'playVideo', // with this action name
            [{ // and this array of custom arguments to play our video
                "videoid": videoid
            }]
        ); 
    }
}
module.exports = youtube;