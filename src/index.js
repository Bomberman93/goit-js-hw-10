import './css/styles.css';
import './fetchCountries';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const countrylistEl = document.querySelector('.country-list');
const searchInputEl = document.querySelector('#search-box');
const countryinfoEl = document.querySelector('.country-info');

searchInputEl.addEventListener('input', debounce(inputCountry, DEBOUNCE_DELAY));

function inputCountry(e) {
  const search = e.target.value.trim();
  if (search === ""){
  return searchInputEl.innerHTML = "",  countryinfoEl.innerHTML = "";
}
  fetchCountries(search)
    .then(country => {
      if (country.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        countrylistEl.innerHTML = '';
        countryinfoEl.innerHTML = '';
        return;
      }
      if (country.length >= 2 && country.length <= 10) {
         const markup = country.map(coutr => {
            return `<li class="item-card"><img src="${coutr.flags.svg}" alt="${coutr.name.official}" width="30" height="30"/>
          ${coutr.name.official}</li>`;
        }).join("");
        countryinfoEl.innerHTML = '';
        return countrylistEl.innerHTML = markup;
      }
      if (country.length === 1) {
        const markup = country.map(coutr => {
            return `<p class="item-card"><img src="${coutr.flags.svg}" alt="${
              coutr.name.official
            }" width="30" height="30"/>${coutr.name.official}</p>
            <p>${coutr.capital}</p>
            <p>${coutr.population}</p>
            <p>${Object.values(coutr.languages)}</p>`;
          }).join("");
          countrylistEl.innerHTML = '';
          return countryinfoEl.innerHTML = markup;
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

