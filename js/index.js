document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const buttonText = document.getElementById('buttonText');

    buttonText.addEventListener('click', () => {
        const data = inputText.value;
        if (data) {
            localStorage.setItem('storedData', data);
            alert('Dato guardado con éxito'); // Puedes cambiarlo por otra notificación si prefieres
            inputData.value = ''; // Limpiar el campo de entrada después de guardar
        } else {
            alert('Por favor, ingrese algún dato');
        }
    });
});