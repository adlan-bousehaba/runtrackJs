$(document).ready(function(){

  $('#shuffle-button').click(function(){
    var $allImages = $('#container img');
    console.log('$allImages', $allImages);
    $allImages.sort(function(){
      return 0.5 - Math.random();
    }).appendTo('#container');
  
    console.log('$allImages2', $allImages);

  })

});