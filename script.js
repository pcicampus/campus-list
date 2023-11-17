const campusData = {
    "Africa": {
        "Botswana": ["Gaborone", "Orapa Lethakane", "Lobatse", "Mathanwane"],
        "Cameroon": ["Bamenda", "Tombel", "Yaounde", "Manucam", "Douala", "Njombe", "Tiko Manukam", "Molyko Buea Cameroon", "Ebonji Tombel"],
        // ... (other countries in Africa)
    },
    "Asia": {
        "Japan": ["Japan"],
        "Qatar": ["Doha"],
        // ... (other countries in Asia)
    },
    "Europe": {
        "Germany": ["Stuttgart"],
        "Italy": ["Rovigo", "Musile", "Brescia"],
        "United Kingdom": ["Enfield", "West London", "Leeds", "Croydon", "Harrow", "Manchester", "Berkshire", "Slough", "Northampton", "Birmingham", "Dublin", "Shirley", "North London"],
        // ... (other countries in Europe)
    },
    "North America": {
        "Canada": ["Toronto", "Montreal", "Brampton Mississauga", "Saskatoon", "Winnipeg"],
        "United States of America": ["Houston", "New York", "Arlington", "Colorado", "Atlanta", "Los Angeles", "Minnesota", "Maryland", "Connecticut", "Florida", "Woodforest", "Oklahoma", "Tampa Bay", "Dallas", "Calgary"],
        // ... (other countries in North America)
    },
    // ... (other continents)
};

// Function to populate the region buttons
function populateRegionButtons() {
    const regionButtonsContainer = document.getElementById("regionButtons");

    for (const region in campusData) {
        const button = document.createElement("button");
        button.textContent = region;
        button.onclick = function () {
            showCountries(region);
        };
        regionButtonsContainer.appendChild(button);
    }
}

// Function to show countries for the selected region
function showCountries(selectedRegion) {
    const countryButtonsContainer = document.getElementById("countryButtons");
    countryButtonsContainer.innerHTML = ""; // Clear previous buttons

    // Check if the selected region is a continent
    if (campusData[selectedRegion]) {
        for (const country in campusData[selectedRegion]) {
            const button = document.createElement("button");
            button.textContent = country;
            button.onclick = function () {
                showCampuses(selectedRegion, country);
            };
            countryButtonsContainer.appendChild(button);
        }
    } else {
        // If the selected region is not a continent, assume it's a country
        // and directly show campuses
        showCampuses(selectedRegion);
    }
}

// Function to show campuses for the selected region and country
function showCampuses(selectedRegion, selectedCountry) {
    const campusList = document.getElementById("campusList");
    campusList.innerHTML = ""; // Clear previous list

    // Check if the selected region is a continent
    if (campusData[selectedRegion] && campusData[selectedRegion][selectedCountry]) {
        const campuses = campusData[selectedRegion][selectedCountry];
        const countryHeader = document.createElement("h3");
        countryHeader.textContent = `${selectedCountry} Campuses`;
        campusList.appendChild(countryHeader);

        campuses.forEach(campus => {
            const listItem = document.createElement("li");
            listItem.textContent = campus;
            campusList.appendChild(listItem);
        });
    } else if (campusData[selectedRegion]) {
        // If the selected region is a continent but no specific country is selected,
        // assume it's a region and show campuses for all countries in that region
        const regionHeader = document.createElement("h3");
        regionHeader.textContent = `${selectedRegion} Campuses`;
        campusList.appendChild(regionHeader);

        for (const country in campusData[selectedRegion]) {
            const campuses = campusData[selectedRegion][country];
            const countryHeader = document.createElement("h4");
            countryHeader.textContent = `${country} Campuses`;
            campusList.appendChild(countryHeader);

            campuses.forEach(campus => {
                const listItem = document.createElement("li");
                listItem.textContent = campus;
                campusList.appendChild(listItem);
            });
        }
    }
}

// Populate region buttons on page load
document.addEventListener("DOMContentLoaded", function () {
    populateRegionButtons();
});
