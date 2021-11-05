const endPoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const input = document.querySelector("input");
const list = document.querySelector(".filtered__list");
let cities = [];

// city = {
//   name: String,
//   growth_from_2000_to2013: String,
//   latitude: Number,
//   longitude: Number,
//   population: String,
//   rank: String,
//   state: string,
// };

const fetchCities = async () => {
  const fetchedCity = await (await fetch(endPoint)).json();
  cities.push(...fetchedCity);
};

const filterCities = (loweredValue) => {
  return cities.filter(
    (city) =>
      city.city.toLowerCase().includes(loweredValue) ||
      city.state.toLowerCase().includes(loweredValue)
  );
};

const updateList = (filteredList) => {
  return filteredList
    .map(
      (city) =>
        `<li>
        <span class="name">${city.city} ${city.state}</span>
        <span class="population">${city.state}</span>
      </li>`
    )
    .join("");
};

async function main() {
  await fetchCities();
  input.addEventListener("input", (e) => {
    const filteredList = filterCities(e.target.value.toLowerCase());
    list.innerHTML = updateList(filteredList);
  });
}

main();
