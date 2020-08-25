    function open_Side_Panel_View()
    {
        document.getElementById("slide_panel_view_JavaScript").style.width = "220px";
    }

    function close_Side_Panel_View()
    {
        document.getElementById("slide_panel_view_JavaScript").style.width = "0";
    }

    function dropAllowed(ev1)
    {

        ev1.preventDefault();

    }

    function drag_func(ev1)
    {

        ev1.dataTransfer.setData("text", ev1.target.id);

    }

    function drop_func(ev1)
    {

        ev1.preventDefault();
        var target_data = ev1.dataTransfer.getData("text");
        ev1.target.appendChild(document.getElementById(target_data));
    }

    
    
function showPosition() {
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showMap, showError);
} else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
}
}

// Define callback function for successful attempt
function showMap(position) {
// Get location data
lat = position.coords.latitude;
long = position.coords.longitude;
var latlong = new google.maps.LatLng(lat, long);

var myOptions = {
    center: latlong,
    zoom: 16,
    mapTypeControl: true,
    navigationControlOptions: {
        style:google.maps.NavigationControlStyle.SMALL
    }
}

var map = new google.maps.Map(document.getElementById("embedMap"), myOptions);
var marker = new google.maps.Marker({ position:latlong, map:map, title:"You are here!" });
}

// Define callback function for failed attempt
function showError(error) {
if(error.code == 1) {
    result.innerHTML = "You've decided not to share your position, but it's OK. We won't ask you again.";
} else if(error.code == 2) {
    result.innerHTML = "The network is down or the positioning service can't be reached.";
} else if(error.code == 3) {
    result.innerHTML = "The attempt timed out before it could get the location data.";
} else {
    result.innerHTML = "Geolocation failed due to unknown error.";
}
}


    let items = [];

    function addToCart(product, price){
    
        var current = document.getElementById("items_html");

        var checker = false;

        for (var i = 0; i < items.length; i++){
    
            if (items[i] == product){

                checker = true;
                break;
        
            }
    
        }

        items.push(product);

        if (checker == false){
    
            var total_price_element = document.getElementById("price_total");
            var tot_price = parseFloat(total_price_element.innerHTML);
            tot_price += price;
            current.innerHTML = current.innerHTML + '<p>' + product + '<span class="price">$<section id="total_price">' + price + '</section></span></p>';
            total_price_element.innerHTML = tot_price;
        
        }
    
    }

            Storage.prototype.setObj = function(key, obj) {
                return this.setItem(key, JSON.stringify(obj))
            }
            Storage.prototype.getObj = function(key) {
                return JSON.parse(this.getItem(key))
            }

    function submit_stuff(){

        var total_price_post = parseFloat(document.getElementById("price_total").innerHTML);

        sessionStorage.setItem("Total_Price", total_price_post);
        sessionStorage.setItem("Items", items);

        window.open("Checkout_v3.html", "_self");
        
    
    }

    /*
    function validatecardnumber(cardnumber)
    {
        // Strip spaces and dashes
        cardnumber = cardnumber.replace(/[ -]/g, '');
        // See if the card is valid
        // The regex will capture the number in one of the capturing groups
        var match = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|↵
          (6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])↵
          [0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.exec(cardnumber);
        if (match)
        {
              // List of card types, in the same order as the regex capturing groups
              var types = ['Visa', 'MasterCard', 'Discover', 'American Express',
            'Diners Club', 'JCB'];
              // Find the capturing group that matched
              // Skip the zeroth element of the match array (the overall match)
            for (var i = 1; i < match.length; i++) 
            {
                if (match[i])
                {
                     // Display the card type for that group
                      document.getElementById('notice').innerHTML = types[i - 1];
                      break;
                }
            }
        }
        else
        {
              document.getElementById('notice').innerHTML = '(invalid card number)';
        }
      }	*/


      // DHTML 3
// Global variable set for offer text 
var totalCycles = 0;
var currColor = 0;
var colors, intervalID;

// Array of colors defined
function colorinit() {
    colors = ["red", "blue", "green", "pink", "orange"];
}
// Changes color one by one
function cycleColors() {
    // reset counter to 0 if it reaches 5; otherwise increment by 1
    currColor = (currColor == 5) ? 0 : ++currColor;
    // change style color to new color from array
    document.getElementById("offer").style.color = colors[currColor];
    // invoke this function again until total = 30 so it ends on red
    if (totalCycles++ < 200) {
        intervalID = setTimeout("cycleColors( )", 500);
    } else {
        clearTimeout(intervalID);
    }
}
//DHTML 4

