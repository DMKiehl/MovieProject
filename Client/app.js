function createTable(){
    $('#movies').empty();
    $('#movieId').empty();

    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        success: function( data){
            console.log(data);
            $.each(data, function(index, value) {
                var row = $('<tr><td>' + value.movieId + '</td><td>' + value.title + '</td><td>' + value.director + '</td><td>' + value.genre + '<td></tr>')
                $('#movies').append(row);
                var option = $('<option></option>').val(value.movieId).html(value.movieId);
                $('#movieId').append(option);
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
    
    document.getElementById('my-form').reset();
    e.preventDefault();
    createTable();
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
    document.getElementById('update').reset();
    e.preventDefault();
}

$('#update').submit( updateMovie );


   
