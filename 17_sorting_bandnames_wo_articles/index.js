const bands = [
  "the Bied",
  "Counterparts",
  "The Devil Wears Prada",
  "The Midway State",
  "Norma Jean",
  "Oh, SLeeper",
  "Pierce the Veil",
  "The Plot in You",
  "Say Anything",
  "A Skylit Drive",
  "We Came as Romans",
];

const exp = /an|a|the/gi;

function replaceArticle(band) {
  return band.replace(exp, "").trim();
}

const sortBands = () =>
  bands.sort((prev, next) =>
    replaceArticle(prev) > replaceArticle(next) ? 1 : -1
  );

document.querySelector("ul").innerHTML = sortBands()
  .map((band) => `<li>${band}</li>`)
  .join("");
