// Rover Object Goes Here
// ======================

var roverling = {
  name: "roverling",
  x: 0,
  y: 0,
  direction: "N",
  travelLog: ["(0,0)"]
}

var roverlet = {
  name: "roverlet",
  x: 9,
  y: 0,
  direction: "S",
  travelLog: []
}

// ======================

var grid = [
  [roverling, null, "unagi", null, null, null, "smelly cat", null, null, roverlet],
  [null, null, null, null, null, null, null, null, "crap bag", null],
  [null, null, null, "central perk", null, null, null, null, null, null],
  [null, "joey", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, "umbrella", null, null, null],
  [null, null, "coffee", null, null, null, null, null, "meatloaf sandwich", null],
  [null, null, null, null, null, "dinosaur", null, null, null, null],
  ["OMG!", null, null, null, "ursula", null, null, null, null, null],
  [null, null, null, null, "gladys", null, "gunther", null, null, null],
  [null, null, null, null, null, null, null, "dollhouse", null, null]
];
//console.log(grid[0][2]);


//TURN functions=======================

function calcTurn(turn, rover){
  switch (rover.direction) {
    case "N":
      if (turn === "left") {
        rover.direction = "W";
      } else if (turn === "right") {
        rover.direction = "E";
      }
      break;
    case "E":
      if (turn === "left") {
        rover.direction = "N";
      } else if (turn === "right") {
        rover.direction = "S";
      }
      break;
    case "S":
      if (turn === "left") {
        rover.direction = "E";
      } else if (turn === "right") {
        rover.direction = "W";
      }
      break;
    case "W":
      if (turn === "left") {
        rover.direction = "S";
      } else if (turn === "right") {
        rover.direction = "N";
      }
      break;
  }
  //console.log(roverling.direction);
}

function turnLeft(rover){
  //console.log("turnLeft was called!");
  calcTurn("left", roverling);
}

function turnRight(rover){
  //console.log("turnRight was called!");
  calcTurn("right", roverling);
}


//LOG function=======================

function cooLog(rover) {
  var coordinate = "("+rover.x+","+rover.y+")";
  rover.travelLog.push(coordinate);
}


//CHECK MOV function========================

function checkMov (nextX, nextY, rover) {
  if(nextX === -1 || nextY === -1 || nextX === 10 || nextY === 10){
    console.log("Sorry, " + rover.name + " can't go to position: " + nextX + "," + nextY);
  } else {
    if(grid[nextX][nextY] === null) {
      grid[rover.x][rover.y] = null;
      grid[nextX][nextY] = rover;
      rover.x = nextX;
      rover.y = nextY;
      console.log(nextX, nextY);
      coo = cooLog(rover);
    } else if (typeof grid[nextX][nextY] === "string") {
      console.log("Wild " + grid[nextX][nextY] + " appeared!");
    }
  }
}


//MOVE functions=======================

function calcMove(move, rover){
  switch (rover.direction) {
    case "N":
      if (move === "forward") {
        checkMov(rover.x, rover.y - 1, rover);
      } else if (move === "backward") {
        checkMov(rover.x, rover.y + 1, rover);
      }
      break;
    case "E":
      if (move === "forward") {
        checkMov(rover.x + 1, rover.y, rover);
      } else if (move === "backward") {
        checkMov(rover.x - 1, rover.y, rover);
      }
      break;
    case "S":
      if (move === "forward") {
        checkMov(rover.x, rover.y + 1, rover);
      } else if (move === "backward") {
        checkMov(rover.x, rover.y - 1, rover);
      }
      break;
    case "W":
      if (move === "forward" && rover.x > 0) {
        checkMov(rover.x - 1, rover.y, rover);
      } else if (move === "backward" && rover.x < 9) {
        checkMov(rover.x + 1, rover.y, rover);
      }
      break;
  }
  //console.log(roverling.x, roverling.y);
}

function moveForward(rover){
  //console.log("moveForward was called");
  calcMove("forward", roverling);
}

function moveBackward(rover){
  //console.log("moveBackward was called");
  calcMove("backward", roverling);
}



//COMMAND function=======================

function getCommands(rover, commands){
  //console.log("Orders taken the rover outside the map will not be executed nor written in the travel log :D");
  for(var i = 0; i < commands.length; i++){
    var currentCommand = commands[i];
    switch (currentCommand) {
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      default:
        console.log("Please enter a valid order, 'f' forwards, 'b' backwards, 'r' right and 'l' left.");
        break;
    }
  }
}


//TESTING =================================

//getCommands(roverling, "rffrfflfrff");
getCommands(roverling, "rfbrfflbfrffb");
//getCommands(roverling, "rbrblbfrffb");
//getCommands(roverling, "rrfflfffrffflfff");
console.log(roverling.travelLog);
console.log(roverling.direction);
console.log(roverling.x, roverling.y);
