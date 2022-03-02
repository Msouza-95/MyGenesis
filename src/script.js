let order = [];
let clickedOrder = [];
let score =0 ;

// o - green
// 1 - red 
// 2 - yellow 
// 3 - blue 

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')


// gera um ordem aleatorio de cores
let shuffleOrder = ()=>{
    let colorOrder = Math.floor(Math.round()*4);
    order[order.length] = colorOrder
    clickedOrder = []

    for( let i in order){
        let elementColor = createElementeColor(order[i])
        lighColor(elementColor, Number(i)+1)
    }
}

// acende a próxima cor

let lighColor = (element, number) =>{
    number = number * 500
    setTimeout(()=>{
        element.classList.add('selected')

    }, number -250);
    setTimeout(()=>{
        element.classList.remove('selected')
    })
}

// verificas se os botões apertados são equivalentes 
let checkOrder = () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose()
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\n Parabens Você acertou! Iniciando o próximo nível`);
        nexLevel();
    }
    
}



let click = (color)=>{
    clickedOrder[clickedOrder.length]= color;
    createElementeColor(color).classList.add('selected')
    setTimeout(()=>{
       createElementeColor(color).classList.remove('selected')
    })

    checkOrder();
}


let createElementeColor = ()=>{

    

}