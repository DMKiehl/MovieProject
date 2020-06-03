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
    var data = {
        Title : this["title"].value,
        Director: this["director"].value,
        Genre: this["genre"].value
    };

    $.ajax({
        url: 'https://localhost:44325/api/movie',
        dataType: 'text',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function( data, textStatus, jQxhr ){
            $('#response pre').html( data );
            
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
       
    }).then(function(){
        createTable();
    });

    document.getElementById('my-form').reset();
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
        dataType: 'text',
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

function getById(){
    var id = $('#movieId').val();
    var movie = '';
    $.ajax({
        url: 'https://localhost:44325/api/movie/' + id,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        success: function( data, textStatus, jQxhr ){
            movie = data;
            console.log(movie);
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
    return movie;
}

function changeInput(){
    let selected = getById();
    $('#update-title').val(selected.title);
    $('#update-director').val(selected.director);
    $('#update-genre').val(selected.genre);
}

$('#movieId').change(changeInput);

   
