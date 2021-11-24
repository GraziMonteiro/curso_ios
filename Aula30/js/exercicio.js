// Método querySelector
const btn = document.querySelector('.btn');
btn.style.background = 'red';


// Busca pelos elementos do Formulário
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const date = document.querySelector('#date');
const itens = document.querySelector('#itens');
const msg = document.querySelector('.msg');
const msg_date = document.querySelector('.msg_date');
const userList = document.querySelector('#users');

// Método addEventListener
myForm.addEventListener('submit', onSubmit);

// Função onSubmit
function onSubmit(e) {
    e.preventDefault();

    let ano = new Date().getFullYear();
    let tempo = new Date(date.value).getFullYear();

    // console.log(nameInput.value);
    if (nameInput.value === '' || date.value === '') {
        // alert('Por favor, preencha os dados.');
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => (msg.innerHTML = '') /*msg.remove()*/, 3000);



    } else if ((ano - tempo) < 18){
        // console.log('sucess');
        date.classList.add('error');
        date.innerHTML = 'Usuário menor de idade';
        setTimeout(() => (date.innerHTML = '') /*msg.remove()*/, 3000);

    } else {
        // console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${date.value} : ${itens.value}`
            )
        );
        userList.appendChild(li);
    }
}