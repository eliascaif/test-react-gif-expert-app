
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=licDQ1fVtQ2zihoZSsx1v67FI1pfAVu0&q=${category}&limit=5`;
    const response = await fetch(url);
    const { data } = await response.json(); 

    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

    return gifs;
}