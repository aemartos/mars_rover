// Rover Object Goes Here
// ======================

var roverling = {
  direction: "N"
}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
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
  console.log(roverling.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (roverling.direction) {
    case "N":
      roverling.direction = "E"
      break;
    case "E":
      roverling.direction = "S"
      break;
    case "S":
      roverling.direction = "W"
      break;
    case "W":
      roverling.direction = "N"
      break;
  }
  console.log(roverling.direction);
}

function moveForward(rover){
  console.log("moveForward was called")
}
