const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const messagesRoute = require('./routes/messages.router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

app.use('/messages', messagesRoute);

// Start listening for requests on a specific port
app.listen(port, function () {
    console.log('listening on port', port);
});
