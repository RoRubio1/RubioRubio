/* const boton1 = document.querySelector('#boton1'); */

const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const boton4 = document.getElementById('boton4');
const boton5 = document.getElementById('boton5');
const boton6 = document.getElementById('boton6');
const boton7 = document.getElementById('boton7');
const boton8 = document.getElementById('boton8');

boton1.addEventListener('click', () => {
    Swal.fire({
        title: 'Agregar articulo',
        text: '¿Deseas agregar este articulo al carrito?',
        icon: 'success',
        confirmButtonText: 'Agregar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        showCloseButton:true,
        footer: '<a href="https://coderhouse.com>Link a coder</a>'
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            console.log('El usuario apreto confirmar');
        }else {
            console.log('El usuario cancelo');
        }

    });
});

boton2.addEventListener('click', () => {
    Swal.fire({
        title: 'Agregar articulo',
        text: '¿Deseas agregar este articulo al carrito?',
        icon: 'success',
        confirmButtonText: 'Agregar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        showCloseButton:true,
        footer: '<a href="https://coderhouse.com>Link a coder</a>'
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            console.log('El usuario apreto confirmar');
        }else {
            console.log('El usuario cancelo');
        }

    });
});


boton3.addEventListener('click', () => {
    Swal.fire({
        title: 'Agregar articulo',
        text: '¿Deseas agregar este articulo al carrito?',
        icon: 'success',
        confirmButtonText: 'Agregar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        showCloseButton:true,
        footer: '<a href="https://coderhouse.com>Link a coder</a>'
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            console.log('El usuario apreto confirmar');
        }else {
            console.log('El usuario cancelo');
        }

    });
});


boton4.addEventListener('click', () => {
    Swal.fire({
        title: 'Agregar articulo',
        text: '¿Deseas agregar este articulo al carrito?',
        icon: 'success',
        confirmButtonText: 'Agregar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        showCloseButton:true,
        footer: '<a href="https://coderhouse.com>Link a coder</a>'
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            console.log('El usuario apreto confirmar');
        }else {
            console.log('El usuario cancelo');
        }

    });
});


boton5.addEventListener('click', () => {
    Swal.fire({
        title: 'Agregar articulo',
        text: '¿Deseas agregar este articulo al carrito?',
        icon: 'success',
        confirmButtonText: 'Agregar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        showCloseButton:true,
        footer: '<a href="https://coderhouse.com>Link a coder</a>'
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            console.log('El usuario apreto confirmar');
        }else {
            console.log('El usuario cancelo');
        }

    });
});


boton6.addEventListener('click', () => {
    Swal.fire({
        title: 'Agregar articulo',
        text: '¿Deseas agregar este articulo al carrito?',
        icon: 'success',
        confirmButtonText: 'Agregar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        showCloseButton:true,
        footer: '<a href="https://coderhouse.com>Link a coder</a>'
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            console.log('El usuario apreto confirmar');
        }else {
            console.log('El usuario cancelo');
        }

    });
});


boton7.addEventListener('click', () => {
    Swal.fire({
        title: 'Agregar articulo',
        text: '¿Deseas agregar este articulo al carrito?',
        icon: 'success',
        confirmButtonText: 'Agregar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        showCloseButton:true,
        footer: '<a href="https://coderhouse.com>Link a coder</a>'
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            console.log('El usuario apreto confirmar');
        }else {
            console.log('El usuario cancelo');
        }

    });
});


boton8.addEventListener('click', () => {
    Swal.fire({
        title: 'Agregar articulo',
        text: '¿Deseas agregar este articulo al carrito?',
        icon: 'success',
        confirmButtonText: 'Agregar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        showCloseButton:true,
        footer: '<a href="https://coderhouse.com>Link a coder</a>'
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            console.log('El usuario apreto confirmar');
        }else {
            console.log('El usuario cancelo');
        }

    });
});


/* const boton2 = document.querySelector('#boton2');
const boton3 = document.querySelector('#boton3');
const boton4 = document.querySelector('#boton4');
const boton5 = document.querySelector('#boton5');
const boton6 = document.querySelector('#boton6');
const boton7 = document.querySelector('#boton7');
const boton8 = document.querySelector('#boton8');


function mostrarMensaje() {
    alert('¿Deseas agregar el producto al carrito?');
}


boton1.addEventListener('click', mostrarMensaje);
boton2.addEventListener('click', mostrarMensaje);
boton3.addEventListener('click', mostrarMensaje);
boton4.addEventListener('click', mostrarMensaje);
boton5.addEventListener('click', mostrarMensaje);
boton6.addEventListener('click', mostrarMensaje);
boton7.addEventListener('click', mostrarMensaje);
boton8.addEventListener('click', mostrarMensaje); */
