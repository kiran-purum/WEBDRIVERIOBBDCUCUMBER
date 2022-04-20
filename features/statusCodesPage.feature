Feature: Landing Page of the Internet of Herokuapp

    Scenario: Validating the Status Codes
        Given I am on the First Landing Page of Herokuapp
        When I click on the Status Codes menu
        Then I should see the header "Status Codes"
        # Then I should see the footer text as "Elemental Selenium"
        When I click on this link here
        Then I should be navigated to "Hypertext Transfer Protocol (HTTP) Status Code Registry"
        When I click on http status codes
        Then I should navigate and see the Text as "HTTP Status Codes"
