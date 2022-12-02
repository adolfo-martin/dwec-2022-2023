export async function retrieveCountries() {
    const url = 'https://restcountries.com/v3.1/all';

    try {
        const response = await fetch(url);
        const data = await response.json();
        const countries = data.map(country => ({ name: country.name.official, code: country.cca3 }));
        return countries;
    } catch (error) {
        console.error(error);
    }
}

export async function retrieveCountryByCode(code) {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const { name, cca3, capital, population, flags, area } = data[0];
        return {
            nameCommon: name.common,
            nameOfficial: name.official,
            code: cca3,
            capital: capital[0],
            population,
            flag: flags.svg,
            area
        };
    } catch (error) {
        console.error(error);
    }
}