$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();

    const answer1 = parseInt($('select#question1').val(), 10); 
    // 1:Computer, 2:games, 3:phones, 4:outside
    const answer2 = parseInt($('select#question2').val(), 10)
    // 1:freedom, 2:rigid, 3:logic, 4:dirt
    const answer3 = parseInt($('select#question3').val(), 10)
    // 1:Suit, 2:hoodie, 3:pajamas, 4:boots
    const answer4 = parseInt($('select#question4').val(), 10)
    // 1:tech, 2:writing, 3:puzzles, 4:nature
    const answer5 = parseInt($('select#question5').val(), 10)
    // 1:software, 2:game, 3:app, 4:no like
    
    if(isNaN(answer1) || isNaN(answer2) || isNaN(answer3) ||isNaN(answer4) || isNaN(answer5)){
      $('div#fail').text("Please don't leave any selections blank");
    } else {
      if((answer5 === 4 || (answer1 === 4 && answer2 === 4) || (answer2 === 4 && answer3 === 4 && answer4 === 4))){
        $('span#output').text(
          'It sounds like your interests may be geared away from working with computers! That\'s ok! Take some more time to explore coding!'
          )
        $('div#hide').hide();
        $('div#hidden').show();
      } else {
       
      }
    }

    
    
  });
});