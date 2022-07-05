export const countryInfoMarkup = country => {
  return country
    .map(({ flags, name, languages, capital, population }) => {
      return `<div class = "container">
      <img
        src="${flags.svg}"
        alt="country flag"
        width="30";
      />
      <p class = "country">${name}</p>
    </div>
    <p class="text">Capital: <span>${capital}</span></p>
    <p class="text">Population: <span>${population}</span></p>
    <p class="text">Languages: <span>${languages
      .map(language => language.name)
      .join(', ')}</span></p>
    `;
    })
    .join('');
};

export const countryListMarkup = country => {
  return country
    .map(({ flags, name }) => {
      return `<li class = "container">
      <img
        src="${flags.svg}"
        alt="country flag"
        width="20";
      />
      <p class = "country">${name}</p>
    </li>`;
    })
    .join('');
  
};