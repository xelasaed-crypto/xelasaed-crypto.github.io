const gamingData = window.gamingCountryData || {};
if (typeof gamingData !== 'object') {
    window.gamingData = {};
} else {
    window.gamingData = gamingData;
}
