// script.js
document.addEventListener("DOMContentLoaded", () => {
    const data = {
        "Africa": {
            "Nigeria": {
                "Rumuomasi, Port Harcourt": {
                    "coordinator": "Pastor Akan Frank ", "phone": "+234 803 310 4556", "address": "Royal Garden Hotel, 7A Arochukwu Street by First Bank Rumuomasi, Adjacent, Airforce Base Port Harcourt."
                },
                "Ada George, Port Harcourt": {
                    "coordinator": "Pastor Emmanuel King Benjamin", "phone": "+2347048058054", "address": "Flexhub Hotels, Road 5 Off New Road, Mgbuoba Port Harcourt, Rivers."
                },
                "Abuja FCT": {
                    "coordinator": "Pastor Uloma Jacob ", "phone": "+2349092844304", "address": "Ebenezer Place, Area 1, Durumi 11 Abuja."
                },
                "Gwagwalada, Abuja": {
                    "coordinator": "Pastor Franca Babalola ", "phone": "+2348077972733.", "address": " Hallal Hotel, Royal Spring Way, Off FRCN Road, Gwagwalada, Abuja."
                },
                "Kurudu, Abuja": {
                    "coordinator": "Pastor Priscal Anuge ", "phone": "+234 803 716 6287", "address": "Dabiyi Hotel Phase III Army Estate Kurudu Abuja."
                },
                "Apo, Abuja": {
                    "coordinator": "Pastor Sam Ukagbhe ", "phone": "+234 903 548 7265", "address": "Plot AT763 Apo Mechanic Village (Estate) Apo,  Opposite LFC, Apo Abuja."
                },
                "Kuje, Abuja": {
                    "coordinator": "Pastor Simeon Odo ", "phone": "+2349033554845", "address": "Mercy Model School, Old Nepa Road, Kuje, Abuja."
                },
                "Kubwa, Abuja": {
                    "coordinator": "Pastor Comfort Bello ", "phone": "+234 812 290 8817", "address": "620 Lounge, Channel 8 Junction, NNPC Bus Stop, Kubwa, Abuja."
                },
                "Ago, Lagos": {
                    "coordinator": "Pastor Oni Ibikunle", "phone": "+234 809 615 8910", "address": "Ago/Okota Kolony Restaurant No. 44 Ago Palace way beside Ali-Dada bus stop Ago, Lagos state."
                },
                "Badagry, Lagos": {
                    "coordinator": "Pastor Chukwudozie Cletus ", "phone": "+234 803 206 4094", "address": "15, God's Own Estate Road, Divine Church Bus Stop, Badagary Expressway, Lagos."
                },
                "Lekki, Lagos": {
                    "coordinator": "Pastor Funke Jones ", "phone": "+2348023186873", "address": "Contact the Campus Coordinator"
                },
                "Ogba, Lagos": {
                    "coordinator": "Pastor Gospel Johnson ", "phone": "+2348088834866", "address": "34 Ijaiye Road (In between LG Electronics Office & Stanbic IBTC Bank) Ogba Lagos."
                },
                "Surulere, Lagos": {
                    "coordinator": "Pastor Josephe Polycarps", "phone": ",+2348067007332, +2348060999337", "address": "Suit 11, LSDPC Complex Bode Thomas St By Alaka Bus Stop Surulere Lagos State."
                },
                "Victoria Island, Lagos": {
                    "coordinator": "Pastor Rose Mireille Mpouassou Kombang ", "phone": " +234 909 199 6576", "address": "A La Playa Hotel/Suites, Plot 10, Block 22 Jakande Close, Landbridge Avenue, Oniru Victoiria Island"
                },
                "Ikorodu, Lagos": {
                    "coordinator": "Pastor Uma Usen ", "phone": "+2348073026800", "address": "Top Floor 3c Hub, 68 Lagos Road, Beside First Bank. Ikorodu."
                },
                "Oshodi, Lagos": {
                    "coordinator": "Pastor Funsho  ", "phone": "+1234567890", "address": "Presken Hotel, International Airport road Ajao estate junction Close to 7&8 Busstop Mafoluku Oshodi. Lagos Nigeria"
                },
                "Gbagada, Lagos": {
                    "coordinator": "Pastor Morolayo Igeleke ", "phone": "+2347025001769, +2349080380390", "address": "Vory Exclusive Hotle & Suites 60 Olorunlogbon Street, by Anthony Police Station, Gbagada, Lagos"
                },
                "Ikoyi, Lagos": {
                    "coordinator": "Pastor Charles Akuba ", "phone": "+2349047981400, +2349081183504", "address": "58, Ademola Adetokunbo Street. Upper Floor, Shopper's Delight Supermarket by Eko Hotel Roundabout, Lagos"
                },
                "Ikotun, Lagos": {
                    "coordinator": "Pastor Ikeagwuchi Godwin ", "phone": "08067697072", "address": "1 Adebisi Awolola Street Off Oyefunga, Dele Area Bus Stop, Ikotun, Lagos."
                },
                "Awoyaya, Lagos": {
                    "coordinator": "Pastor Eric Nwobodo ", "phone": "+2347033939173", "address": "Apno Hotel & Suits Ltd, Prince Boise Francis Close Off Abule Parapo Community Road, By Km 35 Lekki-Epe Expressway, Awoyaya Bus Stop, Ineju Lekki LGA, Lagos."
                },
                "Enugu": {
                    "coordinator": "Pastor Chinedu Orji ", "phone": "+2347055572447", "address": "Willis Hotels & Suites, No 6 Emeka Oranezi Crescent, New Haven Extension, behind NNPC filling station, Naira Triangle Enugu."
                },
                "Mike, Enugu": {
                    "coordinator": "Pastor Nwamu Uche ", "phone": "+2348037083476, +2348037429609", "address": "Arch. Ifeanyi Okoro crescent, off Alulu road, Freedom Layout, Alulu, Nike Enugu."
                },
                "Gariki, Enugu": {
                    "coordinator": "Pastor Nonso Amanfu ", "phone": "+2348136649327, +2349022648819", "address": "Police Children School, Awkunanaw, Agbani Road Enugu."
                },
                "Nasarawa": {
                    "coordinator": "Pastor Lucy ", "phone": "+2348038509549, +2348034177357", "address": "Rosewell Hotel And Suits, Behind World Gate Plaza Keffi Express Way, One Man Village, Nasarawa State"
                },
                "Keffi, Nasarawa": {
                    "coordinator": "Pastor Daniel Victor ", "phone": "+234 703 610 8642", "address": "Saduma Hotel, No 1, Antau Bridges, by Federal Government College, Keffi"
                },
                "Ota, Abeokuta": {
                    "coordinator": "Pastor Emeka ", "phone": "+2348025067532, +2349094569652", "address": "Prudent Event Center, Off Lafanwa Bus/Stop, Itele Road, Ogun State."
                },
                "Keffi, Nasarawa": {
                    "coordinator": "Pastor Daniel Victor ", "phone": "+234 703 610 8642", "address": "Saduma Hotel, No 1, Antau Bridges, by Federal Government College, Keffi"
                },
                "Keffi, Nasarawa": {
                    "coordinator": "Pastor Daniel Victor ", "phone": "+234 703 610 8642", "address": "Saduma Hotel, No 1, Antau Bridges, by Federal Government College, Keffi"
                },
                "Keffi, Nasarawa": {
                    "coordinator": "Pastor Daniel Victor ", "phone": "+234 703 610 8642", "address": "Saduma Hotel, No 1, Antau Bridges, by Federal Government College, Keffi"
                },
                "Keffi, Nasarawa": {
                    "coordinator": "Pastor Daniel Victor ", "phone": "+234 703 610 8642", "address": "Saduma Hotel, No 1, Antau Bridges, by Federal Government College, Keffi"
                },
                "Keffi, Nasarawa": {
                    "coordinator": "Pastor Daniel Victor ", "phone": "+234 703 610 8642", "address": "Saduma Hotel, No 1, Antau Bridges, by Federal Government College, Keffi"
                },
                "Keffi, Nasarawa": {
                    "coordinator": "Pastor Daniel Victor ", "phone": "+234 703 610 8642", "address": "Saduma Hotel, No 1, Antau Bridges, by Federal Government College, Keffi"
                },
                "Keffi, Nasarawa": {
                    "coordinator": "Pastor Daniel Victor ", "phone": "+234 703 610 8642", "address": "Saduma Hotel, No 1, Antau Bridges, by Federal Government College, Keffi"
                },
                "Keffi, Nasarawa": {
                    "coordinator": "Pastor Daniel Victor ", "phone": "+234 703 610 8642", "address": "Saduma Hotel, No 1, Antau Bridges, by Federal Government College, Keffi"
                },
                "Keffi, Nasarawa": {
                    "coordinator": "Pastor Daniel Victor ", "phone": "+234 703 610 8642", "address": "Saduma Hotel, No 1, Antau Bridges, by Federal Government College, Keffi"
                },
                "Keffi, Nasarawa": {
                    "coordinator": "Pastor Daniel Victor ", "phone": "+234 703 610 8642", "address": "Saduma Hotel, No 1, Antau Bridges, by Federal Government College, Keffi"
                },
                "Keffi, Nasarawa": {
                    "coordinator": "Pastor Daniel Victor ", "phone": "+234 703 610 8642", "address": "Saduma Hotel, No 1, Antau Bridges, by Federal Government College, Keffi"
                },
                
            },
            "Botswana": {
                "Gaborone": {"coordinator": "Mosetsanagape Pheto", "phone": "+267 7132 0770", "address": "Cresta Marakanelo - President Hotel Main Hall - The Grand Entrance"},
                "Orapa Lethakane": {"coordinator": "Onkarabile Mantsane", "phone": "+26774096945 +26772889044", "address": "To be updated soon"},
                "Lobatse": {"coordinator": "Lebogang Lekgotla", "phone": "+26773165162 +26776555697", "address": "To be updated soon"},
                "Mathanwane": {"coordinator": "Dziidzani Mooketsi", "phone": "+267 7122 3183", "address": "123 Main St"}
            },
            "Liberia": {
                "Monrovia": {"coordinator": "Pastor Y. Darlo Jones", "phone": "+1234567890", "address": "Contact the Campus Coordinator"}
            },
            "Malawi": {
                "Lilongwe": {"coordinator": "Pastor Francis Magombo", "phone": "+265881252423", "address": "Area 24, Behind Penyenye, Lilongwe"}
            },
            "Mozambique": {
                "Nacala": {"coordinator": "Pastor Collen ", "phone": "+1234567890", "address": "Contact the Campus Coordinator"}
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
                "Gatineau": {"coordinator": "Pastor Justyna Onyobru", "phone": "+1 (438) 220-3865", "address": "42 Rue De La Bourgade, Gatineau"},
                "Brampton Mississauga": {"coordinator": "Pastor Prosper Oseghale", "phone": "+1 (647) 219-7287", "address": "11 Torraville Street, Brampton"},
                "Saskatoon": {"coordinator": "Pastor Ignatius Nwaigwe", "phone": "+1 (289) 700-0759", "address": "535 Kellough rd Saskatoon SK S7N3H1"},
                "Winnipeg": {"coordinator": "Pastor Fabrice Iram", "phone": "+1 (772) 888-0889", "address": "651 Burrows Avenue, Winnipeg"}
            },
            "Jamaica": {
                "Kingston": {"coordinator": "Pastor Dian Ferguson", "phone": "+1 (876) 435-5208", "address": "Contact the Campus Coordinator"}
            },
            "United States of America": {
                "Houston": {"coordinator": "Pastor Dozie Nwachukwu", "phone": "+1 (281) 866-5248", "address": "Contact the Campus Coordinator"},
                "New York": {"coordinator": "Pastors Linge Fon & Sis Tina Mbah", "phone": "+1 (929) 254-9547, +1 (347) 791-7347", "address": "3866 White Plains road, Bronx, New York"},
                "Arlington": {"coordinator": "Pastor Dee Moronkeji", "phone": "+1 (713) 242-9782", "address": "Contact the Campus Coordinator"},
                "Colorado": {"coordinator": "Pastor Jessica Ezeugo", "phone": "+1 (678) 862-2855", "address": "Colorado Springs "},
                "Atlanta": {"coordinator": "Pastor Shedrach  Ukattah", "phone": "+1 (404) 437-5702, +1 (404) 670-2085", "address": "960 Bob Arnold Blvd, Lithia Springs, Georgia"},
                "Los Angeles": {"coordinator": "Pastor Fidelia Ofuegbu ", "phone": "+1 (310) 938-6267, +1 (310) 938-9408", "address": "1642 E 218 Street, Carson, Carlifornia"},
                "Minnesota": {"coordinator": "Pastor Olushola Oloruntola", "phone": "+1 (612) 670-2851", "address": "6455 Zane North Avenue, Minnesota."},
                "Maryland": {"coordinator": "Pastor Oluwaseun Awuwoloye", "phone": "+1 (240) 367-6201", "address": "101 Chestnut Street Ste 200, Maryland."},
                "Connecticut": {"coordinator": "Pastor Susan Bello", "phone": "+1 (860) 961-6563", "address": "3 Crestview Drive, Uncasville, Connecticut"},
                "Florida": {"coordinator": "Pastor Michele Garrick", "phone": "+1 (954) 803-1459", "address": "504 S, Kings Avenue, Brandon, Florida."},
                "Woodforest": {"coordinator": "Pastor Dee Moronkeji", "phone": "+1 (713) 242-9782", "address": "Contact the Campus Coordinator"},
                "Oklahoma": {"coordinator": "Pastor Gabriel Omolewa", "phone": "+1 (405) 696-2891", "address": "1813 NW 173rd Street, Edmund, Oklahoma."},
                "Tampa Bay": {"coordinator": "Pastor Prince Umoh", "phone": "+1(954) 803-1459, +1(813) 331-9694", "address": "Contact the Campus Coordinator"},
                "Dallas": {"coordinator": "Pastor Kingsley Ogujiofor", "phone": "+1 (305) 491-0576", "address": "Contact the Campus Coordinator"},
                "Calgary": {"coordinator": "Pastor Chidima Anugwom", "phone": "+1 (587) 432-5595", "address": "918 McPherson SQ NE, Alberta, Calgary."}
            }
        },
        "Europe": {
            "Germany": {
                "Stuttgart": {"coordinator": "Pastor Valery Nkengifor", "phone": "+49 1514 6893648", "address": "Contact the Campus Coordinator"}
            },
            "Italy": {
                "Rovigo": {"coordinator": "Pastor Emmanuel Okoji", "phone": "+233 24 328 3267", "address": "Contact the Campus Coordinator"},
                "Musile": {"coordinator": "Pastor Irene Nneka orluigwe", "phone": "+233 26 717 0394 , + 233 541367810", "address": "123 Main St"},
            },
            "Sweden": {
                "Orebro": {"coordinator": "Pastor Didicus Omondi ", "phone": "+46764368567", "address": "Contact the Campus Coordinator"}
            },
            "United Kingdom": {
                "Enfield": {"coordinator": "Pastor Andrew Ofenmu ", "phone": "+44 7424 537606", "address": "Broomfield School, Wilmer Way, Arnos Grove, London. N147HY"},
                "West London": {"coordinator": "Pastor Beryl Banful ", "phone": "+44 7748 787370", "address": "Contact the Campus Coordinator"},
                "Leeds": {"coordinator": "Pastor Edet Esara", "phone": "+447935730564", "address": "Contact the Campus Coordinator"},
                "Croydon": {"coordinator": "Pastor Fola Aiyeola", "phone": "+447460815367", "address": "Wellesley Rd, Croydon CR0 9XY."},
                "Harrow": {"coordinator": "Pastors Valerie & Marjorie", "phone": "+44 7853 829818 +44 7956 338903", "address": "Contact the Campus Coordinator"},
                "Manchester": {"coordinator": "Pastor Atas ", "phone": "+44 7951 553356", "address": "AC Hotel by Marriott, Manchester City Centre 17-19 Trafford Road, Quays M5 3AW"},
                "Berkshire": {"coordinator": "Pastor Sophie Oboh", "phone": "+44 7747 591963", "address": "Contact the Campus Coordinator"},
                "Slough": {"coordinator": "Pastor Livingstone Gadwell", "phone": "+447848991695", "address": "Westfield Community Centre, Seven Cresent, Slough SL3 8UX."},
                "Northampton": {"coordinator": "Pastor Samuel Revelation", "phone": "+44 7496 743249", "address": "Contact the Campus Coordinator"},
                "Birmingham": {"coordinator": "Pastor Thomasyn Quarcoopome", "phone": "+44 7886 031 134", "address": "369 City Road Edgbaston B16 0NB, Birmingham"},
                "Dublin": {"coordinator": "Pastor Eze", "phone": "+353 864090389", "address": "Contact the Campus Coordinator"},
                "Shirley": {"coordinator": "Pastor Tony", "phone": "+44 7805171651, +44 7501370112", "address": "Orchard Park High School Orchard Way, Shirley Croydon, London CR0 7NJ."},
                "North London": {"coordinator": "Pastor Emelda", "phone": "+44 7502360406, +44 7588303167", "address": "Main Hall, St John's Church 1 Bourne Hill, London N13 4DA"}
            }
        },
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
                            <p style="text-align: center;">Coordinator: ${details.coordinator}</p>
                            <p style="text-align: center;">Phone: ${details.phone}</p>
                            <p style="text-align: center;">Address: ${details.address}</p>
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
