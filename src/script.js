let order = [];
let clickedOrder = [];
let score = 0;

// o - green
// 1 - red 
// 2 - yellow 
// 3 - blue 

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')


// gera um ordem aleatorio de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.round() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createElementeColor(order[i]);
        lighColor(elementColor, Number(i) + 1);
    }
}

// acende a próxima cor

let lighColor = (element, number) => {

    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');

    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    } )
}

// verificas se os botões apertados são equivalentes 
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gamerOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Parabens Você acertou! Iniciando o próximo nível`);
        nextLevel();
    }

}



let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createElementeColor(color).classList.add('selected');

    setTimeout(() => {
        createElementeColor(color).classList.remove('selected');
        checkOrder();
    },250);



}


let createElementeColor = (color) => {

    if (color == 0) {
        return green;
    }
    else if (color == 1) {
        return red;
    }

    else if (color == 2) {
        return yellow;
    }

    else if (color == 3) {
        return blue;
    }


}


let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gamerOver = () => {

    alert(`A sua pontuação foi: ${score} \nInfelizmente Você perdeu o jogo \nClique em Ok para iniciar um novo jogo`)
    order = [];
    clickedOrder = [];

    playGamer();

}


let playGamer = () => {
    score = 0;
    alert('Bem vindo ao game!');

    nextLevel();
}


green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGamer();