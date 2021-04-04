var searchFormEl = document.getElementById("startSearchBtn");

function searchFormSubmit(event) {
	event.preventDefault();
	$('#searchLabel').append("");
	var artistInputVal = document.getElementById("artistInput").value;
	var songInputVal = document.getElementById("songInput").value;
	var lyricsInputVal = document.getElementById("lyricsInput").value;
  
	if (!artistInputVal && !songInputVal && !lyricsInputVal) {
		function alertErrorMsg() {
			$('#searchLabel').append(' <span class="errorMsg">* You need an artist, song or lyrics to start the search!</span>');
		}
		alertErrorMsg();
		setTimeout(function(){ $('#searchLabel').text("Search:"); }, 5000);
	  return;
	}
  
	var queryString = './search-results.html?q=' + artistInputVal + '&' + songInputVal + '&' + lyricsInputVal;

	console.log(queryString);
  
	location.assign(queryString);
  }

  searchFormEl.addEventListener('click', searchFormSubmit);
