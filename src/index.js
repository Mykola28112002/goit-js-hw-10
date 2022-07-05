import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountry } from './fetchCountries';
import { countryInfoMarkup } from './countryMarkup';
import { countryListMarkup } from './countryMarkup';

const refs = {
  form: document.querySelector('#search-box'),
  InfoContainer: document.querySelector('.country-info'),
  countryList: document.querySelector('.country-list'),
};

const DEBOUNCE_DELAY = 300;

refs.form.addEventListener(
  'input',
  debounce(onCountryNameInput, DEBOUNCE_DELAY)
);

function onCountryNameInput(event) {
  const countryName = event.target.value.trim();

  if (countryName === '') {
    refs.InfoContainer.innerHTML = '';
    refs.countryList.innerHTML = '';
  } else {
    fetchCountry(countryName)
      .then(country => {
        if (country.length >= 10) {
          return Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        }

        if (country.length > 1 && country.length < 10) {
          countryListMarkup(country);
          refs.countryList.innerHTML = countryListMarkup(country);

          refs.InfoContainer.innerHTML = '';
        }

        if (country.length === 1) {
          countryInfoMarkup(country);
          refs.InfoContainer.innerHTML = countryInfoMarkup(country);

          refs.countryList.innerHTML = '';
        }
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        refs.countryList.innerHTML = '';
        refs.InfoContainer.innerHTML = '';
      });
  }
}