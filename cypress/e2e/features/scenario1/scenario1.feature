Feature: Scenario 1

    Scenario: Add New Valid User
        Given I am on the table page
        When I fill the user data form and click on save
        Then I should validate the user has been successfully created