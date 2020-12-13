const paises = [
    {
        "nombre": "Afghanistan",
        "region": "Asia",
        "sub_region": "Southern Asia"
    },
    {
        "nombre": "Åland Islands",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Albania",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Algeria",
        "region": "Africa",
        "sub_region": "Northern Africa"
    },
    {
        "nombre": "American Samoa",
        "region": "Oceania",
        "sub_region": "Polynesia"
    },
    {
        "nombre": "Andorra",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Angola",
        "region": "Africa",
        "sub_region": "Middle Africa"
    },
    {
        "nombre": "Anguilla",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Antarctica",
        "region": "Polar",
        "sub_region": ""
    },
    {
        "nombre": "Antigua and Barbuda",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Argentina",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "Armenia",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Aruba",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Australia",
        "region": "Oceania",
        "sub_region": "Australia and New Zealand"
    },
    {
        "nombre": "Austria",
        "region": "Europe",
        "sub_region": "Western Europe"
    },
    {
        "nombre": "Azerbaijan",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Bahamas",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Bahrain",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Bangladesh",
        "region": "Asia",
        "sub_region": "Southern Asia"
    },
    {
        "nombre": "Barbados",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Belarus",
        "region": "Europe",
        "sub_region": "Eastern Europe"
    },
    {
        "nombre": "Belgium",
        "region": "Europe",
        "sub_region": "Western Europe"
    },
    {
        "nombre": "Belize",
        "region": "Americas",
        "sub_region": "Central America"
    },
    {
        "nombre": "Benin",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Bermuda",
        "region": "Americas",
        "sub_region": "Northern America"
    },
    {
        "nombre": "Bhutan",
        "region": "Asia",
        "sub_region": "Southern Asia"
    },
    {
        "nombre": "Bolivia (Plurinational State of)",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "Bonaire, Sint Eustatius and Saba",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Bosnia and Herzegovina",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Botswana",
        "region": "Africa",
        "sub_region": "Southern Africa"
    },
    {
        "nombre": "Bouvet Island",
        "region": "",
        "sub_region": ""
    },
    {
        "nombre": "Brazil",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "British Indian Ocean Territory",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "United States Minor Outlying Islands",
        "region": "Americas",
        "sub_region": "Northern America"
    },
    {
        "nombre": "Virgin Islands (British)",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Virgin Islands (U.S.)",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Brunei Darussalam",
        "region": "Asia",
        "sub_region": "South-Eastern Asia"
    },
    {
        "nombre": "Bulgaria",
        "region": "Europe",
        "sub_region": "Eastern Europe"
    },
    {
        "nombre": "Burkina Faso",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Burundi",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Cambodia",
        "region": "Asia",
        "sub_region": "South-Eastern Asia"
    },
    {
        "nombre": "Cameroon",
        "region": "Africa",
        "sub_region": "Middle Africa"
    },
    {
        "nombre": "Canada",
        "region": "Americas",
        "sub_region": "Northern America"
    },
    {
        "nombre": "Cabo Verde",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Cayman Islands",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Central African Republic",
        "region": "Africa",
        "sub_region": "Middle Africa"
    },
    {
        "nombre": "Chad",
        "region": "Africa",
        "sub_region": "Middle Africa"
    },
    {
        "nombre": "Chile",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "China",
        "region": "Asia",
        "sub_region": "Eastern Asia"
    },
    {
        "nombre": "Christmas Island",
        "region": "Oceania",
        "sub_region": "Australia and New Zealand"
    },
    {
        "nombre": "Cocos (Keeling) Islands",
        "region": "Oceania",
        "sub_region": "Australia and New Zealand"
    },
    {
        "nombre": "Colombia",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "Comoros",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Congo",
        "region": "Africa",
        "sub_region": "Middle Africa"
    },
    {
        "nombre": "Congo (Democratic Republic of the)",
        "region": "Africa",
        "sub_region": "Middle Africa"
    },
    {
        "nombre": "Cook Islands",
        "region": "Oceania",
        "sub_region": "Polynesia"
    },
    {
        "nombre": "Costa Rica",
        "region": "Americas",
        "sub_region": "Central America"
    },
    {
        "nombre": "Croatia",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Cuba",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Curaçao",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Cyprus",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Czech Republic",
        "region": "Europe",
        "sub_region": "Eastern Europe"
    },
    {
        "nombre": "Denmark",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Djibouti",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Dominica",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Dominican Republic",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Ecuador",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "Egypt",
        "region": "Africa",
        "sub_region": "Northern Africa"
    },
    {
        "nombre": "El Salvador",
        "region": "Americas",
        "sub_region": "Central America"
    },
    {
        "nombre": "Equatorial Guinea",
        "region": "Africa",
        "sub_region": "Middle Africa"
    },
    {
        "nombre": "Eritrea",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Estonia",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Ethiopia",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Falkland Islands (Malvinas)",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "Faroe Islands",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Fiji",
        "region": "Oceania",
        "sub_region": "Melanesia"
    },
    {
        "nombre": "Finland",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "France",
        "region": "Europe",
        "sub_region": "Western Europe"
    },
    {
        "nombre": "French Guiana",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "French Polynesia",
        "region": "Oceania",
        "sub_region": "Polynesia"
    },
    {
        "nombre": "French Southern Territories",
        "region": "Africa",
        "sub_region": "Southern Africa"
    },
    {
        "nombre": "Gabon",
        "region": "Africa",
        "sub_region": "Middle Africa"
    },
    {
        "nombre": "Gambia",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Georgia",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Germany",
        "region": "Europe",
        "sub_region": "Western Europe"
    },
    {
        "nombre": "Ghana",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Gibraltar",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Greece",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Greenland",
        "region": "Americas",
        "sub_region": "Northern America"
    },
    {
        "nombre": "Grenada",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Guadeloupe",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Guam",
        "region": "Oceania",
        "sub_region": "Micronesia"
    },
    {
        "nombre": "Guatemala",
        "region": "Americas",
        "sub_region": "Central America"
    },
    {
        "nombre": "Guernsey",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Guinea",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Guinea-Bissau",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Guyana",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "Haiti",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Heard Island and McDonald Islands",
        "region": "",
        "sub_region": ""
    },
    {
        "nombre": "Holy See",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Honduras",
        "region": "Americas",
        "sub_region": "Central America"
    },
    {
        "nombre": "Hong Kong",
        "region": "Asia",
        "sub_region": "Eastern Asia"
    },
    {
        "nombre": "Hungary",
        "region": "Europe",
        "sub_region": "Eastern Europe"
    },
    {
        "nombre": "Iceland",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "India",
        "region": "Asia",
        "sub_region": "Southern Asia"
    },
    {
        "nombre": "Indonesia",
        "region": "Asia",
        "sub_region": "South-Eastern Asia"
    },
    {
        "nombre": "Côte d'Ivoire",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Iran (Islamic Republic of)",
        "region": "Asia",
        "sub_region": "Southern Asia"
    },
    {
        "nombre": "Iraq",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Ireland",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Isle of Man",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Israel",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Italy",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Jamaica",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Japan",
        "region": "Asia",
        "sub_region": "Eastern Asia"
    },
    {
        "nombre": "Jersey",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Jordan",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Kazakhstan",
        "region": "Asia",
        "sub_region": "Central Asia"
    },
    {
        "nombre": "Kenya",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Kiribati",
        "region": "Oceania",
        "sub_region": "Micronesia"
    },
    {
        "nombre": "Kuwait",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Kyrgyzstan",
        "region": "Asia",
        "sub_region": "Central Asia"
    },
    {
        "nombre": "Lao People's Democratic Republic",
        "region": "Asia",
        "sub_region": "South-Eastern Asia"
    },
    {
        "nombre": "Latvia",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Lebanon",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Lesotho",
        "region": "Africa",
        "sub_region": "Southern Africa"
    },
    {
        "nombre": "Liberia",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Libya",
        "region": "Africa",
        "sub_region": "Northern Africa"
    },
    {
        "nombre": "Liechtenstein",
        "region": "Europe",
        "sub_region": "Western Europe"
    },
    {
        "nombre": "Lithuania",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Luxembourg",
        "region": "Europe",
        "sub_region": "Western Europe"
    },
    {
        "nombre": "Macao",
        "region": "Asia",
        "sub_region": "Eastern Asia"
    },
    {
        "nombre": "Macedonia (the former Yugoslav Republic of)",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Madagascar",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Malawi",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Malaysia",
        "region": "Asia",
        "sub_region": "South-Eastern Asia"
    },
    {
        "nombre": "Maldives",
        "region": "Asia",
        "sub_region": "Southern Asia"
    },
    {
        "nombre": "Mali",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Malta",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Marshall Islands",
        "region": "Oceania",
        "sub_region": "Micronesia"
    },
    {
        "nombre": "Martinique",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Mauritania",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Mauritius",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Mayotte",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Mexico",
        "region": "Americas",
        "sub_region": "Central America"
    },
    {
        "nombre": "Micronesia (Federated States of)",
        "region": "Oceania",
        "sub_region": "Micronesia"
    },
    {
        "nombre": "Moldova (Republic of)",
        "region": "Europe",
        "sub_region": "Eastern Europe"
    },
    {
        "nombre": "Monaco",
        "region": "Europe",
        "sub_region": "Western Europe"
    },
    {
        "nombre": "Mongolia",
        "region": "Asia",
        "sub_region": "Eastern Asia"
    },
    {
        "nombre": "Montenegro",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Montserrat",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Morocco",
        "region": "Africa",
        "sub_region": "Northern Africa"
    },
    {
        "nombre": "Mozambique",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Myanmar",
        "region": "Asia",
        "sub_region": "South-Eastern Asia"
    },
    {
        "nombre": "Namibia",
        "region": "Africa",
        "sub_region": "Southern Africa"
    },
    {
        "nombre": "Nauru",
        "region": "Oceania",
        "sub_region": "Micronesia"
    },
    {
        "nombre": "Nepal",
        "region": "Asia",
        "sub_region": "Southern Asia"
    },
    {
        "nombre": "Netherlands",
        "region": "Europe",
        "sub_region": "Western Europe"
    },
    {
        "nombre": "New Caledonia",
        "region": "Oceania",
        "sub_region": "Melanesia"
    },
    {
        "nombre": "New Zealand",
        "region": "Oceania",
        "sub_region": "Australia and New Zealand"
    },
    {
        "nombre": "Nicaragua",
        "region": "Americas",
        "sub_region": "Central America"
    },
    {
        "nombre": "Niger",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Nigeria",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Niue",
        "region": "Oceania",
        "sub_region": "Polynesia"
    },
    {
        "nombre": "Norfolk Island",
        "region": "Oceania",
        "sub_region": "Australia and New Zealand"
    },
    {
        "nombre": "Korea (Democratic People's Republic of)",
        "region": "Asia",
        "sub_region": "Eastern Asia"
    },
    {
        "nombre": "Northern Mariana Islands",
        "region": "Oceania",
        "sub_region": "Micronesia"
    },
    {
        "nombre": "Norway",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Oman",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Pakistan",
        "region": "Asia",
        "sub_region": "Southern Asia"
    },
    {
        "nombre": "Palau",
        "region": "Oceania",
        "sub_region": "Micronesia"
    },
    {
        "nombre": "Palestine, State of",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Panama",
        "region": "Americas",
        "sub_region": "Central America"
    },
    {
        "nombre": "Papua New Guinea",
        "region": "Oceania",
        "sub_region": "Melanesia"
    },
    {
        "nombre": "Paraguay",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "Peru",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "Philippines",
        "region": "Asia",
        "sub_region": "South-Eastern Asia"
    },
    {
        "nombre": "Pitcairn",
        "region": "Oceania",
        "sub_region": "Polynesia"
    },
    {
        "nombre": "Poland",
        "region": "Europe",
        "sub_region": "Eastern Europe"
    },
    {
        "nombre": "Portugal",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Puerto Rico",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Qatar",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Republic of Kosovo",
        "region": "Europe",
        "sub_region": "Eastern Europe"
    },
    {
        "nombre": "Réunion",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Romania",
        "region": "Europe",
        "sub_region": "Eastern Europe"
    },
    {
        "nombre": "Russian Federation",
        "region": "Europe",
        "sub_region": "Eastern Europe"
    },
    {
        "nombre": "Rwanda",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Saint Barthélemy",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Saint Helena, Ascension and Tristan da Cunha",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Saint Kitts and Nevis",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Saint Lucia",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Saint Martin (French part)",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Saint Pierre and Miquelon",
        "region": "Americas",
        "sub_region": "Northern America"
    },
    {
        "nombre": "Saint Vincent and the Grenadines",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Samoa",
        "region": "Oceania",
        "sub_region": "Polynesia"
    },
    {
        "nombre": "San Marino",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Sao Tome and Principe",
        "region": "Africa",
        "sub_region": "Middle Africa"
    },
    {
        "nombre": "Saudi Arabia",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Senegal",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Serbia",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Seychelles",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Sierra Leone",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Singapore",
        "region": "Asia",
        "sub_region": "South-Eastern Asia"
    },
    {
        "nombre": "Sint Maarten (Dutch part)",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Slovakia",
        "region": "Europe",
        "sub_region": "Eastern Europe"
    },
    {
        "nombre": "Slovenia",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Solomon Islands",
        "region": "Oceania",
        "sub_region": "Melanesia"
    },
    {
        "nombre": "Somalia",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "South Africa",
        "region": "Africa",
        "sub_region": "Southern Africa"
    },
    {
        "nombre": "South Georgia and the South Sandwich Islands",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "Korea (Republic of)",
        "region": "Asia",
        "sub_region": "Eastern Asia"
    },
    {
        "nombre": "South Sudan",
        "region": "Africa",
        "sub_region": "Middle Africa"
    },
    {
        "nombre": "Spain",
        "region": "Europe",
        "sub_region": "Southern Europe"
    },
    {
        "nombre": "Sri Lanka",
        "region": "Asia",
        "sub_region": "Southern Asia"
    },
    {
        "nombre": "Sudan",
        "region": "Africa",
        "sub_region": "Northern Africa"
    },
    {
        "nombre": "Surinombre",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "Svalbard and Jan Mayen",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Swaziland",
        "region": "Africa",
        "sub_region": "Southern Africa"
    },
    {
        "nombre": "Sweden",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "Switzerland",
        "region": "Europe",
        "sub_region": "Western Europe"
    },
    {
        "nombre": "Syrian Arab Republic",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Taiwan",
        "region": "Asia",
        "sub_region": "Eastern Asia"
    },
    {
        "nombre": "Tajikistan",
        "region": "Asia",
        "sub_region": "Central Asia"
    },
    {
        "nombre": "Tanzania, United Republic of",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Thailand",
        "region": "Asia",
        "sub_region": "South-Eastern Asia"
    },
    {
        "nombre": "Timor-Leste",
        "region": "Asia",
        "sub_region": "South-Eastern Asia"
    },
    {
        "nombre": "Togo",
        "region": "Africa",
        "sub_region": "Western Africa"
    },
    {
        "nombre": "Tokelau",
        "region": "Oceania",
        "sub_region": "Polynesia"
    },
    {
        "nombre": "Tonga",
        "region": "Oceania",
        "sub_region": "Polynesia"
    },
    {
        "nombre": "Trinidad and Tobago",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Tunisia",
        "region": "Africa",
        "sub_region": "Northern Africa"
    },
    {
        "nombre": "Turkey",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Turkmenistan",
        "region": "Asia",
        "sub_region": "Central Asia"
    },
    {
        "nombre": "Turks and Caicos Islands",
        "region": "Americas",
        "sub_region": "Caribbean"
    },
    {
        "nombre": "Tuvalu",
        "region": "Oceania",
        "sub_region": "Polynesia"
    },
    {
        "nombre": "Uganda",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Ukraine",
        "region": "Europe",
        "sub_region": "Eastern Europe"
    },
    {
        "nombre": "United Arab Emirates",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "United Kingdom of Great Britain and Northern Ireland",
        "region": "Europe",
        "sub_region": "Northern Europe"
    },
    {
        "nombre": "United States of America",
        "region": "Americas",
        "sub_region": "Northern America"
    },
    {
        "nombre": "Uruguay",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "Uzbekistan",
        "region": "Asia",
        "sub_region": "Central Asia"
    },
    {
        "nombre": "Vanuatu",
        "region": "Oceania",
        "sub_region": "Melanesia"
    },
    {
        "nombre": "Venezuela (Bolivarian Republic of)",
        "region": "Americas",
        "sub_region": "South America"
    },
    {
        "nombre": "Viet Nam",
        "region": "Asia",
        "sub_region": "South-Eastern Asia"
    },
    {
        "nombre": "Wallis and Futuna",
        "region": "Oceania",
        "sub_region": "Polynesia"
    },
    {
        "nombre": "Western Sahara",
        "region": "Africa",
        "sub_region": "Northern Africa"
    },
    {
        "nombre": "Yemen",
        "region": "Asia",
        "sub_region": "Western Asia"
    },
    {
        "nombre": "Zambia",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    },
    {
        "nombre": "Zimbabwe",
        "region": "Africa",
        "sub_region": "Eastern Africa"
    }
];


module.export = paises;