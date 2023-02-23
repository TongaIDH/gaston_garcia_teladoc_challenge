Feature: Scenario 2

    Scenario: Eliminate user from the table
        Given I am on the table page
        And I validate the user exists
        When I delete the user
        Then I should validate the user has been successfully deleted
        And I should clean the search input