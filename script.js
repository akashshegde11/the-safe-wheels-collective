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
        { name: "Kempasagara Kere", link: "https://maps.app.goo.gl/GdvFB922WH6nGJdt5" }
    ],
    mysuru: [
        { name: "Shri Chamundeshwari Temple", link: "https://maps.app.goo.gl/RJLAutcpLCVeRPGg8" },
        { name: "Shri Bettada Gaviranga Swamy Temple", link: "https://maps.app.goo.gl/NMj3YTzxED4c97HK9" }
    ],
    kanakapura: [
        { name: "Agara Lake View Point", link: "https://maps.app.goo.gl/mn2RJkE9pF3bfuKH7" },
        { name: "Mekedatu Sangama View Point", link: "https://maps.app.goo.gl/bm28zXcfECkRVmVj7" }
    ],
    hosur: [
        { name: "Panchapalli Dam", link: "https://maps.app.goo.gl/TCiGbKuvAu2bKTEm9" },
        { name: "Yelagiri Hill View Point", link: "https://maps.app.goo.gl/mrtZmokh52fCkeM39" }
    ],
    hoskote: [
        { name: "Markandeya Hills", link: "https://maps.app.goo.gl/JmAb2Fqdf3ysepZX8" },
        { name: "Aaradhya Grand Mulbagal Dosa", link: "https://maps.app.goo.gl/2mPztEoipLJPYquy7" }
    ],
    devanahalli: [
        { name: "Nandi Hills Sunrise Viewpoint", link: "https://maps.app.goo.gl/JhiyXrnprGxFEBpi7" },
        { name: "Vatadahosahalli Lake", link: "https://maps.app.goo.gl/cG9nwrVWMofafbE16" }
    ],
    specials: [
        { name: "Kolar Country Roads Circuit", link: "https://maps.app.goo.gl/gg5pmsb6ZxvxFCGE8" }
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
