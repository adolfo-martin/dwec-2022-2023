export async function retrievePokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (e) {
        console.error(e);
    }
}


export async function retrieveImageFromUrl(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.sprites.front_default;
    } catch (e) {
        console.error(e);
    }
}