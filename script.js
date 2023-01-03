/* Изменение темы */
let darkThemeButton = document.querySelector(".theme-button-dark");
let lightThemeButton = document.querySelector(".theme-button-light");

darkThemeButton.onclick = function() {
  document.body.classList.add("dark");
  lightThemeButton.classList.remove("active");
  darkThemeButton.classList.add("active");
};

lightThemeButton.onclick = function() {
  document.body.classList.remove("dark");
  darkThemeButton.classList.remove("active");
  lightThemeButton.classList.add("active");
};

/* Изменение шрифта */
let serifFontButton = document.querySelector(".font-button-serif");
let sansSerifFontButton = document.querySelector(".font-button-sans-serif");

serifFontButton.onclick = function() {
  document.body.classList.add("serif");
  sansSerifFontButton.classList.remove("active");
  serifFontButton.classList.add("active");
};

sansSerifFontButton.onclick = function() {
  document.body.classList.remove("serif");
  serifFontButton.classList.remove("active");
  sansSerifFontButton.classList.add("active");
};


/* Реализация раскрытия текста при нажатии на "Читать дальше" */
let shortDescriptions = document.querySelectorAll(".blog-article.short");

for (let shortDescription of shortDescriptions) {
  let moreButton = shortDescription.querySelector(".more");
  moreButton.onclick = function() {
    shortDescription.classList.remove("short");
  };
}

/* Изменеие стиля отображения карточек блока "Аренда яхты" */
let cardViewButtonGrid = document.querySelector(".card-view-button-grid");
let cardViewButtonList = document.querySelector(".card-view-button-list");
let cardList = document.querySelector(".cards");

cardViewButtonList.onclick = function() {
  cardList.classList.add("list");
  cardViewButtonGrid.classList.remove("active");
  cardViewButtonList.classList.add("active");  
};

cardViewButtonGrid.onclick = function() {
  cardList.classList.remove("list");
  cardViewButtonList.classList.remove("active");
  cardViewButtonGrid.classList.add("active");
};

/* Реализация работы блока "Галерея" */
let mainPhoto = document.querySelector(".active-photo");
let previews = document.querySelectorAll(".preview-list a");

for (let activePhoto of previews) {
  activePhoto.onclick = function(evt) {
    evt.preventDefault();
    mainPhoto.src = activePhoto.href;
    let currentPreview = document.querySelector(".active-item");
    currentPreview.classList.remove("active-item");
    activePhoto.classList.add("active-item");
  };
}
