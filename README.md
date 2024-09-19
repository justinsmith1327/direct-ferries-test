## Automation Task

We would like you to complete a small task to demonstrate your technical understanding of automation. Keep in mind scalability for the project. You are not expected to spend too much time on this, just between 45 mins to 1 hour, although it is not a timed task. Then create your own git repo and commit your changes there.

---    

1. There are some tests existing and working within homepage-tests feature - please extend the test coverage for sites www.directferries.co.uk and www.directferries.it and ensure all the tests pass. 

Answer - Please see homepage-tests feature file and associated files

---

2. Please write a new test which will Navigate to my account page 'https://account.directferries.com/?culture=en-GB' type in some incorrect details and try to log in. 
   
Answer - Please see manage-my-booking feature file and associated files
   
---

3. Scenarios 1 & 3 within route-check feature are failing. To support a change in the upcoming sprint, you need to write automation for route Amalfi – Neapel. The existing steps do not seem to pass the checks which have been working for all routes up until now. Please investigate & resolve the issue here. 

Answer - 
The issue seems to be that the route Amalfi – Neapel is not the first in the list and the first element in the list is being clicked as per the dealfinder getRoutePicker method which has Selector('.routes_return').find('li').nth(0).  

This actually selects the route Amalfi - Capri.  When the route Amalfi - Capri is clicked the quote shows this route and not the expected route Amalfi – Neapel.  So the test fails.

I would look in the list for the route using the selector [data-routename="Amalfi - Neapel"] and select this.

---

4. If you had extra time, what would you have done differently?

Answer -

1. It looks like there are a lot of countries that direct ferries operate in and as such there is a different site for each country.  Instead of using a switch statement for Germany, Italy and the UK to get the url as I have done in question 1 I could have used a language config file where I look up the url based on a country code.  This would allow me to open and verify each site for all the different countries.  Making the code more expandable as extra countries get added.

2. I could have considered for question 1 moving the verification (then) step from all 3 scenarios into a single scenario.  I have already landed on the home page on scenario 1 so I could just check popular operators, top destinations and latest offers in that rather than land on the page 3 times across the scenarios.  This is not so good if the first then step failed as the test would not go on and check the remaining steps. 

3. For question 2 I could expand the tests to provide not just an email and booking ref that does not exist but include providing a email that exists but not a booking reference or vice versa.  I could provide email and booking references in invalid formats to check the errors displayed.

Please send your finished repo via email to racheld@directferries.com prior to your interview
