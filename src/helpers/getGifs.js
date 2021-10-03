export const getGifs = async ( category ) => {
    //const api_key = 'IWCPDpkUZeFC78kiK74E95hJeIpFZNQn';
    const http_url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=5&api_key=IWCPDpkUZeFC78kiK74E95hJeIpFZNQn`;
    const resp = await fetch( http_url );
    const {data} = await resp.json();
    
    const gifs = data.map((data) => {
        return {
            id: data.id,
            title: data.title,
            url: data.images?.downsized_medium.url
        }
    }
    );
    return gifs;
    //setImages(gifs);
    //console.log(gifs);
    //fetch(http_url).then((resp) => resp.json()).then((data => console.log('Datos: ',data)))
}
