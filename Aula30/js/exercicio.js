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
const itens = document.getElementById('item');

// Método addEventListener
myForm.addEventListener('submit', onSubmit);

// Função onSubmit
function onSubmit(e) {
    e.preventDefault();

    let ano = new Date().getFullYear();
    let tempo = new Date(date.value).getFullYear();

    // console.log(nameInput.value);
    if (nameInput.value === '' || date.value === '') {
         alert('Por favor, preencha os dados.');
        msg.classList.add('error');
        msg.innerHTML = ' Preencha os dados.';
        setTimeout(() => (msg.innerHTML = '') /*msg.remove()*/, 3000);

    } else if ((ano - tempo) < 18){
        alert('Usuário menor de idade');
         
    } else {
         console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${date.value}`
            )
        );
        userList.appendChild(li);

        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'x'
        li.appendChild(mySpan);
        
        //Botão deletar
        const close = document.querySelectorAll('span');
            for(let i=0; i < close.length; i++){
                close[i].addEventListener('click', () =>{
                    close[i].parentElement.style.opacity = 0;
                    
                    setTimeout(() =>{
                        close[i].parentElement.style.display = 'none';
                        close[i].parentElement.remove();
        
                    }, 500);
                });
            }
             //Limpar o formulário
                nameInput.value = '';
                date.value = '';
                date.getElementsByTagName('li')[0].selected = 'selected';
                nameInput.focus(); //Coloca o foco no elmento

    }
}

/*function excluir(){
    itens.parentNode.removeChild(itens);
    return false
}*/