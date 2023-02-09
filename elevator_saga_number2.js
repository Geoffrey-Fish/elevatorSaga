{
    init: function (elevators, floors) {

        for (var i = 0; i < elevatorss.length; i++) {
            elevators[i].on("idle", function () {
                elevators[i].goToFloor(0);
            });
            if (elevators[i].destinationDirection === "up") {
                elevators[i].goingUpIndicator(true);
                elevators[i].goingDownIndicator(false);
            }
            else if (elevators[i].destinationDirection === "down") {
                elevators[i].goingUpIndicator(false);
                elevators[i].goingDownIndicator(true);
            };
            elevators[i].destinationQueue.push(elevators[i].getPressedFloors());
            elevators[i].checkDestinationQueue();
            elevators[i].goToFloor(elevators[i].destinationQueue[0]);
            elevators[i].destinationQueue.shift();
            elevators[i].checkDestinationQueue();
        }
    };
    update: function (dt, elevatorss, floors) {
    }
}
