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
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            /* console.log('El usuario apreto confirmar'); */
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
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            console.log('El usuario apreto confirmar');
        }else {
            console.log('El usuario cancelo');
        }

    });
});


const btnTostada = document.querySelector('#confirmButtonText');

btnTostada.addEventListener('click', () => {
    Toastify({
        text: "This is a toast",
        duration: 5000,
        //destination: "https://github.com/apvarun/toastify-js",
        //newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){
            Swal.fire({title: 'hola'});
        } // Callback after click
      }).showToast();
})