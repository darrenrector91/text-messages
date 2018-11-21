# Guest Connection Service

Automatically populating customizable message templates with information

## Technologies Used

* Javascript
* Node.js
* Handlebars
* Bootstrap

## To run a copy of this on your local machine folow the instructions below

* Clone repository from Github
* Run ```npm install --save```
* Run ```npm install --save-dev nodemon``` for instant server refesh on save
* Open package.json and add "start": "node server/server.js" to the scripts section right below the    "test" line and don't forget the comma after the line above
* Go the the menu on the side of the filestack and click on the bug icon
* Click the gear icon then the  dropdown above and select 'Launch Program' and then select 'Nodejs' from the pop up menu 

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Handlebarsjs](https://handlebarsjs.com/)

### Installing

## Notes
* The templates are not generated from a JSON file but instead are placed in the client.js file and referenced directly
* I originally chose AngularJS for this project but after reviewing the scope of work, I decided that I would use Handlebarsjs and since I had not worked with Handlebarsjs I decided that vanilla JavaScript would be a better choice in order to better utilize the library
* I've never worked with a templating library nor did I have any experience in writing templates so testing was only as extensive as running the application as intended
* As mentioned above, I was not able to utilize the templates from the JSON file and I was unable to access the timestamps to then convert into time so as to determine what the time of day was for the check-in or out
* I wanted to be able to take the timestamp for the welcome message for the guest selected and then convert that so that it would accurately portray the time of day - there is commented code in the client.js file to this effect
* In order to display the message correctly I added morning, afternoon and evening to a dropdown for the user to select instead of dynamically supplying this information

## Base Functionality
- [x] Have some sort of structure or object for working with template messages that have placeholders/variables (i.e. firstName, lastName, roomNumber, etc.) embedded in them
- [x] Load in message template information from a JSON file that you will have had created. Structure the file however you see fit
- [x] Load in guest and company information from the JSON files that we have provided
- [x] Allow the user to specify which guest and which company should be used to populate template messages.
- [x] Allow the user to either select one of the message templates that was loaded in from the JSON file or to enter in a new message template
- [-] Generate a final message output that is a result of populating the specified variables of the message template with the correct values from the other data

## Stretch Goals
- [ ] Support a greeting variable that will change based on the time of day (e.g. "Good morning" / "Good afternoon" / "Good evening")
