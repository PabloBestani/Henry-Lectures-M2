let usersHandler = $.ajax({
    type: 'GET',
    url: 'http://localhost:5000/usuarios',
    success: usuarios
    //podria poner un callback para ejecutarse sobre lo que traiga
});

let deleteHandler = $.ajax({
    type: 'DELETE',
    url: 'http://localhost:5000/usuarios/' + idUser,
    success: 'eliminado con exito'
});


$('#botonUsers').on('click', usersHandler);
$('#botonDelete').on('click', deleteHandler);


//otra sntaxis para un GET
$.get('http://localhost:5000/usuarios/', idUser, () => {
    return; //operaciones aqui
})