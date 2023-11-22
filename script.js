var data = {
    "Africa": {
        "Botswana": ["Gaborone", "Orapa Lethakane", "Lobatse", "Mathanwane"],
        "Cameroon": ["Bamenda", "Tombel", "Yaounde", "Manucam", "Douala", "Njombe", "Tiko Manukam", "Molyko Buea Cameroon", "Ebonji Tombel"],
        "Ghana": ["Gbetsile", "Accra Ghana Spintex", "Takoradi", "Kumasi", "Ashaiman-Zeru", "Adum-Kumasi", "Tema", "Gbawee-Tabora", "Hohoe", "Kotei", "Taabre Kumasi", "Ahwiaa Overseas", "Ayeduase Kumasi", "Navrongo"],
        "Italy": ["Rovigo", "Musile", "Brescia"],
        "Kenya": ["Nairobi", "Lodwar", "Mombasa", "Kalawani Mbooni", "Nakuru", "Thika", "Makueni", "Kisii", "Bungoma", "Meru", "Tassia", "Kilifi", "Ngong", "Kasarani", "Kakamega", "CBD", "Juja", "Kitengela"],
        "Liberia": ["Monrovia"],
        "Malawi": ["Lilongwe"],
        "Mozambique": ["Nacala"],
        "Namibia": ["Windhoek", "Uis", "WalvisBay"],
        "Togo": ["Lome"],
        "Uganda": ["Kampala"],
        "Zambia": ["Lusaka", "Mpika", "Ndola", "Kitwe", "Solwezi", "Livingstone", "Chingola", "Katete", "Mazabuka", "Kaoma", "Kapiri", "Chipata", "Kabwe", "Nakonde"],
        "Zimbabwe": ["Bulawayo", "Beitbridge", "Masvingo", "Harare"]
    },
    "Asia": {
        "Japan": ["Japan"],
        "Qatar": ["Doha"],
        "Saudi Arabia": ["Saudi Arabia"],
        "UAE": ["Dubai"]
    },
    "Europe": {
        "Germany": ["Stuttgart"],
        "Sweden": ["Orebro"],
        "United Kingdom": ["Enfield", "West London", "Leeds", "Croydon", "Harrow", "Manchester", "Berkshire", "Slough", "Northampton", "Birmingham", "Dublin", "Shirley", "North London"]
    },
    "North America": {
        "Canada": ["Toronto", "Montreal", "Brampton Mississauga", "Saskatoon", "Winnipeg"],
        "Jamaica": ["Kingston"],
        "United States of America": ["Houston", "New York", "Arlington", "Colorado", "Atlanta", "Los Angeles", "Minnesota", "Maryland", "Connecticut", "Florida", "Woodforest", "Oklahoma", "Tampa Bay", "Dallas", "Calgary"]
    },
    "Oceania": {
        "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"]
    },
    "South America": {
        "Argentina": ["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "La Plata"]
    }
};

var contentDiv = document.getElementById('content');

for (var region in data) {
    var regionDiv = document.createElement('div');
    regionDiv.className = 'region';

    var h2 = document.createElement('h2');
    h2.textContent = region;
    regionDiv.appendChild(h2);

    var countries = data[region];
    for (var country in countries) {
        var countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        var h3 = document.createElement('h3');
        h3.textContent = country;
        countryDiv.appendChild(h3);

        var campuses = countries[country];
        for (var i = 0; i < campuses.length; i++) {
            var p = document.createElement('p');
            p.className = 'campus';
            p.textContent = campuses[i];
            countryDiv.appendChild(p);
        }

        regionDiv.appendChild(countryDiv);
    }

    contentDiv.appendChild(regionDiv);
}
