// Método querySelector
const btn = document.querySelector('.btn');
btn.style.background = 'red';


// Busca pelos elementos do Formulário
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const date = document.querySelector('#date');
const msg = document.querySelector('.msg');
const msg_date = document.querySelector('.msg_date');
const userList = document.querySelector('#users');
const emailInput = document.querySelector('#email');
const msg_email = document.querySelector('.msg_email');

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
        msg.innerHTML = ' Preencha os dados.';
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
                `${nameInput.value} : ${date.value}: ${emailInput.value}`
            )
        );
        userList.appendChild(li);

        //create span
        const Span = document.createElementNS('span');
        Span.innerHTML = 'y'
        li.appendChild(Span);

        //Botão de delete
        const Excluir = document.querySelectorAll('span');
         for(let i=0; i < Excluir.length; i++){
             Excluir[i].addEventListener('click', () =>{
                 Excluir[i].parentElement.style.opacity = 0;

                 setTimeout(() =>{
                     Excluir[i].parentElement.style.display = 'none';
                     Excluir[i].parentElement.remove();
                 }, 500);

             });
         }
         //Limpar Formulário
         nameInput.value = '';
         date.value = '';
         date.getElementsByTagName('li')[0].selected = 'selected';
         nameInput.focus();
    }
}