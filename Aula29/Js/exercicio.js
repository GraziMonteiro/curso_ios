//Exercício 1 
function alertmes(){
    let mes = window.prompt('Informe o mês do ano'); //Objeto Window
    let h3 = document.createElement('H3');
    document.body.appendChild(h3);

    if(mes == 'Janeiro', 'Fevereiro', 'Março'){// INVERNO
        h3.innerHTML = `O mês é ${mes}. Portanto a estação do ano é Inverno`;
        h3.style.background = '#fcba03';
        h3.style.borderBottom = 'solid 2px #000';
    } else if(mes == 'Abril', 'Maio', 'Junho'){ //PRIMAVERA
        h3.innerHTML = `O mês é ${mes}. Portanto a estação do ano é Primavera`;
        h3.style.background = '#fcba03';

    } else if(mes = 'Abril',  'Maio',  'Junho'){ //PRIMAVERA
        h3.innerHTML = `O mês é ${mes}. Portanto a estação do ano é Inverno`;
        h3.style.background = '#49C526';
        h3.style.borderBottom = 'solid 2px #000';

    }else if(mes == 'Julho', 'Agosto', 'Setembro'){ //VERÂO 
        h3.innerHTML = `O mês é ${mes}. Portanto a estação do ano é Verão`;
        h3.style.background = '#fcba03';
        h3.style.borderBottom = 'solid 2px #000';

    }else(mes == 'Outono', 'Novembro', 'Dezembro') // OUTONO
        h3.innerHTML = `O mês é ${mes}. Portanto a estação do ano é Outono`;
        h3.style.background = '#fcba03';
        h3.style.borderBottom = 'solid 2px #000';
    }



