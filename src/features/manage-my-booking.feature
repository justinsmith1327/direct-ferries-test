Feature: Direct Ferries Manage my booking

    Scenario: Invalid login to manage my booking
        Given I am on the Direct Ferries manage my booking page
        When I provide email 'x.x@test.com' and booking reference 'DFP012345678'
        Then the 'Sorry, we cannot find a booking for this reference' message appears in the modal
