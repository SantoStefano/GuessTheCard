let dilerCards = ["<img src='10.jpg'>","<img src='jack.png'>","<img src='queen.png'>","<img src='king.png'>","<img src='ace1.jpg'>"];

let cardback = "<img src='red-back_1_large-800x640.jpg'>";
let dilerResult = document.getElementById('diler');
let playerChoice = document.getElementsByClassName('player');
let out = document.getElementById('out');

document.getElementById('betting').oninput = function() {
    document.getElementById('money').innerHTML = this.value;
}
let bank = 1000;
document.querySelector('span').innerHTML = bank;

    for (i=0;i<playerChoice.length;i++) {
        playerChoice[i].onclick = function(e){
            if (document.getElementById('betting').value==0) {
                alert('Сначала сделайте ставку');
                return false;
            }
            if (document.getElementById('betting').value>bank) {
                alert('У вас столько нету!');
                return false;
            }
            let rand=Math.floor(Math.random() * dilerCards.length);
            dilerResult.innerHTML = dilerCards[rand];
            
            
            if (rand == e.target.id) {
                out.innerHTML = 'You WIN!!!';
                out.style.color = 'goldenrod';
                bank = (document.getElementById('betting').value * 2) +bank;
                document.querySelector('span').innerHTML = bank;
                setTimeout(clean,3000);
                
            }
            else {
                out.innerHTML = "You LOSE!";
                out.style.color = 'maroon';
                bank = bank - document.getElementById('betting').value;
                document.querySelector('span').innerHTML = bank; 
              setTimeout(clean,3000);  
            }
            if (bank <=0) {
                alert('Вы ВСЁ проиграли! Страница будет перезагружена');
                location.reload();
            }         
            
    }
    }
function clean() {
    out.innerHTML = '';
    dilerResult.innerHTML = cardback;
}

