const PRICE = parseInt(Math.random() * 100);

let input = document.getElementById('price');

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        document.getElementById('validation').click();
    }
});

function justePrix() {
    let price = PRICE;
    let message = "";
    let valueOfUser = document.getElementById('price').value;
    let idResponse = document.getElementById('response');
    let idLife = document.getElementById('life');
    let life = idLife.innerHTML;
    let idGame = document.getElementById('game');
    let idGameResult = document.getElementById('game-result');
    let idResponseResult = document.getElementById('response-result');
    let idGameResultTitle = document.getElementById('game-result-title');
    let idError = document.getElementById('error');
    let titleResult = '';
    idError.innerHTML = "";
    document.getElementById('price').value = "";
    life = parseInt(life);
    valueOfUser = parseInt(valueOfUser);
    if (!isNaN(valueOfUser)) {
        if (life > 0) {
            if (price === valueOfUser) {
                titleResult = 'Fécilitation vous avez gagné !';
                message = `le prix était de ${price}\n il vous reste ${life} vies`;
                idGame.style.display = 'none';
                idGameResult.style.display = 'block';
                idGameResultTitle.innerText = titleResult;
                idResponseResult.innerText = message;
                idGameResultTitle.style.color = "green";
            } else if (valueOfUser < price) {
                message = "C'est plus !";
                life--;
            } else if (valueOfUser > price) {
                message = "C'est moins !";
                life--;
            }
            idLife.innerText = `${life}`;
            idResponse.innerText = message;
        }

    } else {
        idError.innerText = "Veuillez entrer un entier !";
    }

    if (life === 1) {
        const titleLife = document.getElementById('title-life');
        titleLife.innerHTML = `Vous avez <span style="color:red;" id="life">${life}</span> vie`;
        
    }
    if (life === 0) {
        titleResult = 'Vous avez perdu !';
        message = `Le prix était de ${price}`;
        idGame.style.display = "none";
        idGameResult.style.display = "block";
        idResponseResult.innerText = message;
        idGameResultTitle.style.color = "red";
        idGameResultTitle.innerText = titleResult;
    }
}

function restartGame() {
    window.location.reload();
}