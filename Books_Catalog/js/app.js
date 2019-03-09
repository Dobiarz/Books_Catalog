document.addEventListener('DOMContentLoaded', function () {
    function allBooks() {
        $.ajax({
            url: "http://localhost:8282/books/",
            data: {},
            type: "GET",
            dataType: "json"
        }).done(function (result) {
            result.forEach(function (element, index, array) {
                var title = document.createElement('p');
                document.querySelector('body').appendChild(title);
                title.innerHTML = element.title;
                document.querySelector('body').appendChild(document.createElement('div'));
            });
        })
    };

    allBooks();

})

