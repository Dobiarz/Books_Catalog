document.addEventListener('DOMContentLoaded', function () {

    function getAllbooks() {
        $.ajax({
            url: "http://localhost:8282/books/",
            data: {},
            type: "GET",
            dataType: "json"
        }).done(function (result) {
            var booksListdiv = document.createElement('div');
            booksListdiv.setAttribute('class', 'booksList');
            document.querySelector('body').appendChild(booksListdiv);
            result.forEach(function (element, index, array) {
                var newTitle = document.createElement('p');
                document.querySelector('.booksList').appendChild(newTitle)
                var newDiv = document.createElement('div');
                document.querySelector('.booksList').appendChild(newDiv);
                newTitle.innerHTML = element.title;
                newTitle.addEventListener('click', function () {
                    $.ajax({
                        url: "http://localhost:8282/books/" + element.id,
                        data: {},
                        type: "GET",
                        dataType: "text"
                    }).done(function (result) {
                        newDiv.innerHTML = result;
                    });
                });
            });
        });
    };

    getAllbooks();

    function clearBooklist() {
        document.querySelector('.booksList').parentElement.removeChild(document.querySelector('.booksList'));

    }

    document.querySelector('[type = "button"]').addEventListener('click', function () {

        var data = {}
        document.querySelectorAll('[name]').forEach(function (element) {
            data[element.getAttribute('name')] = element.value;
        });

        $.ajax({
            url: 'http://localhost:8282/books/',
            data: JSON.stringify(data),
            type: "POST",
            contentType: "application/json",
        }).done(function () {
            clearBooklist();
            getAllbooks();
        });

    });
});