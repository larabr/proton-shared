/*
 * The list of timezones supported by FE is given by the function listTimezones(),
 * which returns the timezones in the 2019c iana database. That database is backward-compatible
 * (the list of timezones keeps changing because humans keep making crazy irrational decisions).
 * The API does not like backward-compatibility though, and they only support some of those
 * timezones (loosely based on https://www.php.net/manual/en/timezones.php). The list of timezones
 * recognized by FE but not supported by BE are the ones that serve as entries for the object below.
 * The value for each entry is the supported timezone we will re-direct to
 */
export const unsupportedTimezoneLinks: { [key: string]: string } = {
    'America/Indiana/Indianapolis': 'America/New_York',
    'America/Nuuk': 'Atlantic/Stanley',
    'America/Fort_Wayne': 'America/New_York',
    'Asia/Singapore': 'Asia/Shanghai',
    'Asia/Rangoon': 'Indian/Cocos',
    'Asia/Yangon': 'Indian/Cocos',
    'Pacific/Funafuti': 'Asia/Kamchatka',
    'Pacific/Wake': 'Asia/Kamchatka',
    'Pacific/Wallis': 'Asia/Kamchatka',
    CET: 'Europe/Paris',
    CST6CDT: 'America/Chicago',
    EET: 'Europe/Istanbul',
    EST: 'America/New_York',
    EST5EDT: 'America/New_York',
    'Etc/GMT+1': 'Atlantic/Cape_Verde',
    'Etc/GMT+10': 'Pacific/Tahiti',
    'Etc/GMT+11': 'Pacific/Niue',
    'Etc/GMT+12': 'Pacific/Niue', // no canonical timezone exists for GMT+12
    'Etc/GMT+2': 'America/Noronha',
    'Etc/GMT+3': 'America/Sao_Paulo',
    'Etc/GMT+4': 'America/Caracas',
    'Etc/GMT+5': 'America/Lima',
    'Etc/GMT+6': 'America/Managua',
    'Etc/GMT+7': 'America/Phoenix',
    'Etc/GMT+8': 'Pacific/Pitcairn',
    'Etc/GMT+9': 'Pacific/Gambier',
    'Etc/GMT-0': 'UTC',
    'Etc/GMT-1': 'Europe/Paris',
    'Etc/GMT-10': 'Australia/Brisbane',
    'Etc/GMT-11': 'Australia/Sydney',
    'Etc/GMT-12': 'Pacific/Auckland',
    'Etc/GMT-13': 'Pacific/Fakaofo',
    'Etc/GMT-14': 'Pacific/Kiritimati',
    'Etc/GMT-2': 'Africa/Cairo',
    'Etc/GMT-3': 'Asia/Baghdad',
    'Etc/GMT-4': 'Asia/Dubai',
    'Etc/GMT-5': 'Asia/Tashkent',
    'Etc/GMT-6': 'Asia/Dhaka',
    'Etc/GMT-7': 'Asia/Jakarta',
    'Etc/GMT-8': 'Asia/Shanghai',
    'Etc/GMT-9': 'Asia/Tokyo',
    'Etc/UTC': 'UTC',
    HST: 'Pacific/Honolulu',
    MET: 'Europe/Paris',
    MST: 'Europe/Paris',
    MST7MDT: 'America/Denver',
    PST8PDT: 'America/Los_Angeles',
    WET: 'Europe/Lisbon',
};

