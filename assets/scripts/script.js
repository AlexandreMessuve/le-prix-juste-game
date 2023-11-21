let temp = parseInt(Math.random()* 100);
const PRICE = priceValue(temp);
let input = document.getElementById('price');

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        document.getElementById('validation').click();
    }
});

function priceValue(price){
    if(price === 0){
        return 1;
    }else{
        return price;
    }
}

//fonction qui permet de retourner la couleur a mettre sur la vie
function getColor(life) {
    if (life > 6) return "blue";
    if (life > 4) return "green";
    if (life > 2) return "orange";
    if (life <= 2) return "red";
    return "";
}

//fonction qui modifie la couleur et le nombre de vie
function updateLife(life, color) {
    const titleLife = document.getElementById('title-life');
    titleLife.innerHTML = `Vous avez <span style="color:${color};" id="life">${life}</span> ${life > 1 ? 'vies' : 'vie'}`;
}

//fonction qui envoie le message de fin de jeu
function endGame(message, color, title) {
    const idGame = document.getElementById('game');
    const idGameResult = document.getElementById('game-result');
    const idResponseResult = document.getElementById('response-result');
    const idGameResultTitle = document.getElementById('game-result-title');

    idGame.style.display = "none";
    idGameResult.style.display = "block";
    idResponseResult.innerText = message;
    idGameResultTitle.style.color = color;
    idGameResultTitle.innerText = title;
}

function justePrix() {
    let message = "";
    let valueOfUser = parseInt(document.getElementById('price').value);
    let life = parseInt(document.getElementById('life').innerHTML);
    const idResponse = document.getElementById('response');
    const idError = document.getElementById('error');

    idError.innerHTML = "";
    document.getElementById('price').value = "";

    if (isNaN(valueOfUser)) {
        idError.innerText = "Veuillez entrer un entier !";
        return;
    }

    if (PRICE === valueOfUser) {
        message = `le prix était de ${PRICE}\n il vous reste ${life} ${life > 1 ? 'vies' : 'vie'}`;
        endGame(message, "green", 'Fécilitation vous avez gagné !');
        return;
    }

    message = valueOfUser < PRICE ? "C'est plus !" : "C'est moins !";
    life--;
    if (life <= 0) {
        endGame(`Le prix était de ${PRICE}`, "red", 'Vous avez perdu !');
        return;
    }
    const color = getColor(life);
    updateLife(life, color);
    idResponse.innerText = message;
}

function restartGame() {
    window.location.reload();
}