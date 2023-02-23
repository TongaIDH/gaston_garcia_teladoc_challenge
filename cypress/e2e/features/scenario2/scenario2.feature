Feature: Scenario 2

    Scenario: Eliminate user from the table
        Given I am on the page "/angularjs-protractor/webtables/"
        When I delete the user with data "Mark", "Novak", "novak", "Customer", "asa@asd.cz" and "777888444"
        Then I should validate the user "novak" has been successfully deleted