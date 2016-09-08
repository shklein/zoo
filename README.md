#Zoo
We are going to build a full stack application that allows us to track the types of animals our zoo keeps. It will also decide randomly how many of each animal type we have.

1. Create a database and table
Create a new table in a new database to track animals in our zoo. The table should include
* an auto-incrementing primary key,
* a column for the type of animal as a string, and
* a number to keep track of how many of this animal type we have.
Save the SQL statements used to create your table in a database.txt file as a part of your project's Git repo.
2. Create a Node/Express app
Our application needs to be able to input new animals and display current animals. This will require AJAX requests to send data to the server and AJAX requests to retrieve data from the server.

3. Create a Node/Express server app.
* This app should actively listen for requests on port 5000.
* It should be able to serve back our static files (index.html, any client side javascript or css files) and handle incoming requests to any routes.
* Include a routing module to use with your AJAX requests.
* Create a custom module that exports the randomNumber function provided below.
* When a new kind of animal is entered from the user, use the randomNumber function from the custom module to get a number between 1 and 100. Use this number as your number of animals value in the database for this entry.
* The app should display all animals listed in our database when it loads and after each animal group is added.
