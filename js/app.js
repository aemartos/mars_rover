// Rover Object Goes Here
// ======================

var roverling = {
  name: "roverling",
  y: 0,
  x: 0,
  direction: "N",
  travelLog: ["(0,0)"],
  myTurn: true
};

var roverlet = {
  name: "roverlet",
  y: 9,
  x: 9,
  direction: "S",
  travelLog: ["(9,9)"],
  myTurn: false
};

var rovers = [roverling, roverlet];

// ======================

var grid = [
  [roverling, null, "unagi", null, null, null, "smelly cat", null, null, null],
  [null, null, null, null, null, null, null, null, "crap bag", null],
  [null, null, null, "central perk", null, null, null, null, null, null],
  [null, "joey", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, "coffee", null, null, null, null, null, "meatloaf sandwich", null],
  [null, null, null, null, null, "dinosaur", null, null, null, null],
  ["umbrella", null, null, null, "ursula", null, null, null, null, null],
  [null, null, null, null, "gladys", null, "gunther", null, null, null],
  [null, null, null, null, null, null, null, "dollhouse", null, roverlet]
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
  calcTurn("left", rover);
}

function turnRight(rover){
  //console.log("turnRight was called!");
  calcTurn("right", rover);
}


//LOG function=======================

function cooLog(rover) {
  var coordinate = "("+rover.x+","+rover.y+")";
  rover.travelLog.push(coordinate);
}

// REGISTER ALL===
// function cooLog(rover) {
//   var coordinate = "";
//   if (grid[rover.x][rover.y] === null) {
//     coordinate = "("+rover.x+","+rover.y+")";
//   } else if (typeof grid[rover.x][rover.y] === 'string') {
//     coordinate = " " + grid[rover.x][rover.y];
//   } else if (grid[rover.x][rover.y] !== null && grid[rover.x][rover.y] !== 'string') {
//     coordinate = " " + grid[rover.x][rover.y].name;
//   }
//   rover.travelLog.push(coordinate);
// }


//CHECK MOV function========================

function checkMov (nextX, nextY, rover) {
  if(nextX === -1 || nextY === -1 || nextX === 10 || nextY === 10){
    console.log("Sorry, " + rover.name + " can't go to position: " + nextX + "," + nextY + ", it's off limits!");
  } else {
    if (grid[nextX][nextY] === null) {
      grid[rover.x][rover.y] = null;
      grid[nextX][nextY] = rover;
      rover.x = nextX;
      rover.y = nextY;
      console.log(nextX, nextY);
      coo = cooLog(rover);
    } else if (typeof grid[nextX][nextY] === 'string') {
      console.log("Wild " + grid[nextX][nextY] + " appeared!");
    } else if (grid[nextX][nextY] !== null && grid[nextX][nextY] !== 'string') {
      console.log(grid[nextX][nextY].name + " is here, try find another place!");
    }
    //coo = cooLog(rover);
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
        if (move === "forward") {
          checkMov(rover.x - 1, rover.y, rover);
        } else if (move === "backward") {
          checkMov(rover.x + 1, rover.y, rover);
        }
        break;
    }
  //console.log(roverling.x, roverling.y);
}

function moveForward(rover){
  //console.log("moveForward was called");
  calcMove("forward", rover);
}

function moveBackward(rover){
  //console.log("moveBackward was called");
  calcMove("backward", rover);
}


//COMMAND function=======================

function getCommands(rover, commands){
  //console.log("Orders taken the rover outside the map will not be executed nor written in the travel log :D");
  for(var i = 0; i < commands.length; i++){
    var currentCommand = commands[i];
    //if (rover.myTurn === true) {
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
          console.log("Can't read: '" + commands[i] + "' command, try with: 'f' forwards, 'b' backwards, 'r' right and 'l' left.");
          break;
      }
    //   rover.myTurn = false;
    // } else {
    //   rover.myTurn = true;
    // }
  }
}

//TESTING =================================

getCommands(roverlet, "rfffff");
getCommands(roverling, "rffffrfffffffff");


//getCommands(roverling, "rrfflfffrffflfff");
//getCommands(roverling, "rfbrfflbfrtffb");

//getCommands(roverlet, "rffrfflfrff");
//getCommands(roverlet, "rbrblbfrffb");



//PRINTING MOVEMENTS================

function printMovements(){
  for (var rover in rovers) {
    console.log(rovers[rover].name + "'s travel log is: " + rovers[rover].travelLog);
    console.log("last " + rovers[rover].name + " direction: " + rovers[rover].direction);
    console.log("last " + rovers[rover].name + " position: " + "(" + rovers[rover].x + "," + rovers[rover].y + ")");
  }
}

printMovements();
