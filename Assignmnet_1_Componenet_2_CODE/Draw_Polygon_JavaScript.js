
var show_Current_Coordinate = document.getElementById("current_coordinate");
var show_Saved_Coordinate = document.getElementById("left_Click_Array");

// counters
var left_Click_Counter = -1;
var right_Click_Counter = -1;

// arrays
var left_Click_Coordinate_Array = [];
var right_Click_CoordinateX = [];
var right_Click_CoordinateY = [];

// object
var left_Click_Coordinate_Obj = {};

var canvas = document.getElementById("drawing_Polygon");
var ctx = canvas.getContext("2d");


// function to show the coordinates of the mouse's position in real-time
function getCoordinate(event)
{
    let x_Coordinate = event.clientX;
    let y_Coordinate = event.clientY;

    show_Current_Coordinate.innerHTML = "Current Coodinate: " + "(" + x_Coordinate + ", " + y_Coordinate + ")";
}


function mouse_Button_Clicked(event)
{
    let x_Coordinate = event.clientX;
    let y_Coordinate = event.clientY;

    // check for left click
    if(event.button == 0)
    {
        left_Click_Counter++;

        left_Click_Coordinate_Obj = {
            x: x_Coordinate,
            y: y_Coordinate
        };

        left_Click_Coordinate_Array[left_Click_Counter] = ["(" + left_Click_Coordinate_Obj.x, left_Click_Coordinate_Obj.y + ")"];

        show_Saved_Coordinate.innerHTML = "[" + left_Click_Coordinate_Array + "]";
    }

    // check for right click
    if(event.button == 2)
    {
        right_Click_Counter++;

        right_Click_CoordinateX[right_Click_Counter] = [x_Coordinate];
        right_Click_CoordinateY[right_Click_Counter] = [y_Coordinate];
    }

    if(right_Click_Counter >= 1)
    {
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(right_Click_CoordinateX[right_Click_Counter-1], right_Click_CoordinateY[right_Click_Counter-1]);
        ctx.lineTo(right_Click_CoordinateX[right_Click_Counter], right_Click_CoordinateY[right_Click_Counter]);
        ctx.strokeStyle = "blue";
        ctx.stroke();
        ctx.closePath();
    }
}

function disable_Right_Click_Menu(event)
{
    event.preventDefault();
}
