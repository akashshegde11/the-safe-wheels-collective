const destinations = {
    tumakuru: [
        { name: "Devarayanadurga Betta (DD Hills)", link: "https://maps.app.goo.gl/f1A8deHqbmh1SUSW9" },
        { name: "Naamadha Chilume", link: "https://maps.app.goo.gl/wX4anvvan1h9NRZ69" }
    ],
    hassana: [
        { name: "Mavanuru Shri Bettada Malleshwara Gudi", link: "https://maps.app.goo.gl/rdMWQ7fwqtoVtmAF9" },
        { name: "Markonahalli Dam", link: "https://maps.app.goo.gl/FqK662Tqq3j8fBCLA" }
    ],
    magadi: [
        { name: "Arakavati River View Point 1", link: "https://maps.app.goo.gl/EJdWvYi2t3YgeQnc6" },
        { name: "Bettada Shri Kambada Yoganarasimha Swamy Temple", link: "https://maps.app.goo.gl/y77Ns8bxz9ouGerT7" },
        { name: "Honnamachanahalli Kere", link: "https://maps.app.goo.gl/ez6u6aKSUVxGfAsD9" },
        { name: "Huttaridurga Sunrise Point", link: "https://maps.app.goo.gl/1gpJ3h7nH2Zs3BUd7" },
        { name: "Kempasagara Kere", link: "https://maps.app.goo.gl/GdvFB922WH6nGJdt5" },
        { name: "Quarry Sunset Point", link: "https://maps.app.goo.gl/uHkb1aboHcgBBxaW6" },
        { name: "Shri Bande Yoganarasimha Swami Gudi", link: "https://maps.app.goo.gl/iX6Vy73skYvyEJ4J9" },
        { name: "Shri Muttarayana Swami Betta", link: "https://maps.app.goo.gl/9ELzY2zxRLwitbfW6" },
        { name: "Shri Ranganatha Swamy Temple", link: "https://maps.app.goo.gl/kLY85y2i1yFv4Z7T8" },
        { name: "Shri Shankareshwara Bettada Gudi", link: "https://maps.app.goo.gl/qxxfHb1dBsLDzohf8" },
        { name: "Shri Someshwara Swamy Temple", link: "https://maps.app.goo.gl/7dbfgU7gBM71paz2A" },
        { name: "Solo Hills", link: "https://maps.app.goo.gl/SRpMTwZhcGvZpaVF7" },
        { name: "Tippagondanahalli Dam", link: "https://maps.app.goo.gl/xDqUK1xDqVSD7Kg58" }
    ],
    mysuru: [
        { name: "Shri Bettada Gaviranga Swamy Temple", link: "https://maps.app.goo.gl/NMj3YTzxED4c97HK9" },
        { name: "Shri Chamundeshwari Temple", link: "https://maps.app.goo.gl/RJLAutcpLCVeRPGg8" }
    ],
    kanakapura: [
        { name: "Agara Lake View Point", link: "https://maps.app.goo.gl/mn2RJkE9pF3bfuKH7" },
        { name: "Mekedatu Sangama View Point", link: "https://maps.app.goo.gl/bm28zXcfECkRVmVj7" }
    ],
    hosur: [
        { name: "Anaikattu Dam", link: "https://maps.app.goo.gl/fvV5MQb4aJvVYULQA" },
        { name: "Anchetty Stream", link: "https://maps.app.goo.gl/11YdFA3qFdH4j4FW7" },
        { name: "Annanagar View Point", link: "https://maps.app.goo.gl/TtCKstyk4XxpE5ED7" },
        { name: "Arichal Munai Sunset Point", link: "https://maps.app.goo.gl/gbpzoEW7NWvxZsjp9" },
        { name: "Arulmigu Chennaraya Swamy Temple", link: "https://maps.app.goo.gl/g1k9VxB1NrvnQDCS6" },
        { name: "Arulmigu Nilavur Kathava Nachi Amman Temple", link: "https://maps.app.goo.gl/bkLAvPbHPH8raLZK8" },
        { name: "Arunachala Hill", link: "https://maps.app.goo.gl/e4pCPM5VUXcgPhAv8" },
        { name: "Biligundlu View Point", link: "https://maps.app.goo.gl/vH8zzEAz3Fqa92Wo6" },
        { name: "Gomuki Dam View Point", link: "https://maps.app.goo.gl/TcpzMrHhj1bikHrg8" },
        { name: "Hogenakkal Water Falls", link: "https://maps.app.goo.gl/vZpAESW3igkZK4xy5" },
        { name: "Kadavalleri View Point", link: "https://maps.app.goo.gl/aHdvMhQawVkcT6ti7" },
        { name: "Kalvarayan Valley View Point", link: "https://maps.app.goo.gl/4BY6ma31S9CMH27d6" },
        { name: "Kolli Hill Forest", link: "https://maps.app.goo.gl/Xr4UkftaCK1fjDPdA" },
        { name: "Kolli Hills Bend View Point", link: "https://maps.app.goo.gl/wZyE4gQWRvhfcnuX6" },
        { name: "Maasila Falls", link: "https://maps.app.goo.gl/fnyy21Tw73Pe4dcD6" },
        { name: "Mallappa Konda", link: "https://maps.app.goo.gl/6Sgo6wv9iBGg56Zf6" },
        { name: "Mettur Dam View Point", link: "https://maps.app.goo.gl/A8P5MM39GAisejEG6" },
        { name: "Murugan Idli Shop", link: "https://maps.app.goo.gl/tqZpp69NBxW2oriM6" },
        { name: "Muthyala Maduvu Falls", link: "https://maps.app.goo.gl/dbRTofCcedXg8FZGA" },
        { name: "Pagoda Point", link: "https://maps.app.goo.gl/RP19SdsUH5VDNPdd9" },
        { name: "Panchapalli Dam", link: "https://maps.app.goo.gl/TCiGbKuvAu2bKTEm9" },
        { name: "Pearl Valley Dam", link: "https://maps.app.goo.gl/1P3PESqP5Nnrm1NN8" },
        { name: "Perandapalli Forest Water Falls", link: "https://maps.app.goo.gl/owm3uyCpKYoLJxii9" },
        { name: "Periyar Waterfalls", link: "https://maps.app.goo.gl/GMsRiWpxnQJF3xmeA" },
        { name: "Pichavaram Mangrove Forest", link: "https://maps.app.goo.gl/76juJq3vSxpeu1iG7" },
        { name: "Pondy Marina", link: "https://maps.app.goo.gl/qV7kUhZTjm7K6sv89" },
        { name: "Puliancholai", link: "https://maps.app.goo.gl/2gMkJ97VtFTEbwiQA" },
        { name: "Rock Beach", link: "https://maps.app.goo.gl/mXttmJMz2AZaMTBd9" },
        { name: "Sathanur Dam", link: "https://maps.app.goo.gl/RWcRhod2i7vrKdhVA" },
        { name: "Seeku Parai View Point - Kolli Hills", link: "https://maps.app.goo.gl/HjBweGci2mMTeGgg7" },
        { name: "Serenity Beach Sunrise Point", link: "https://maps.app.goo.gl/foo4TxCjVTWK6CXY7" },
        { name: "Shri Nageshwara Swamy Temple", link: "https://maps.app.goo.gl/YHBQNtfgRnNN8qho6" },
        { name: "Sri Arulmigu Ramanathaswamy Temple", link: "https://maps.app.goo.gl/vqaUqxFh8U4JGMdz6" },
        { name: "Sri Vanadurgai Amman Temple", link: "https://maps.app.goo.gl/wWhaUhWpp9qLVXwo8" },
        { name: "Vainu Bappu Observatory", link: "https://maps.app.goo.gl/nXPnyY4aXa1sCiPz8" },
        { name: "Vallimadurai Dam", link: "https://maps.app.goo.gl/CCsjvCvh6n1y7w119" },
        { name: "Vathal Malai", link: "https://maps.app.goo.gl/NEbaNYBn7CYKg9dYA" },
        { name: "Vellimalai Mottaiyanur", link: "https://maps.app.goo.gl/bRAuZjFkPGZbXrHr7" },
        { name: "Virupaksha Cave", link: "https://maps.app.goo.gl/UqazZ2aHRpnBt43f9" },
        { name: "Wireless Viewpoint", link: "https://maps.app.goo.gl/NJh1NxZ9PjRrZAmaA" },
        { name: "Yelagiri Hill View Point", link: "https://maps.app.goo.gl/mrtZmokh52fCkeM39" },
        { name: "Yercaud Lake & Boat House (Emerald Lake)", link: "https://maps.app.goo.gl/1ZuxQ5Exm3PZ5zmUA" }
    ],
    hoskote: [
        { name: "Aaradhya Grand Mulbagal Dosa", link: "https://maps.app.goo.gl/2mPztEoipLJPYquy7" },
        { name: "Agrahara Waterfalls", link: "https://maps.app.goo.gl/KSTrkVcmbVPuj9Jd6" },
        { name: "Antaragange Cave And Water", link: "https://maps.app.goo.gl/1eLSo6eFc2fCZE2y9" },
        { name: "Antharagange Trekking Starting Point", link: "https://maps.app.goo.gl/sTogwHHHgfbRGTPs7" },
        { name: "Avani Betta", link: "https://maps.app.goo.gl/9u7rV2XwhYibhDX57" },
        { name: "Bathalapalli Malattaru Dam", link: "https://maps.app.goo.gl/Z1JuBiBWBL18y68z8" },
        { name: "Bethamangala Dam", link: "https://maps.app.goo.gl/Hq5NUaesLcUBQUdD6" },
        { name: "BigRock Dirt Park", link: "https://maps.app.goo.gl/8NjWa7mrrdutu3rWA" },
        { name: "Bili Betta", link: "https://maps.app.goo.gl/b38mCGaYCkBZhqaq9" },
        { name: "Chota Ladakh Viewpoint", link: "https://maps.app.goo.gl/u6ohCMSk2yygxA3DA" },
        { name: "Gidigi WaterFall", link: "https://maps.app.goo.gl/aLrZNsvmvGkNciEM9" },
        { name: "Highway Star", link: "https://maps.app.goo.gl/eZX8gwH42A1iT8nr7" },
        { name: "Kaigal Falls", link: "https://maps.app.goo.gl/gCUDpY1FTtchEdGUA" },
        { name: "Kangundhi Fort", link: "https://maps.app.goo.gl/77DieeJnKBgG5oie9" },
        { name: "Kendatti Lake View", link: "https://maps.app.goo.gl/Ga9yY5hrMcmb39kw9" },
        { name: "Kolar Gold Field", link: "https://maps.app.goo.gl/SRHBB5SU27CAmSK79" },
        { name: "Madras International Circuit", link: "https://maps.app.goo.gl/X4QeQkJiLW8eP6So8" },
        { name: "Markandeya Dam Budikote", link: "https://maps.app.goo.gl/Nyk9k5fWuvd48ZMw9" },
        { name: "Markandeya Hills", link: "https://maps.app.goo.gl/JmAb2Fqdf3ysepZX8" },
        { name: "Mordhana Dam", link: "https://maps.app.goo.gl/Zw9S61xFjXD1UoVm9" },
        { name: "Mustrahalli Lake", link: "https://maps.app.goo.gl/TKJP3VzGMsPWE8s76" },
        { name: "Narsapura Lake Drive", link: "https://maps.app.goo.gl/oYe79LvXrSz6YLCa6" },
        { name: "Palar River Weir", link: "https://maps.app.goo.gl/bHXyHvgk42VxEwMC8" },
        { name: "Shri Kotilingeshwara Swamy Temple", link: "https://maps.app.goo.gl/7puraKWuyEDvKymn8" },
        { name: "Shri Vakkaleri Markandeshwara Swami Gudi Betta", link: "https://maps.app.goo.gl/c7QURo3xGcvkJCbQ6" },
        { name: "Swathi Hotel and Cafe", link: "https://maps.app.goo.gl/oSTfbsfBeyVkZ9EU7" },
        { name: "Valagamadhi Hill", link: "https://maps.app.goo.gl/BUH26KjgYgirGsVA6" },
        { name: "Vrushabhavati Kere", link: "https://maps.app.goo.gl/mpncD4m5pqnjSgX39" },
        { name: "Watch Tower", link: "https://maps.app.goo.gl/Dj9RtEX8CMGZwJwCA" },
        { name: "Yaragola Dam", link: "https://maps.app.goo.gl/cwhovSEbSKW1mRqh9" }
    ],
    devanahalli: [
        { name: "Nandi Hills Sunrise Viewpoint", link: "https://maps.app.goo.gl/JhiyXrnprGxFEBpi7" },
        { name: "Vatadahosahalli Lake", link: "https://maps.app.goo.gl/cG9nwrVWMofafbE16" }
    ],
    specials: [
        { name: "Bagepalli Region (WMD 2024)", link: "https://maps.app.goo.gl/LfD5BkHrFMAGTtjSA" },
        { name: "Bidadi/Ramanagara/Channapatna Region (WMD 2024)", link: "https://maps.app.goo.gl/fQFdA3BLUQdRqQv1A" },
        { name: "Channarayapatna Region (WMD 2024)", link: "https://maps.app.goo.gl/6xGkVGFNcRFkiKbr5" },
        { name: "Chikkaballapura Region (WMD 2024)", link: "https://maps.app.goo.gl/TG2u7286xSaoYZr57" },
        { name: "Kanakapura Region (WMD 2024)", link: "https://maps.app.goo.gl/UjNxTuU6K3tyPKAT9" },
        { name: "KGF Region (WMD 2024)", link: "https://maps.app.goo.gl/yghrx5SuTSuiNxX26" },
        { name: "Kolar Country Roads Circuit", link: "https://maps.app.goo.gl/gg5pmsb6ZxvxFCGE8" },
        { name: "Mysuru Region (WMD 2024)", link: "https://maps.app.goo.gl/KQEvxARoq4fUq6uz7" },
        { name: "Satellite Town Ring Road (STRR)", link: "https://maps.app.goo.gl/i7wCwUrzMnCbEvaw5" },
        { name: "Tumakaru/Dobbaspete Region (WMD 2024)", link: "https://maps.app.goo.gl/2nernByVbTtP1UcK7" },
        { name: "Varlakonda Region (WMD 2024)", link: "https://maps.app.goo.gl/jGk2Chq6hAaMCsFR7" }
    ]
};

const exitSelect = document.getElementById('exit-select');
const destinationsList = document.getElementById('destinations-list');

exitSelect.addEventListener('change', () => {
    const selectedExit = exitSelect.value;
    const selectedDestinations = destinations[selectedExit];

    destinationsList.innerHTML = '';
    selectedDestinations.forEach(destination => {
        const destinationElement = document.createElement('div');
        destinationElement.className = 'destination';
        destinationElement.innerHTML = `<a href="${destination.link}" target="_blank">${destination.name}</a>`;
        destinationsList.appendChild(destinationElement);
    });
});

exitSelect.dispatchEvent(new Event('change'));
