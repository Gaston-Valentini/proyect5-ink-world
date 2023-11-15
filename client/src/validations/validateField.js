export const validateField = (nombre, valor) => {
    switch (nombre) {
        case "name":
            var regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(valor);
            return regex ? true : "El nombre solo debe contener letras";
        case "surname":
            var regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(valor);
            return regex ? true : "El apellido solo debe contener letras";
        case "email":
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
            return regex
                ? true
                : "Escriba un formato de correo electrónico válido";
        case "password":
            var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(valor);
            return regex
                ? true
                : "La contraseña debe tener al menos 8 caracteres, una letra y un número";
        case "phone":
            var regex = /^\d{9}$/.test(valor);
            return regex ? true : "Número de teléfono inválido";
        default:
            return true;
    }
};
