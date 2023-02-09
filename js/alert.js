function customAlert(message, timeout=null) {
    const alert = document.createElement('div');
    const alertButton = document.createElement('button');
    alertButton.innerHTML = 'OK';
    alert.classList.add('alert');
    alert.setAttribute('style',
        `
        position: fixed; 
        top: 25vh;
        background-color: white; 
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 0.1rem solid black;
        padding: 10px;
        `
    );
    alertButton.setAttribute('style',
        `
        display: flex;
        justify-content: center;
        background-color: #3e8bff; 
        color: white; 
        border: none; 
        padding: 0.8rem; 
        border-radius: 0.5rem;
        margin-top: 0.8rem;
        `
    );
    alert.innerHTML = `<span>${message}</span>`;
    alert.appendChild(alertButton);
    alertButton.addEventListener('click', (e) => {
        alert.remove();
    });

    document.body.appendChild(alert);
};

export {customAlert};