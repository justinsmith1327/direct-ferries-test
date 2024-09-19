const { Selector, t } = require('testcafe');

async function getEmail() {
    return Selector("#Email", { timeout: 20000 })
}

async function getBookingRef() {
    return Selector("#BookingReference", { timeout: 20000 })
}

module.exports = {
    navigateToManageBooking: async function () {
        await t
            .navigateTo('https://account.directferries.com/?culture=en-GB')
    },

    enterLoginDetails: async function (email, ref) {
        await t
            .typeText(await getEmail(), email)
            .typeText(await getBookingRef(), ref)
            .click(Selector("#manage-booking-button"))
    },

    checkModalText: async function (message) {
        await t
            .expect(Selector('#booking-not-found-modal .card-title').innerText).eql(message)
    }
}