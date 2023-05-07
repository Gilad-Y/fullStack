class songOBJ {
    title: string;
    description: string;
    thumbnail: URL;
    constructor(title: string, description: string, thumbnail: URL) {
        const apiKey = "AIzaSyCTV38_t5fqYC5joDmQZdE_fhB8n7O4zxQ";
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${songIdentifier}&fields=items(id%2Csnippet)&key=${apiKey}`
        title = url.snippet.title;
        description = url.snippet.description;
        thumbnail = url.snippet.thumbnail;
    }
    // getSong = (songIdentifier: URL) => {
    //     const apiKey = "AIzaSyCTV38_t5fqYC5joDmQZdE_fhB8n7O4zxQ";
    //     const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${songIdentifier}&fields=items(id%2Csnippet)&key=${apiKey}`
    //     console.log(url);

    // }
}
export default songOBJ;
// const apiKey = "AIzaSyCTV38_t5fqYC5joDmQZdE_fhB8n7O4zxQ";
// const songIdentifier = "R0ebIzABQm0";
// const url=`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${songIdentifier}&fields=items(id%2Csnippet)&key=${apiKey}`
