const { Given, When, Then } = require("@cucumber/cucumber");
const manageMyBookingPage = require("../methods/manage-my-booking-methods.js");

Given('I am on the Direct Ferries manage my booking page', async function () {
    await manageMyBookingPage.navigateToManageBooking();
});

When('I provide email {string} and booking reference {string}', async function (t, [email, ref]) {
    await manageMyBookingPage.enterLoginDetails(email, ref);
});

Then('the {string} message appears in the modal', async function (t, [message]) {
    await manageMyBookingPage.checkModalText(message);
});
