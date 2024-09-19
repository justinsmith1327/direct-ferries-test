const { Selector, t } = require('testcafe');

module.exports = {
    onHomepage: async function (country) {
        let url;
        switch (country) {
            case "Germany":
                url = 'https://www.directferries.de?dealfinderVersion=A';
                break;
            case "Italy":
                url = 'https://www.directferries.it';
                break;
            case "UK":
                url = 'https://www.directferries.co.uk';
                break;
            default:
                throw new Error(`Country ${country} is not supported.`);
        }

        // Perform navigation to the correct homepage
        await t.navigateTo(url)
        if (country != "UK")
            await t.click(Selector('[data-cky-tag="accept-button"]')); // Accept cookies or any other interaction
    }
};

