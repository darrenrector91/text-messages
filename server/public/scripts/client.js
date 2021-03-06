$(document).ready(function () {

    let templateMessages =
    {
        "messages": [{
            "id": 1,
            "name": "Welcome",
            "template": "Good {{time_of_day}} {{name}}, and welcome to {{hotel}}! Room {{room}} is now ready for you. Enjoy your stay and let us know if you need anything."
        },
        {
            "id": 2,
            "name": "Thank you",
            "template": "{{firstName}}, thank you for visiting {{company}}"
        }

        ]
    }

    getTemplatesJSON();

    $('#selectTemplateBtn').on('click', function () {
        var optionText = $("#templatesList option:selected").text();
        showMessage(optionText);

        return false;

    });

    $.getJSON("./json/guests.json", function (guests) {
        getGuests(guests)
    });

    function getGuests(guests) {
        let getGuests = guests.guests;

        for (let i = 0; i < getGuests.length; i++) {
            let firstName = getGuests[i].firstName;
            let lastName = getGuests[i].lastName;

            $('#guestList').append(
                $('<option>' + firstName + " " + lastName + '</option>')
            );
        }
    }

    $.getJSON("./json/hotels.json", function (hotels) {
        getHotel(hotels)
    });

    function getHotel(hotels) {
        let getHotels = hotels.hotels;

        for (let i = 0; i < getHotels.length; i++) {
            let hotelName = getHotels[i].company;

            $('#hotelList').append(
                $('<option>' + hotelName + '</option>')
            );
        }
    }

    $.getJSON("./json/guests.json", function (rooms) {
        getRooms(rooms)
    });

    function getRooms(rooms) {
        let guestRoom = rooms.guests;

        for (let i = 0; i < guestRoom.length; i++) {

            let res = guestRoom[i].reservation;
            let roomNum = res.roomNumber;

            $('#roomList').append(
                $('<option>' + roomNum + '</option>')
            );
        }
    }

    function getTemplatesJSON() {
        $.getJSON("./json/templates.json", function (templatesJSON) {
            getTemplates(templatesJSON)
        });
    }

    function getTemplates(templates) {
        let getTemplates = templates.messages;

        for (let i = 0; i < getTemplates.length; i++) {
            let messages = getTemplates[i].name;

            $('#templatesList').append(
                $('<option>' + messages + '</option>'),
            );
        }
    };

    function showMessage(optionText) {

        if (optionText == 'Welcome') {

            let x = templateMessages.messages;
            let welcomeTmplt = x[0].template;
            document.getElementById('template').innerHTML = welcomeTmplt;
        }
        else {
            document.getElementById("message").innerHTML = "Test 2"
        }
    }

    $('#tmpltBtn').on('click', function loadTemplate() {

        guest = $("#guestList option:selected").text();
        hotel = $("#hotelList option:selected").text();
        room = $("#roomList option:selected").text();

        var template = $('#template').html();
        console.log(template);

        Mustache.parse(template);   // optional, speeds up future uses
        var rendered = Mustache.render(template, { name: guest, hotel: hotel, room: room });

        $('#target').html(rendered);
    });

    // TODO: find a way to get selected user's room number and start time

    // start = guestResponse.reservation;
    // tod = start.startTimestamp;

    // let convert = tod * 1000;
    // let time = new Date(convert).toLocaleTimeString('en-US', { hour12: false });
    // var hours = Number(time.match(/^(\d+)/)[1]);

    // let visitTime = '';

    // if (hours < 12) {
    //     visitTime = 'Morning'
    // } else if (hours >= 12 && hours <= 17) {
    //     visitTime = 'Afternoon'
    // } else {
    //     visitTime = 'Evening'
    // }
    // self.visit = visitTime;
});