// const apiKey = 'WER7IV78QZkeNE2rgdDnlN5GFQf27kqV';
// const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
// const gifs = [1,2,3,4,5];
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WER7IV78QZkeNE2rgdDnlN5GFQf27kqV&q=${ category }&limit=10`;
    const resp = await fetch ( url );
    const { data = [] } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}