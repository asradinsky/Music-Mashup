var searchFormEl = document.getElementById("indexForm");

function searchFormSubmit(event) {
	//event.preventDefault();
  
	var artistInputVal = document.getElementById("artistInput").value;
	var songInputVal = document.getElementById("artistInput").value;
	var lyricsInputVal = document.getElementById("artistInput").value;
  
	/*if (!artistInputVal) {
	  console.log('You need an Artist or Song or Lyrics to start the search!');
	  return;
	}*/
  
	var queryString = './search-results.html?q=' + artistInputVal + songInputVal + lyricsInputVal;
  
	location.replace(queryString);
  }

  searchFormEl.addEventListener('click', searchFormSubmit);
