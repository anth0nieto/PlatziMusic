const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=f6f87b9b01085660dc189b1fdb4cd4b8&format=json';

function getArtists() {
	
	return fetch(URL)
		.then(response => response.json())
		.then(data => data.topartists.artist)
		.then(artists => artists.map(artist => {
			return {
				name: artist.name,
				image: artist.image[3]['#text'],
				comments: 140,
				likes: 200,
			}
		}))
}

export { getArtists }