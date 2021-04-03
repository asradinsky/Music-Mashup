var searchFormEl = document.getElementById("startSearchBtn");

function searchFormSubmit(event) {
	event.preventDefault();
  
	var artistInputVal = document.getElementById("artistInput").value;
	var songInputVal = document.getElementById("songInput").value;
	var lyricsInputVal = document.getElementById("lyricsInput").value;
  
	/*if (!artistInputVal) {
	  console.log('You need an Artist or Song or Lyrics to start the search!');
	  return;
	}*/
  
	var queryString = './search-results.html?q=' + artistInputVal + '&' + songInputVal + '&' + lyricsInputVal;

	console.log(queryString);
  
	location.assign(queryString);
  }

  searchFormEl.addEventListener('click', searchFormSubmit);
