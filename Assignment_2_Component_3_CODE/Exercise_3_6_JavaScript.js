var array_Values = ["Google_Logo.jpg", "Apple_Logo.jpg", "Microsoft_Logo.jpg", "Amazon_Logo.jpg"];
var count = -1;

$.fn.slide_Element = function(array_Values)
{
    $(this).attr("src", array_Values[count]);
    $(this).animate
    (
        {
            left: $(this).attr("left")
        },
        function()
        {
            if(count == 3)
            {
                count = -1;
            }

            $(this).update_Slide_Element();
            $(this).slide_Element(array_Values);
        }
    );
}

$.fn.update_Slide_Element = function()
{
    if($(this).attr("left") == "200px")
    {
        $(this).attr("left", "0px");
    }
    else
    {
        $(this).attr("left", "200px");
    }
}

$(document).ready(function()
{
    $(".image_Class").attr("left", "200px");

    $("#start_Btn").on("click", function()
    {
        $(".image_Class").each(function()
        {
            count++;
            $(this).slide_Element(array_Values);
        });
    });

    $("#stop_Btn").on("click", function()
    {
        $(".image_Class").stop(true);
    });
});