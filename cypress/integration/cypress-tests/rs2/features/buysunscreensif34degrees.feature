Feature: Shop for suncreens if the weather is above 34 degrees

   I WANT to Shop for suncreens if the weather is above 34 degrees
   SO THAT I can validate the current temperature

    Scenario:
       Given I am within the current temperature page
       And I check the temperature is above 34 degrees
       When I click the buy sunscreens button
       Then I should be redirected to sunscreens page and can add any product into my cart