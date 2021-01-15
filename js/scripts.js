$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();

    const answer1 = parseInt($('select#question1').val(), 10); 
    const answer2 = parseInt($('select#question2').val(), 10);
    const answer3 = parseInt($('select#question3').val(), 10);
    const answer4 = parseInt($('select#question4').val(), 10);
    const answer5 = parseInt($('select#question5').val(), 10);
  
    let outputTest;

    // Check if any selection has not been chosen
    if(isNaN(answer1) || isNaN(answer2) || isNaN(answer3) || isNaN(answer4) || isNaN(answer5)){
      $('div#fail').text("Please don't leave any selections blank");
    } else {
      // Outdoorsy branch - (People who might not like sitting indoors at a computer for hours)
      if((answer5 === 4 || (answer1 === 4 && answer2 === 4) || (answer2 === 4 && answer3 === 4 && answer4 === 4))){
        $('span#output').text('It sounds like your interests may be geared away from working with computers! That\'s ok! Take some more time to explore coding!');
        $('div#hide').hide();
        $('div#hidden').show();
        outputTest = ('span#output').val();
        // JavaScript Branch
      } else if((answer1 === 1 || 4) && answer2 === 1 && (answer3 === 2 || 3 || 4) && (answer4 === 1 || 3) && answer5 === 1) {
        $('span#output').text('JavaScript sounds like a great language for a free spirited and comfy person like you!');
        $('div#hide').hide();
        $('div#hidden').show();
        outputTest = ('span#output').val();
        // C# Branch
      } else if((answer1 === 1 || 2) && answer2 === 2 && (answer3 === 1 || 2 || 3 || 4) && (answer4 === 1 || 2 || 3) && answer5 === 2) {
        $('span#output').text('C# sounds like a great language for a focused/disciplined and stylish person such as yourself!');
        $('div#hide').hide();
        $('div#hidden').show();
        outputTest = ('span#output').val();
        // Python Branch
      } else if((answer1 === 1 || 3) && answer2 === 3 && (answer3 === 2 || 3 || 4) && (answer4 === 1 || 3) && answer5 === 3){
        $('span#output').text('Python is a great language for a comfy and logical person, sounds a lot like you!');
        $('div#hide').hide();
        $('div#hidden').show();
        outputTest = ('span#output').val();
        // Unknown combo branch
      } else {
        if(outputTest === undefined){
          $('span#output').text('You may be too complicated and outdoorsy for me to figure out! JavaScript, C# and Python are all great places to start!');
          $('div#hide').hide();
          $('div#hidden').show();
          }
      }
    }
  });
  // Return to form and refresh
  $('span#refresh').click(function(){
    $('div#hide').show();
    $('div#hidden').hide();
    location.reload();
  })
});