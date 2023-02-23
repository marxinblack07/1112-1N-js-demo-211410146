//-----------------------------------------------
//  the alias of document.
let doc = document;
//-----------------------------------------------
//  Variable define.
const btnReset = doc.querySelector('#reset');
const btnAll = doc.querySelectorAll('#board li');
const container = doc.querySelector('#container');
//  About games.
let circle = 'O';
let cross = 'X';
let turn = 0;
let finish = false;
//-----------------------------------------------
//  Functions;

let reset = () => {//   This Function will Active when the button 'Reset' has been Press.
    btnAll.forEach((item) => 
    {
        item.textContent = '+';
        item.classList = '';
    });  
    container.style.backgroundColor = 'rgba(102,102,102)';
    finish = false;
    turn = 0;
}
let winnerCheck = (player) => {//To determine whether the player is win. 
    let p = [];
    btnAll.forEach((item)=> {
        p.push(item.classList.contains(player));
    })
    const [p1,p2,p3,p4,p5,p6,p7,p8,p9] = p;
    console.log(p);
    //Check part.
    if( //  Landscape
        (p1 && p2 && p3) ||
        (p4 && p5 && p6) ||
        (p7 && p8 && p9) ||
        //  Portrait
        (p1 && p4 && p7) ||
        (p2 && p5 && p8) ||
        (p3 && p6 && p9) ||
        //  Incline
        (p1 && p5 && p9) ||
        (p3 && p5 && p7)
    ){
        return true;
    }
    else{
        return false;
    }
}
let winMessage = (player) => {
    if(player === 'circle')
        container.style.backgroundColor = 'rgba(144,238,144,0.5)';
    else
        container.style.backgroundColor = 'rgba(240,118,128,0.726)';
    alert(`${player} wins`);
}
//-----------------------------------------------
//  Event listen.
btnReset.addEventListener('click',reset);
btnAll.forEach((item) => {
    item.addEventListener('click',() => {   //  Event Listener.
        //  To check that whether the button has been press.
        if (item.classList.contains('disabled') == true)
            alert('This button is already filled.');
        else if (!finish)
        {
            if (turn % 2 === 0)
            {
                item.classList.add('circle','disabled');
                item.textContent = circle;
                if (winnerCheck('circle'))
                {
                    winMessage('circle');
                    finish=true;
                }
            }
            else if (turn % 2 === 1)
            {
                item.classList.add('cross','disabled');
                item.textContent = cross;
                if (winnerCheck('cross'))
                {
                    winMessage('cross');
                    finish=true;
                }
            }
            if (turn < 8)
                turn ++;
            }
        })
    });