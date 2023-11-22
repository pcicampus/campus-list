document.addEventListener("DOMContentLoaded", function () {
  const regionsContainer = document.querySelector('.regions-container');
  const countriesContainer = document.querySelector('.countries-container');
  const statesContainer = document.querySelector('.states-container');

  const countriesList = document.querySelector('.countries-list');
  const statesList = document.querySelector('.states-list');

  const campusData = {
    Africa: {
      Botswana: ['Gaborone', 'Orapa Lethakane', 'Lobatse', 'Mathanwane'],
      Cameroon: ['Bamenda', 'Tombel', 'Yaounde', 'Manucam', 'Douala', 'Njombe', 'Tiko Manukam', 'Molyko Buea Cameroon', 'Ebonji Tombel'],
      Ghana: ['Gbetsile', 'Accra Ghana Spintex', 'Takoradi', 'Kumasi', 'Ashaiman-Zeru', 'Adum-Kumasi', 'Tema', 'Gbawee-Tabora', 'Hohoe', 'Kotei', 'Taabre Kumasi', 'Ahwiaa Overseas', 'Ayeduase Kumasi', 'Navrongo'],
      Kenya: ['Nairobi', 'Lodwar', 'Mombasa', 'Kalawani Mbooni', 'Nakuru', 'Thika', 'Makueni', 'Kisii', 'Bungoma', 'Meru', 'Tassia', 'Kilifi', 'Ngong', 'Kasarani', 'Kakamega', 'CBD', 'Juja', 'Kitengela'],
      Liberia: ['Monrovia'],
      Malawi: ['Lilongwe'],
      Mozambique: ['Nacala'],
      Namibia: ['Windhoek', 'Uis', 'WalvisBay'],
      SierraLeone: ['Madina Free Town'],
      SouthAfrica: ['Polokwane', 'Johannesburg', 'Tembisa', 'Mthatha', 'Paarl', 'Rustenburg', 'Cape Town', 'Pretoria', 'Mabopane', 'Gordon\'s Bay', 'Tshwane Pretoria', 'Atteridgeville', 'Dube Soweto'],
      Uganda: ['Kampala'],
      Zambia: ['Lusaka', 'Mpika', 'Ndola', 'Kitwe', 'Solwezi', 'Livingstone', 'Chingola', 'Katete', 'Mazabuka', 'Kaoma', 'Kapiri', 'Chipata', 'Kabwe', 'Nakonde'],
      Zimbabwe: ['Bulawayo', 'Beitbridge', 'Masvingo', 'Harare'],
    },
    Europe: {
      Germany: ['Stuttgart'],
      Italy: ['Rovigo', 'Musile', 'Brescia'],
      Jamaica: ['Kingston'],
      Sweden: ['Orebro'],
      UnitedKingdom: ['Enfield', 'West London', 'Leeds', 'Croydon', 'Harrow', 'Manchester', 'Berkshire', 'Slough', 'Northampton', 'Birmingham', 'Dublin', 'Shirley', 'North London'],
    },
    Asia: {
      Japan: ['Japan'],
      Qatar: ['Doha'],
      SaudiArabia: ['Saudi Arabia'],
      UAE: ['Dubai'],
    },
    NorthAmerica: {
      Canada: ['Toronto', 'Montreal', 'Brampton Mississauga', 'Saskatoon', 'Winnipeg'],
      UnitedStates: ['Houston', 'New York', 'Arlington', 'Colorado', 'Atlanta', 'Los Angeles', 'Minnesota', 'Maryland', 'Connecticut', 'Florida', 'Woodforest', 'Oklahoma', 'Tampa Bay', 'Dallas', 'Calgary'],
    },
  };

  function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
  }

  function populateList(list, items, onClick) {
    list.innerHTML = "";
    items.forEach((item) => {
      const listItem = document.createElement('li');
      const button = createButton(item, onClick);
      listItem.appendChild(button);
      list.appendChild(listItem);
    });
  }

  function updateCampuses(country) {
    const campuses = campusData[country] || [];
    populateList(statesList, campuses);
  }

  function updateCountries(region) {
    const countries = Object.entries(campusData[region]);
    populateList(countriesList, countries.map(([country]) => country), () => {
      // Pass a click handler to display cities when a country is clicked
      statesList.innerHTML = ""; // Clear states list when updating countries
    });
  }

  function updateCities(city) {
    // No need to display cities as buttons since there's no further level of nesting
    statesList.textContent = city;
  }

  regionsContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('region')) {
      const selectedRegion = event.target.textContent;
      updateCountries(selectedRegion);
    }
  });

  countriesContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('country')) {
      const selectedCountry = event.target.textContent;
      updateCities(selectedCountry);
    }
  });
});