// Global variable set for offer border
var totalCycles_1 = 0;
var currColor_1 = 0;
var classes, intervalID_1;
// Build array of rule selector names
function classinit( ) {
    classes = ["red", "blue", "green", "pink", "orange"];
}
// Advance the color by one
function cycleColors_1() {
    // reset counter to 0 if it reaches 3; otherwise increment by 1
    currColor_1 = (currColor_1 == 5) ? 0 : ++currColor_1;
    // set style color to new color from array
    document.getElementById("offer").className = classes[currColor_1];
    // invoke this function again until total = 30 so it ends on red
    if (totalCycles_1++ < 200) {
        intervalID_1 = setTimeout("cycleColors_1", 500);
    } else {
        clearTimeout(intervalID_1);
    }
}

// Function to open link a new window DHTML2
var newWindow;
// Generate and fill window with link to the product website 
function makeNewWindow() {
    if (!newWindow || newWindow.closed) {
        newWindow = window.open("https://www.samsung.com/au/tvs/qledtv-q80t/QA55Q80TAWXXY","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        // the first parameter of window.open is url 
    } else if (newWindow.focus) {
        newWindow.focus();
    }
}

//DHTML5
if (document.images) {
    //created "on" array and populated with the product listings
    var onImgArray = new Array( );
    onImgArray["first"] = new Image(200,150);
    onImgArray["second"] = new Image(150,150);
    onImgArray["third"] = new Image(150,150);
    // set URLs for the "on" product listings
    onImgArray["first"].src = "item_on/samsung-2.jpg";
    onImgArray["second"].src = "item_on/sonytv-2.jpg";
    onImgArray["third"].src ="item_on/canon-2.jpg";
     
    //create "off" array and populate with the product listings
    var offImgArray = new Array( );
    offImgArray["first"] = new Image(200,200);
    offImgArray["second"] = new Image(200,200);
    offImgArray["third"] = new Image(200,200);
    // set URLs for the "off" product listings
    offImgArray["first"].src = "item_img/samsungtv.jpg";
    offImgArray["second"].src = "item_img/sonytv.jpg";
    offImgArray["third"].src = "item_img/cannoncamera.jpg";
    
}
function imageOn(imgName) {
        document.images[imgName].src = onImgArray[imgName].src;
}
function imageOff(imgName) {
        document.images[imgName].src = offImgArray[imgName].src;
}
function setMsg(msg) {
    window.status = msg;
    return true;
}


// For DHTML 6 and 7: Product listing image chnages along with the links
var images = ["item_img/samsung-2.jpg", "item_img/samsungtv.jpg", "item_img/samsung-3.jpg",
              "item_img/samsung-4.jpg"];
             
var links = ["https://www.samsung.com/us/televisions-home-theater/tvs/qled-4k-tvs/55-class-q80t-qled-4k-uhd-hdr-smart-tv-2020-qn55q80tafxza/", "https://www.samsung.com/ae/tvs/qledtv-q80t/QA55Q80TAUXZN/", "https://www.amazon.com/Samsung-55-inch-Class-QLED-Built/dp/B084RGZ3P7",
              "https://www.harveynorman.com.au/samsung-55-inch-q80t-4k-qled-smart-tv.html",];
var i = 0;
var renew = setInterval(function changeImages(){
    	if(i==images.length) i=0;
        document.getElementById("img1").src = images[i]; 
        document.getElementById("bannerLink1").href=links[i];
        if(i+1==images.length) i=-1;
        if(i+2==images.length) i=-2;
        i+=3;

    
},1000);

// Using coupon code to validate using Listener Approach

function validate(coupon) {
    var myRe = "FREE10";
    var coupon = myRe.trim();
    var input = document.getElementById('in').value;
    if(input.toUpperCase() == coupon.toUpperCase()) {
        document.getElementById("myBtn").addEventListener("click", function() {
            alert("Coupon Applied");})
        document.getElementById('err').innerHTML="";
        return true;
    } else {
        document.getElementById("myBtn").addEventListener("click", function() {
            alert("Invalid Coupon");})
        document.getElementById('message').innerHTML="";
        return false;
    }
}
