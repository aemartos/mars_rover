// Rover Object Goes Here
// ======================

var roverling = {
  name: "roverling",
  x: 0,
  y: 0,
  direction: "N",
  travelLog: []
}

// ======================

var grid = [
  [roverling, null, "unagi", null, null, null, "smelly cat", null, null, null],
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


//MOVE functions=======================

function calcMove(move, rover){

  switch (rover.direction) {
    case "N":
      if (move === "forward" && rover.y > 0) {
        rover.y--;
      } else if (move === "backward" && rover.y < 9) {
        rover.y++;
      }
      break;
    case "E":
      if (move === "forward" && rover.x < 9) {
        rover.x++;
      } else if (move === "backward" && rover.x > 0) {
        rover.x--;
      }
      break;
    case "S":
      if (move === "forward" && rover.y < 9) {
        roverling.y++;
      } else if (move === "backward" && rover.y > 0) {
        roverling.y--;
      }
      break;
    case "W":
      if (move === "forward" && rover.x > 0) {
        rover.x--;
      } else if (move === "backward" && rover.x < 9) {
        rover.x++;
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


//LOG and COMMAND functions=======================

function cooLog(rover) {
  var coo = "("+rover.x+","+rover.y+")";
  rover.travelLog.push(coo);
}

function getCommands(rover, commands){
  var prevCoo = cooLog(rover);
  console.log("Orders taken the rover outside the map will not be executed nor written in the travel log :D");
  for(var i = 0; i < commands.length; i++){
    var currentCommand = commands[i];
    switch (currentCommand) {
      case "f":
        moveForward(rover);
        prevCoo = cooLog(rover);
        break;
      case "b":
        moveBackward(rover);
        prevCoo = cooLog(rover);
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

getCommands(roverling, "rffrfflfrff");
//getCommands(roverling, "rfbrfflbfrffb");
//getCommands(roverling, "rbrblbfrffb");
//getCommands(roverling, "rrfflfffrffflfff");
console.log(roverling.travelLog);
console.log(roverling.direction);
console.log(roverling.x, roverling.y);
