$(document).ready(function() {
    $.ajax(
        {
            url: "http://localhost/Es-4-18-09-20/php-ajax-dischi/server.php",
            method: "GET",
            success: function (risposta) {
                printCD(risposta);
            },
            error: function () {
                alert("Errore");
            }
        }
    );
});

// ** FUNZIONI **
function printCD(data) {
    var source   = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    for (var i = 0; i < data.length; i++) {
        var context =
        {
            title: data[i].title,
            poster: data[i].poster,
            author: data[i].author,
            year: data[i].year
        };
        console.log(context);
        var html = template(context);
        $(".cds-container").append(html);
    }
};
