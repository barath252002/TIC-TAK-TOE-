var turns = 9;
let cells = document.querySelectorAll('.cell');
var verify = 0;
cells = Array.from(cells)
let currentPlayer = "X";

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function checkForWinner() {
    winningCombinations.forEach(function (combination) {
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer) //returns true or false
        if (check) {


            // var a = document.createElement("img");
            // a.src = 'second.gif';
            // // a.width = 100;
            // // a.height = 100;
            // a.alt = 'JavaScriptImage';
            // (document.body.appendChild(a));


            highlightCells(combination);
            //console.log("123 hello");
            document.getElementById("image-holder").innerHTML = "<img src='second.gif' alt='The Image' />";
            alert("👑🤑" + currentPlayer + " has won🎉🎊")

            // alert(document.getElementById("winning_gif"));

            window.setInterval('refresh()', 2000);

            verify = 1;
        }

    })

}
function refresh() {
    location.reload();
}
function highlightCells(combination) {
    combination.forEach(function (idx) {
        cells[idx].classList.add("highlight");
    })
}

cells.forEach(function (cell) {
    document.getElementById('music')
    cell.addEventListener('click', function () {
        if (cell.innerText.trim() != "") return;
        cell.innerText = currentPlayer;
        checkForWinner();

        turns -= 1;
        currentPlayer = currentPlayer == "X" ? "O" : "X";
        checkForDraw();
    })
})

function checkForDraw() {
    if (turns == 0 && verify == 0) {
        alert("😒Draw match🤧");
        window.setInterval('refresh()', 2000);

    }
}


