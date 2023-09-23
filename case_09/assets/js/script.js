var current_light = -1;
var light_count = 6;
var current_direction = "RIGHT";
var intervalId = null;


const updateLight = () => {

    $(".light").css("background", "black");

    if (current_direction === "RIGHT") {
        current_light++;
        $(".light").eq(current_light).css("background", "red");
        if (current_light > 0) {
            $(".light").eq(current_light - 1).css("background", "#ffb3b3");
        }
        if (current_light === light_count - 1) {
            current_direction = "LEFT";
        }

    } else {
        current_light--;
        $(".light").eq(current_light).css("background", "red");
        $(".light").eq(current_light + 1).css("background", "#ffb3b3");
        if (current_light == 0) {
            current_direction = "RIGHT";

        }

    }
}


$('#startButton').on('click', () => {

    if (intervalId == null) {
        intervalId = setInterval(updateLight, 100);
        $('audio')[0].play();
    }

});

$('#stopButton').on('click', () => {

    clearInterval(intervalId);
    intervalId = null;

});

