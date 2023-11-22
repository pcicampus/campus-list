document.addEventListener("DOMContentLoaded", function () {
  const regionsButtonsContainer = document.getElementById('regions-buttons');
  const countriesButtonsContainer = document.getElementById('countries-buttons');
  const citiesList = document.getElementById('cities-list');

  const campusData = {
    Africa: {
      Botswana: ['Gaborone', 'Orapa Lethakane', 'Lobatse', 'Mathanwane'],
      Cameroon: ['Bamenda', 'Tombel', 'Yaounde', 'Manucam', 'Douala', 'Njombe', 'Tiko Manukam', 'Molyko Buea Cameroon', 'Ebonji Tombel'],
      // Add more countries...
    },
    Europe: {
      Germany: ['Stuttgart'],
      Italy: ['Rovigo', 'Musile', 'Brescia'],
      // Add more countries...
    },
    // Add more regions...
  };

  function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('button');
    button.addEventListener('click', onClick);
    return button;
  }

  function populateButtons(container, items, onClick) {
    container.innerHTML = "";
    items.forEach((item) => {
      const button = createButton(item, onClick);
      container.appendChild(button);
    });
  }

  function updateCountries(region) {
    const countries = Object.keys(campusData[region]);
    populateButtons(countriesButtonsContainer, countries, () => {
      citiesList.innerHTML = ""; // Clear cities list when updating countries
    });
  }

  function updateCities(country) {
    const cities = campusData[regionsButtonsContainer.textContent][country] || [];
    populateCitiesList(cities);
  }

  function populateCitiesList(cities) {
    citiesList.innerHTML = "";
    cities.forEach((city) => {
      const listItem = document.createElement('li');
      listItem.textContent = city;
      citiesList.appendChild(listItem);
    });
  }

  function initialize() {
    const regions = Object.keys(campusData);
    populateButtons(regionsButtonsContainer, regions, updateCountries);
  }

  initialize();
});
