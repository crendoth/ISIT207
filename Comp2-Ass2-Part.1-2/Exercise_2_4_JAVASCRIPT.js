
var image_Options = [
    {
        href: "https://www.google.com/",
        src: "Google_Logo.jpg"
    },
    {
        href: "https://www.apple.com/au/", 
        src: "Apple_Logo.jpg"
    },
    {
        href: "https://www.microsoft.com/en-au",
        src: "Microsoft_Logo.jpg"
    },
    {
        href: "https://www.amazon.com.au/",
        src: "Amazon_Logo.jpg"
    }
];


var current_Image = 0;
var previous_Image = 0;


// function for random selection of images
function random_Image_Selection()
{
    while(true)
    {
        // a random integer from 0 to 3
        current_Image = Math.floor(Math.random() * 4);

        if(current_Image != previous_Image)
        {
            previous_Image = current_Image;
            break;
        }
    }

    return current_Image;
}




setInterval(function()
{
    $("#image_Id").animate(
       {
           height: "0px",
           width: "0px"
       }, 3000, function()
            {
                current_Image = random_Image_Selection();

                $("#image_Id").attr("src", image_Options[current_Image].src);
                $("#link_Id").attr("href", image_Options[current_Image].href);

                $(this).animate(
                {
                    height: "250px",
                    width: "250px"
                }, 3000
                );
            } 
    );
}, 6000);