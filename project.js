let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn =  document.querySelector("#new-btn");
let msgcontainer =  document.querySelector(".msg-container");
let msg =  document.querySelector("#msg");


let turnO = true;

const winpattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turnO = true;
    enableBoxes ();
    msgcontainer.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click", ( ) => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO="true";
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = 'Congratulation, Ajay won';
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner =  () => {
    for(let pattern of winpattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner... ",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);