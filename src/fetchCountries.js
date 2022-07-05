export const fetchCountry = countryName => {
  return fetch(
    `https://restcountries.com/v2/name/${countryName}?fields=name,capital,population,flags,languages
    `
  ).then(respons => {
    if (!respons.ok) {
      throw new Error(respons.statusText);
    }
    return respons.json();
  });
};