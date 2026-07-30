let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let mesgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-game");

let turnO = true; 
const winPatterns = [
           [0,1,2],
           [3,4,5],
           [6,7,8],
           [0,3,6],
           [1,4,7],
           [2,5,8],
           [0,4,8],
           [2,4,6],
          ];
            
          const resetGame = () => {
            turnO = true;
            enableBoxes();
            mesgContainer.classList.add("hide");
          }

  boxes.forEach((box) => {
      box.addEventListener("click", () =>{
          // console.log("box was clicked");
      if (turnO){
          box.innerText ="O";
          box.style.color = "green";
          turnO = false;
        } else {
          box.innerText = "X";
          box.style.color = "#ce462e";
          turnO = true;
        }

        box.disabled = true;
        checkWinner();
      });
    });

    const disableBoxes = () => {
      for(let box of boxes){
        box.disabled = true;
      }
    }

       const enableBoxes = () => {
      for(let box of boxes){
      box.disabled = false;
      box.innerText = "";
      }
    }

    const showWinner = (winner) => {
     msg.innerText = `Congrutulations, winner is ${winner}`;
     mesgContainer.classList.remove("hide");
       disableBoxes();
    }

    const checkWinner =  () => {
    for (pattern of winPatterns) {
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;

      if(pos1val != ""&& pos2val != ""&& pos3val != "")
        if (pos1val == pos2val && pos2val == pos3val){
          // console.log("winner is", pos1val);
          showWinner(pos1val);
        }
    }
    }
    newGameBtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);
    

