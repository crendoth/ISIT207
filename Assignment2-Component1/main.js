
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
  var green=false;
  var blue=false;

  $(function(){

  $("#evenButton").on("click", function(){
      $("#task2 tr:nth-child(even)").css("background-color","#FF0000");
      green= !green;
    });
$("#oddButton").on("click", function(){
 //   $("#task2 tr:nth-child(odd)").css("color",
    $("#task2 tr:nth-child(odd)").css("font-size",'20px');
 //   $("#task2 tr:nth-child(odd)").addClass((blue);
  //  $("#task2 tr:nth-child(odd)").removeClass((blue);

});

  })
  //Task 1-6: Count Doubles INCOMPLETE
  String.prototype.CountDouble=function(){
      var count=0;
      for (var i=0;i<this.length;i++){
          if(this.charAt(i)==this.charAt(i+1)){
              count++;
          }
      }
      return count;
  }