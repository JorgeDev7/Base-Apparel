const form = document.querySelector('form');
const input = document.querySelector('#email');
const imgError = document.querySelector('#img-error');

form.addEventListener('submit', enviarEmail);
input.addEventListener('input', validarInput);

// Validar envio del email
function enviarEmail(e) {
    e.preventDefault();

    if ([input.value].includes('')) {
        mostrarAlert('Field Empty, Can Not Send The Email!', input.parentElement);
        imgError.classList.remove('hidden');
        return;
    }

    form.reset();
}


// Validar input
function validarInput(e) {
    const value = e.target.value;
    const valueParent = e.target.parentElement;

    limpiarAlerta(valueParent);

    if (value.trim() === '') {
        mostrarAlert('Field Empty!', valueParent);
        imgError.classList.remove('hidden');
        return;
    }

    if (e.target.id === 'email' && !validarEmail(value)) {
        mostrarAlert('Please provide a valid email', valueParent);
        imgError.classList.remove('hidden');
        return;
    }

    input.classList.add('border-desaturated-red', 'border');
    input.classList.remove('border-soft-red', 'border-2');
    imgError.classList.add('hidden');
}


function mostrarAlert(msg, ref) {

    limpiarAlerta(ref);

    const alerta = document.createElement('P');
    alerta.textContent = msg;
    alerta.classList.add('text-soft-red', 'pl-5', 'pt-2', 'text-xs', 'error');
    input.classList.remove('border-desaturated-red', 'border');
    input.classList.add('border-soft-red', 'border-2');

    ref.appendChild(alerta);
}

function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const res = regex.test(email);

    return res;
}

function limpiarAlerta(ref) {
    const alertaLimpia = ref.querySelector('.error');
    if (alertaLimpia) {
        alertaLimpia.remove();
    }
}