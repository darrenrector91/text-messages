$(document).ready(function () {

    let templateMessages =
    {
        "messages": [{
            "id": 1,
            "name": "Welcome",
            "template": "Good {{name}}, and welcome to {{hotel}}! Room {{room}} is now ready for you. Enjoy your stay and let us know if you need anything."
        },
        {
            "id": 2,
            "name": "Thank you",
            "template": "{{firstName}}, thank you for visiting {{company}}"
        }

        ]
    }

    let guestIndexVal;

    // getTemplatesJSON();

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
    // Getting guest index value in dropdown
    $('#guestList').on('change', function findIndex() {
        console.log('in get room number');
        var guestSearch = $("#guestList option:selected").text();
        console.log(guestSearch);

        guestIndexVal = ($("#guestList").prop('selectedIndex'));
        console.log(guestIndexVal);

    });

    $.getJSON("./json/guests.json", function (rooms) {
        console.log(rooms);

        getRooms(rooms)
    });

    function getRooms(rooms) {
        let guestRoom = rooms.guests;
        console.log(guestRoom);

        for (let i = 0; i < guestRoom.length; i++) {

            let res = guestRoom[i].reservation;
            let roomNum = res.roomNumber;
            console.log(roomNum);

            $('#roomList').append(
                $('<option>' + roomNum + '</option>')
            );
        }
    }

    function getTemplatesJSON() {
        $.getJSON("./json/templates.json", function (templatesJSON) {
            getTemplates(templatesJSON)
            // console.log(templatesJSON);

        });

    }

    function getTemplates(templates) {
        let getTemplates = templates.messages;

        for (let i = 0; i < getTemplates.length; i++) {
            let id = getTemplates[i].id;
            let messages = getTemplates[i].name;

            $('#templatesList').append(
                $('<option>' + messages + '</option>'),
                // $('<button class="btn btn-primary">Submit</button>')

            );

        }
    };

    function showMessage(optionText) {
        console.log(optionText);

        if (optionText == 'Welcome') {
            $.getJSON("./json/templates.json", function (findSpecific) {
                console.log(findSpecific.messages);
            });
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
        Mustache.parse(template);   // optional, speeds up future uses
        var rendered = Mustache.render(template, { name: guest, hotel: hotel });

        $('#target').html(rendered);
    });
});

// TODO: find a way to get selected user's room number and start time