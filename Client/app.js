

(function($){
<<<<<<< HEAD
    function getAll(e){
        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'GET',
            contentType: 'application/json',
            success: function( data, textStatus, jQxhr){
                console.log(data);
=======
    function createTable(){
        var movies = '';

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            data: $('#moviesDetails').serialize(),
            success: function( data){
                $.each(data, function(index, value) {
                    var row = $("<tr><td>" + value.Title + "</td><td>" + value.Director + "</td><td>" + value.Genre + "<td></tr>")
                    $('#movies').append(row);
                })
                
>>>>>>> 221cb449d14240f462f4140532e998553adc6b05
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
<<<<<<< HEAD

        });
       
    }

    $(document).ready( getAll );
=======
        });


    }

    $(document).ready(createTable);
>>>>>>> 221cb449d14240f462f4140532e998553adc6b05
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
            MovieId: parseInt(this["movieId"].value),
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