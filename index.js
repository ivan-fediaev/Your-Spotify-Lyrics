const genius = require("genius-lyrics-api")
require("dotenv").config()

const api_key = process.env.GENIUS_API_KEY;

const options = {
    apiKey: api_key,
    title: 'Long Time (Intro)',
    artist: 'Playboi Carti',
    optimizeQuery: true
};

function myfunction() {
    genius.getLyrics(options).then((lyrics) => console.log(lyrics));

    genius.getSong(options).then((song) =>
        console.log(`
	${song.id}
	${song.title}
	${song.lyrics}`)
    );
}

/* Load the HTTP library */
let http = require("http");

/* Create an HTTP server to handle responses */

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);