let userInput=prompt("Please enter a number to set the size of your drawing board. The number you enter will be used for both the length and width of the board. For example, if you enter 5, your square will be a grid of 5 by 5.");
//let userColor=prompt("What color would you like to use for drawing?"); -> Can be used if you want to let the user choose what color to draw with; for this, replace the background value "black" with the variable userColor


document.documentElement.style.setProperty("--input", userInput);

const gridContainer = document.querySelector(".grid-container");

function createGrid () {
    for (i=1; i<=userInput**2; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add("grid-item");
        //gridItem.textContent = i; //-> Can be used to check that the correct number of cells has been generated
        gridContainer.appendChild(gridItem);
    }
}

//function that generates a random RGB color and sets that color to the cell, at every mouse hover
function drawColoured() {
    const gridCells = document.querySelectorAll(".grid-item");
    console.log(gridCells);
    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mouseover", function (e) {
            let x = Math.floor((Math.random() * 255));
            let y = Math.floor((Math.random() * 255));
            let z = Math.floor((Math.random() * 255));
            e.target.style.background = `rgb(${x}, ${y}, ${z})`;
        })
    });
}

//function that sets the color black to the cell, at every hover
function drawBlack() {
    const gridCells = document.querySelectorAll(".grid-item");
    console.log(gridCells);
    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mouseover", function (e) {
            e.target.style.background = "black";
        })
    });
}

//function that sets the color black and the transparency(opacity) to 0 on all cells, then at every hover adds 10%(0.1) to the previous opacity until it reaches 100% (1)
function drawGradually() {
    const gridCells = document.querySelectorAll(".grid-item");
    console.log(gridCells);
    gridCells.forEach((gridCell) => {
        gridCell.style.background = "black";
        gridCell.style.opacity = "0";
        gridCell.addEventListener("mouseover", function (e) {
            let currentOpacity = parseFloat(e.target.style.opacity);
            if (currentOpacity < 1) {
                e.target.style.opacity = (currentOpacity + 0.1).toString();
            }
        })
    });
}

//Please uncomment the draw function that you want to run when the page loads
createGrid();
//drawBlack();
//drawColoured();
drawGradually();






/*function by Victor using RGBA drawGradually() {
    const gridCells = document.querySelectorAll(".grid-item");
    console.log(gridCells);
    gridCells.forEach((gridCell) => {
        gridCell.addEventListener("mouseover", function (e) {
            let myArr = e.target.style.background.split(",");
            myArr.pop();
            console.log(myArr);
            const CheckArray = ['rgba(0',' 0',' 0'];
            let checker = false;
            for(i=0; i<=2; i++){
                if (myArr[i] == CheckArray[i]) {
                    checker=true;
                } else {
                    checker=false;
                    break;
                }
            }
            if (checker == true) {
                let targetRGBA = e.target.style.background;
                let array = targetRGBA.split(", ");
                let transparency = array[3];
                transparency = transparency.slice(0, transparency.length-1);
                let transparencyAfter = parseFloat(transparency) + 0.1;
                if(transparencyAfter<0.9){
                console.log(transparencyAfter);
                e.target.style.background = `rgba(0,0,0,${transparencyAfter})`;
                }
            }
            else {
                e.target.style.background = "rgba(0,0,0,0.1)";
            }
        });
        }
    )
}
*/
