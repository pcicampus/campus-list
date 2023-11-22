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

document.addEventListener("DOMContentLoaded", () => {
    const regionsContainer = document.getElementById("regionsContainer");

    for (const region in data) {
        const regionButton = createButton(region, "region");
        regionsContainer.appendChild(regionButton);

        const countriesContainer = document.createElement("div");
        countriesContainer.classList.add("container", "hidden");

        for (const country in data[region]) {
            const countryButton = createButton(country, "country");
            countriesContainer.appendChild(countryButton);

            const citiesContainer = document.createElement("div");
            citiesContainer.classList.add("container", "hidden");

            data[region][country].forEach(city => {
                const cityButton = createButton(city, "city");
                citiesContainer.appendChild(cityButton);
            });

            countriesContainer.appendChild(citiesContainer);
        }

        regionsContainer.appendChild(countriesContainer);
    }

    attachEventListeners();
});

function createButton(text, type) {
    const button = document.createElement("button");
    button.classList.add("button", type);
    button.innerText = text;
    return button;
}

function attachEventListeners() {
    document.querySelectorAll(".region").forEach(regionButton => {
        regionButton.addEventListener("click", () => {
            // Toggle visibility of the region's countries
            regionButton.nextElementSibling.classList.toggle("hidden");

            // Hide all other regions and their countries
            document.querySelectorAll(".container:not(.hidden)").forEach(container => {
                if (container !== regionButton.nextElementSibling) {
                    container.classList.add("hidden");
                }
            });
        });
    });

    document.querySelectorAll(".country").forEach(countryButton => {
        countryButton.addEventListener("click", () => {
            // Toggle visibility of the country's cities
            countryButton.nextElementSibling.classList.toggle("hidden");

            // Hide all other countries and their cities
            document.querySelectorAll(".container:not(.hidden)").forEach(container => {
                if (container !== countryButton.nextElementSibling) {
                    container.classList.add("hidden");
                }
            });
        });
    });
}
