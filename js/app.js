// Rover Object Goes Here
// ======================

var roverling = {
  x: 0,
  y: 0,
  direction: "N",
  travelLog: []
}

// ======================



//TURN functions=======================

function calcTurn(turn, rover){
  //console.log("turnLeft was called!");
  switch (roverling.direction) {
    case "N":
      if (turn === "left") {
        roverling.direction = "W";
      } else if (turn === "right") {
        roverling.direction = "E";
      }
      break;
    case "E":
      if (turn === "left") {
        roverling.direction = "N";
      } else if (turn === "right") {
        roverling.direction = "S";
      }
      break;
    case "S":
      if (turn === "left") {
        roverling.direction = "E";
      } else if (turn === "right") {
        roverling.direction = "W";
      }
      break;
    case "W":
      if (turn === "left") {
        roverling.direction = "S";
      } else if (turn === "right") {
        roverling.direction = "N";
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
  //console.log("turnLeft was called!");
  if (roverling.x <= 0 || roverling.x >= 9 || roverling.y <= 0 || roverling.y >= 9) {
    console.log("You can go off limits, sorry, try again!");
  } else {
    switch (roverling.direction) {
      case "N":
        if (move === "forward") {
          roverling.y--;
        } else if (move === "backward") {
          roverling.y++;
        }
        break;
      case "E":
        if (move === "forward") {
          roverling.x++;
        } else if (move === "backward") {
          roverling.x--;
        }
        break;
      case "S":
        if (move === "forward") {
          roverling.y++;
        } else if (move === "backward") {
          roverling.y--;
        }
        break;
      case "W":
        if (move === "forward") {
          roverling.x--;
        } else if (move === "backward") {
          roverling.x++;
        }
        break;
    }
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
  roverling.travelLog.push(coo);
}

function getCommands(rover, commands){
  var prevCoo = cooLog(rover);

  for(var i = 0; i < commands.length; i++){
    var currentCommand = commands[i];
    if (roverling.x <= 0 || roverling.x >= 9 || roverling.y <= 0 || roverling.y >= 9) {
      console.log("I can go off limits, sorry, i'm taking next order");
      commands[i] = null;
      continue;
    } else {
      switch (currentCommand) {
        case "f":
          moveBackward(rover);
          prevCoo = cooLog(rover);
          break;
        case "b":
          moveForward(rover);
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
}


//TESTING =================================

//getCommands(roverling, "rffrfflfrff");
getCommands(roverling, "rfbrfflbfrffb");
console.log(roverling.direction);
console.log(roverling.x, roverling.y);
console.log(roverling.travelLog);
