import { renderSongs } from "./ui.js";

const url = 'https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '74883c6017mshfd9b34233041822p187e6fjsn140e7142916f',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};
export class API {
  constructor() {
    this.songs = [];
  }

  async getPopular() {
    const res = await fetch(url, options);
    const data = await res.json();
   

    this.songs = data.tracks;


    renderSongs(this.songs);
  }
  async searchMusic(query) {
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr-TR`,
      options
    );

    const data = await res.json();

    const newData = data.tracks.hits.map((song) => ({ ...song.track }));
    console.log(newData);

    renderSongs(newData);
  }
}