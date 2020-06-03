function createTable(){
    $('#movies').html('');

    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        success: function( data){
            console.log(data);
            $.each(data, function(index, value) {
                var row = $('<tr><td>' + value.title + '</td><td>' + value.director + '</td><td>' + value.genre + '<td></tr>')
                $('#movies').append(row);
            })
            
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });


}

$(document).ready(createTable);



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
    createTable();
    e.preventDefault();
}

$('#my-form').submit( processForm );



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
    createTable();
    e.preventDefault();
}

$('#update').submit( updateMovie );


   