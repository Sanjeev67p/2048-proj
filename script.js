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

function setupInput(){
    window.addEventListener("keydown", handleInput, { once: true})
}

function handleInput(e){
    switch (e.key){
        case "ArrowUp":
            moveUp()
            break
        case "ArrowDown":
            moveDown()
            break
        case "ArrowLeft":
            moveLeft()
            break
        case "ArrowRight":
            moveRight()
            break
        default:
            setupInput()
            return
    }
    setupInput()
}

function slide(element){
    for (let i = 0; i < element.length-1; i++){
        if ((getElementById(r.toString() + "-" + c.toString()) == getElementById(r.toString() + "-" + (c+1).toString()))) {
            getElementById(r.toString() + "-" + c.toString()) *= 2;
            getElementById(r.toString() + "-" + (c+1).toString()) = 0;
            score += getElementById(r.toString() + "-" + c.toString());
        }
        elseif(getElementById((r.toString() + "-" + c.toString()) === 0 ) || getElementById(r.toString() + "-" + c.toString()) === null){
            let newNum =  getElementById(r.toString() + "-" + c.toString())
            getElementById(r.toString() + "-" + c.toString()) = getElementById(r.toString() + "-" + (c+1).toString())
            getElementById(r.toString() + "-" + (c+1).toString()) = newNum

        }
    }
}

function moveLeft() {
    let r = 0
    let c = 0
     for(r ;r < rows; r++){
        let element = getElementById(r.toString() + "-" + c.toString())
        element = slide(element)
        getElementById(r.toString() + "-" + c.toString())= element
        for(c; c < columns; c++){
            let cell = document.getElementById(r.toString() + "-" + c.toString());
            let num = document.getElementById(r.toString() + "-" + c.toString());
            updateTile(tile, num);
        }
     }
}