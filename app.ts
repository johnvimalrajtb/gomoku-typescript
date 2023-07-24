import { BOARD_SIZE } from "./consts";
function main() {
  // <div class="board" id="board" style="width: 400px; height: 400px;"></div>

  let board = document.createElement("div");
  board.className = "board";
  board.id = "board";
  board.style.width = "400px";
  board.style.height = "400px";

  for (let index = 0; index < BOARD_SIZE; index++) {
    let row = document.createElement("div");

    row.className = "boardRow";
    for (let index = 0; index < BOARD_SIZE; index++) {
        let boardCol = document.createElement("div");
        boardCol.className = "boardCol";
        let cell = document.createElement("div");
        cell.className = "boardCellBlack";
        boardCol.appendChild(cell);
        row.appendChild(boardCol);
    }
    board.appendChild(row);
  }
  let panel = document.getElementById("panel-body");
  if (panel != null) panel.appendChild(board);
}

main();
