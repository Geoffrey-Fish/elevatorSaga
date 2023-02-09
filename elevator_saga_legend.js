{
    init: function(elevators, floors) {
        // Do stuff with the elevators and floors, which are both arrays of objects
    },
    update: function(dt, elevators, floors) {
        // Do more stuff with the elevators and floors
        // dt is the number of game seconds that passed since the last time update was called
    }
}
elevator.goToFloor(1);
if(elevator.currentFloor() > 2) { ... }


if(elevator.currentFloor() === 0) {
    // Do something special?
}
if(elevator.goingUpIndicator()) {
    elevator.goingDownIndicator(false);
}
if(elevator.goingDownIndicator()) {
    elevator.goingUpIndicator(false);
}
if(elevator.maxPassengerCount() > 5) {
    // Use this elevator for something special, because it's big
}
if(elevator.loadFactor() < 0.4) {
    // Maybe use this elevator, since it's not full yet?
}
if(elevator.getPressedFloors().length > 0) {
    // Maybe go to some chosen floor first?
}
if(floor.floorNum() > 3) { ... }




elevator.on("idle", function() { ... });
elevator.on("floor_button_pressed", function(floorNum) {
    // Maybe tell the elevator to go to that floor?
})
elevator.on("passing_floor", function(floorNum, direction) { ... });
elevator.on("stopped_at_floor", function(floorNum) {
    // Maybe decide where to go next?
})
floor.on("up_button_pressed", function() {
    // Maybe tell an elevator to go to this floor?
})
floor.on("down_button_pressed", function() {
    // Maybe tell an elevator to go to this floor?
})

elevator.goToFloor(3); // Do it after anything else
elevator.goToFloor(2, true); // Do it before anything else

elevator.stop();

elevator.destinationQueue = [];
elevator.checkDestinationQueue();