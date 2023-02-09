// I am currently at mission number 5
// there are 4 elevators. I need something better for advising them

{
    init: function(elevators, floors) {
        var elevator = elevators[0];
        var elevator2 = elevators[1];


        elevator.on("idle", function () {
            elevator.goToFloor(0);
        });
        elevator2.on("idle", function () {
            elevator2.goToFloor(0);
        });

        elevator.on("floor_button_pressed", function (floorNum) {
            elevator.goToFloor(floorNum);
        });
        elevator2.on("floor_button_pressed", function (floorNum) {
            elevator2.goToFloor(floorNum);
        });


        if (elevator.destinationDirection == "up") {
            elevator.goingUpIndicator(true);
            elevator.goingDownIndicator(false);
        } else if (elevator.destinationDirection == "down") {
            elevator.goingUpIndicator(false);
            elevator.goingDownIndicator(true);
        }
        if (elevator2.destinationDirection == "up") {
            elevator2.goingUpIndicator(true);
            elevator2.goingDownIndicator(false);
        } else if (elevator2.destinationDirection == "down") {
            elevator2.goingUpIndicator(false);
            elevator2.goingDownIndicator(true);
        }
    }

    update: function(dt, elevators, floors) {
    }
}
