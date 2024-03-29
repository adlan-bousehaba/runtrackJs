$(document).ready(function(){

  $("#hide").click(function(){
    console.log('hide',);
    $("#element").hide();
  });

  $("#show").click(function(){
    $("#element").show();
  });

})