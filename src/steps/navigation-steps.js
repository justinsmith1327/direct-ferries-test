const { Given, When, Then } = require("@cucumber/cucumber");
const navigation = require("../methods/navigation-methods.js");

Given('I am on the Direct Ferries {string} homepage', async function (t, [country]) {
    await navigation.onHomepage(country);
});



