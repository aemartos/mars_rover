// Rover Object Goes Here
// ======================

var roverling = {
  x: 0,
  y: 0,
  direction: "N",
  travelLog: []
}

// ======================
function turnLeft(rover){
  //console.log("turnLeft was called!");
  switch (roverling.direction) {
    case "N":
      roverling.direction = "W"
      break;
    case "E":
      roverling.direction = "N"
      break;
    case "S":
      roverling.direction = "E"
      break;
    case "W":
      roverling.direction = "S"
      break;
  }
  //console.log(roverling.direction);
}

function turnRight(rover){
  //console.log("turnRight was called!");
  switch (roverling.direction) {
    case "N":
      roverling.direction = "E";
      break;
    case "E":
      roverling.direction = "S";
    case "S":
      roverling.direction = "W";
      break;
    case "W":
      roverling.direction = "N";
      break;
  }
  //console.log(roverling.direction);
}

function moveForward(rover){
  //console.log("moveForward was called")
  switch (roverling.direction) {
    case "N":
      roverling.y--;
      break;
    case "E":
      roverling.x++;
      break;
    case "S":
      roverling.y++;
      break;
    case "W":
      roverling.x--;
      break;
  }
 //console.log(roverling.x, roverling.y);
}

function moveBackward(rover){
  //console.log("moveForward was called")
  switch (roverling.direction) {
    case "N":
      roverling.y++;
      break;
    case "E":
      roverling.x--;
      break;
    case "S":
      roverling.y--;
      break;
    case "W":
      roverling.x++;
      break;
  }
  //console.log(roverling.x, roverling.y);
}

function cooLog(rover) {
  var coo = "("+rover.x+","+rover.y+")";
  roverling.travelLog.push(coo);
}

function getCommands(rover, commands){
  var prevCoo = cooLog(rover);

  for(var i = 0; i < commands.length; i++){
    var currentCommand = commands[i];

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

//getCommands(roverling, "rffrfflfrff");
getCommands(roverling, "rfbrfflbfrffb");
console.log(roverling.direction);
console.log(roverling.x, roverling.y);
console.log(roverling.travelLog);
