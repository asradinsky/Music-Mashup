var searchResultEl = document.getElementById('search-results');
var searchCard = document.createElement('div');
searchCard.classList.add('result-card');
searchResultEl.append(searchCard);

var bandName = document.createElement('h3');
bandName.classList.add('band-name');
bandName.textContent = //band name data from API;
searchCard.appendChild(bandName);

var queryResult = document.createElement('div');
queryResult.classList.add('query-description');
searchResultEl.append(queryResult);

var lyrics = document.createElement('p');
lyrics.classList.add('band-name');
lyrics.textContent = //lyrics from API;
queryResult.appendChild(lyrics);

var album = document.createElement('h2');
album.classList.add('album-name');
album.textContent = //album reult from API;
queryResult.appendChild(album);