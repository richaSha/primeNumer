//business logic
var primeFinder = function(inputData) {
  if((inputData % 4 === 0 && inputData % 100 != 0 )|| (inputData % 400 === 0)){
    return true;
  } else {
    return false;
  }
}
//user Interface logic
$(document).ready(function() {
  $('button').click(function(){
    var inputData = parseInt($('input').val());
    if(inputData == NaN){
      alert('Please Enter Numeric input');
    }else {
      result = primeFinder(inputData);
      if(result == false){
        $('.notLeapText').text('not');
      }
      $('.userResultContainer').removeClass('hide');
      $('.userInput').text(inputData);
    }
  })
})
