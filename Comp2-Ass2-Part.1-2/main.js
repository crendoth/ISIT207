//prepend

$(document).ready(function(){
  $("#btn1").click(function(){
    $("p").prepend("<b>Prepended text</b>. ");
  });
  $("#btn2").click(function(){
    $("ol").prepend("<li>Prepended item</li>");
  });
});
//animate

$(document).ready(function(){
  $("#anim1").click(function(){
    $("#mario").animate({height: "500px"});
  });
  $("#anim2").click(function(){
    $("#mario").animate({height: "100px"});
  });
});

//Show, hide, toggle

$(document).ready(function(){
  // Toggles paragraphs display
  $(".toggle-btn").click(function(){
      $(".toggle").toggle();
  });
});

$(document).ready(function(){
  // Toggles images with different speeds
  $(".toggle-btn1").click(function(){
      $("img.normal").toggle();
      $("img.fast").toggle("fast");
      $("img.slow").toggle("slow");
      $("img.very-fast").toggle(50);
      $("img.very-slow").toggle(2000);
  });
});

$(document).ready(function(){
  // Hide images with different speeds
  $(".hide-btn").click(function(){
      $("img.normal").hide();
      $("img.fast").hide("fast");
      $("img.slow").hide("slow");
      $("img.very-fast").hide(50);
      $("img.very-slow").hide(2000);
  });
  
  // Show hidden images with different speeds
  $(".show-btn").click(function(){
      $("img.normal").show();
      $("img.fast").show("fast");
      $("img.slow").show("slow");
      $("img.very-fast").show(50);
      $("img.very-slow").show(2000);
  });
});

//Using Slide effect

$(document).ready(function(){
  // Slide up displayed content
  $(".up-btn").click(function(){
      $("img.slide").slideUp();
  });
  
  // Slide down hidden content
  $(".down-btn").click(function(){
      $("img.slide").slideDown();
  });
});


//Fade in and out
$(document).ready(() => {
  $(fadetoggle).click(() => {
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(1000);
  });
  $(fadeout).click(() => {
  $("#div1").fadeOut();
  $("#div2").fadeOut(1000);
  $("#div3").fadeOut(2000);
  });
  $(fadein).click(() => {
  $("#div1").fadeIn();
  $("#div2").fadeIn("fast");
  $("#div3").fadeIn(3000);
  });
 });


 //Stop effect
 $(document).ready(function(){
  // Start animation
  $(".start-btn").click(function(){
    $("img.stop").animate({left: "+=450px"}, 2000);
  });

  // Stop running animation
  $(".stop-btn").click(function(){
    $("img.stop").stop();
  });
  
  // Start animation in the opposite direction
  $(".back-btn").click(function(){
    $("img.stop").animate({left: "-=450px"}, 2000);
  });

  // Reset to default
  $(".reset-btn").click(function(){
    $("img.stop").animate({left: "0"}, "fast");
  });
});

//callback

$(document).ready(function(){
  $(".call_back").click(function(){
      $("h1.callback, p.callback").slideToggle("slow", function(){
          alert("The slide toggle effect has completed.");
      });
  });   
});