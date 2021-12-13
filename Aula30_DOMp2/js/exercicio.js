const items = document.querySelectorAll('.item');
const ulItems = document.querySelector('#items');
const valores = document.querySelectorAll('.valor');
const span = document.querySelectorAll('span');

function promoçaododia(){
    let diaPromocao = new Date().getDay();
    let descontoPorcentagem = 0.20;

    let elementoP = document.createElement('p');
            elementoP.innerHTML = 'Promoção do dia';

    for{
        if(diaPromocao == 1){
            calDesconto(valores * descontoPorcentagem)
            items[0].appendChild(elementoP)
            return
        } 
        else if(diaPromocao == 2){
            calDesconto(valores, 0, descontoPorcentagem)
        items[1].appendChild(elementoP)
            return

        }
        else if(diaPromocao == 3){
            calDesconto(valores, 0, descontoPorcentagem)
            items[2].appendChild(elementoP)
            return
        }
        else if(diaPromocao == 4){
            calDesconto(valores, 0, descontoPorcentagem)
            items[3].appendChild(elementoP)
            return
        }
        else(diaPromocao == 5){
            calDesconto(valores, 0, descontoPorcentagem)
            items[4].appendChild(elementoP)
            return
        }
    }
}

let calDesconto = (list, ind, porcentagem) => {
    let valor = parseInt(list[ind].innerText, 10)
   let valorDesconto = valor - valor * porcentagem

    list[ind].innerText = valorDesconto
}

