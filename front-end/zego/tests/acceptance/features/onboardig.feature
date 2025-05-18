Feature: Onboarding
    Scenario: User completes onboarding form to get an insurance quote
        Given I visit the home page
        When I click on the 'car-insurance' radio input
        When I click on the Get quote button
        Then I should see results logged
