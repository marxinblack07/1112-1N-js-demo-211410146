//-----------------------------------------------
//  the alias of document.
let doc = document;
//-----------------------------------------------
//  Variable define.
const btnReset = doc.querySelector('#reset');
const btnAll = doc.querySelectorAll('#board li');
//-----------------------------------------------
//  Functions;
let winnerCheck = (player) => {
    let p = [];
    btnAll.forEach((item)=> {
        p.push(item.classList.contains(player));
    })
    const [p1,p2,p3,p4,p5,p6,p7,p8,p9] = p;
    console.log(p);
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
let reset = () => {//   This Function will Active when the button 'Reset' has been Press.
    btnAll.forEach((item) => 
    {
        item.textContent = '+';
        item.classList = '';
    });    
}
//-----------------------------------------------
//  Event listen.
btnReset.addEventListener('click',reset);
console.log("check winner circle",winnerCheck('circle'));
console.log("check winner cross",winnerCheck('cross'));