const input = document.querySelector('input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length < Number(input.dataset.length)) {
        input.classList.add('invalid');
        return;
    };
    
    input.classList.remove('invalid')
    input.classList.add('valid');
    
}; 

