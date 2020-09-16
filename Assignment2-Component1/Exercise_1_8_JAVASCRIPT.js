var show_Output = document.getElementById("screen_Click_Output");

function left_Mouse_Button_Clicked(event)
{
    let x_Coordinate = event.clientX;
    let y_Coordinate = event.clientY;

    // check for left mouse button click
    if(event.button == 0)
    {
        show_Output.style.top = y_Coordinate + "px";
        show_Output.style.left = x_Coordinate + "px";
        show_Output.style.visibility = "visible";
    }

    // check for right mouse button click
    if(event.button == 2)
    {
        show_Output.style.top = y_Coordinate + "px";
        show_Output.style.left = x_Coordinate + "px";
        show_Output.style.visibility = "visible";
    }
}

function right_Mouse_Button_Clicked(event)
{
    event.preventDefault();
}

function hideOutput(event)
{
    show_Output.style.visibility = "hidden";
}