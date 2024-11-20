Feature: Shop for moisturizers if the weather is below 19 degrees

   I WANT to Shop for moisturizers if the weather is below 19 degrees
   SO THAT I can validate the current temperature

    Scenario: I want to Shop for moisturizers if the weather is below 19 degrees
       Given I am within the current temperature page
       And I check the temperature is below 19 degrees
       When I click the buy misturizers button
       Then I should be redirected to moisturizers page and can add any product into my cart