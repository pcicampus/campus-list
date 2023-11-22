// script.js
document.addEventListener("DOMContentLoaded", () => {
    const data = {
        "Africa": {
            "Botswana": ["Gaborone", "Orapa Lethakane", "Lobatse", "Mathanwane"],
            "Cameroon": ["Bamenda", "Tombel", "Yaounde", "Manucam", "Douala", "Njombe", "Tiko Manukam", "Molyko Buea Cameroon", "Ebonji Tombel"],
            "Ghana": ["Gbetsile", "Accra Ghana Spintex", "Takoradi", "Kumasi", "Ashaiman-Zeru", "Adum-Kumasi", "Tema", "Gbawee-Tabora", "Hohoe", "Kotei", "Taabre Kumasi", "Ahwiaa Overseas", "Ayeduase Kumasi", "Navrongo"],
            "Liberia": ["Monrovia"],
            "Malawi": ["Lilongwe"],
            "Mozambique": ["Nacala"],
            "Namibia": ["Windhoek", "Uis", "WalvisBay"],
            "Sierra Leone": ["Madina Free Town"],
            "South Africa": ["Polokwane", "Johannesburg", "Tembisa", "Mthatha", "Paarl", "Rustenburg", "Cape Town", "Pretoria", "Mabopane", "Gordon's Bay", "Tshwane Pretoria", "Atteridgeville", "Dube Soweto"],
            "Zambia": ["Lusaka", "Mpika", "Ndola", "Kitwe", "Solwezi", "Livingstone", "Chingola", "Katete", "Mazabuka", "Kaoma", "Kapiri", "Chipata", "Kabwe", "Nakonde"],
            "Zimbabwe": ["Bulawayo", "Beitbridge", "Masvingo", "Harare"],
        },
        "Asia": {
            "Japan": ["Japan"],
            "Qatar": ["Doha"],
            "Saudi Arabia": ["Saudi Arabia"],
        },
        "Canada": {
            "Toronto": ["Toronto"],
            "Montreal": ["Montreal"],
            "Brampton Mississauga": ["Brampton Mississauga"],
            "Saskatoon": ["Saskatoon"],
            "Winnipeg": ["Winnipeg"],
        },
        "Europe": {
            "Germany": ["Stuttgart"],
            "Italy": ["Rovigo", "Musile", "Brescia"],
            "Sweden": ["Orebro"],
            "United Kingdom": ["Enfield", "West London", "Leeds", "Croydon", "Harrow", "Manchester", "Berkshire", "Slough", "Northampton", "Birmingham", "Dublin", "Shirley", "North London"],
        },
        "Middle East": {
            "UAE": ["Dubai"],
        },
        "North America": {
            "Jamaica": ["Kingston"],
            "United States of America": ["Houston", "New York", "Arlington", "Colorado", "Atlanta", "Los Angeles", "Minnesota", "Maryland", "Connecticut", "Florida", "Woodforest", "Oklahoma", "Tampa Bay", "Dallas", "Calgary"],
        },
        "Oceania": {
            "Australia": [], // Add cities if applicable
            "New Zealand": [], // Add cities if applicable
        },
        "Sub-Saharan Africa": {
            "Kenya": ["Nairobi", "Lodwar", "Mombasa", "Kalawani Mbooni", "Nakuru", "Thika", "Makueni", "Kisii", "Bungoma", "Meru", "Tassia", "Kilifi", "Ngong", "Kasarani", "Kakamega", "CBD", "Juja", "Kitengela"],
            "Uganda": ["Kampala"],
            "Togo": ["Lome"],
        },
    };

    const regionsContainer = document.getElementById("regionsContainer");

    // Create a dropdown for regions
    const regionDropdown = createDropdown(Object.keys(data), "region");
    regionsContainer.appendChild(regionDropdown);

    // Container for countries
    const countriesContainer = document.createElement("div");
    countriesContainer.classList.add("container", "hidden");
    regionsContainer.appendChild(countriesContainer);

    // Create a dropdown for countries with "Countries" as the default heading
    const countryDropdown = createDropdown(["Countries"], "country");
    countriesContainer.appendChild(countryDropdown);

    // Create a container for cities
    const citiesContainer = document.createElement("div");
    citiesContainer.classList.add("container", "hidden");

    // Create a dropdown for cities
    const cityDropdown = createDropdown([], "city");
    citiesContainer.appendChild(cityDropdown);

    // Event listener for region dropdown
    regionDropdown.addEventListener("change", () => {
        const selectedRegion = regionDropdown.value;
        const countries = data[selectedRegion];

        // Show countries container and update dropdown options
        countriesContainer.classList.remove("hidden");
        countryDropdown.innerHTML = "";
        updateDropdown(countryDropdown, ["Countries", ...Object.keys(countries)]);

        // Hide cities container
        citiesContainer.classList.add("hidden");
    });

    // Event listener for country dropdown
    countryDropdown.addEventListener("change", () => {
        const selectedRegion = regionDropdown.value;
        const selectedCountry = countryDropdown.value;

        // If "Countries" is selected, hide the cities container
        if (selectedCountry === "Countries") {
            citiesContainer.classList.add("hidden");
        } else {
            const cities = data[selectedRegion][selectedCountry];

            // Show cities container and update dropdown options
            citiesContainer.classList.remove("hidden");
            cityDropdown.innerHTML = "";
            updateDropdown(cityDropdown, cities);
        }
    });

    // Append containers and dropdowns
    countriesContainer.appendChild(citiesContainer);
    regionsContainer.appendChild(countriesContainer);
});

function createDropdown(options, type) {
    const dropdown = document.createElement("select");
    dropdown.classList.add("button", type);

    updateDropdown(dropdown, options);

    return dropdown;
}

function updateDropdown(dropdown, options) {
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.text = option;
        dropdown.add(optionElement);
    });
}

function createButton(text, type) {
    const button = document.createElement("button");
    button.classList.add("button", type, "column");
    button.innerText = text;
    return button;
}
