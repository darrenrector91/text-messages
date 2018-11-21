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
* 

## Base Functionality
- [x] Have some sort of structure or object for working with template messages that have placeholders/variables (i.e. firstName, lastName, roomNumber, etc.) embedded in them
- [x] Load in message template information from a JSON file that you will have had created. Structure the file however you see fit
- [x] Load in guest and company information from the JSON files that we have provided
- [x] Allow the user to specify which guest and which company should be used to populate template messages.
- [x] Allow the user to either select one of the message templates that was loaded in from the JSON file or to enter in a new message
      template
- [x] Generate a final message output that is a result of populating the specified variables of the message template with the correct values
      from the other data

## Stretch Goals
- [ ] Support a greeting variable that will change based on the time of day (e.g. "Good morning" / "Good afternoon" / "Good evening")
