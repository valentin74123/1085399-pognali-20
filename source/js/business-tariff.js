var modal = document.querySelector(".business-tariff");
var btn = document.querySelector(".add-profile__business-tariff");
var btn_close = document.querySelector(".business-tariff__button");

btn.onclick = function() {
  modal.style.display = "block";
}

btn_close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
