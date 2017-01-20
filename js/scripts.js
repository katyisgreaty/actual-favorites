

var pushIntoArrays = function(a, b, c){
  var favoriteArray = [];

  favoriteArray.push(a);
  favoriteArray.push(b);
  favoriteArray.push(c);
  return favoriteArray;
};

//Front end logic
$(document).ready(function(){
  $("#input").submit(function(event) {
    event.preventDefault();

    var userInput1 = $("#input1").val();
    var userInput2 = $("#input2").val();
    var userInput3 = $("#input3").val();

    var results = pushIntoArrays(userInput1, userInput2, userInput3);
    $(".result").text(results.join(", "));
  });
});
