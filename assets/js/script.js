// var track = prompt("Enter track. Leave blank if unknown.");
// var artist = prompt("Enter artist. Leave blank if unknown.");
// var lyrics = prompt("Enter lyrics. Leave blank if unknown.");
// lyrics = lyrics.replace(" ", "%20");

var searchResultEl = document.getElementById('search-results');

var artistInputEL = document.getElementById("artistInput");
var songInputEL = document.getElementById("artistInput");
var lyricsInputEL = document.getElementById("artistInput");



function getParams() {
	var searchParamArr = document.location.search.split('&');

	var singer = searchParamArr[0].split('=').pop();
	var title = searchParamArr[1];
	var lyricsQuery = searchParamArr[2];

	console.log(singer);
	console.log(title);
	console.log(lyricsQuery);

	searchMusicMatch(singer, title, lyricsQuery);

}

function searchMusicMatch(singer, title, lyricsQuery) {
	var queryUrl = "https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_track=";

	if (singer || title || lyricsQuery) {
		queryUrl = "https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_track=" + title + "&q_artist=" + singer + "&f_has_lyrics=" + lyricsQuery + "&quorum_factor=1&apikey=4b67acae62e7e4fd972ec37a8881242b";

		console.log(queryUrl);

		fetch(queryUrl)
	.then(response => response.text())
	.then(data => (artists(data)));
	}
}

// var url = "https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_track=" + track + "&q_artist=" + artist + "&f_has_lyrics=" + lyrics + "&quorum_factor=1&apikey=4b67acae62e7e4fd972ec37a8881242b";

function artists(file) {
	var cond = file.search("track_name");
	while (cond != -1){
		var startIndex = file.search("artist_name") + 14;
		var endIndex = file.search("track_share_url") - 3;
		var singer = file.slice(startIndex, endIndex);
		startIndex = file.search("track_name") + 13;
		endIndex = file.search("track_name_translation_list") - 3;
		var title = file.slice(startIndex, endIndex);
		startIndex = file.search("album_name") + 13;
		endIndex = file.search("artist_id") - 3;
		var album = file.slice(startIndex, endIndex);
		console.log(title + " by " + singer + " in " + album);
		file = file.replace("artist_name", "done");
		file = file.replace("track_share_url", "done");
		file = file.replace("track_name", "done");
		file = file.replace("track_name_translation_list", "done");
		file = file.replace("album_name", "done");
		file = file.replace("artist_id", "done");
		cond = file.search("track_name");
		printResults(singer, title, album);

	}

}

$('#startSearchBtn').click(function(event){
  fetch(url)
    .then(response => response.text())
    .then(data => (artists(data)));
});

    
// var youTubeApiKey = 'AIzaSyAMgCp_vfENiw84ymkpYJyxJrT8pY1BuPI';


var searchResultEl = document.getElementById('search-results');



var searchBtn = document.getElementById("searchBtn");


var searchFormEl = document.querySelector(".search-form");

//var api_key = "4b67acae62e7e4fd972ec37a8881242b";

// var url = "https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_track=" + track + "&q_artist=" + artist + "&f_has_lyrics=" + lyrics + "&quorum_factor=1&apikey=4b67acae62e7e4fd972ec37a8881242b";

searchBtn.addEventListener("click", searchCriteria);

function searchCriteria() {

    var track = document.getElementById("title-input").value;
    var artist = document.getElementById("artist-input").value;
    var lyrics = document.getElementById("lyrics-input").value;
    lyrics = lyrics.replace(" ", "%20");

    var url = "https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&q_track=" + track + "&q_artist=" + artist + "&f_has_lyrics=" + lyrics + "&quorum_factor=1&apikey=4b67acae62e7e4fd972ec37a8881242b";

    fetch(url)
	.then(response => response.text())
	.then(data => (artists(data)));

	console.log(artist);
	console.log(track);
	console.log(lyrics);
}

	

function printResults(singer, title, album) {

var resultCard = document.createElement("div");

var bandNameEl = document.createElement('h2');
bandNameEl.textContent = singer
resultCard.append(bandNameEl);

var albumNameEl = document.createElement('h3');
albumNameEl.textContent = album
resultCard.append(albumNameEl);

var titleResultEl = document.createElement('p');
titleResultEl.textContent = title;
resultCard.append(titleResultEl);

searchResultEl.append(resultCard);

}

getParams();