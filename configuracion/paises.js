const paises = [
    {
        "name": "Afghanistan",
        "region": "Asia",
        "subregion": "Southern Asia"
    },
    {
        "name": "Åland Islands",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Albania",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Algeria",
        "region": "Africa",
        "subregion": "Northern Africa"
    },
    {
        "name": "American Samoa",
        "region": "Oceania",
        "subregion": "Polynesia"
    },
    {
        "name": "Andorra",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Angola",
        "region": "Africa",
        "subregion": "Middle Africa"
    },
    {
        "name": "Anguilla",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Antarctica",
        "region": "Polar",
        "subregion": ""
    },
    {
        "name": "Antigua and Barbuda",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Argentina",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "Armenia",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Aruba",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Australia",
        "region": "Oceania",
        "subregion": "Australia and New Zealand"
    },
    {
        "name": "Austria",
        "region": "Europe",
        "subregion": "Western Europe"
    },
    {
        "name": "Azerbaijan",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Bahamas",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Bahrain",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Bangladesh",
        "region": "Asia",
        "subregion": "Southern Asia"
    },
    {
        "name": "Barbados",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Belarus",
        "region": "Europe",
        "subregion": "Eastern Europe"
    },
    {
        "name": "Belgium",
        "region": "Europe",
        "subregion": "Western Europe"
    },
    {
        "name": "Belize",
        "region": "Americas",
        "subregion": "Central America"
    },
    {
        "name": "Benin",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Bermuda",
        "region": "Americas",
        "subregion": "Northern America"
    },
    {
        "name": "Bhutan",
        "region": "Asia",
        "subregion": "Southern Asia"
    },
    {
        "name": "Bolivia (Plurinational State of)",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "Bonaire, Sint Eustatius and Saba",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Bosnia and Herzegovina",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Botswana",
        "region": "Africa",
        "subregion": "Southern Africa"
    },
    {
        "name": "Bouvet Island",
        "region": "",
        "subregion": ""
    },
    {
        "name": "Brazil",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "British Indian Ocean Territory",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "United States Minor Outlying Islands",
        "region": "Americas",
        "subregion": "Northern America"
    },
    {
        "name": "Virgin Islands (British)",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Virgin Islands (U.S.)",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Brunei Darussalam",
        "region": "Asia",
        "subregion": "South-Eastern Asia"
    },
    {
        "name": "Bulgaria",
        "region": "Europe",
        "subregion": "Eastern Europe"
    },
    {
        "name": "Burkina Faso",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Burundi",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Cambodia",
        "region": "Asia",
        "subregion": "South-Eastern Asia"
    },
    {
        "name": "Cameroon",
        "region": "Africa",
        "subregion": "Middle Africa"
    },
    {
        "name": "Canada",
        "region": "Americas",
        "subregion": "Northern America"
    },
    {
        "name": "Cabo Verde",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Cayman Islands",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Central African Republic",
        "region": "Africa",
        "subregion": "Middle Africa"
    },
    {
        "name": "Chad",
        "region": "Africa",
        "subregion": "Middle Africa"
    },
    {
        "name": "Chile",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "China",
        "region": "Asia",
        "subregion": "Eastern Asia"
    },
    {
        "name": "Christmas Island",
        "region": "Oceania",
        "subregion": "Australia and New Zealand"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "region": "Oceania",
        "subregion": "Australia and New Zealand"
    },
    {
        "name": "Colombia",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "Comoros",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Congo",
        "region": "Africa",
        "subregion": "Middle Africa"
    },
    {
        "name": "Congo (Democratic Republic of the)",
        "region": "Africa",
        "subregion": "Middle Africa"
    },
    {
        "name": "Cook Islands",
        "region": "Oceania",
        "subregion": "Polynesia"
    },
    {
        "name": "Costa Rica",
        "region": "Americas",
        "subregion": "Central America"
    },
    {
        "name": "Croatia",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Cuba",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Curaçao",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Cyprus",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Czech Republic",
        "region": "Europe",
        "subregion": "Eastern Europe"
    },
    {
        "name": "Denmark",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Djibouti",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Dominica",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Dominican Republic",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Ecuador",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "Egypt",
        "region": "Africa",
        "subregion": "Northern Africa"
    },
    {
        "name": "El Salvador",
        "region": "Americas",
        "subregion": "Central America"
    },
    {
        "name": "Equatorial Guinea",
        "region": "Africa",
        "subregion": "Middle Africa"
    },
    {
        "name": "Eritrea",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Estonia",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Ethiopia",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "Faroe Islands",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Fiji",
        "region": "Oceania",
        "subregion": "Melanesia"
    },
    {
        "name": "Finland",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "France",
        "region": "Europe",
        "subregion": "Western Europe"
    },
    {
        "name": "French Guiana",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "French Polynesia",
        "region": "Oceania",
        "subregion": "Polynesia"
    },
    {
        "name": "French Southern Territories",
        "region": "Africa",
        "subregion": "Southern Africa"
    },
    {
        "name": "Gabon",
        "region": "Africa",
        "subregion": "Middle Africa"
    },
    {
        "name": "Gambia",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Georgia",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Germany",
        "region": "Europe",
        "subregion": "Western Europe"
    },
    {
        "name": "Ghana",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Gibraltar",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Greece",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Greenland",
        "region": "Americas",
        "subregion": "Northern America"
    },
    {
        "name": "Grenada",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Guadeloupe",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Guam",
        "region": "Oceania",
        "subregion": "Micronesia"
    },
    {
        "name": "Guatemala",
        "region": "Americas",
        "subregion": "Central America"
    },
    {
        "name": "Guernsey",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Guinea",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Guinea-Bissau",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Guyana",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "Haiti",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Heard Island and McDonald Islands",
        "region": "",
        "subregion": ""
    },
    {
        "name": "Holy See",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Honduras",
        "region": "Americas",
        "subregion": "Central America"
    },
    {
        "name": "Hong Kong",
        "region": "Asia",
        "subregion": "Eastern Asia"
    },
    {
        "name": "Hungary",
        "region": "Europe",
        "subregion": "Eastern Europe"
    },
    {
        "name": "Iceland",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "India",
        "region": "Asia",
        "subregion": "Southern Asia"
    },
    {
        "name": "Indonesia",
        "region": "Asia",
        "subregion": "South-Eastern Asia"
    },
    {
        "name": "Côte d'Ivoire",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Iran (Islamic Republic of)",
        "region": "Asia",
        "subregion": "Southern Asia"
    },
    {
        "name": "Iraq",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Ireland",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Isle of Man",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Israel",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Italy",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Jamaica",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Japan",
        "region": "Asia",
        "subregion": "Eastern Asia"
    },
    {
        "name": "Jersey",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Jordan",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Kazakhstan",
        "region": "Asia",
        "subregion": "Central Asia"
    },
    {
        "name": "Kenya",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Kiribati",
        "region": "Oceania",
        "subregion": "Micronesia"
    },
    {
        "name": "Kuwait",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Kyrgyzstan",
        "region": "Asia",
        "subregion": "Central Asia"
    },
    {
        "name": "Lao People's Democratic Republic",
        "region": "Asia",
        "subregion": "South-Eastern Asia"
    },
    {
        "name": "Latvia",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Lebanon",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Lesotho",
        "region": "Africa",
        "subregion": "Southern Africa"
    },
    {
        "name": "Liberia",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Libya",
        "region": "Africa",
        "subregion": "Northern Africa"
    },
    {
        "name": "Liechtenstein",
        "region": "Europe",
        "subregion": "Western Europe"
    },
    {
        "name": "Lithuania",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Luxembourg",
        "region": "Europe",
        "subregion": "Western Europe"
    },
    {
        "name": "Macao",
        "region": "Asia",
        "subregion": "Eastern Asia"
    },
    {
        "name": "Macedonia (the former Yugoslav Republic of)",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Madagascar",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Malawi",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Malaysia",
        "region": "Asia",
        "subregion": "South-Eastern Asia"
    },
    {
        "name": "Maldives",
        "region": "Asia",
        "subregion": "Southern Asia"
    },
    {
        "name": "Mali",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Malta",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Marshall Islands",
        "region": "Oceania",
        "subregion": "Micronesia"
    },
    {
        "name": "Martinique",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Mauritania",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Mauritius",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Mayotte",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Mexico",
        "region": "Americas",
        "subregion": "Central America"
    },
    {
        "name": "Micronesia (Federated States of)",
        "region": "Oceania",
        "subregion": "Micronesia"
    },
    {
        "name": "Moldova (Republic of)",
        "region": "Europe",
        "subregion": "Eastern Europe"
    },
    {
        "name": "Monaco",
        "region": "Europe",
        "subregion": "Western Europe"
    },
    {
        "name": "Mongolia",
        "region": "Asia",
        "subregion": "Eastern Asia"
    },
    {
        "name": "Montenegro",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Montserrat",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Morocco",
        "region": "Africa",
        "subregion": "Northern Africa"
    },
    {
        "name": "Mozambique",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Myanmar",
        "region": "Asia",
        "subregion": "South-Eastern Asia"
    },
    {
        "name": "Namibia",
        "region": "Africa",
        "subregion": "Southern Africa"
    },
    {
        "name": "Nauru",
        "region": "Oceania",
        "subregion": "Micronesia"
    },
    {
        "name": "Nepal",
        "region": "Asia",
        "subregion": "Southern Asia"
    },
    {
        "name": "Netherlands",
        "region": "Europe",
        "subregion": "Western Europe"
    },
    {
        "name": "New Caledonia",
        "region": "Oceania",
        "subregion": "Melanesia"
    },
    {
        "name": "New Zealand",
        "region": "Oceania",
        "subregion": "Australia and New Zealand"
    },
    {
        "name": "Nicaragua",
        "region": "Americas",
        "subregion": "Central America"
    },
    {
        "name": "Niger",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Nigeria",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Niue",
        "region": "Oceania",
        "subregion": "Polynesia"
    },
    {
        "name": "Norfolk Island",
        "region": "Oceania",
        "subregion": "Australia and New Zealand"
    },
    {
        "name": "Korea (Democratic People's Republic of)",
        "region": "Asia",
        "subregion": "Eastern Asia"
    },
    {
        "name": "Northern Mariana Islands",
        "region": "Oceania",
        "subregion": "Micronesia"
    },
    {
        "name": "Norway",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Oman",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Pakistan",
        "region": "Asia",
        "subregion": "Southern Asia"
    },
    {
        "name": "Palau",
        "region": "Oceania",
        "subregion": "Micronesia"
    },
    {
        "name": "Palestine, State of",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Panama",
        "region": "Americas",
        "subregion": "Central America"
    },
    {
        "name": "Papua New Guinea",
        "region": "Oceania",
        "subregion": "Melanesia"
    },
    {
        "name": "Paraguay",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "Peru",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "Philippines",
        "region": "Asia",
        "subregion": "South-Eastern Asia"
    },
    {
        "name": "Pitcairn",
        "region": "Oceania",
        "subregion": "Polynesia"
    },
    {
        "name": "Poland",
        "region": "Europe",
        "subregion": "Eastern Europe"
    },
    {
        "name": "Portugal",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Puerto Rico",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Qatar",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Republic of Kosovo",
        "region": "Europe",
        "subregion": "Eastern Europe"
    },
    {
        "name": "Réunion",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Romania",
        "region": "Europe",
        "subregion": "Eastern Europe"
    },
    {
        "name": "Russian Federation",
        "region": "Europe",
        "subregion": "Eastern Europe"
    },
    {
        "name": "Rwanda",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Saint Barthélemy",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Saint Kitts and Nevis",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Saint Lucia",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Saint Martin (French part)",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "region": "Americas",
        "subregion": "Northern America"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Samoa",
        "region": "Oceania",
        "subregion": "Polynesia"
    },
    {
        "name": "San Marino",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Sao Tome and Principe",
        "region": "Africa",
        "subregion": "Middle Africa"
    },
    {
        "name": "Saudi Arabia",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Senegal",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Serbia",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Seychelles",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Sierra Leone",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Singapore",
        "region": "Asia",
        "subregion": "South-Eastern Asia"
    },
    {
        "name": "Sint Maarten (Dutch part)",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Slovakia",
        "region": "Europe",
        "subregion": "Eastern Europe"
    },
    {
        "name": "Slovenia",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Solomon Islands",
        "region": "Oceania",
        "subregion": "Melanesia"
    },
    {
        "name": "Somalia",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "South Africa",
        "region": "Africa",
        "subregion": "Southern Africa"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "Korea (Republic of)",
        "region": "Asia",
        "subregion": "Eastern Asia"
    },
    {
        "name": "South Sudan",
        "region": "Africa",
        "subregion": "Middle Africa"
    },
    {
        "name": "Spain",
        "region": "Europe",
        "subregion": "Southern Europe"
    },
    {
        "name": "Sri Lanka",
        "region": "Asia",
        "subregion": "Southern Asia"
    },
    {
        "name": "Sudan",
        "region": "Africa",
        "subregion": "Northern Africa"
    },
    {
        "name": "Suriname",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Swaziland",
        "region": "Africa",
        "subregion": "Southern Africa"
    },
    {
        "name": "Sweden",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "Switzerland",
        "region": "Europe",
        "subregion": "Western Europe"
    },
    {
        "name": "Syrian Arab Republic",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Taiwan",
        "region": "Asia",
        "subregion": "Eastern Asia"
    },
    {
        "name": "Tajikistan",
        "region": "Asia",
        "subregion": "Central Asia"
    },
    {
        "name": "Tanzania, United Republic of",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Thailand",
        "region": "Asia",
        "subregion": "South-Eastern Asia"
    },
    {
        "name": "Timor-Leste",
        "region": "Asia",
        "subregion": "South-Eastern Asia"
    },
    {
        "name": "Togo",
        "region": "Africa",
        "subregion": "Western Africa"
    },
    {
        "name": "Tokelau",
        "region": "Oceania",
        "subregion": "Polynesia"
    },
    {
        "name": "Tonga",
        "region": "Oceania",
        "subregion": "Polynesia"
    },
    {
        "name": "Trinidad and Tobago",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Tunisia",
        "region": "Africa",
        "subregion": "Northern Africa"
    },
    {
        "name": "Turkey",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Turkmenistan",
        "region": "Asia",
        "subregion": "Central Asia"
    },
    {
        "name": "Turks and Caicos Islands",
        "region": "Americas",
        "subregion": "Caribbean"
    },
    {
        "name": "Tuvalu",
        "region": "Oceania",
        "subregion": "Polynesia"
    },
    {
        "name": "Uganda",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Ukraine",
        "region": "Europe",
        "subregion": "Eastern Europe"
    },
    {
        "name": "United Arab Emirates",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "United Kingdom of Great Britain and Northern Ireland",
        "region": "Europe",
        "subregion": "Northern Europe"
    },
    {
        "name": "United States of America",
        "region": "Americas",
        "subregion": "Northern America"
    },
    {
        "name": "Uruguay",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "Uzbekistan",
        "region": "Asia",
        "subregion": "Central Asia"
    },
    {
        "name": "Vanuatu",
        "region": "Oceania",
        "subregion": "Melanesia"
    },
    {
        "name": "Venezuela (Bolivarian Republic of)",
        "region": "Americas",
        "subregion": "South America"
    },
    {
        "name": "Viet Nam",
        "region": "Asia",
        "subregion": "South-Eastern Asia"
    },
    {
        "name": "Wallis and Futuna",
        "region": "Oceania",
        "subregion": "Polynesia"
    },
    {
        "name": "Western Sahara",
        "region": "Africa",
        "subregion": "Northern Africa"
    },
    {
        "name": "Yemen",
        "region": "Asia",
        "subregion": "Western Asia"
    },
    {
        "name": "Zambia",
        "region": "Africa",
        "subregion": "Eastern Africa"
    },
    {
        "name": "Zimbabwe",
        "region": "Africa",
        "subregion": "Eastern Africa"
    }
];


module.export = paises;