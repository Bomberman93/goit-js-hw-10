import './css/styles.css';
import './fetchCountries';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const countrylistEl = document.querySelector('.country-list');
const searchInputEl = document.querySelector('#search-box');
const countryinfoEl = document.querySelector('.country-info');

searchInputEl.addEventListener("input", debounce(inputCountry, DEBOUNCE_DELAY));
function inputCountry (event) {
    // console.log(event.target.value.trim().length);
    if (event.target.value.trim().length > 1 && event.target.value.trim().length < 10) {

    } else {
        // alert("Too many matches found. Please enter a more specific name.")
    }
};



/*--------------Создает разметку для ЮЛ------------*/ 
function randerCoutryCard (names) {
    console.log(names);
    const markup = names.map(name =>
    {`<li><img src="${name.flags.svg}"/></li>`
    countrylistEl.innerHTML = markup;
    })
}
randerCoutryCard(`Ukraine`);

// fetchCountries(name).then(data => {
// const markup = Object.entries(data).map(([key, value]) =>
//   `<a href="${value}">${key}</a>`).join('');
//   menuList.innerHTML = markup;
// });
