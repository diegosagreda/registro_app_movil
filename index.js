import {
    registrarUsuario
} from "./firebase.js";

const btn_registrar = document.getElementById("btn-registrar");
const btn_cancelar = document.getElementById("btn-cancelar");


btn_registrar.addEventListener("click", () => {
    const cedula = document.getElementById("cedula").value;
    const nombres = document.getElementById("nombres").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    registrarUsuario(cedula, nombres, email, telefono, usuario, contrasena);

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
