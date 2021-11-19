//Exercício 1 
function alertmes(){
    let mes = window.prompt('Informe o mês do ano'); //Objeto Window
    let h3 = document.createElement('H3');
    document.body.appendChild(h3);

    if(mes = 'Janeiro, Fevereiro, Março'){// INVERNO
        h3.innerHTML = `O mês é ${mes}. Portanto a estação do ano é Inverno`;
        h3.style.background = '#26A9CA';
        h3.style.borderBottom = 'solid 2px #000';
        h3.style.color = '#ffffff';

    } else if(mes = 'Abril',  'Maio',  'Junho'){ //PRIMAVERA
        h3.innerHTML = `O mês é ${mes}. Portanto a estação do ano é Inverno`;
        h3.style.background = '#49C526';
        h3.style.borderBottom = 'solid 2px #000';

    }else if(mes = 'Julho', mes = 'Agosto', mes = 'Setembro'){ //VERÂO 
        h3.innerHTML = `O mês é ${mes}. Portanto a estação do ano é Inverno`;
        h3.style.background = '#EDF108';
        h3.style.borderBottom = 'solid 2px #000';

    }else(mes = 'Outono', mes = 'Novembro', mes = 'Dezembro'){ // OUTUBRO
        h3.innerHTML = `O mês é ${mes}. Portanto a estação do ano é Inverno`;
        h3.style.background = '#A94E1D';
        h3.style.borderBottom = 'solid 2px #000';
    }

}

