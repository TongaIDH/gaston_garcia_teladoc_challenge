Feature: Scenario 1

    Scenario: Add New Valid User
        Given I am on the table page
        When I fill the user data form with "Juanito", "Arcoiris", "Juanito1993", "pepito123", "juanito23@hotmail.com", "1122334455" and click on save
        Then I should validate the user has been successfully created with data "Juanito", "Arcoiris", "Juanito1993", "Customer", "juanito23@hotmail.com", "1122334455"