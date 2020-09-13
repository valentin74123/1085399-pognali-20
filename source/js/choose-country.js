var chooseCountry = document.querySelector('.choose-country');
var chooseButton = document.querySelector('.button-country--choose');

chooseCountry.classList.remove('choose-country--nojs');

chooseButton.addEventListener('click', function() {
  if (chooseCountry.classList.contains('choose-country--closed')) {
    chooseCountry.classList.remove('choose-country--closed');
    chooseCountry.classList.add('choose-country--opened');
  } else {
    chooseCountry.classList.add('choose-country--closed');
    chooseCountry.classList.remove('choose-country--opened');
  }
});
