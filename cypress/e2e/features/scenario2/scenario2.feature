Feature: Scenario 2

    Scenario: Eliminate user from the table
        Given I am on the table page
        When I delete the user
        Then I should validate the user has been successfully deleted