// script.js
document.addEventListener("DOMContentLoaded", () => {
    const data = {
        "Africa": {
            "Botswana": {
                "Gaborone": {"coordinator": "Mosetsanagape Pheto", "phone": "+267 7132 0770", "address": "Cresta Marakanelo - President Hotel Main Hall - The Grand Entrance"},
                "Orapa Lethakane": {"coordinator": "Onkarabile Mantsane", "phone": "+26774096945 +26772889044", "address": "To be updated soon"},
                "Lobatse": {"coordinator": "Lebogang Lekgotla", "phone": "+26773165162 +26776555697", "address": "To be updated soon"},
                "Mathanwane": {"coordinator": "Dziidzani Mooketsi", "phone": "+267 7122 3183", "address": "123 Main St"}
            },
            "Cameroon": {
                "Bamenda": {"coordinator": "Pastor Kelly Joel", "phone": "+237 67029 3710 +237 65135 5239", "address": "Old Town Opposite Assemblies of God church."},
                "Tombel": {"coordinator": "Pastor Kome Felix Abwe", "phone": "+237 67778 4643 +237 69626 3164", "address": "South West region "},
                "Yaounde": {"coordinator": "Pastor Keye Blaise", "phone": "+237654324558 +237672275699", "address": "Biyem Assi Lac, Between Famacie Du Lacand Poubelle"},
                "Manucam": {"coordinator": "Pastor Dickson Dike", "phone": "+237672230327 +237675488397", "address": "Tiko  Manunkam"},
                "Douala": {"coordinator": "Pastor Ntoko Rene", "phone": " +237678286711 +237670419532", "address": "Opposite Bocom Bonaberi, Carrefour Nasa City"},
                "Njombe": {"coordinator": "Jam Remedy Tohmoh", "phone": "+237651924036 +237675915674", "address": "Mboale Carrifou Collar"},
                "Tiko Manukam": {"coordinator": "Pastor Dickson", "phone": "+237677784643", "address": "To be updated soon"},
                "Molyko Buea Cameroon": {"coordinator": "Pastor Donald Fon", "phone": "+237 679513863 +237 690672888", "address": "Molyko Beside Deeper Life Church "},
                "Ebonji Tombel": {"coordinator": "Pastor Diangha Joe", "phone": "+237 679989913 +237 681021898.", "address": "Opposite Grace Liberty Ministry Ebonji."}
            },
            "Ghana": {
                "Gbetsile": {"coordinator": "Pastor Daniel Offei", "phone": "+233 24 328 3267", "address": "Mamens Gardens Goshen Junction, Afienya Road."},
                "Accra Ghana Spintex": {"coordinator": "Pastor Jerry Owusu Afari", "phone": "+233 26 717 0394  ,  + 233 541367810", "address": "Spintex 18 Junction, Accra Ghana."},
                "Takoradi": {"coordinator": "Pastor Paul Yankey", "phone": "+233242175530", "address": "Market Circle, Takoradi."},
                "Kumasi": {"coordinator": "Pastor Mavis", "phone": "+233267587425", "address": "To be updated soon"},
                "Ashaiman-Zeru": {"coordinator": "Pastor George Yaw Asante", "phone": "+233244083819", "address": "Street Opposite Family Hospital (just by the main Zenu station). "},
                "Adum-Kumasi": {"coordinator": "Pastor Augustine Adarkwa", "phone": "+233547017407 +233543009286", "address": "Inside CLOGSAC Building near SSNIT house - Adum, Kumasi"},
                "Tema": {"coordinator": "Pastor Rose Arthur", "phone": "+233244339186, +233239169903", "address": "High Skies College Tema Communityu 7 Adjacent Community 7 Veterinary Hospital"},
                "Gbawee-Tabora": {"coordinator": "Pastor Matilda Abbey", "phone": "+233268885865", "address": "Tabora Junction House Number 120 Naa Ayorkor Street - Tabora, Accra"},
                "Hohoe": {"coordinator": "Pastor Francis Afenyo", "phone": "+233 554458134", "address": "Mamaga street, Torkorni, Kpando House"},
                "Kotei": {"coordinator": "Pastor Bright Adjei", "phone": "+233 553145363, +233 206566936", "address": "Inside Hallowed Hostel KNUST, Behind Kotei R/C Primary School"},
                "Taabre Kumasi": {"coordinator": "Pastor Edward Owusu", "phone": "+233544956119 +233241932917 +233240628149", "address": "Taabre Off Kumasi-Sunyani Road. (Inside Methodist JHS Building)"},
                "Ahwiaa Overseas": {"coordinator": "Pastor Emmanuel Atta-Darkwah", "phone": "+2330553949984 +233243559106", "address": "Block A Plot 15, Ahwiaa Overseas Kwabre District, Ashanti, Ghana"},
                "Ayeduase Kumasi": {"coordinator": "Pastor Richard Kugblenu", "phone": "+233543272482", "address": "Ayeduase Newsite Last Stop, The Nursing and Midwifery Council Building Kumasi"},
                "Navrongo": {"coordinator": "Pastor Simon Atampugre", "phone": "+233242727470 +233206865643", "address": "Tono Community Nurses Training Junction - Navrongo, Ghana"}
            }
        },
        "Asia": {
            "Japan": {
                "Japan": {"coordinator": "Pastor Narumi Yokochi", "phone": "+81 90-6088-3764", "address": "To be updated soon"}
            },
            "Qatar": {
                "Doha": {"coordinator": "Pastor Augustine Nembo ", "phone": "+97466940952", "address": "To be updated soon"}
            },
            "Saudi Arabia": {
                "Saudi Arabia": {"coordinator": "Pastor Bernard Njiru Ireri", "phone": "+1234567890", "address": "To be updated soon"}
            },
            "United Arab Emirates": {
                "Dubai": {"coordinator": "Pastor Joshua Kato ", "phone": "+971 52 627 4978", "address": "To be updated soon"}
            }
        },
        "North America": {
            "Canada": {
                "Scarborough": {"coordinator": "Pastors Sarah Ohenhen and Bro Fabrice Iram", "phone": "+1 (647) 529-8337, +1 (772) 888-0889", "address": "3392 Kingston Road"},
                "Quebec": {"coordinator": "Sis Justyna Onyobru", "phone": "+1 (438) 220-3865", "address": "42 Rue De La Bourgade"},
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

    // Create a dropdown for regions with a default option
    const regionDropdown = createDropdown(["Select Region", ...Object.keys(data)], "region");
    regionsContainer.appendChild(regionDropdown);

    // Event listener for region dropdown
    regionDropdown.addEventListener("change", () => {
        resetDetails();

        const selectedRegion = regionDropdown.value;
        if (selectedRegion === "Select Region") {
            // Do nothing if the default option is selected
            return;
        }

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
function createButton(text, type) {
    const button = document.createElement("button");

    // Assign different classes based on the type
    if (type === "region") {
        button.classList.add("button", "region");
    } else if (type === "country") {
        button.classList.add("button", "country");
    } else if (type === "city") {
        button.classList.add("button", "city");
    }

    button.innerText = text;
    return button;
}
