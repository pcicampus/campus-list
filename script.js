// script.js
document.addEventListener("DOMContentLoaded", () => {
    const data = {
        "Africa": {
            "Botswana": {
                "Gaborone": {"coordinator": "Mosetsanagape Pheto", "phone": "+26771320770", "address": "123 Main St"},
                "Orapa Lethakane": {"coordinator": "Onkarabile Mantsane", "phone": "+26774096945 +26772889044", "address": "456 Oak St"},
                "Lobatse": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Mathanwane": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            },
            "Cameroon": {
                "Bamenda": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Tombel": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Yaounde": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Manucam": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Douala": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Njombe": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Tiko Manukam": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Molyko Buea Cameroon": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Ebonji Tombel": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            },
            "Ghana": {
                "Gbetsile": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Accra Ghana Spintex": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Takoradi": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Kumasi": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Ashaiman-Zeru": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Adum-Kumasi": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Tema": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Gbawee-Tabora": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Hohoe": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Kotei": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Taabre Kumasi": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Ahwiaa Overseas": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Ayeduase Kumasi": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Navrongo": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            }
        },
        "Asia": {
            "Japan": {
                "Japan": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            },
            "Qatar": {
                "Doha": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            },
            "Saudi Arabia": {
                "Saudi Arabia": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            },
            "United Arab Emirates": {
                "Dubai": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            }
        },
        "North America": {
            "Canada": {
                "Toronto": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Montreal": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Brampton Mississauga": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Saskatoon": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Winnipeg": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            },
            "Jamaica": {
                "Kingston": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            },
            "United States of America": {
                "Houston": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "New York": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Arlington": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Colorado": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Atlanta": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Los Angeles": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Minnesota": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Maryland": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Connecticut": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Florida": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Woodforest": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Oklahoma": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Tampa Bay": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Dallas": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Calgary": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            }
        },
        "Europe": {
            "Germany": {
                "Stuttgart": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            },
            "Italy": {
                "Rovigo": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Musile": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Brescia": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            },
            "Sweden": {
                "Orebro": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            },
            "United Kingdom": {
                "Enfield": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "West London": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Leeds": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Croydon": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Harrow": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Manchester": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Berkshire": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Slough": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Northampton": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Birmingham": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Dublin": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "Shirley": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"},
                "North London": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            }
        },
        "Other": {
            "Liberia": {
                "Monrovia": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            },
            "Malawi": {
                "Lilongwe": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            },
            "Mozambique": {
                "Nacala": {"coordinator": "John Doe", "phone": "+1234567890", "address": "123 Main St"}
            }
        }
    };
    const regionsContainer = document.getElementById("regionsContainer");
    const countriesContainer = document.getElementById("countriesContainer");
    const citiesContainer = document.getElementById("citiesContainer");
    const detailsContainer = document.getElementById("detailsContainer");
    const coordinatorDetails = document.getElementById("coordinatorDetails");

    // Create a dropdown for regions
    const regionDropdown = createDropdown(Object.keys(data), "region");
    regionsContainer.appendChild(regionDropdown);

    // Event listener for region dropdown
    regionDropdown.addEventListener("change", () => {
        resetDetails();

        const selectedRegion = regionDropdown.value;
        const countries = data[selectedRegion];

        // Show countries container and update buttons
        countriesContainer.classList.remove("hidden");
        countriesContainer.innerHTML = "";
        Object.keys(countries).forEach(country => {
            const countryButton = createButton(country, "country");
            countriesContainer.appendChild(countryButton);

            // Event listener for country button
            countryButton.addEventListener("click", () => {
                resetDetails();

                const cities = Object.keys(countries[country]);

                // Show cities container and update buttons
                citiesContainer.classList.remove("hidden");
                citiesContainer.innerHTML = "";
                cities.forEach(city => {
                    const cityButton = createButton(city, "city");

                    // Event listener for city button
                    cityButton.addEventListener("click", () => {
                        const details = countries[country][city];

                        // Display coordinator details
                        coordinatorDetails.innerHTML = `
                            <p>Coordinator: ${details.coordinator}</p>
                            <p>Phone: ${details.phone}</p>
                            <p>Address: ${details.address}</p>
                        `;

                        // Show details container
                        detailsContainer.classList.remove("hidden");
                    });

                    citiesContainer.appendChild(cityButton);
                });
            });
        });
    });
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
    button.classList.add("button", type);
    button.innerText = text;
    return button;
}

function resetDetails() {
    // Clear coordinator details
    coordinatorDetails.innerHTML = "";

    // Hide cities container
    citiesContainer.classList.add("hidden");

    // Hide details container
    detailsContainer.classList.add("hidden");
}
