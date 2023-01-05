var cell;
var tile;
var game;
var score =0;
var rows = 4;
var columns = 4;
const gameBoard = document.getElementById("game")

window.onload = function(){
    setGame()
}

function setGame(){
game = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
            let tile = document.createElement("div")
            tile.classList.add("tile")
            document.getElementById("game").append(tile)
        }
    }
    setTwo();
    setTwo();
}

function updateCell(cell, num) {
    cell.innerText = "";
    cell.classList.value = "";
    cell.id = r.toString() + "-" + c.toString(); 
    cell.classList.add("cell");
    cell.style.setProperty('--x', r)
    cell.style.setProperty('--y', c)
    if (num > 0) {
        cell.innerText = num.toString();
        if (num <= 2048) {
            cell.classList.add("x"+num.toString());
        }               
    }
}

function setTwo() {
    if (!hasEmptyCell()) {
        return;
    }
    let found = false;
    while (!found) {
        //find random row and column to place a 2 in
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        if (document.getElementById(r.toString() + "-" + c.toString())=== null) {
            let cell = document.createElement("div")
            cell.classList.add("cell")
            cell.id = r.toString() + "-" + c.toString();
            cell.style.setProperty('--x', r)
            cell.style.setProperty('--y', c)
            document.getElementById("game").append(cell)
            myRandom =Math.random() > 0.5 ? 2 : 4
            if(myRandom ===2){
            cell.innerText = "2";
            cell.classList.add("x2");
            found = true;
            }
            else{
            cell.innerText = "4";
            cell.classList.add("x4");
            found = true;
            }
        }
    }
}

function hasEmptyCell() {
    let count = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) { 
            if ( document.getElementById(r.toString() + "-" + c.toString())=== null) { //at least one zero in the board
                return true;
            }
        }
    }
    return false;
}

document.addEventListener('keyup', (e) => {
    if (e.code == "ArrowLeft") {
        slideLeft();
        setTwo();
    }
    else if (e.code == "ArrowRight") {
        slideRight();
        setTwo();
    }
    else if (e.code == "ArrowUp") {
        slideUp();
        setTwo();

    }
    else if (e.code == "ArrowDown") {
        slideDown();
        setTwo();
    }
    document.getElementById("score").innerText = score;
})

function slide(element){
    for (let i = 0; i < element.length-1; i++){
        if ((getElementById(r.toString() + "-" + c.toString()) == getElementById(r.toString() + "-" + (c+1).toString()))) {
            getElementById(r.toString() + "-" + c.toString()) *= 2;
            getElementById(r.toString() + "-" + (c+1).toString()) = 0;
            score += getElementById(r.toString() + "-" + c.toString());
        }
        if(getElementById((r.toString() + "-" + c.toString()) === null ) || getElementById(r.toString() + "-" + c.toString()) === 0){
            let newNum =  getElementById(r.toString() + "-" + c.toString())
            getElementById(r.toString() + "-" + c.toString()) = getElementById(r.toString() + "-" + (c+1).toString())
            getElementById(r.toString() + "-" + (c+1).toString()) = newNum

        }
    }
}

function slideLeft() {
     for(r =0 ;r < rows; r++){
        let element = getElementById(r.toString() + "-" + c.toString())
        element = slide(element)
        getElementById(r.toString() + "-" + c.toString())= element
        for(c=0 ; c < columns; c++){
            let cell = document.getElementById(r.toString() + "-" + c.toString());
            let num = document.getElementById(r.toString() + "-" + c.toString());
            updateTile(tile, num);
        }
     }
}