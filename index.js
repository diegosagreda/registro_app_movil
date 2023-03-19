import {
    registrarUsuario
} from "./firebase.js";

const btn_registrar = document.getElementById("btn-registrar");
const btn_cancelar = document.getElementById("btn-cancelar");


btn_registrar.addEventListener("click", () => {
    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombres").value;
    const correo = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("contrasena").value;

    registrarUsuario(cedula,nombre,correo,telefono,username,password);

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro exitoso',
        showConfirmButton: false,
        timer: 1500
    })
    setTimeout(() => {
        window.close();
    }, 2000);
})
btn_cancelar.addEventListener("click", () => {
    window.close();
})
