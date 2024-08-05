import { useEffect, useState } from "react";

export default function GamePage() {
  const tenTestBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, '*'],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, '*'],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, '*'],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, '*'],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, '*'],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, '*'],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, '*'],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, '*'],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, '*'],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, '*']
  ];

  const fourTestBoard = [
    [0, 0, 0, 0],
    [0, 'mine', 0, 0],
    [0, 0, 'mine', 0],
    [0, 0, 0, 0]
  ]

  function setupboard(board){
    //expects an input of array of arrays to relational items based on the mines placement
    for(let y = 0; y<board.length;y++){
      for(let x = 0; x<board[y].length; x++){
        console.log('test coords: y:',y, ' ,x',x,'\n testValue: ', board[y][x])
        let testCoord={x: x, y: y}
        // console.log('test coordinates: ', board[testCoord.yC+1][testCoord.xC])
        //test current coordinate is it a mine?
        let test ='' //vital piece of testing the cells
        if(board[testCoord.y][testCoord.x]=== 'mine')board[y][x] = 'mine';
        //Test for mines in cells that aren't on the border of the board
        else if(
          board[testCoord.y-1] !== undefined && 
          board[testCoord.y+1] !== undefined && 
          board[testCoord.y][testCoord.x+1] !== undefined && 
          board[testCoord.y][testCoord.x-1] !== undefined 
        ){
          // console.log('standard cell testing against: ', board[testCoord.y+1][testCoord.x+1])
          //test cells in row above:
          test = board[testCoord.y-1][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
          test = board[testCoord.y-1][testCoord.x] === 'mine'
          if(test) board[y][x] +=1
          test = board[testCoord.y-1][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1

          //test cell to left:
          test = board[testCoord.y][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
          //test cell to right:
          test = board[testCoord.y][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1

          //test cells in row below
          test = board[testCoord.y+1][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
          test = board[testCoord.y+1][testCoord.x] === 'mine'
          if(test) board[y][x] +=1
          test = board[testCoord.y+1][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1
        }
        //test for mines in cells that are in the upper left corner:
        else if(testCoord.y === 0 && testCoord.x ===0){
          //test cell to the right
          test = board[testCoord.y][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1
          //test cell below
          test = board[testCoord.y+1][testCoord.x] === 'mine'
          if(test) board[y][x] +=1
          //test cell to the lower right
          test = board[testCoord.y+1][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1
        }
        //test for mines in cells that are in the upper Right corner
        else if(testCoord.y === 0 && testCoord.x ===board[0].length-1){
          //test cell to left:
          test = board[testCoord.y][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
          //test cell to the lower left
          test = board[testCoord.y+1][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
          //test cell below
          test = board[testCoord.y+1][testCoord.x] === 'mine'
          if(test) board[y][x] +=1
        }
        //test for mines in cells that are in the Lower left corner
        else if(testCoord.y === board.length-1 && testCoord.x ===0){
          //test cell above
          test = board[testCoord.y-1][testCoord.x] === 'mine'
          if(test) board[y][x] +=1
          //test cell to the upper right
          test = board[testCoord.y-1][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1
          //test cell to the right
          test = board[testCoord.y][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1
        }
        //test for mines in cells that are in the Lower Right corner
        else if(testCoord.y === board.length-1 && testCoord.x ===board[testCoord.y].length-1){
          //test cell to the upper left
          test = board[testCoord.y-1][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
          //test cell above
          test = board[testCoord.y-1][testCoord.x] === 'mine'
          if(test) board[y][x] +=1
          //test cell to left:
          test = board[testCoord.y][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
        }
        //test for mines in cells that are on the top row
        else if(board[testCoord.y-1] === undefined ){
          //test cells in below above:
          test = board[testCoord.y+1][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
          test = board[testCoord.y+1][testCoord.x] === 'mine'
          if(test) board[y][x] +=1
          test = board[testCoord.y+1][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1
          //test cell to the  left
          test = board[testCoord.y][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
          //test cell to the right
          test = board[testCoord.y][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1
        }
        //test for mines in cells that are on the bottom row
        else if(board[testCoord.y+1] === undefined){ 
          //test cells in row above:
          test = board[testCoord.y-1][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
          test = board[testCoord.y-1][testCoord.x] === 'mine'
          if(test) board[y][x] +=1
          test = board[testCoord.y-1][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1
          //test cell to the  left
          test = board[testCoord.y][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
          //test cell to the right
          test = board[testCoord.y][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1
        }
        //test for mines in cells that are on the left column
        else if(board[testCoord.y][testCoord.x-1] === undefined){
          //test cell to the lower right
          test = board[testCoord.y+1][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1
          //test cell to the upper right
          test = board[testCoord.y-1][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1
          //test cell to the right
          test = board[testCoord.y][testCoord.x+1] === 'mine'
          if(test) board[y][x] +=1

          //test cell above:
          test = board[testCoord.y-1][testCoord.x] === 'mine'
          if(test) board[y][x] +=1
          //test cell below:
          test = board[testCoord.y+1][testCoord.x] === 'mine'
          if(test) board[y][x] +=1
        }
        //test for mines in cells that are on the right column
        else if(board[testCoord.y][testCoord.x+1] === undefined){
          //test cell to the lower left
          test = board[testCoord.y+1][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
          //test cell to the upper left
          test = board[testCoord.y-1][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1
          //test cell to the left
          test = board[testCoord.y][testCoord.x-1] === 'mine'
          if(test) board[y][x] +=1

          //test cell above:
          test = board[testCoord.y-1][testCoord.x] === 'mine'
          if(test) board[y][x] +=1
          //test cell below:
          test = board[testCoord.y+1][testCoord.x] === 'mine'
          if(test) board[y][x] +=1
        }
          
          // board[testCoord.yC+1][testCoord.xC]=== '*'
      }
    }
    console.log('final board: ', board)
    return board;
  }

  const [board, setBoard] = useState(setupboard(fourTestBoard));
  // useEffect(()=>{
  //   setupboard(fourTestBoard)
  // },[])
  return (
    <>
      <h1>MINESWEEPER</h1>
      {board.map((row) => {
        return (
          <div>{
            row.map(cell=>cell)
          }</div>
        )
      })}
    </>
  );
}
