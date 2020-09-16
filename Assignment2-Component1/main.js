//Task 1-4: Stacking Images

let top_picture="animal-image-5";

function toTop(newTop){

    let domTop = document.getElementById(top_picture).style;
    let domNew = document.getElementById(newTop).style;

    domTop.zIndex="0";
    domNew.zIndex="10";
    top_picture=newTop;
}

//Task 1-5: Function for Dice method

//function Die(color){
//    this.color=color;
//}

var path = '';

function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function defineImgPath(result) {
    switch (result) {
      case 1:
        path = "images/";
        break;
      case 2:
            path="images/";
        break;
      case 3:
            path="images/";
        break;
      case 4:
            path="images/";
        break;
      case 5:
            path="images/";
        break;
      case 6:
            path="images/";
        break;

    }
}

function changeDiceFace(result) {
    var dice = document.querySelector('#dice');
    dice.setAttribute("src", path + result + ".png");
  }

  function rollDice() {
    var result = generateRandomNumber();
    defineImgPath(result);
    changeDiceFace(result);
  
    return false;
  }

  //Task 1-6: Even and Odd Rows INCOMPLETE
  var evenClicks = 0;
	var oddClicks = 0;
	
	$(document).ready(function(){
	$("#even").click(function() {
			if(evenClicks == 0) {
				$("tr:odd").css("background-color", "green");
				evenClicks++;
			} else {
				$("tr:odd").css("background-color", "red");
				evenClicks = 0;
				}
			});
	
	$("#odd").click(function() {
			if(oddClicks == 0) {
				$("tr:even").css("font-family", "Times New Roman, Times, serif");
				oddClicks++;
			} else {
				$("tr:even").css("font-family", "Lucida Console, Courier, monospace");
				oddClicks = 0;
			}
			});
			
			
		});

//Task 1-7)

String.prototype.countDoubles = function(){

    var amount_of_doubles = 0;

    for (var i = 0; i < this.length; i++){
    
        if (this.charAt(i) === this.charAt(i + 1))
            ++amount_of_doubles;

	}

    return amount_of_doubles;

}

//Task 1-3

function times(){

    console.log(this.a);
    console.log(this.b);

    return this.a * this.b * 2 * 9;

}

 function times_click(){

        var my_nums = {a:3, b:4};

        $("#call").text(times.call(my_nums));
        $("#apply").text(times.apply(my_nums));

        var times_v2 = times.bind(my_nums);

        $("#bind").text(times_v2());

}

$(function() {

    $("#count_doubles_click").on('click', function(){
    
        $("#count_doubles_out").text($("#count_doubles").val().countDoubles());


	});

    $("#submit_nums").on('click', times_click);

});