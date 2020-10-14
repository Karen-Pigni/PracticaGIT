let usuario = document.getElementById('usuario');
let small_user = document.getElementById('small_user');
let password = document.getElementById('password');
let small_pass = document.getElementById('small_pass');
let boton = document.getElementById('boton');
let small_but = document.getElementById('small_but');
let formulario = document.getElementById('formulario');

function validaUsuario(){
    if(usuario.value == '' || usuario.value == null){
        small_user.innerText = "Falta completar el campo usuario";
        return false
    }else if(usuario.value.indexOf('@', 0) == -1){
        
        small_user.innerText = "El email debe contener un @";
        return false
    }else{
        small_user.innerText = ' ';
        return true
    }
}

function validaPass(){
    if(password.value == '' || password.value == null){
        small_pass.innerText = "El campo debe estar completo";
        return false
    }else{
        small_pass.innerText = ' ';
        return true
    }
}

usuario.addEventListener("blur", validaUsuario);
password.addEventListener("blur", validaPass);

function validarForm() {
    if (validaUsuario() == false || validaPass() == false) {
        small_but.innerText = 'Algun campo es incorrecto';
        return false
    }else{
        alert("Todos los campos correctos");
        formulario.submit();
        return true
    }
}