Feature: Landing Page of Internet Herokuapp

    Scenario: Dropdown Validation
        Given I am on the Second landing page of herokuapp
        When I click on the dropdown
        Then I should be navigated and I see the Header "Dropdown List"
        When I click on that please select an option
        Then I can see are options "Please select an option"
        When I click the options of Option 1
        Then I see the options are "Option 1" is selected
        When I click on the please select an option
        When I click the options of Option 2
        Then I see options "Option 2" is selected