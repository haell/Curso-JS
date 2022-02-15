const form = document.querySelector("#formulario");

form.addEventListener('onSubmit', function (e) {
    e.preventDefault();

    console.log('Evento previnido.');
});