function gerar(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * (max - 1)) + 1;
    }
    
    let classe = document.querySelector('#classe')
    let raca = document.querySelector('#raca')
    
    let num1 = getRandomInt(118)
    let num2 = getRandomInt(81)
    
    classe.innerText = 'Classe: ' + num1
    raca.innerText = 'Raça: ' + num2
}