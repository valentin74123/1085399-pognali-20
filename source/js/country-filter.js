var countryFilter = document.querySelector('.country-filter');
var countryButton = document.querySelector('.country-filter__uncover');
var countryButtonClose = document.querySelector('.button-catalog--collapse');

countryFilter.classList.remove('country-filter--nojs');

countryButton.addEventListener('click', function() {
  if (countryFilter.classList.contains('country-filter--closed')) {
    countryFilter.classList.remove('country-filter--closed');
    countryFilter.classList.add('country-filter--opened');
  } else {
    countryFilter.classList.add('country-filter--closed');
    countryFilter.classList.remove('country-filter--opened');
  }
});

countryButtonClose.addEventListener('click', function() {
  if (countryFilter.classList.contains('country-filter--opened')) {
    countryFilter.classList.add('country-filter--closed');
    countryFilter.classList.remove('country-filter--opened');
  }
});
