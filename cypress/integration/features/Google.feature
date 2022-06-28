Feature: Google Main Page

  I want to open a search engine


  Scenario: Open google search engine and close the sign in popup
    Given I open Google page
    When I click on No Thanks button on the signonpopup
    Then I should no longer see the signonpopup
    And I see Google heading on the main page