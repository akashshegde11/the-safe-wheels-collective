const destinations = {
  tumakuru: [
    {
      name: "Anashi Falls",
      link: "https://maps.app.goo.gl/qYtjkGiz4tX35APd9",
      icons: ["fa-droplet", "fa-tree", "fa-s"],
    },
    {
      name: "Ancient Shri Jwalamalini Devasthana Nittur",
      link: "https://maps.app.goo.gl/CNnSWgoFufau9xYe8",
      icons: ["fa-gopuram"],
    },
    {
      name: "Ancient Shri Venkataramana Swamy Temple Medigeshi",
      link: "https://maps.app.goo.gl/rTdVeAe7kwtq569C9",
      icons: ["fa-gopuram"],
    },
    {
      name: "Anjanadri Betta (Kishkindha)",
      link: "https://maps.app.goo.gl/fXtdbfTj1pLi4T538",
      icons: ["fa-gopuram", "fa-hiking"],
    },
    {
      name: "Apsarakonda Waterfalls",
      link: "https://maps.app.goo.gl/tXFfSptBNWKaTti66",
    },
    {
      name: "Beeranakallu Betta Temple",
      link: "https://maps.app.goo.gl/cgAqywhpVimU332eA",
      icons: ["fa-hiking", "fa-triangle-exclamation", "fa-gopuram"],
    },
    {
      name: "Bheemana Gudda",
      link: "https://maps.app.goo.gl/UCTGGWjSkdXfCbbv8",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Borana Kanive Reservoir",
      link: "https://maps.app.goo.gl/twzHS8HVgR3KyZJ5A",
    },
    {
      name: "BREN Raceway",
      link: "https://maps.app.goo.gl/VjNS8bTh3SgURFqR6",
      icons: ["fa-x", "fa-flag-checkered"],
    },
    {
      name: "Burude Falls",
      link: "https://maps.app.goo.gl/KmY7brWpjSzU3H6LA",
    },
    {
      name: "Chandravalli Archaeological Site",
      link: "https://maps.app.goo.gl/HCcS167uEbkwespd7",
    },
    {
      name: "Chandravalli Kere Viewpoint",
      link: "https://maps.app.goo.gl/2s58V49kfLheyyJM7",
    },
    {
      name: "Channarayana Durga Fort",
      link: "https://maps.app.goo.gl/zFvK3Vy6WdL6yEsU8",
    },
    {
      name: "Chinaga Bettada Shri Ranganathaswamy Temple",
      link: "https://maps.app.goo.gl/b4qDa73T2Ep562AH6",
      icons: ["fa-gopuram"],
    },
    {
      name: "Chitradurga Fort",
      link: "https://maps.app.goo.gl/f8GT9nXjyyYYwTBA9",
    },
    {
      name: "Devarayanadurga Betta (DD Hills)",
      link: "https://maps.app.goo.gl/f1A8deHqbmh1SUSW9",
      icons: ["fa-motorcycle", "fa-car", "fa-hiking"],
    },
    {
      name: "Devarayanadurga Katte",
      link: "https://maps.app.goo.gl/AmPLLNKJp45enXNC8",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Devimane",
      link: "https://maps.app.goo.gl/jMGYCQqcx5FowR8Q9",
      icons: ["fa-motorcycle", "fa-triangle-exclamation"],
    },
    {
      name: "Dharamshala Cricket Stadium",
      link: "https://maps.app.goo.gl/Tx2rnG9Md1L2ezhZ6",
      icons: ["fa-baseball-bat-ball", "fa-indian-rupee-sign"],
    },
    {
      name: "Dholavira Harappan Civilization",
      link: "https://maps.app.goo.gl/8aS6hb4o2Nf1szqP9",
    },
    {
      name: "Full Moon View Point",
      link: "https://maps.app.goo.gl/9Ep1jJ6cbuXYwiCDA",
    },
    {
      name: "Gayatri Dam",
      link: "https://maps.app.goo.gl/hy1C1AcXFr8exqzK7",
    },
    {
      name: "Hampi Lake View Point",
      link: "https://maps.app.goo.gl/3Ezn3VL7Jaq2C5pLA",
    },
    {
      name: "Honnemaradu",
      link: "https://maps.app.goo.gl/Xo1ayxN3vLBez7hX7",
    },
    {
      name: "Hulukudi Betta",
      link: "https://maps.app.goo.gl/uiWiZSofaEPnuZmq9",
    },
    {
      name: "Jog Falls",
      link: "https://maps.app.goo.gl/nexuo9zMne6gzhfDA",
      icons: ["fa-motorcycle", "fa-car"],
    },
    { name: "Kadra Dam", link: "https://maps.app.goo.gl/TUL3GnC4R77YBhe2A" },
    {
      name: "Kaggaladu Bird Sanctuary",
      link: "https://maps.app.goo.gl/DzWdy3uPom2iXKNz5",
    },
    {
      name: "Kaiga Power Plant Viewpoint",
      link: "https://maps.app.goo.gl/2aamT23iEYEEQD486",
    },
    {
      name: "Kaiga Waterfalls",
      link: "https://maps.app.goo.gl/1brQkrKgWjkf8s1NA",
    },
    { name: "Kalo Dungar", link: "https://maps.app.goo.gl/uRaWha7sSz1CL4cu6" },
    {
      name: "Kasturi Rangappa Nayaka Fort",
      link: "https://maps.app.goo.gl/mUqki6n2xJbUFR4F6",
    },
    {
      name: "Kote Kallappana Betta",
      link: "https://maps.app.goo.gl/MEwt4V8b8N7mZ4KXA",
    },
    {
      name: "Linganamakki Dam",
      link: "https://maps.app.goo.gl/4j8yzukxpfXK89ueA",
    },
    { name: "Lotus Mahal", link: "https://maps.app.goo.gl/zVryBFhq2QJx2Mpu9" },
    {
      name: "Madhugiri Fort",
      link: "https://maps.app.goo.gl/AfLJ7UqHHaSWvcbq8",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Magnetic Hill",
      link: "https://maps.app.goo.gl/vwicjMTXgkM8PjW87",
    },
    {
      name: "Magod Waterfalls",
      link: "https://maps.app.goo.gl/uASQvXFRfwvtXSN96",
    },
    {
      name: "Mandaragiri Hill",
      link: "https://maps.app.goo.gl/i8pW4tAKWWVNURdPA",
      icons: ["fa-motorcycle", "fa-car", "fa-hiking"],
    },
    { name: "Matanga Hill", link: "https://maps.app.goo.gl/nSWRoQ8cXzCcAh9t9" },
    {
      name: "Mattighatta Falls",
      link: "https://maps.app.goo.gl/DXDYMoxXBydfXV7z7",
    },
    {
      name: "Mohini Shikhara",
      link: "https://maps.app.goo.gl/fp4ptYQyQgUjcfPh9",
    },
    {
      name: "Mydala Lake",
      link: "https://maps.app.goo.gl/oCnWXbfwtJ3k2zhq5",
      icons: ["fa-motorcycle", "fa-car", "fa-hiking"],
    },
    {
      name: "Naval Beach Karwar",
      link: "https://maps.app.goo.gl/PnfcVNeUpmLkmQVw5",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Naamadha Chilume",
      link: "https://maps.app.goo.gl/wX4anvvan1h9NRZ69",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Nigundi Nature Viewpoint",
      link: "https://maps.app.goo.gl/dJfFkEJ7nJNWeXXp9",
    },
    {
      name: "Nijagal Betta Kote",
      link: "https://maps.app.goo.gl/ZhpXbnb3rdxkGi4d8",
    },
    {
      name: "Om Beach",
      link: "https://maps.app.goo.gl/5TXn1Nu2nMF7LgqR6",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Onake Obavvana Kindi",
      link: "https://maps.app.goo.gl/v6YxFV6eiAojTPoq9",
    },
    {
      name: "Pingleshwar Mahadev Beach",
      link: "https://maps.app.goo.gl/tiwB4YQuBKhnGRGq8",
    },
    {
      name: "Road to Heaven",
      link: "https://maps.app.goo.gl/rnovyKg8FxgVqcFh9",
    },
    {
      name: "Rock Garden of Chandigarh (Nek Chand)",
      link: "https://maps.app.goo.gl/8ufetqsgc5MVsygY7",
      icons: ["fa-leaf", "fa-indian-rupee-sign"],
    },
    {
      name: "Sadashivagada Fort",
      link: "https://maps.app.goo.gl/VtFJQQVxZnmSkSnn9",
      icons: ["fa-motorcycle", "fa-car", "fa-hiking"],
    },
    {
      name: "Sahasralinga",
      link: "https://maps.app.goo.gl/SE9k9er8nuWVjap19",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "Sanapur Lake",
      link: "https://maps.app.goo.gl/aVyo1K1tcw1P39ig9",
    },
    {
      name: "Shanti Sagara View Point",
      link: "https://maps.app.goo.gl/SPyeHmSD5qSWhPEi9",
    },
    {
      name: "Shree Dwarkadhish Temple",
      link: "https://maps.app.goo.gl/GMoxeQwRa2FqXrzu5",
      icons: ["fa-gopuram"],
    },
    {
      name: "Shree Koteshwar Mahadev Mandir",
      link: "https://maps.app.goo.gl/6DrKhNS1np2QQz936",
      icons: ["fa-gopuram"],
    },
    {
      name: "Shree Ramalingeshwara Swamy Temple Baradi",
      link: "https://maps.app.goo.gl/G49eRfLYwudPEmsX9",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Shree Vijaya Vitthala Temple",
      link: "https://maps.app.goo.gl/pruGEEbUUsBGrrZy8",
      icons: ["fa-gopuram"],
    },
    {
      name: "Shri Adi Shankaracharya Temple Srinagar",
      link: "https://maps.app.goo.gl/7ZFtYjprquXLwE5R6",
      icons: ["fa-gopuram"],
    },
    {
      name: "Shri Bangareshwara Temple (Gudnapura)",
      link: "https://maps.app.goo.gl/jhDx4T7eQkT4bZFz7",
      icons: ["fa-gopuram"],
    },
    {
      name: "Shri Idagunji Mahaganapati Temple",
      link: "https://maps.app.goo.gl/GrBTRkvVt9eXtier7",
      icons: ["fa-motorcycle", "fa-car", "fa-gopuram"],
    },
    {
      name: "Shri Karikaana Parameshwari Ammanavara Temple",
      link: "https://maps.app.goo.gl/cAg2or6UgCDKDm9d8",
      icons: ["fa-motorcycle", "fa-car", "fa-gopuram"],
    },
    {
      name: "Shri Kulle Kalleshwara Temple",
      link: "https://maps.app.goo.gl/QTfa77xnPp1q6MuL6",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-triangle-exclamation",
        "fa-gopuram",
      ],
    },
    {
      name: "Shri Madhukeshwara Temple (Banavasi)",
      link: "https://maps.app.goo.gl/3LmsenUiLiCnkxio9",
      icons: ["fa-motorcycle", "fa-car", "fa-gopuram"],
    },
    {
      name: "Shri Mahabaleshwara Temple (Gokarna)",
      link: "https://maps.app.goo.gl/N3EL4ivnhcFFtu1VA",
      icons: ["fa-motorcycle", "fa-car", "fa-gopuram"],
    },
    {
      name: "Shri Marikamba Devi Temple",
      link: "https://maps.app.goo.gl/oDCg7iYAc3TiVtxK6",
      icons: ["fa-motorcycle", "fa-car", "fa-gopuram"],
    },
    {
      name: "Shri Murudeshwara Shiva Temple",
      link: "https://maps.app.goo.gl/rJFPxHWk136LiPxt9",
      icons: ["fa-motorcycle", "fa-car", "fa-gopuram"],
    },
    {
      name: "Siddara Betta",
      link: "https://maps.app.goo.gl/xkfh4RE2mBBmfuDB8",
    },
    {
      name: "Sri Ahobala Narasimha Swamy Temple",
      link: "https://maps.app.goo.gl/JTtSg9rHYP29V19a8",
      icons: ["fa-gopuram"],
    },
    {
      name: "Sri Harmandir Sahib (Golden Temple)",
      link: "https://maps.app.goo.gl/cxrBjHgSw2cvFGxf7",
      icons: ["fa-gopuram"],
    },
    {
      name: "Sri Kaniveranganathaswami Gudi (Kadavigere Vajra)",
      link: "https://maps.app.goo.gl/JUJREynUQAVz6k9Y9",
      icons: ["fa-gopuram"],
    },
    {
      name: "Sri Shivagange Temple",
      link: "https://maps.app.goo.gl/MeLRQDQ1FY6xfF8GA",
      icons: ["fa-gopuram"],
    },
    {
      name: "Sri Uttare Siddeshwara Swami Gudi",
      link: "https://maps.app.goo.gl/XSPCVszXz3xy7UB28",
      icons: ["fa-gopuram"],
    },
    {
      name: "Sunset Point Hippie Island",
      link: "https://maps.app.goo.gl/bSoGy2b5Ndwu44GC7",
    },
    {
      name: "Sunset Point Mount Abu",
      link: "https://maps.app.goo.gl/eSHL1zmUoXnVvv5S8",
    },
    {
      name: "Tungabhadraa Dam Lighthouse Viewpoint",
      link: "https://maps.app.goo.gl/H1BpuUHAiioxpnQC6",
    },
    {
      name: "Unchalli Falls Viewpoint",
      link: "https://maps.app.goo.gl/Fow7uebGXsAcfGRWA",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Vani Vilasa Sagara Dam",
      link: "https://maps.app.goo.gl/a3khAFonu6tSwobQA",
    },
    {
      name: "Vijay Villas Palace",
      link: "https://maps.app.goo.gl/NCDiu9kUgPGDHDFm7",
    },
    {
      name: "Virupaksha Temple Hampi",
      link: "https://maps.app.goo.gl/ZHmyqqc65idx46JD9",
      icons: ["fa-gopuram"],
    },
    {
      name: "Yana Rocks",
      link: "https://maps.app.goo.gl/FGMYafdfYnvUpkRj9",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Yana Shri Mahaganapati Temple",
      link: "https://maps.app.goo.gl/qhoPZnDV4FtXzDvZA",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
        "fa-gopuram",
      ],
    },
  ],
  hassana: [
    {
      name: "Aagumbe Sunset Viewpoint",
      link: "https://maps.app.goo.gl/Yr2pT4rqP8UUYKbM7",
    },
    {
      name: "Bappanadu Sri Durga Parameshwari Temple",
      link: "https://maps.app.goo.gl/uUmWHWZQFDiN7o2o9",
    },
    {
      name: "Belkal Theertha Falls",
      link: "https://maps.app.goo.gl/aaTnbuqo8h9NPEbP8",
    },
    {
      name: "Beluru Shri Chennakeshava Swamy Temple",
      link: "https://maps.app.goo.gl/U5uL7wd3jjwitX1p8",
    },
    {
      name: "Bhadra River Lakya Confluence Point",
      link: "https://maps.app.goo.gl/VdYPGoirSrtaLnrVA",
    },
    {
      name: "Bhadra Wildlife Sanctuary",
      link: "https://maps.app.goo.gl/Qy3mAdqTXVyUpzKE8",
    },
    { name: "Bisile Ghat", link: "https://maps.app.goo.gl/kXMP4ST4wWPA8ZaZ9" },
    {
      name: "Chakenahalli Dam",
      link: "https://maps.app.goo.gl/5FGYPsxhJ2M9p4pM8",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "Charmadi Ghat View Point",
      link: "https://maps.app.goo.gl/Nu6gt8FHqBjDDLt78",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Durga Waterfalls Karkala",
      link: "https://maps.app.goo.gl/E39nWsZNTkqZZbEz5",
    },
    { name: "Ettina Bhuja", link: "https://maps.app.goo.gl/qXqKKFmQkSWjdYop6" },
    {
      name: "Goruru Hemavathi Reservoir",
      link: "https://maps.app.goo.gl/NhTzufYQjeQxtdBw6",
    },
    {
      name: "Haluvagilu Waterfalls",
      link: "https://maps.app.goo.gl/vEb11kEVotS8AgaQ9",
    },
    {
      name: "Hanumana Gundi (Soothanabbi) Falls",
      link: "https://maps.app.goo.gl/o4iHDue7pTRCQ6Xz8",
    },
    {
      name: "Hasta Shilpa Heritage Village Museum",
      link: "https://maps.app.goo.gl/dvbYXF4cAbD4X7FR8",
    },
    {
      name: "Hemavathi Backwaters",
      link: "https://maps.app.goo.gl/ww3p82sTAbakZB126",
    },
    {
      name: "Hotel Dhruvathare",
      link: "https://maps.app.goo.gl/iMyEu4RSGjo3fQqs9",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Hotel Harsha Grand",
      link: "https://maps.app.goo.gl/MfdoyL83oEydXUvx9",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Hoysala Emblem",
      link: "https://maps.app.goo.gl/Xm18YjcaZz1JYdb17",
    },
    {
      name: "Hoysala Shri Doddagaddavalli Lakshmi Devi Temple",
      link: "https://maps.app.goo.gl/h8azE7ZGFo3hGLy47",
    },
    {
      name: "Hoysala Village Resort",
      link: "https://maps.app.goo.gl/9i26LF2wyN5mcvnBA",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Hoysaleshwara Temple",
      link: "https://maps.app.goo.gl/pkmtqWbCqGyGGL3M6",
    },
    {
      name: "Kadambi Falls",
      link: "https://maps.app.goo.gl/5oWicE3hPfUcCBbK7",
    },
    {
      name: "Kadavinakatte Dam",
      link: "https://maps.app.goo.gl/rAj9QiF4s7xQsQeW7",
    },
    {
      name: "Kaginahare Fort",
      link: "https://maps.app.goo.gl/2ZZ5NG62J1ohyuNR6",
    },
    {
      name: "Kaginahare Viewpoint",
      link: "https://maps.app.goo.gl/DceKBG1fggoodGdZA",
    },
    {
      name: "Kalyani Pushkarini",
      link: "https://maps.app.goo.gl/V8W5drddAXjgu4sF6",
    },
    {
      name: "Kavaledurga Fort",
      link: "https://maps.app.goo.gl/hiccdHN9Sb86jucq5",
    },
    {
      name: "Koodlutheertha Falls",
      link: "https://maps.app.goo.gl/z7xSzmkTUwVrg2Sp6",
    },
    {
      name: "Kudremukha National Park",
      link: "https://maps.app.goo.gl/WeLWDjtZAUjzkuvG9",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Kuduremukha Betta Viewpoint",
      link: "https://maps.app.goo.gl/zaDWEtBVec1xRDLFA",
    },
    {
      name: "Kukke Shri Subrahmanya Swamy Temple",
      link: "https://maps.app.goo.gl/UXLpn6PVhkEqePNv7",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Kundadri Betta Viewpoint",
      link: "https://maps.app.goo.gl/7YzgF7FNvkuZagPk7",
    },
    {
      name: "Kunigal Kere",
      link: "https://maps.app.goo.gl/Rpo4os5gWLtQUrur9",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Kunigal Kere Sunrise Viewpoint",
      link: "https://maps.app.goo.gl/Yi4Ngamz3Za3fbmN6",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Kyatanamakki Gudda View",
      link: "https://maps.app.goo.gl/DqnTonUSx3zEDsS19",
    },
    {
      name: "Magajahalli Abbi Falls",
      link: "https://maps.app.goo.gl/rRkaCeDbTndwxhqd8",
    },
    {
      name: "Manjusha Museum",
      link: "https://maps.app.goo.gl/P9hz5D1R3GbxhSfs5",
    },
    {
      name: "Maravanthe Beach",
      link: "https://maps.app.goo.gl/bGD9EqJ5h5eka2879",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Mavanuru Shri Bettada Malleshwara Gudi",
      link: "https://maps.app.goo.gl/rdMWQ7fwqtoVtmAF9",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Markonahalli Dam",
      link: "https://maps.app.goo.gl/FqK662Tqq3j8fBCLA",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Markonahalli Dam Bridge",
      link: "https://maps.app.goo.gl/vzXU5une5ZoY4ime8",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Markonahalli Dam Viewpoint",
      link: "https://maps.app.goo.gl/wr81e1PL7e3Kz6Wd7",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Mullayyanagiri Betta",
      link: "https://maps.app.goo.gl/BLUu8U3XwxgNZz1u6",
    },
    {
      name: "Narasimhaghada-Jamalabad Fort-Gadayikal",
      link: "https://maps.app.goo.gl/4FDGuL4Uj6PWZFgd6",
    },
    {
      name: "Netravathi River Dam Dharmasthala",
      link: "https://maps.app.goo.gl/1u2QpqbX7PR6jjk46",
    },
    {
      name: "Onake Abbi Falls",
      link: "https://maps.app.goo.gl/Nym6F81THoKRzupe9",
    },
    {
      name: "Pilikula Biological Park",
      link: "https://maps.app.goo.gl/KFGGMRhXnxaoM2hW7",
      icons: ["fa-motorcycle", "fa-car"],
    },
    { name: "Pushpagiri", link: "https://maps.app.goo.gl/fHhdf74oTjrf61fB8" },
    {
      name: "Savehaklu Dam",
      link: "https://maps.app.goo.gl/NUvPrTGsip5V3yRo7",
    },
    {
      name: "Shettihalli Rosary Church",
      link: "https://maps.app.goo.gl/2oF3TwTJg9N5QEVq7",
      icons: ["fa-cross"],
    },
    {
      name: "Shri Ananthapadmanabha Kudupu Temple",
      link: "https://maps.app.goo.gl/eegA7QF771PFqUfJA",
    },
    {
      name: "Shri Bettada Bhairaveshwara Swamy Temple",
      link: "https://maps.app.goo.gl/tMwQsFqovTnk1NbP8",
    },
    {
      name: "Shri Bhagwan Bahubali Monolithic Statue",
      link: "https://maps.app.goo.gl/MCamLbPMm3Vnkmhi9",
    },
    {
      name: "Shri Bucheshvara Swami Temple (Koravangala)",
      link: "https://maps.app.goo.gl/iYajcmgv3EjQdm1g6",
    },
    {
      name: "Shri Kambada Narasimhaswami Temple",
      link: "https://maps.app.goo.gl/NkSRQcTZJwRyKDs38",
    },
    {
      name: "Shri Kedareshwara Swamy Temple (Halebidu)",
      link: "https://maps.app.goo.gl/sjFyLfSXssSzG9RS6",
    },
    {
      name: "Shri Kshetra Raajarajeshwari Temple (Polali)",
      link: "https://maps.app.goo.gl/SUyhYr1iYHSDeoZC9",
    },
    {
      name: "Shri Panchalingeshwara Swamy Temple",
      link: "https://maps.app.goo.gl/1W5xapTiFQCYFoTZ7",
    },
    {
      name: "Shri Parashurama Theme Park",
      link: "https://maps.app.goo.gl/sYUiMbAgePvzv72G9",
    },
    {
      name: "Shri Someshwara Swami Devasthana",
      link: "https://maps.app.goo.gl/PUShXdhSaXcuiQMo9",
    },
    {
      name: "Shringeri Shree Sharadambe Devi Ammanavara Temple",
      link: "https://maps.app.goo.gl/PpnMvqsh2Ck7sd2P7",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Sirimane Falls",
      link: "https://maps.app.goo.gl/5jozWicAHQquzGFD6",
    },
    {
      name: "Sri Gavi Rangaswami Ancient Cave Temple",
      link: "https://maps.app.goo.gl/utEqQ6P4Ya3JbQaM9",
    },
    {
      name: "Sri Kshetra Dharmasthala Manjunatha Swamy Temple",
      link: "https://maps.app.goo.gl/g5BFkzPr6fyjCHhF7",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Surathkal Beach",
      link: "https://maps.app.goo.gl/dUKTfXSJee98gkXe8",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Suratkal Beach",
      link: "https://maps.app.goo.gl/SB3U7DmXH2stWmyu8",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Swathi Delicacy",
      link: "https://maps.app.goo.gl/iZCHgNsm9sxnFBGb7",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Talasi Waterfalls",
      link: "https://maps.app.goo.gl/JxRUxYuek53YpZgb7",
    },
    {
      name: "Tannirbhavi Beach",
      link: "https://maps.app.goo.gl/uMHuPL6sr6DvoNWL6",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Udamudi Shri Bettada Ranganathaswami Devasthana",
      link: "https://maps.app.goo.gl/HhPWtwzH9L1kHKaH9",
    },
    {
      name: "Udupi Shri Krishna Matha (Temple)",
      link: "https://maps.app.goo.gl/h6jQsti4RdQMaGpE8",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Yagachi Dam Belur",
      link: "https://maps.app.goo.gl/wKeJJW9eM5NFoC6x7",
    },
  ],
  magadi: [
    {
      name: "Arakavati River View Point 1",
      link: "https://maps.app.goo.gl/EJdWvYi2t3YgeQnc6",
      icons: ["fa-motorcycle", "fa-triangle-exclamation"],
    },
    {
      name: "Bettada Shri Kambada Yoganarasimha Swamy Temple",
      link: "https://maps.app.goo.gl/y77Ns8bxz9ouGerT7",
    },
    {
      name: "Honnamachanahalli Kere",
      link: "https://maps.app.goo.gl/ez6u6aKSUVxGfAsD9",
    },
    {
      name: "Huttaridurga Sunrise Point",
      link: "https://maps.app.goo.gl/1gpJ3h7nH2Zs3BUd7",
      icons: ["fa-hiking"],
    },
    {
      name: "Kempasagara Kere",
      link: "https://maps.app.goo.gl/GdvFB922WH6nGJdt5",
      icons: ["fa-motorcycle"],
    },
    {
      name: "Kempegowda Fort",
      link: "https://maps.app.goo.gl/EiW3TAo7jHYvrcYY7",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Quarry Sunset Point",
      link: "https://maps.app.goo.gl/uHkb1aboHcgBBxaW6",
    },
    {
      name: "Shri Bande Yoganarasimha Swami Gudi",
      link: "https://maps.app.goo.gl/iX6Vy73skYvyEJ4J9",
    },
    {
      name: "Shri Muttarayana Swami Betta",
      link: "https://maps.app.goo.gl/9ELzY2zxRLwitbfW6",
    },
    {
      name: "Shri Ranganathaswamy Temple",
      link: "https://maps.app.goo.gl/kLY85y2i1yFv4Z7T8",
    },
    {
      name: "Shri Shankareshwara Bettada Gudi",
      link: "https://maps.app.goo.gl/qxxfHb1dBsLDzohf8",
    },
    {
      name: "Shri Someshwara Swamy Temple",
      link: "https://maps.app.goo.gl/7dbfgU7gBM71paz2A",
    },
    { name: "Solo Hills", link: "https://maps.app.goo.gl/SRpMTwZhcGvZpaVF7" },
    {
      name: "Tippagondanahalli Dam",
      link: "https://maps.app.goo.gl/xDqUK1xDqVSD7Kg58",
      icons: ["fa-x"],
    },
  ],
  mysuru: [
    { name: "Abbi Falls", link: "https://maps.app.goo.gl/UDUZN3wk2apNyxrv9" },
    {
      name: "B V Halli Kere",
      link: "https://maps.app.goo.gl/ckkLdQ62VeHMGB3h9",
    },
    {
      name: "Balamuri Falls",
      link: "https://maps.app.goo.gl/SgA8BUxaLj5g9o3s5",
    },
    {
      name: "Bhoo Varaha Swamy Temple Kallahalli",
      link: "https://maps.app.goo.gl/N6WEMhxznt3k9ZkU7",
    },
    {
      name: "Bhramagiri Hills Viewpoint",
      link: "https://maps.app.goo.gl/67mfee3sRrAFoisK8",
    },
    {
      name: "Brindavana Gardens",
      link: "https://maps.app.goo.gl/uWwVuP2Nmyjsm9Xd8",
    },
    {
      name: "Bhuvaneshwari Mantapa",
      link: "https://maps.app.goo.gl/XULehU53i4T69Rwd8",
    },
    {
      name: "Chikka Devaraya Sagara Dam",
      link: "https://maps.app.goo.gl/gkbgwdMk7qPNhXZU8",
    },
    {
      name: "Chiklihole Dam Coorg",
      link: "https://maps.app.goo.gl/FVfcURezAtHFBTJx5",
    },
    {
      name: "Dodda Aalada Mara",
      link: "https://maps.app.goo.gl/WiuqXhFXk9ttnKbX6",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Glass Bridge Madikeri",
      link: "https://maps.app.goo.gl/vy4XSi6cVrNgK5UF8",
    },
    {
      name: "Guru Thatte Idly",
      link: "https://maps.app.goo.gl/EFgmvC2XKdzwtcBF8",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Haniyuru Lake",
      link: "https://maps.app.goo.gl/14EadjrnkYUZnWpU6",
      icons: ["fa-motorcycle", "fa-triangle-exclamation"],
    },
    {
      name: "Harisandra Lake",
      link: "https://maps.app.goo.gl/6fTjTzAchvkWeSqf7",
    },
    {
      name: "Honganuru Kere",
      link: "https://maps.app.goo.gl/gGXRAiZ3ZSY1eg4XA",
    },
    {
      name: "Jalamangala Kere",
      link: "https://maps.app.goo.gl/SjXwNY9nAxU4ahMV6",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Kanva Reservoir",
      link: "https://maps.app.goo.gl/hhV5HNHZx5Z2ATNL8",
    },
    {
      name: "Karad Gavi Hill and Lake Viewpoint",
      link: "https://maps.app.goo.gl/oR9sVyNoTrdeG7iU8",
    },
    {
      name: "Kere Thondanur",
      link: "https://maps.app.goo.gl/pUEMtVaFr4GVksb8A",
    },
    {
      name: "Kokkare Belluru Bird Sanctuary",
      link: "https://maps.app.goo.gl/t8HsS9xPgQb4cCtB9",
    },
    {
      name: "Kootagallu Thimmappana Betta",
      link: "https://maps.app.goo.gl/mQ4mDcEvNVCqoMSA9",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Krishnarajasagara Dam Park (Mysuru)",
      link: "https://maps.app.goo.gl/DniyoBvJx5h3tv4S6",
    },
    {
      name: "KRS North Back Water",
      link: "https://maps.app.goo.gl/QVyZNHhbCA2DZiGJA",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "Kudulur Kere Channapatna",
      link: "https://maps.app.goo.gl/PSTGcNnyS4Sb4KSw8",
    },
    {
      name: "Kunagalu Betta",
      link: "https://maps.app.goo.gl/94SkFe1ZWBVyfVJj6",
    },
    { name: "Kunti Betta", link: "https://maps.app.goo.gl/M1sedETi6MrHVnQf9" },
    {
      name: "Madikeri Fort",
      link: "https://maps.app.goo.gl/FNvY7XbqYASQqQtu7",
    },
    { name: "Malur Lake", link: "https://maps.app.goo.gl/KnNir2JS42T72Coi7" },
    {
      name: "Manchanabele Dam",
      link: "https://maps.app.goo.gl/sAeFBSmZZU1gioLv5",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Mandalpatti Peak",
      link: "https://maps.app.goo.gl/s8TQYPR6h4ZEr8VM8",
    },
    {
      name: "Mathikere Kere Kodi",
      link: "https://maps.app.goo.gl/3gPmaNaaVw2YhKrY7",
    },
    {
      name: "Meenakshipura KRS Backwaters",
      link: "https://maps.app.goo.gl/BxCpGBEpmAeJ9WWP9",
    },
    {
      name: "MTR",
      link: "https://maps.app.goo.gl/jjVzzGmyoTxHyEEV8",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Mukti Naga Temple",
      link: "https://maps.app.goo.gl/EESPmtLygf4vSwGe6",
    },
    {
      name: "Mysore Palace",
      link: "https://maps.app.goo.gl/MXLJp6BUKLktawx57",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Nandi Campsite",
      link: "https://maps.app.goo.gl/DLg6xprcC2tBeyPv6",
    },
    {
      name: "Narsimha Swamy Hill Temple",
      link: "https://maps.app.goo.gl/LAAvTEJZVVZHdKMv7",
    },
    {
      name: "Nelligudde Kere",
      link: "https://maps.app.goo.gl/cBnDPS7Ganz1QW9q7",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Nelligudde Lake View Point",
      link: "https://maps.app.goo.gl/Fuh3o4D8muckuCcc6",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Omkara Ashrama Mahasamsthana",
      link: "https://maps.app.goo.gl/BeR4gxXNzGHKCo9d9",
    },
    {
      name: "Payana Car Museum",
      link: "https://maps.app.goo.gl/9sxtdoy53xL3xG8A6",
    },
    {
      name: "Ramanagara Ramadevarabetta Vulture Sanctuary",
      link: "https://maps.app.goo.gl/9LqSXRCtck9mTjrY9",
    },
    {
      name: "Ramohalli Bettanapalya Lake",
      link: "https://maps.app.goo.gl/zGLQeNTbnt4sRyMv9",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Ranganathittu Bird Sanctuary",
      link: "https://maps.app.goo.gl/X2iYqE7mZwWyRRxq7",
    },
    {
      name: "River Edge Valley Homestay",
      link: "https://maps.app.goo.gl/MSLhYE6EbciPNCXZA",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Sagarakatte KRS Backwaters",
      link: "https://maps.app.goo.gl/pKA5Cem5ywsain3g9",
    },
    {
      name: "Sankalagere Kere",
      link: "https://maps.app.goo.gl/5eNtnunNAoab7DDH8",
    },
    {
      name: "Savanadurga Trek Starting Point",
      link: "https://maps.app.goo.gl/HSv3NvREriaVMTVS6",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Shivalli Restaurant 2",
      link: "https://maps.app.goo.gl/xc1fMAxzuU9QcrcY8",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Shree Kanive Mutturyaswami Gudi",
      link: "https://maps.app.goo.gl/UtDeRd1WuB1dWu6p9",
    },
    {
      name: "Shree Omkareshwara Temple Madikeri",
      link: "https://maps.app.goo.gl/Cph84tWWU21L4YuSA",
    },
    {
      name: "Shri Bettada Gaviranga Swamy Temple",
      link: "https://maps.app.goo.gl/NMj3YTzxED4c97HK9",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "Shri Bettada Thimmappa Swami Gudi (Angarahalli)",
      link: "https://maps.app.goo.gl/Aq66VFoUKtRxyxgZ6",
    },
    {
      name: "Shri Bheemeshwara Swamy Devasthana",
      link: "https://maps.app.goo.gl/BmqLkzftn4UvzSPe7",
    },
    {
      name: "Shri Chamundeshwari Temple",
      link: "https://maps.app.goo.gl/RJLAutcpLCVeRPGg8",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Shri Krishnagiri Betta",
      link: "https://maps.app.goo.gl/KLyrgYXZnxZkgRKe7",
    },
    {
      name: "Sri Nimishambha Temple",
      link: "https://maps.app.goo.gl/Eq8UpBmY7q3H9u7x5",
    },
    {
      name: "Sri Srinivas Saligrama Devasthanam Trust",
      link: "https://maps.app.goo.gl/FLsniaBW4vVUbPDk6",
    },
    {
      name: "Sri Venugopalaswamy Temple",
      link: "https://maps.app.goo.gl/dHdPPCYvv1r8UomKA",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Sunset Bridge KRS Backwaters",
      link: "https://maps.app.goo.gl/DeHAsr6pzdcu6UYSA",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Talakaveri Temple",
      link: "https://maps.app.goo.gl/dXE3toWaXBZgxK3J6",
    },
    { name: "Taraka Dam", link: "https://maps.app.goo.gl/affxzF5HZRScHPgM7" },
    {
      name: "Timmappana Betta",
      link: "https://maps.app.goo.gl/GNAd4YEsSGeVPLSc8",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Veeranahosahalli Nagarahole Forest Checkpost",
      link: "https://maps.app.goo.gl/Hizdzy2qNvMQtE9d6",
      icons: ["fa-car"],
    },
    {
      name: "Vishweshwarayya Falls",
      link: "https://maps.app.goo.gl/RSz3XEcivMz4HrBX7",
    },
    {
      name: "Yathiraja Betta",
      link: "https://maps.app.goo.gl/4aN8BwznSy85Q1gJA",
    },
    {
      name: "Yedamuri Falls",
      link: "https://maps.app.goo.gl/N3PXvdVwHYWaxJyD7",
    },
  ],
  kanakapura: [
    {
      name: "Acchalu Betta",
      link: "https://maps.app.goo.gl/8PbNKQnfCZqe8FmR8",
    },
    {
      name: "Aagara Lake View Point",
      link: "https://maps.app.goo.gl/mn2RJkE9pF3bfuKH7",
      icons: ["fa-motorcycle", "fa-car"],
    },
    { name: "Anamudi", link: "https://maps.app.goo.gl/uVfgN18Gs5FLktz46" },
    {
      name: "Arkavathi Reservoir",
      link: "https://maps.app.goo.gl/8iLrXYJ75j1Wrkyx7",
    },
    {
      name: "Attamala Digital Glass Bridge",
      link: "https://maps.app.goo.gl/WoyysAAF18ynCbBb9",
    },
    {
      name: "Avalanche Dam",
      link: "https://maps.app.goo.gl/wQTvJCjuejid6VvJ8",
    },
    {
      name: "Avalanche Road Viewpoint",
      link: "https://maps.app.goo.gl/bFEPihhmH4hEJXzv8",
    },
    {
      name: "Belavatta Katte Reservoir",
      link: "https://maps.app.goo.gl/vFXpRTaWaooSq6EF8",
    },
    { name: "Benki Falls", link: "https://maps.app.goo.gl/qBBexK9cwUUmCTgq5" },
    {
      name: "Bharachukki Waterfalls",
      link: "https://maps.app.goo.gl/fmt7pFzXAJ9JB8ja8",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Bhavanisagar Dam Park",
      link: "https://maps.app.goo.gl/YijKDiUcXoQEvtmG6",
    },
    {
      name: "Bhramaram view Point",
      link: "https://maps.app.goo.gl/UFoJ6b8tuZBUXDCg9",
    },
    {
      name: "BR Hills Lake",
      link: "https://maps.app.goo.gl/uDDr5Gxhg5LrzbQN7",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "BR Hills Temple Viewpoint",
      link: "https://maps.app.goo.gl/staiCBoeAYPYwrf99",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "Burgur Hills View Point",
      link: "https://maps.app.goo.gl/oEA8rZWvH1V9RQXU7",
    },
    {
      name: "Cauvery Split Katte",
      link: "https://maps.app.goo.gl/Z23J4pDDZbwzCuWN6",
      icons: ["fa-motorcycle", "fa-car"],
    },
    { name: "Chembra", link: "https://maps.app.goo.gl/ciiwFA9yVSKnv24w5" },
    {
      name: "Chunchi Falls",
      link: "https://maps.app.goo.gl/7EowfyrL2wWVnvhT6",
    },
    {
      name: "CoASTT High Performance Centre",
      link: "https://maps.app.goo.gl/JQ5CgXjKahZU2PNo8",
    },
    {
      name: "Dhimbam View Point",
      link: "https://maps.app.goo.gl/PAqiY8nziddCZa5h7",
    },
    { name: "Dolphin Nose", link: "https://maps.app.goo.gl/8yXcTCxSDwee7yrL7" },
    {
      name: "Edakkal Caves",
      link: "https://maps.app.goo.gl/AffzFgCygGKrvnz4A",
    },
    { name: "Ennehole Dam", link: "https://maps.app.goo.gl/KveSt8YDppwtCiX67" },
    {
      name: "Gaganachukki Falls Viewpoint",
      link: "https://maps.app.goo.gl/Fsp1visUA7Cccr4v6",
      icons: ["fa-motorcycle", "fa-car"],
    },
    { name: "Ganalu Falls", link: "https://maps.app.goo.gl/DnVT2nm2s9oZKaEr9" },
    {
      name: "Gulakamale Lake",
      link: "https://maps.app.goo.gl/XEMTT1CdJSDqAk2z8",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Gullahatti Kaval Lake",
      link: "https://maps.app.goo.gl/jHetFXfuQdT6zNFF6",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    { name: "Guna Cave", link: "https://maps.app.goo.gl/iQ2EtJ8ixDjgnqgr6" },
    {
      name: "Gundal Reservoir",
      link: "https://maps.app.goo.gl/Kav1aeHp9AihgXKdA",
    },
    {
      name: "Himavad Gopalaswamy Temple",
      link: "https://maps.app.goo.gl/JRZ5FBhcwhLaN9v68",
    },
    {
      name: "Holedande Shri Someshwara Temple",
      link: "https://maps.app.goo.gl/uX1jreHM4ChW5rAv5",
    },
    { name: "Hoogya Dam", link: "https://maps.app.goo.gl/6ECrB47jHsRJbPa78" },
    { name: "Idukki Dam", link: "https://maps.app.goo.gl/3EWVPtwahYTmtNsd9" },
    { name: "Iglooru Dam", link: "https://maps.app.goo.gl/m2s1xWoNwVWGtZA56" },
    {
      name: "Irachil Para Water Falls",
      link: "https://maps.app.goo.gl/N7FVaGNyzpW4RXuW7",
    },
    {
      name: "K Gudi",
      link: "https://maps.app.goo.gl/XVYVktwwN7sT9rqP9",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "K Gudi Lake, BRT Tiger Reserve",
      link: "https://maps.app.goo.gl/BVokhb75Uv2U1hE76",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    { name: "Kabini Dam", link: "https://maps.app.goo.gl/8pkusveaCfA4zgH8A" },
    {
      name: "Kanthalloor Waterfalls",
      link: "https://maps.app.goo.gl/5J7beWtDbLRdcyCs7",
    },
    {
      name: "Kanyakumari Sunrise View",
      link: "https://maps.app.goo.gl/vBUNPddRNN1BkWP46",
    },
    {
      name: "Kari Motor Speedway Racetrack",
      link: "https://maps.app.goo.gl/1N18W3DF5ag5vDzD7",
    },
    {
      name: "Kodaikanal Hill Station",
      link: "https://maps.app.goo.gl/DsyTzWawD76ALwDJ9",
    },
    {
      name: "Koulihalla Kere Dam",
      link: "https://maps.app.goo.gl/1m2zmo2nHnkPZG1G6",
    },
    { name: "Kundala Dam", link: "https://maps.app.goo.gl/v8GmLGt2yGZca7HM9" },
    {
      name: "Lockhart Gap Road View Point",
      link: "https://maps.app.goo.gl/mF4MyYjc5bDKrupb6",
    },
    {
      name: "Lockhart Gap View",
      link: "https://maps.app.goo.gl/DemDqApoXEZSSTkT6",
    },
    {
      name: "Mandarathi Vaibhava Fine Dine",
      link: "https://maps.app.goo.gl/amDHRDf3keaGBZJJA",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Manimutharu Dam Outlet",
      link: "https://maps.app.goo.gl/oXhrSSAuVUEnthNJA",
    },
    {
      name: "Maralwadi Dam",
      link: "https://maps.app.goo.gl/aAYu79K4USAA3bja6",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    { name: "Masinagudi", link: "https://maps.app.goo.gl/kZEm3zJ8eZVcZzGdA" },
    {
      name: "Mavathur Waterfall",
      link: "https://maps.app.goo.gl/FvmCsjkHLp4n5rxf6",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Mekedatu Sangama View Point",
      link: "https://maps.app.goo.gl/bm28zXcfECkRVmVj7",
      icons: ["fa-motorcycle", "fa-car"],
    },
    { name: "Moir Point", link: "https://maps.app.goo.gl/iaheXbYxoezdiFHw5" },
    {
      name: "Mugguru Forest Viewpoint",
      link: "https://maps.app.goo.gl/eJw1dTYs75swK5Db8",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "Muninagara Backwater Grasslands",
      link: "https://maps.app.goo.gl/fH97Prcvzr9WMPwV8",
      icons: ["fa-motorcycle", "fa-triangle-exclamation"],
    },
    {
      name: "Needle Rock View Point",
      link: "https://maps.app.goo.gl/WCbt3JRgF6e5tjH28",
    },
    { name: "Nellarachal", link: "https://maps.app.goo.gl/8F1PmSjbSpDmAdmv6" },
    {
      name: "Nugu River View Point",
      link: "https://maps.app.goo.gl/EjN8kbjR6t5vCNJh8",
    },
    { name: "Pine Forest", link: "https://maps.app.goo.gl/yu1ypS3ka2GGwJFt8" },
    {
      name: "Ponmudi View Point",
      link: "https://maps.app.goo.gl/BnKdLmSX98AtgtLR8",
    },
    {
      name: "Porthimund Dam",
      link: "https://maps.app.goo.gl/EJv66YdyYbme7C4z8",
    },
    {
      name: "Prani - The Pet Sanctuary",
      link: "https://maps.app.goo.gl/wPqUQMQkHQcaFzgT9",
    },
    {
      name: "Ramanakatte Medini",
      link: "https://maps.app.goo.gl/pcnJ2KDSLjVfbZcL6",
    },
    {
      name: "Sathyagala Kaveri River Bridge",
      link: "https://maps.app.goo.gl/TthRg1KCTD39BBfeA",
    },
    {
      name: "Shri Bettada Siddheshwara Swami Gudi",
      link: "https://maps.app.goo.gl/Ws8UzZFsGoKpyYQ77",
    },
    {
      name: "Shri Biligiri Ranganatha Swamy Temple",
      link: "https://maps.app.goo.gl/G5z5fKYPmgaEkrCu7",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Shri Chaturbhuja Rama Gudi (Hosadurga)",
      link: "https://maps.app.goo.gl/CZrH6ZnyRANyj7yRA",
    },
    {
      name: "Shri Gangadhareshwara Gudi Betta",
      link: "https://maps.app.goo.gl/8M9YggV8obhDMU498",
    },
    {
      name: "Shri Govinakallu Anjaneya Swami Gudi (Kebbare)",
      link: "https://maps.app.goo.gl/HSDMdchUM9Pbgvg99",
    },
    {
      name: "Shri Mudukuthore Mallikarjuna Swamy Devasthana",
      link: "https://maps.app.goo.gl/3qoHPBeBD4mgBhoMA",
    },
    {
      name: "Silent Valley View",
      link: "https://maps.app.goo.gl/qXrVYp7EKt5heAnAA",
    },
    { name: "Soligere", link: "https://maps.app.goo.gl/HfStg7cyBW5y6Lwu8" },
    {
      name: "Sri Dari Mutturayaswami Temple",
      link: "https://maps.app.goo.gl/GL7GmpZmL6MFC6UQ6",
    },
    {
      name: "Sri Male Mahadeshwara Swamy Devasthana",
      link: "https://maps.app.goo.gl/Ut3vAxRhR67H4x3V9",
    },
    {
      name: "Sri Narsimha Swamy Hill",
      link: "https://maps.app.goo.gl/eiAgsddfAnNKhLHZA",
    },
    {
      name: "Sunset Point Kanyakumari",
      link: "https://maps.app.goo.gl/efj1F8CWWWtHwGVaA",
    },
    {
      name: "Suvarnavathi Dam",
      link: "https://maps.app.goo.gl/NzchR4EZFdQrH3fV8",
    },
    {
      name: "Talakadu Kaveri River Beach",
      link: "https://maps.app.goo.gl/1FJ2Vz76SG9d9fjD9",
    },
    {
      name: "Talakadu Shri Vaidhyanatheshwara Temple",
      link: "https://maps.app.goo.gl/jn2yeVa7NuSryBWe7",
    },
    { name: "Taraka Dam", link: "https://maps.app.goo.gl/MYPoUuaQnJBkE1GM8" },
    {
      name: "Thalamalai - Germalam Ghat Section",
      link: "https://maps.app.goo.gl/qrqyqyboo6stFJ1D7",
    },
    { name: "Top Station", link: "https://maps.app.goo.gl/9TSmAp7DfaDAxwqY9" },
    {
      name: "Travelicious Restaurant",
      link: "https://maps.app.goo.gl/UNDbZVFVPaHFsaZV9",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Udutore Halla Jalashaya",
      link: "https://maps.app.goo.gl/CHKUcAE8pa6To24S9",
    },
    {
      name: "Vaderahalli Lake",
      link: "https://maps.app.goo.gl/THFHnu598SkeBCdj8",
    },
    {
      name: "Valparai Viewpoint",
      link: "https://maps.app.goo.gl/xffkZodY8rSNNDvg8",
    },
    { name: "Vavul Mala", link: "https://maps.app.goo.gl/jigVgi1vcrarrkUd7" },
    {
      name: "Veeranahosahalli Nagarahole Forest Checkpost",
      link: "https://maps.app.goo.gl/i2iKxs7p6WJ1T8Rg6",
      icons: ["fa-car"],
    },
    {
      name: "Vivekananda Rock Memorial",
      link: "https://maps.app.goo.gl/Usrsj7Rqndrg2NpP9",
    },
  ],
  hosur: [
    {
      name: "Anaikattu Dam",
      link: "https://maps.app.goo.gl/fvV5MQb4aJvVYULQA",
    },
    {
      name: "Anchetty",
      link: "https://maps.app.goo.gl/11YdFA3qFdH4j4FW7",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "Annanagar View Point",
      link: "https://maps.app.goo.gl/TtCKstyk4XxpE5ED7",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "Arichal Munai Sunset Point",
      link: "https://maps.app.goo.gl/gbpzoEW7NWvxZsjp9",
    },
    {
      name: "Arulmigu Chennaraya Swamy Temple",
      link: "https://maps.app.goo.gl/g1k9VxB1NrvnQDCS6",
    },
    {
      name: "Arulmigu Nilavur Kathava Nachi Amman Temple",
      link: "https://maps.app.goo.gl/bkLAvPbHPH8raLZK8",
    },
    {
      name: "Arunachala Hill",
      link: "https://maps.app.goo.gl/e4pCPM5VUXcgPhAv8",
    },
    {
      name: "Biligundlu View Point",
      link: "https://maps.app.goo.gl/vH8zzEAz3Fqa92Wo6",
    },
    {
      name: "Gomuki Dam View Point",
      link: "https://maps.app.goo.gl/TcpzMrHhj1bikHrg8",
    },
    {
      name: "Hogenakkal Water Falls",
      link: "https://maps.app.goo.gl/vZpAESW3igkZK4xy5",
    },
    {
      name: "Kadavalleri View Point",
      link: "https://maps.app.goo.gl/aHdvMhQawVkcT6ti7",
    },
    {
      name: "Kalvarayan Valley View Point",
      link: "https://maps.app.goo.gl/4BY6ma31S9CMH27d6",
    },
    {
      name: "Kolli Hill Forest",
      link: "https://maps.app.goo.gl/Xr4UkftaCK1fjDPdA",
    },
    {
      name: "Kolli Hills Bend View Point",
      link: "https://maps.app.goo.gl/wZyE4gQWRvhfcnuX6",
    },
    {
      name: "Maasila Falls",
      link: "https://maps.app.goo.gl/fnyy21Tw73Pe4dcD6",
    },
    {
      name: "Mallappa Konda",
      link: "https://maps.app.goo.gl/6Sgo6wv9iBGg56Zf6",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Mettur Dam View Point",
      link: "https://maps.app.goo.gl/A8P5MM39GAisejEG6",
    },
    {
      name: "Murugan Idli Shop",
      link: "https://maps.app.goo.gl/tqZpp69NBxW2oriM6",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Muthyala Maduvu Falls",
      link: "https://maps.app.goo.gl/dbRTofCcedXg8FZGA",
    },
    { name: "Pagoda Point", link: "https://maps.app.goo.gl/RP19SdsUH5VDNPdd9" },
    {
      name: "Panchapalli Dam",
      link: "https://maps.app.goo.gl/TCiGbKuvAu2bKTEm9",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Pearl Valley Dam",
      link: "https://maps.app.goo.gl/1P3PESqP5Nnrm1NN8",
    },
    {
      name: "Perandapalli Forest Water Falls",
      link: "https://maps.app.goo.gl/owm3uyCpKYoLJxii9",
    },
    {
      name: "Periyar Waterfalls",
      link: "https://maps.app.goo.gl/GMsRiWpxnQJF3xmeA",
    },
    {
      name: "Pichavaram Mangrove Forest",
      link: "https://maps.app.goo.gl/76juJq3vSxpeu1iG7",
    },
    { name: "Pondy Marina", link: "https://maps.app.goo.gl/qV7kUhZTjm7K6sv89" },
    { name: "Puliancholai", link: "https://maps.app.goo.gl/2gMkJ97VtFTEbwiQA" },
    { name: "Rock Beach", link: "https://maps.app.goo.gl/mXttmJMz2AZaMTBd9" },
    { name: "Sathanur Dam", link: "https://maps.app.goo.gl/RWcRhod2i7vrKdhVA" },
    {
      name: "Seeku Parai View Point - Kolli Hills",
      link: "https://maps.app.goo.gl/HjBweGci2mMTeGgg7",
    },
    {
      name: "Serenity Beach Sunrise Point",
      link: "https://maps.app.goo.gl/foo4TxCjVTWK6CXY7",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Shri Nageshwara Swamy Temple",
      link: "https://maps.app.goo.gl/YHBQNtfgRnNN8qho6",
    },
    {
      name: "Sri Arulmigu Ramanathaswamy Temple",
      link: "https://maps.app.goo.gl/vqaUqxFh8U4JGMdz6",
    },
    {
      name: "Sri Vanadurgai Amman Temple",
      link: "https://maps.app.goo.gl/wWhaUhWpp9qLVXwo8",
    },
    {
      name: "Vainu Bappu Observatory",
      link: "https://maps.app.goo.gl/nXPnyY4aXa1sCiPz8",
    },
    {
      name: "Vallimadurai Dam",
      link: "https://maps.app.goo.gl/CCsjvCvh6n1y7w119",
    },
    { name: "Vathal Malai", link: "https://maps.app.goo.gl/NEbaNYBn7CYKg9dYA" },
    {
      name: "Vellimalai Mottaiyanur",
      link: "https://maps.app.goo.gl/bRAuZjFkPGZbXrHr7",
    },
    {
      name: "Virupaksha Cave",
      link: "https://maps.app.goo.gl/UqazZ2aHRpnBt43f9",
    },
    {
      name: "Wireless Viewpoint",
      link: "https://maps.app.goo.gl/NJh1NxZ9PjRrZAmaA",
    },
    {
      name: "Yelagiri Hill View Point",
      link: "https://maps.app.goo.gl/mrtZmokh52fCkeM39",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "Yercaud Lake & Boat House (Emerald Lake)",
      link: "https://maps.app.goo.gl/1ZuxQ5Exm3PZ5zmUA",
    },
  ],
  hoskote: [
    {
      name: "Aaradhya Grand Mulbagal Dosa",
      link: "https://maps.app.goo.gl/2mPztEoipLJPYquy7",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Agrahara Waterfalls",
      link: "https://maps.app.goo.gl/KSTrkVcmbVPuj9Jd6",
    },
    {
      name: "Antaragange Cave And Water",
      link: "https://maps.app.goo.gl/1eLSo6eFc2fCZE2y9",
    },
    {
      name: "Antharagange Trekking Starting Point",
      link: "https://maps.app.goo.gl/sTogwHHHgfbRGTPs7",
    },
    {
      name: "Avani Betta",
      link: "https://maps.app.goo.gl/9u7rV2XwhYibhDX57",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Bathalapalli Malattaru Dam",
      link: "https://maps.app.goo.gl/Z1JuBiBWBL18y68z8",
    },
    {
      name: "Bethamangala Dam",
      link: "https://maps.app.goo.gl/Hq5NUaesLcUBQUdD6",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "BigRock Dirt Park",
      link: "https://maps.app.goo.gl/8NjWa7mrrdutu3rWA",
    },
    { name: "Bili Betta", link: "https://maps.app.goo.gl/b38mCGaYCkBZhqaq9" },
    {
      name: "Chota Ladakh Viewpoint",
      link: "https://maps.app.goo.gl/u6ohCMSk2yygxA3DA",
    },
    {
      name: "Gidigi WaterFall",
      link: "https://maps.app.goo.gl/aLrZNsvmvGkNciEM9",
    },
    {
      name: "Highway Star",
      link: "https://maps.app.goo.gl/eZX8gwH42A1iT8nr7",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    { name: "Kaigal Falls", link: "https://maps.app.goo.gl/gCUDpY1FTtchEdGUA" },
    {
      name: "Kangundhi Fort",
      link: "https://maps.app.goo.gl/77DieeJnKBgG5oie9",
    },
    {
      name: "Kendatti Lake View",
      link: "https://maps.app.goo.gl/Ga9yY5hrMcmb39kw9",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Kolar Gold Field",
      link: "https://maps.app.goo.gl/SRHBB5SU27CAmSK79",
      icons: ["fa-motorcycle", "fa-triangle-exclamation"],
    },
    {
      name: "Madras International Circuit",
      link: "https://maps.app.goo.gl/X4QeQkJiLW8eP6So8",
    },
    {
      name: "Markandeya Dam Budikote",
      link: "https://maps.app.goo.gl/Nyk9k5fWuvd48ZMw9",
    },
    {
      name: "Markandeya Hills",
      link: "https://maps.app.goo.gl/JmAb2Fqdf3ysepZX8",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    { name: "Mordhana Dam", link: "https://maps.app.goo.gl/Zw9S61xFjXD1UoVm9" },
    {
      name: "Mustrahalli Lake",
      link: "https://maps.app.goo.gl/TKJP3VzGMsPWE8s76",
    },
    {
      name: "Narsapura Lake Drive",
      link: "https://maps.app.goo.gl/oYe79LvXrSz6YLCa6",
      icons: ["fa-motorcycle", "fa-triangle-exclamation"],
    },
    {
      name: "Palar River Weir",
      link: "https://maps.app.goo.gl/bHXyHvgk42VxEwMC8",
    },
    {
      name: "Shri Kotilingeshwara Swamy Temple",
      link: "https://maps.app.goo.gl/7puraKWuyEDvKymn8",
    },
    {
      name: "Shri Vakkaleri Markandeshwara Swami Gudi Betta",
      link: "https://maps.app.goo.gl/c7QURo3xGcvkJCbQ6",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Swathi Hotel and Cafe",
      link: "https://maps.app.goo.gl/oSTfbsfBeyVkZ9EU7",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Valagamadhi Hill",
      link: "https://maps.app.goo.gl/BUH26KjgYgirGsVA6",
    },
    {
      name: "Vrushabhavati Kere",
      link: "https://maps.app.goo.gl/mpncD4m5pqnjSgX39",
    },
    { name: "Watch Tower", link: "https://maps.app.goo.gl/Dj9RtEX8CMGZwJwCA" },
    { name: "Yaragola Dam", link: "https://maps.app.goo.gl/cwhovSEbSKW1mRqh9" },
  ],
  devanahalli: [
    {
      name: "Anini View Point",
      link: "https://maps.app.goo.gl/Hc1CpH11VZhPyuii6",
    },
    {
      name: "Atal Tunnel South Portal",
      link: "https://maps.app.goo.gl/gYKSifGmMtwXLoNw6",
    },
    {
      name: "Avalabetta Top View",
      link: "https://maps.app.goo.gl/ygwBmumr9TGYr34H7",
    },
    {
      name: "Avathi Lake",
      link: "https://maps.app.goo.gl/4mRbaTcqe9H8VzjY8",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Avathi Shri Thimmaraya Swamy Temple",
      link: "https://maps.app.goo.gl/K6mvhLz7xtpV9qAR6",
    },
    {
      name: "Balti Heritage House and Museum",
      link: "https://maps.app.goo.gl/gfz15QvmY2XgeEga8",
    },
    { name: "Bandar Fort", link: "https://maps.app.goo.gl/4WqdqwkL3ZdXtSSx8" },
    {
      name: "Bhairasagara Lake",
      link: "https://maps.app.goo.gl/bZTPyahXvzPKDiwP9",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Big Bay India",
      link: "https://maps.app.goo.gl/yLdyY5NUaj4oJ1QF8",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Blue Flag Beach",
      link: "https://maps.app.goo.gl/1CohDhVbSyB1mYRs9",
    },
    {
      name: "Bramha Sagar View Point",
      link: "https://maps.app.goo.gl/QMZ3VLKNHHgcbCQCA",
    },
    {
      name: "Brahmamsagar Reservoir",
      link: "https://maps.app.goo.gl/K1idmDaWTvLeMB4v9",
    },
    {
      name: "Bren Raceway - FIA Grade 2 Racetrack",
      link: "https://maps.app.goo.gl/y9CArbB7CgYSYqKU8",
      icons: ["fa-x"],
    },
    {
      name: "Buddha Statue Diskit",
      link: "https://maps.app.goo.gl/2oiRTdPzjTTsNnJB7",
    },
    {
      name: "Cherlopalli Reservoir",
      link: "https://maps.app.goo.gl/nqrdxmnUAcvAvgK6A",
    },
    { name: "Chilika Lake", link: "https://maps.app.goo.gl/vTscC1saMwaVsFyi6" },
    {
      name: "Chisumle Bridge",
      link: "https://maps.app.goo.gl/kkJcVGRBEkkEqk6UA",
    },
    {
      name: "Chitravathi River Reservoir",
      link: "https://maps.app.goo.gl/7ZmVT4uy4KJCi1ZF7",
    },
    {
      name: "Dandiganahalli Dam",
      link: "https://maps.app.goo.gl/1PUJ4EXe3gF9WycP7",
    },
    {
      name: "Devanahalli Fort",
      link: "https://maps.app.goo.gl/HGiRNT8yoDkLCTm28",
    },
    {
      name: "Dodda Halla View Point",
      link: "https://maps.app.goo.gl/VTsAnW9jGRuDZHTF9",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Dolphin's Nose Lighthouse",
      link: "https://maps.app.goo.gl/ELGewMpaSfvV7m7i6",
    },
    {
      name: "Gandikota Grand Canyon",
      link: "https://maps.app.goo.gl/FBkH6oVNC2FWc7xz8",
    },
    {
      name: "Gangotri Seasonal Lake",
      link: "https://maps.app.goo.gl/6pyF4LqsqZAz27wDA",
    },
    {
      name: "Gudibande Kere Viewpoint",
      link: "https://maps.app.goo.gl/PNfZtXJsnkzehc9Q6",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Gummanayakana Fort",
      link: "https://maps.app.goo.gl/uxnZ48PdJX7nRop39",
    },
    {
      name: "Gundamagere Kere",
      link: "https://maps.app.goo.gl/jMmDXDBuPtX7BfRe6",
      icons: ["fa-motorcycle", "fa-triangle-exclamation"],
    },
    {
      name: "Gurudongmar Lake",
      link: "https://maps.app.goo.gl/z4rNp8ckPYKKmwtE6",
    },
    { name: "Hanle River", link: "https://maps.app.goo.gl/jUoKkNTZXeQDiVKXA" },
    {
      name: "Horagina Betta",
      link: "https://maps.app.goo.gl/y3DeqDEoxoTG8ziP6",
    },
    {
      name: "Horsley Hills Sunrise Point",
      link: "https://maps.app.goo.gl/Ju6uZMwRnnaY1fsi6",
    },
    {
      name: "Indian Astronomical Observatory",
      link: "https://maps.app.goo.gl/QKtzSiY18tNCABsf7",
    },
    {
      name: "Jataayu Theme Park",
      link: "https://maps.app.goo.gl/wD1DV2bxnBy378Sj8",
      icons: ["fa-motorcycle", "fa-car", "fa-hiking"],
    },
    {
      name: "Kailasagiri Betta",
      link: "https://maps.app.goo.gl/CXJFxXzRw2gRuJWK7",
    },
    {
      name: "Kalawarabetta Top Point",
      link: "https://maps.app.goo.gl/oW6sxoJZyYYJ2cfq5",
    },
    {
      name: "Kandaleru Dam View",
      link: "https://maps.app.goo.gl/kbUAwS6ZJ1S1weJ4A",
    },
    {
      name: "Kargil City View Point",
      link: "https://maps.app.goo.gl/ned7HcmAe9s5Eau69",
    },
    {
      name: "Kethanahalli Falls",
      link: "https://maps.app.goo.gl/RQ2kZKhT2ZBvHi75A",
    },
    {
      name: "Khanda Waterfalls",
      link: "https://maps.app.goo.gl/BGYk8mwX7mQgCZrP8",
    },
    {
      name: "Komic Monastery",
      link: "https://maps.app.goo.gl/Te8kyCNm9sDoBVJP9",
    },
    { name: "Kote Betta", link: "https://maps.app.goo.gl/brx2bv3GNEu7Qyiq8" },
    {
      name: "Lachung Viewpoint",
      link: "https://maps.app.goo.gl/MGKSyydb7XAF7vdm8",
    },
    {
      name: "Lepakshi Main Temple",
      link: "https://maps.app.goo.gl/TNB4g6fjMW9rbesM8",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Lepakshi Nagalinga",
      link: "https://maps.app.goo.gl/ppST2FrvDC6yU9VB8",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Lepakshi Nandi",
      link: "https://maps.app.goo.gl/8sqtN8YyWdfP9y976",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Makali Durga Betta",
      link: "https://maps.app.goo.gl/zinnizdAcYkVwCUk6",
    },
    {
      name: "Nadaprabhu Kempegowda Statue",
      link: "https://maps.app.goo.gl/esnqCXLbgViFFZNT7",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Nandi Hills",
      link: "https://maps.app.goo.gl/XK5fXTBbaFMMfAr88",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Nandi Hills Sunrise Viewpoint",
      link: "https://maps.app.goo.gl/JhiyXrnprGxFEBpi7",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Nandi Pushkarini",
      link: "https://maps.app.goo.gl/8R58ZBMcDeD4um926",
      icons: [
        "fa-motorcycle",
        "fa-car",
        "fa-hiking",
        "fa-triangle-exclamation",
      ],
    },
    {
      name: "Nandi Upachar - Devanahalli",
      link: "https://maps.app.goo.gl/ASmQjNm9thHfHF1a8",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    { name: "Nubra Valley", link: "https://maps.app.goo.gl/TENnKCxvZSnLNQ4h7" },
    {
      name: "Nubra Valley Sand Dunes 1",
      link: "https://maps.app.goo.gl/w7x5KTgkftzNNx5a7",
    },
    {
      name: "Nubra Valley Sand Dunes 2",
      link: "https://maps.app.goo.gl/LL922UcUV4TdiBpe6",
    },
    {
      name: "Origin of Palar River",
      link: "https://maps.app.goo.gl/1VWXp2PSLpJigfKq7",
    },
    {
      name: "Pangong Lake View",
      link: "https://maps.app.goo.gl/AHtGMQmWF8F5oukd9",
    },
    {
      name: "Penukonda Fort",
      link: "https://maps.app.goo.gl/ZeEhBFzx8byca5DSA",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    { name: "Photi La", link: "https://maps.app.goo.gl/YSLC8e4CydCu3M2t8" },
    {
      name: "Poshettihalli Falls & Trekking Place",
      link: "https://maps.app.goo.gl/v6xr3x4KQQkWB3RZ6",
    },
    {
      name: "Pulicat Bird Sanctuary - Lake View Point",
      link: "https://maps.app.goo.gl/xJqk4vQowbmHKJ8g9",
    },
    {
      name: "Sabbanahalli Picnic Point",
      link: "https://maps.app.goo.gl/Ez617S1hzjkWaadh6",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "Satish Dhawan Space Centre",
      link: "https://maps.app.goo.gl/QYswFotpPHEsPeiV6",
    },
    {
      name: "Shree Jagannatha Temple Puri",
      link: "https://maps.app.goo.gl/4YGBVq781ChHthPZ6",
    },
    {
      name: "Shri Ghati Subrahmanya Temple",
      link: "https://maps.app.goo.gl/EdhFsAgio8e5HWxFA",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "Shri Kaadu Yoga Lakshminarasimha Gudi",
      link: "https://maps.app.goo.gl/fHDwzuHvvjbdHaxKA",
    },
    {
      name: "Shri Nellikaayi Basavannana Gudi Temple",
      link: "https://maps.app.goo.gl/pWRCWLweoP9Md26C7",
    },
    {
      name: "Shri Ranganatha Swamy Temple (Rangasthala)",
      link: "https://maps.app.goo.gl/Wgqf4uybfHe8j6gs7",
    },
    {
      name: "Shri Someshwara Swami Temple",
      link: "https://maps.app.goo.gl/JzkgYTmDBGVH1NgW7",
    },
    {
      name: "Sir M. Vishveshvaraiya Dam",
      link: "https://maps.app.goo.gl/EtZuAW3r31iwbepG6",
      icons: ["fa-motorcycle", "fa-car", "fa-triangle-exclamation"],
    },
    {
      name: "Somasila Backwaters Fishermen Spot",
      link: "https://maps.app.goo.gl/subb7S1vHytNbRgu9",
    },
    {
      name: "Somasila View Point",
      link: "https://maps.app.goo.gl/KXxxTxzA8xrQ8PAH7",
    },
    { name: "Spiti Valley", link: "https://maps.app.goo.gl/cVkJ4zsa25RQUjtK8" },
    {
      name: "Sri Venkateswara Swamy Temple (Tirumala Tirupathi Devasthanam)",
      link: "https://maps.app.goo.gl/NYJVtzYBHyZaWz6Y6",
    },
    {
      name: "Srinidhi Vaibhava",
      link: "https://maps.app.goo.gl/tg6PW3DUFZSnkb1WA",
      icons: ["fa-motorcycle", "fa-car", "fa-utensils"],
    },
    {
      name: "Srisailam Dam View Point",
      link: "https://maps.app.goo.gl/VtE6RKC479S2kNdf7",
    },
    {
      name: "Subbarayana Kunte Katte",
      link: "https://maps.app.goo.gl/bTDEgVUJyDy6bCdJ8",
    },
    {
      name: "Sundarban National Park",
      link: "https://maps.app.goo.gl/mBaG9RWQ7xVzUM838",
    },
    {
      name: "Thathayya Cave",
      link: "https://maps.app.goo.gl/p1rxP8oQdue5jPvu5",
    },
    {
      name: "The ISRO Space Museum",
      link: "https://maps.app.goo.gl/yoU5xgDPCp7U4ojM8",
    },
    {
      name: "Tlâhpi Mountain View",
      link: "https://maps.app.goo.gl/ZoGeGanquhnvQGQL6",
    },
    { name: "Umling La", link: "https://maps.app.goo.gl/exbkjmAnAT63jCvx6" },
    {
      name: "Vatadahosahalli Lake",
      link: "https://maps.app.goo.gl/cG9nwrVWMofafbE16",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Venkatapura Katte Viewpoint",
      link: "https://maps.app.goo.gl/M5EvSi94vLLKmi9U6",
    },
    {
      name: "War Memorial and Heritage Hut Museum",
      link: "https://maps.app.goo.gl/3u2ATtN64GK8jhWDA",
    },
    {
      name: "Yagavakote Betta",
      link: "https://maps.app.goo.gl/xHXQHHk4f1RFjbaU6",
    },
    {
      name: "Yarrabetta Caves",
      link: "https://maps.app.goo.gl/rKBv4nKGN2zwjBG49",
    },
    {
      name: "Yumthang Valley",
      link: "https://maps.app.goo.gl/DXyo3pFFpdJfcPaV6",
    },
    {
      name: "Zangla Palace",
      link: "https://maps.app.goo.gl/p2h3DmBYfzaWzhhu7",
    },
    { name: "Zero Point", link: "https://maps.app.goo.gl/bRDYA6YDbFQBA3Uo9" },
  ],
  ooty: [
    {
      name: "Mulli Hairpins",
      link: "https://maps.app.goo.gl/HdzaEnPRdGyEUDWZ9?g_st=ac",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Avalanche Viewpoint",
      link: "https://maps.app.goo.gl/kJz2HrA1HqC9t48G8",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Emrald Lake Backwaters",
      link: "https://maps.app.goo.gl/MgRkbRDwWv3XmQmK7",
      icons: ["fa-motorcycle", "fa-car"],
    },
  ],
  samse: [
    {
      name: "KIOCL Ghost Town",
      link: "https://maps.app.goo.gl/GyFzhXSntNcWiuBJA",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Bhadra Lakya Confluence Point",
      link: "https://maps.app.goo.gl/5rKo1NaFuASTYeDs8",
      icons: ["fa-motorcycle", "fa-car"],
    },
    {
      name: "Gangadikal Trek",
      link: "https://maps.app.goo.gl/QwqLRDmsobjZRj6GA",
      icons: ["fa-person-hiking"],
    },
  ],
  specials: [
    {
      name: "Bagepalli Region (WMD 2024)",
      link: "https://maps.app.goo.gl/LfD5BkHrFMAGTtjSA",
    },
    {
      name: "Bidadi/Ramanagara/Channapatna Region (WMD 2024)",
      link: "https://maps.app.goo.gl/fQFdA3BLUQdRqQv1A",
    },
    {
      name: "Channarayapatna Region (WMD 2024)",
      link: "https://maps.app.goo.gl/6xGkVGFNcRFkiKbr5",
    },
    {
      name: "Chikkaballapura Region (WMD 2024)",
      link: "https://maps.app.goo.gl/TG2u7286xSaoYZr57",
    },
    {
      name: "Kanakapura Region (WMD 2024)",
      link: "https://maps.app.goo.gl/UjNxTuU6K3tyPKAT9",
    },
    {
      name: "KGF Region (WMD 2024)",
      link: "https://maps.app.goo.gl/yghrx5SuTSuiNxX26",
    },
    {
      name: "Kolar Country Roads Circuit",
      link: "https://maps.app.goo.gl/gg5pmsb6ZxvxFCGE8",
    },
    {
      name: "Mysuru Region (WMD 2024)",
      link: "https://maps.app.goo.gl/KQEvxARoq4fUq6uz7",
    },
    {
      name: "Satellite Town Ring Road (STRR)",
      link: "https://maps.app.goo.gl/i7wCwUrzMnCbEvaw5",
    },
    {
      name: "Tumakaru/Dobbaspete Region (WMD 2024)",
      link: "https://maps.app.goo.gl/2nernByVbTtP1UcK7",
    },
    {
      name: "Varlakonda Region (WMD 2024)",
      link: "https://maps.app.goo.gl/jGk2Chq6hAaMCsFR7",
    },
  ],
};

const exitSelect = document.getElementById("exit-select");
const destinationsList = document.getElementById("destinations-list");

exitSelect.addEventListener("change", () => {
  const selectedExit = exitSelect.value;
  const selectedDestinations = destinations[selectedExit] || [];

  destinationsList.innerHTML = "";
  if (selectedExit === "samse") {
    const cautionMessage = document.createElement("div");
    cautionMessage.className = 'samse-caution-message'
    cautionMessage.innerHTML = `<span>
        <strong>Note:&nbsp;</strong>Please don't advertise these particular
        locations. Just get in, visit the place and get out. This entire area
        is very sensitive and if there is overcrowding, the forest department
        tends to close the destinations for everyone.
      </span>`;
    destinationsList.appendChild(cautionMessage);
  }
  selectedDestinations.forEach((destination) => {
    const destinationElement = document.createElement("div");
    destinationElement.className = "destination";

    const iconsHTML = (destination.icons || [])
      .map((icon) => `<i class="fa ${icon} icon" aria-hidden="true"></i>`)
      .join(" ");

    destinationElement.innerHTML = `
            <a href="${destination.link}" target="_blank">${destination.name}</a>
            ${iconsHTML}
        `;
    destinationsList.appendChild(destinationElement);
  });
});

exitSelect.dispatchEvent(new Event("change"));
