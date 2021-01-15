$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    let answer1 = parseInt($('select#question1').val(), 10); 
    // 1:Computer, 2:games, 3:phones, 4:outside
    let answer2 = parseInt($('select#question2').val(), 10)
    // 1:freedom, 2:rigid, 3:logic, 4:dirt
    let answer3 = parseInt($('select#question3').val(), 10)
    // 1:Suit, 2:hoodie, 3:pajamas, 4:boots
    let answer4 = parseInt($('select#question4').val(), 10)
    // 1:tech, 2:writing, 3:puzzles, 4:nature
    let answer5 = parseInt($('select#question5').val(), 10)
    // 1:software, 2:game, 3:app, 4:no like



  });
});