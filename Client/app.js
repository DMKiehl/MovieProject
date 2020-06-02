(function($){
    $(document).ready(function{
        $.get("'https://localhost:44325/api/movie", function(data, status){
            var movies = '';
            $.each(data, function(key, value){
                movies += '<tr>';
                movies += '<td>' + value.title + '</td>';
                movies += '<td>' + value.director + '</td>';
                movies += '<td>' + value.genre + '</td>';
                movies += '</tr>';
            })
            $('#movies').append(movies);
    })
})(jQuery);

(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);
(function($){
    function updateMovie( e ){
        var dict = {
            MovieId: this["movieId"].value,
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'put',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#update').submit( updateMovie );
})(jQuery);

