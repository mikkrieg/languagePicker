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
    }

    if(answer1 != 4){
      console.log(answer1)
    } else {
      $('span#output').text('It sounds like you may be interested in other things!')
      $('div#hide').hide();
      $('div#hidden').show();
    }
    
  });
});