export const MANUAL_TIMEZONE_LINKS: { [key: string]: string } = {
    'abu dhabi, muscat': 'Asia/Muscat',
    acre: 'America/Rio_Branco',
    'adelaide, central australia': 'Australia/Adelaide',
    afghanistan: 'Asia/Kabul',
    'afghanistan standard time': 'Asia/Kabul',
    'africa central': 'Africa/Maputo',
    'africa eastern': 'Africa/Nairobi',
    'africa farwestern': 'Africa/El_Aaiun',
    'africa southern': 'Africa/Johannesburg',
    'africa western': 'Africa/Lagos',
    aktyubinsk: 'Asia/Aqtobe',
    alaska: 'America/Anchorage',
    'alaska hawaii': 'America/Anchorage',
    alaskan: 'America/Anchorage',
    'alaskan standard time': 'America/Anchorage',
    'aleutian standard time': 'America/Adak',
    almaty: 'Asia/Almaty',
    'almaty, novosibirsk, north central asia': 'Asia/Almaty',
    'altai standard time': 'Asia/Barnaul',
    amazon: 'America/Manaus',
    'america central': 'America/Chicago',
    'america eastern': 'America/New_York',
    'america mountain': 'America/Denver',
    'america pacific': 'America/Los_Angeles',
    'amsterdam, berlin, bern, rome, stockholm, vienna': 'Europe/Berlin',
    anadyr: 'Asia/Anadyr',
    apia: 'Pacific/Apia',
    aqtau: 'Asia/Aqtau',
    aqtobe: 'Asia/Aqtobe',
    arab: 'Asia/Kuwait',
    'arab standard time': 'Asia/Riyadh',
    'arab, kuwait, riyadh': 'Asia/Kuwait',
    arabian: 'Asia/Muscat',
    'arabian standard time': 'Asia/Dubai',
    arabic: 'Asia/Baghdad',
    'arabic standard time': 'Asia/Baghdad',
    argentina: 'America/Argentina/Buenos_Aires',
    'argentina standard time': 'America/Argentina/Buenos_Aires',
    'argentina western': 'America/Argentina/San_Luis',
    arizona: 'America/Phoenix',
    armenia: 'Asia/Yerevan',
    armenian: 'Asia/Yerevan',
    'armenian standard time': 'Asia/Yerevan',
    ashkhabad: 'Asia/Ashgabat',
    'astana, dhaka': 'Asia/Dhaka',
    'astrakhan standard time': 'Europe/Astrakhan',
    'athens, istanbul, minsk': 'Europe/Athens',
    atlantic: 'America/Halifax',
    'atlantic standard time': 'America/Halifax',
    'atlantic time (canada)': 'America/Halifax',
    'auckland, wellington': 'Pacific/Auckland',
    'aus central': 'Australia/Darwin',
    'aus central standard time': 'Australia/Darwin',
    'aus central w standard time': 'Australia/Eucla',
    'aus eastern': 'Australia/Sydney',
    'aus eastern standard time': 'Australia/Sydney',
    'australia central': 'Australia/Adelaide',
    'australia centralwestern': 'Australia/Eucla',
    'australia eastern': 'Australia/Sydney',
    'australia western': 'Australia/Perth',
    azerbaijan: 'Asia/Baku',
    'azerbaijan standard time': 'Asia/Baku',
    azerbijan: 'Asia/Baku',
    azores: 'Atlantic/Azores',
    'azores standard time': 'Atlantic/Azores',
    baghdad: 'Asia/Baghdad',
    'bahia standard time': 'America/Bahia',
    baku: 'Asia/Baku',
    'baku, tbilisi, yerevan': 'Asia/Baku',
    'bangkok, hanoi, jakarta': 'Asia/Bangkok',
    bangladesh: 'Asia/Dhaka',
    'bangladesh standard time': 'Asia/Dhaka',
    'beijing, chongqing, hong kong sar, urumqi': 'Asia/Shanghai',
    'belarus standard time': 'Europe/Minsk',
    'belgrade, pozsony, budapest, ljubljana, prague': 'Europe/Prague',
    bering: 'America/Adak',
    bhutan: 'Asia/Thimphu',
    'bogota, lima, quito': 'America/Bogota',
    bolivia: 'America/La_Paz',
    borneo: 'Asia/Kuching',
    'bougainville standard time': 'Pacific/Bougainville',
    brasilia: 'America/Sao_Paulo',
    'brisbane, east australia': 'Australia/Brisbane',
    british: 'Europe/London',
    brunei: 'Asia/Brunei',
    'brussels, copenhagen, madrid, paris': 'Europe/Paris',
    bucharest: 'Europe/Bucharest',
    'buenos aires': 'America/Argentina/Buenos_Aires',
    cairo: 'Africa/Cairo',
    'canada central': 'America/Edmonton',
    'canada central standard time': 'America/Regina',
    'canberra, melbourne, sydney, hobart (year 2000 only)': 'Australia/Sydney',
    'cape verde': 'Atlantic/Cape_Verde',
    'cape verde is': 'Atlantic/Cape_Verde',
    'cape verde standard time': 'Atlantic/Cape_Verde',
    'caracas, la paz': 'America/Caracas',
    'casablanca, monrovia': 'Africa/Casablanca',
    casey: 'Antarctica/Casey',
    caucasus: 'Asia/Yerevan',
    'caucasus standard time': 'Asia/Yerevan',
    'cen australia': 'Australia/Adelaide',
    'cen australia standard time': 'Australia/Adelaide',
    central: 'America/Chicago',
    'central america': 'America/Guatemala',
    'central america standard time': 'America/Guatemala',
    'central asia': 'Asia/Dhaka',
    'central asia standard time': 'Asia/Almaty',
    'central brazilian': 'America/Manaus',
    'central brazilian standard time': 'America/Cuiaba',
    'central europe': 'Europe/Prague',
    'central europe standard time': 'Europe/Budapest',
    'central european': 'Europe/Sarajevo',
    'central european standard time': 'Europe/Warsaw',
    'central pacific': 'Asia/Magadan',
    'central pacific standard time': 'Pacific/Guadalcanal',
    'central standard time': 'America/Chicago',
    'central standard time (mexico)': 'America/Mexico_City',
    'central time (us & canada)': 'America/Chicago',
    chamorro: 'Pacific/Saipan',
    chatham: 'Pacific/Chatham',
    'chatham islands standard time': 'Pacific/Chatham',
    chile: 'America/Santiago',
    china: 'Asia/Shanghai',
    'china standard time': 'Asia/Shanghai',
    choibalsan: 'Asia/Choibalsan',
    christmas: 'Indian/Christmas',
    cocos: 'Indian/Cocos',
    colombia: 'America/Bogota',
    cook: 'Pacific/Rarotonga',
    cuba: 'America/Havana',
    'cuba standard time': 'America/Havana',
    dacca: 'Asia/Dhaka',
    darwin: 'Australia/Darwin',
    dateline: 'Pacific/Auckland',
    'dateline standard time': 'Pacific/Niue',
    davis: 'Antarctica/Davis',
    dominican: 'America/Santo_Domingo',
    dumontdurville: 'Antarctica/DumontDUrville',
    dushanbe: 'Asia/Dushanbe',
    'dutch guiana': 'America/Paramaribo',
    'e africa': 'Africa/Nairobi',
    'e africa standard time': 'Africa/Nairobi',
    'e australia': 'Australia/Brisbane',
    'e australia standard time': 'Australia/Brisbane',
    'e europe': 'Europe/Minsk',
    'e europe standard time': 'Europe/Chisinau',
    'e south america': 'America/Belem',
    'e south america standard time': 'America/Sao_Paulo',
    'east africa, nairobi': 'Africa/Nairobi',
    'east timor': 'Asia/Dili',
    easter: 'Pacific/Easter',
    'easter island standard time': 'Pacific/Easter',
    eastern: 'America/New_York',
    'eastern standard time': 'America/New_York',
    'eastern standard time (mexico)': 'America/Cancun',
    'eastern time (us & canada)': 'America/New_York',
    ecuador: 'America/Guayaquil',
    egypt: 'Africa/Cairo',
    'egypt standard time': 'Africa/Cairo',
    ekaterinburg: 'Asia/Yekaterinburg',
    'ekaterinburg standard time': 'Asia/Yekaterinburg',
    'eniwetok, kwajalein, dateline time': 'Pacific/Kwajalein',
    'europe central': 'Europe/Paris',
    'europe eastern': 'Europe/Bucharest',
    'europe further eastern': 'Europe/Minsk',
    'europe western': 'Atlantic/Canary',
    falkland: 'Atlantic/Stanley',
    fiji: 'Pacific/Fiji',
    'fiji islands standard time': 'Pacific/Fiji',
    'fiji islands, kamchatka, marshall is': 'Pacific/Fiji',
    'fiji standard time': 'Pacific/Fiji',
    fle: 'Europe/Helsinki',
    'fle standard time': 'Europe/Kiev',
    'french guiana': 'America/Cayenne',
    'french southern': 'Indian/Kerguelen',
    frunze: 'Asia/Bishkek',
    galapagos: 'Pacific/Galapagos',
    gambier: 'Pacific/Gambier',
    georgia: 'Asia/Tbilisi',
    georgian: 'Asia/Tbilisi',
    'georgian standard time': 'Asia/Tbilisi',
    'gilbert islands': 'Pacific/Tarawa',
    gmt: 'Europe/London',
    'gmt standard time': 'Europe/London',
    'goose bay': 'America/Goose_Bay',
    greenland: 'America/Godthab',
    'greenland central': 'America/Scoresbysund',
    'greenland eastern': 'America/Scoresbysund',
    'greenland standard time': 'America/Godthab',
    'greenland western': 'America/Godthab',
    greenwich: 'Atlantic/Reykjavik',
    'greenwich mean time; dublin, edinburgh, london': 'Europe/London',
    'greenwich mean time: dublin, edinburgh, lisbon, london': 'Europe/Lisbon',
    'greenwich standard time': 'Atlantic/Reykjavik',
    gtb: 'Europe/Athens',
    'gtb standard time': 'Europe/Bucharest',
    guam: 'Pacific/Guam',
    'guam, port moresby': 'Pacific/Guam',
    gulf: 'Asia/Dubai',
    guyana: 'America/Guyana',
    'haiti standard time': 'America/Port-au-Prince',
    'harare, pretoria': 'Africa/Harare',
    hawaii: 'Pacific/Honolulu',
    'hawaii aleutian': 'Pacific/Honolulu',
    hawaiian: 'Pacific/Honolulu',
    'hawaiian standard time': 'Pacific/Honolulu',
    'helsinki, riga, tallinn': 'Europe/Helsinki',
    'hobart, tasmania': 'Australia/Hobart',
    'hong kong': 'Asia/Hong_Kong',
    hovd: 'Asia/Hovd',
    india: 'Asia/Kolkata',
    'india standard time': 'Asia/Kolkata',
    'indian ocean': 'Indian/Chagos',
    'indiana (east)': 'America/Indiana/Indianapolis',
    indochina: 'Asia/Bangkok',
    'indonesia central': 'Asia/Makassar',
    'indonesia eastern': 'Asia/Jayapura',
    'indonesia western': 'Asia/Jakarta',
    iran: 'Asia/Tehran',
    'iran standard time': 'Asia/Tehran',
    irish: 'Europe/Dublin',
    irkutsk: 'Asia/Irkutsk',
    'irkutsk, ulaan bataar': 'Asia/Irkutsk',
    'islamabad, karachi, tashkent': 'Asia/Karachi',
    israel: 'Asia/Jerusalem',
    'israel standard time': 'Asia/Jerusalem',
    'israel, jerusalem standard time': 'Asia/Jerusalem',
    japan: 'Asia/Tokyo',
    jordan: 'Asia/Amman',
    'jordan standard time': 'Asia/Amman',
    kabul: 'Asia/Kabul',
    'kaliningrad standard time': 'Europe/Kaliningrad',
    kamchatka: 'Asia/Kamchatka',
    'kamchatka standard time': 'Asia/Kamchatka',
    karachi: 'Asia/Karachi',
    'kathmandu, nepal': 'Asia/Kathmandu',
    'kazakhstan eastern': 'Asia/Almaty',
    'kazakhstan western': 'Asia/Aqtobe',
    kizilorda: 'Asia/Qyzylorda',
    'kolkata, chennai, mumbai, new delhi, india standard time': 'Asia/Kolkata',
    korea: 'Asia/Seoul',
    'korea standard time': 'Asia/Seoul',
    kosrae: 'Pacific/Kosrae',
    krasnoyarsk: 'Asia/Krasnoyarsk',
    'kuala lumpur, singapore': 'Asia/Singapore',
    kuybyshev: 'Europe/Samara',
    kwajalein: 'Pacific/Kwajalein',
    kyrgystan: 'Asia/Bishkek',
    lanka: 'Asia/Colombo',
    liberia: 'Africa/Monrovia',
    'libya standard time': 'Africa/Tripoli',
    'line islands': 'Pacific/Kiritimati',
    'line islands standard time': 'Pacific/Kiritimati',
    'lord howe': 'Australia/Lord_Howe',
    'lord howe standard time': 'Australia/Lord_Howe',
    macau: 'Asia/Macau',
    macquarie: 'Antarctica/Macquarie',
    magadan: 'Asia/Magadan',
    'magadan standard time': 'Asia/Magadan',
    'magadan, solomon is, new caledonia': 'Asia/Magadan',
    'magallanes standard time': 'America/Punta_Arenas',
    malaya: 'Asia/Kuala_Lumpur',
    malaysia: 'Asia/Kuching',
    maldives: 'Indian/Maldives',
    marquesas: 'Pacific/Marquesas',
    'marquesas standard time': 'Pacific/Marquesas',
    'marshall islands': 'Pacific/Majuro',
    mauritius: 'Indian/Mauritius',
    'mauritius standard time': 'Indian/Mauritius',
    mawson: 'Antarctica/Mawson',
    mexico: 'America/Mexico_City',
    'mexico city, tegucigalpa': 'America/Mexico_City',
    'mexico pacific': 'America/Mazatlan',
    'mexico standard time': 'America/Mexico_City',
    'mexico standard time 2': 'America/Chihuahua',
    'mid-atlantic': 'America/Noronha',
    'mid-atlantic standard time': 'Atlantic/Cape_Verde',
    'middle east': 'Asia/Beirut',
    'middle east standard time': 'Asia/Beirut',
    'midway island, samoa': 'Pacific/Midway',
    mongolia: 'Asia/Ulaanbaatar',
    montevideo: 'America/Montevideo',
    'montevideo standard time': 'America/Montevideo',
    morocco: 'Africa/Casablanca',
    'morocco standard time': 'Africa/Casablanca',
    moscow: 'Europe/Moscow',
    'moscow, st petersburg, volgograd': 'Europe/Moscow',
    mountain: 'America/Denver',
    'mountain standard time': 'America/Denver',
    'mountain standard time (mexico)': 'America/Chihuahua',
    'mountain time (us & canada)': 'America/Denver',
    myanmar: 'Asia/Yangon',
    'myanmar standard time': 'Asia/Yangon',
    'n central asia': 'Asia/Almaty',
    'n central asia standard time': 'Asia/Novosibirsk',
    namibia: 'Africa/Windhoek',
    'namibia standard time': 'Africa/Windhoek',
    nauru: 'Pacific/Nauru',
    nepal: 'Asia/Kathmandu',
    'nepal standard time': 'Asia/Kathmandu',
    'new caledonia': 'Pacific/Noumea',
    'new zealand': 'Pacific/Auckland',
    'new zealand standard time': 'Pacific/Auckland',
    newfoundland: 'America/St_Johns',
    'newfoundland and labrador standard time': 'America/St_Johns',
    'newfoundland standard time': 'America/St_Johns',
    niue: 'Pacific/Niue',
    norfolk: 'Pacific/Norfolk',
    'norfolk standard time': 'Pacific/Norfolk',
    noronha: 'America/Noronha',
    'north asia': 'Asia/Krasnoyarsk',
    'north asia east': 'Asia/Irkutsk',
    'north asia east standard time': 'Asia/Irkutsk',
    'north asia standard time': 'Asia/Krasnoyarsk',
    'north korea standard time': 'Asia/Pyongyang',
    'north mariana': 'Pacific/Saipan',
    novosibirsk: 'Asia/Novosibirsk',
    "nuku'alofa, tonga": 'Pacific/Tongatapu',
    omsk: 'Asia/Omsk',
    'omsk standard time': 'Asia/Omsk',
    oral: 'Asia/Oral',
    'osaka, sapporo, tokyo': 'Asia/Tokyo',
    pacific: 'America/Los_Angeles',
    'pacific sa': 'America/Santiago',
    'pacific sa standard time': 'America/Santiago',
    'pacific standard time': 'America/Los_Angeles',
    'pacific standard time (mexico)': 'America/Tijuana',
    'pacific time (us & canada)': 'America/Los_Angeles',
    'pacific time (us & canada); tijuana': 'America/Los_Angeles',
    pakistan: 'Asia/Karachi',
    'pakistan standard time': 'Asia/Karachi',
    palau: 'Pacific/Palau',
    'papua new guinea': 'Pacific/Port_Moresby',
    paraguay: 'America/Asuncion',
    'paraguay standard time': 'America/Asuncion',
    'paris, madrid, brussels, copenhagen': 'Europe/Paris',
    'perth, western australia': 'Australia/Perth',
    peru: 'America/Lima',
    philippines: 'Asia/Manila',
    'phoenix islands': 'Pacific/Enderbury',
    'pierre miquelon': 'America/Miquelon',
    pitcairn: 'Pacific/Pitcairn',
    'prague, central europe': 'Europe/Prague',
    pyongyang: 'Asia/Pyongyang',
    qyzylorda: 'Asia/Qyzylorda',
    'qyzylorda standard time': 'Asia/Qyzylorda',
    rangoon: 'Asia/Yangon',
    reunion: 'Indian/Reunion',
    romance: 'Europe/Paris',
    'romance standard time': 'Europe/Paris',
    rothera: 'Antarctica/Rothera',
    'russia time zone 10': 'Asia/Srednekolymsk',
    'russia time zone 11': 'Asia/Kamchatka',
    'russia time zone 3': 'Europe/Samara',
    russian: 'Europe/Moscow',
    'russian standard time': 'Europe/Moscow',
    'sa eastern': 'America/Belem',
    'sa eastern standard time': 'America/Cayenne',
    'sa pacific': 'America/Bogota',
    'sa pacific standard time': 'America/Bogota',
    'sa western': 'America/La_Paz',
    'sa western standard time': 'America/La_Paz',
    'saint pierre standard time': 'America/Miquelon',
    sakhalin: 'Asia/Sakhalin',
    'sakhalin standard time': 'Asia/Sakhalin',
    samara: 'Europe/Samara',
    samarkand: 'Asia/Samarkand',
    samoa: 'Pacific/Apia',
    'samoa standard time': 'Pacific/Apia',
    santiago: 'America/Santiago',
    'sao tome standard time': 'Africa/Sao_Tome',
    'sarajevo, skopje, sofija, vilnius, warsaw, zagreb': 'Europe/Sarajevo',
    'saratov standard time': 'Europe/Saratov',
    saskatchewan: 'America/Edmonton',
    'se asia': 'Asia/Bangkok',
    'se asia standard time': 'Asia/Bangkok',
    'seoul, korea standard time': 'Asia/Seoul',
    seychelles: 'Indian/Mahe',
    shevchenko: 'Asia/Aqtau',
    singapore: 'Asia/Singapore',
    'singapore standard time': 'Asia/Singapore',
    solomon: 'Pacific/Guadalcanal',
    'south africa': 'Africa/Harare',
    'south africa standard time': 'Africa/Johannesburg',
    'south georgia': 'Atlantic/South_Georgia',
    'sri jayawardenepura, sri lanka': 'Asia/Colombo',
    'sri lanka': 'Asia/Colombo',
    'sri lanka standard time': 'Asia/Colombo',
    'sudan standard time': 'Africa/Khartoum',
    suriname: 'America/Paramaribo',
    sverdlovsk: 'Asia/Yekaterinburg',
    syowa: 'Antarctica/Syowa',
    'syria standard time': 'Asia/Damascus',
    tahiti: 'Pacific/Tahiti',
    taipei: 'Asia/Taipei',
    'taipei standard time': 'Asia/Taipei',
    tajikistan: 'Asia/Dushanbe',
    tashkent: 'Asia/Tashkent',
    tasmania: 'Australia/Hobart',
    'tasmania standard time': 'Australia/Hobart',
    tbilisi: 'Asia/Tbilisi',
    tehran: 'Asia/Tehran',
    'tocantins standard time': 'America/Araguaina',
    tokelau: 'Pacific/Fakaofo',
    tokyo: 'Asia/Tokyo',
    'tokyo standard time': 'Asia/Tokyo',
    'tomsk standard time': 'Asia/Tomsk',
    tonga: 'Pacific/Tongatapu',
    'tonga standard time': 'Pacific/Tongatapu',
    'transbaikal standard time': 'Asia/Chita',
    'transitional islamic state of afghanistan standard time': 'Asia/Kabul',
    turkey: 'Europe/Istanbul',
    'turkey standard time': 'Europe/Istanbul',
    turkmenistan: 'Asia/Ashgabat',
    'turks and caicos standard time': 'America/Grand_Turk',
    tuvalu: 'Pacific/Funafuti',
    'ulaanbaatar standard time': 'Asia/Ulaanbaatar',
    'universal coordinated time': 'UTC',
    uralsk: 'Asia/Oral',
    uruguay: 'America/Montevideo',
    urumqi: 'Asia/Urumqi',
    'us eastern': 'America/Indiana/Indianapolis',
    'us eastern standard time': 'America/New_York',
    'us mountain': 'America/Phoenix',
    'us mountain standard time': 'America/Phoenix',
    utc: 'UTC',
    'utc-02': 'America/Noronha',
    'utc-08': 'Pacific/Pitcairn',
    'utc-09': 'Pacific/Gambier',
    'utc-11': 'Pacific/Niue',
    'utc+12': 'Pacific/Auckland',
    uzbekistan: 'Asia/Tashkent',
    vanuatu: 'Pacific/Efate',
    venezuela: 'America/Caracas',
    'venezuela standard time': 'America/Caracas',
    vladivostok: 'Asia/Vladivostok',
    'vladivostok standard time': 'Asia/Vladivostok',
    volgograd: 'Europe/Volgograd',
    'volgograd standard time': 'Europe/Volgograd',
    vostok: 'Antarctica/Vostok',
    'w australia': 'Australia/Perth',
    'w australia standard time': 'Australia/Perth',
    'w central africa': 'Africa/Lagos',
    'w central africa standard time': 'Africa/Lagos',
    'w europe': 'Europe/Amsterdam',
    'w europe standard time': 'Europe/Berlin',
    'w mongolia standard time': 'Asia/Hovd',
    wake: 'Pacific/Wake',
    wallis: 'Pacific/Wallis',
    'west asia': 'Asia/Tashkent',
    'west asia standard time': 'Asia/Tashkent',
    'west bank standard time': 'Asia/Hebron',
    'west central africa': 'Africa/Luanda',
    'west pacific': 'Pacific/Guam',
    'west pacific standard time': 'Pacific/Port_Moresby',
    yakutsk: 'Asia/Yakutsk',
    'yakutsk standard time': 'Asia/Yakutsk',
    yekaterinburg: 'Asia/Yekaterinburg',
    yerevan: 'Asia/Yerevan',
    yukon: 'America/Yakutat',
};
