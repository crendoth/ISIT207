// this function will generate random colors for the boxes
function random_Color_Generator(box_Obj)
{
    // randomly generate rgb color
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
    box_Obj.css("background-color", rgb);
}



// this function will move the boxes forward and backward
function move_Box(box_Style, box_Speed)
{
    let x_Coordinate = 0;
    let y_Coordinate = 15;
    let box_Angle = 0;

    let x_Coordinate_Update = box_Speed;
    let box_Angle_Update = box_Speed;

    setInterval
    (
        function()
        {
            // to move the box forward and backward
            if(x_Coordinate > 1300)
            {
                x_Coordinate_Update = (x_Coordinate_Update * -1);
                box_Angle_Update = (box_Angle_Update * -1);
            }

            if(x_Coordinate < 0)
            {
                x_Coordinate_Update = (x_Coordinate_Update * -1);
                box_Angle_Update = (box_Angle_Update * -1);
            }

            x_Coordinate = x_Coordinate + x_Coordinate_Update;
            box_Angle = box_Angle + box_Angle_Update;

            // to rotate the box
            box_Style.rotate_Box(x_Coordinate, y_Coordinate, box_Angle);
        }, 1
    );
}



$(document).ready
(
    function()
    {
        // this is the number of overlapping boxes
        var num_Box = 400;

        // to store different speeds
        var diff_Speed_Values = [];

        // a for loop to find different speed values for 400 boxes
        for(let i = 0; i < num_Box; i++)
        {
            if(i == 0)
            {
                diff_Speed_Values[i] = 1;
            }
            else
            {
                diff_Speed_Values[i] = diff_Speed_Values[i - 1] + 0.01;
            }
        }

                    
        for(let i = 0; i < num_Box; i++)
        {
            let box = 
            {
                box_Style: $('<div style = "position: absolute; background: #ff0000; top: 100px; left: 100px; height: 50px; width: 50px;"></div>')
            };

            box.box_Style.css('top', (2 * i) + 'px');

            // change the color of the box
            random_Color_Generator(box.box_Style);

            $(".div_Class").append(box.box_Style);

            // move the box and also rotate it
            move_Box(box.box_Style, diff_Speed_Values[i]);
        }


        // rotate box
        $.fn.rotate_Box = function(x_Coordinate, y_Coordinate, box_Angle)
        {
            $(this).css({'transform' : 'translate(' + x_Coordinate + 'px, ' + y_Coordinate + 'px) ' + 'rotate(' + box_Angle + 'deg)'});
            return $(this);
        }
    }
);


