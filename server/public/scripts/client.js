$(document).ready(function () {

    let templateMessages =
    {
        "messages": [{
            "id": 1,
            "name": "Welcome",
            "template": "Good {{tod}} {{name}}, and welcome to {{hotel}}! Room {{room}} is now ready for you. Enjoy your stay and let us know if you need anything."
        },
        {
            "id": 2,
            "name": "Thank you",
            "template": "{{name}}, thank you for visiting {{hotel}} and we look forward to seeing you back here next time you're in town!"
        }

        ]
    }

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

    $.getJSON("./json/templates.json", function (templatesJSON) {
        getTemplates(templatesJSON)
    });

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

        let x = templateMessages.messages;
        let welcomeTmplt = x[0].template;
        let thankyouTmplt = x[1].template;

        if (optionText == 'Welcome') {
            document.getElementById('template').innerHTML = welcomeTmplt;
        }
        else {
            document.getElementById('template').innerHTML = thankyouTmplt;
        }
    }

    $('#tmpltBtn').on('click', function loadTemplate() {

        guest = $("#guestList option:selected").text();
        hotel = $("#hotelList option:selected").text();
        room = $("#roomList option:selected").text();
        tod = $("#todList option:selected").text();


        var template = $('#template').html();
        // console.log(template);

        Mustache.parse(template);   // speeds up future uses
        var rendered = Mustache.render(template, { name: guest, hotel: hotel, room: room, tod: tod });

        $('#target').html(rendered);
    });
});