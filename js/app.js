// Phrases for game
const phrasesList = ["How are you this evening",
                    "Treat others the way you want to be treated",
                    "Two wrongs dont make a right",
                    "Comparison is the theif of joy",
                    "Shoot for the stars" ];


let phrase = "";
let lives = 5;
let phraseLength = "";


// Listens for click onn start buttonn and calls getPhrase and displays phrase
$('#start-btn, #restart-btn-win, #restart-btn-loss').click(() => {
  $('#overlay, .win, .loss').css('display', 'none');
  $('#banner, #phrase, #qwerty, #scoreboard').css('display', 'initial');
  let phraseSplit = getPhrase();
  for(let i = 0; i < phraseSplit.length; i++) {
    if (phraseSplit[i] == " ") {
      $('#phrase ul').append('<li class="space"> </li>');
    } else {
      $('#phrase ul').append('<li class="letter ' + phraseSplit[i].toLowerCase() + '">'+ phraseSplit[i] + '</li>');
    }
  }
  phraseLength = phrase.replace(/\s/g, "").split('').length;
});


// Get a random phrase from phrase list
let getPhrase = () => {
  phrase = phrasesList[Math.floor((Math.random() * 4) + 1)];
  let phraseSplit = phrase.split('');
  return phraseSplit;
}


$('#qwerty button').click(function(event) {
  if(lives == 1) {
    $('.lose').css('display','flex');
    restartGame();
  } else {
  $(this).attr('disabled', 'true');
  $(this).addClass('chosen');
  checkLetter($(this).text());
  }
});


let checkLetter = (letter) => {   // check to see if letter is in phrase and then reveal letter
  let splitPhrase = phrase.replace(/ /g,'').split('');
  let selector = '.' + letter;
  if($(selector).length != 0) {
    $(selector).addClass('show');
  } else {      // subtract a life for incorrect guess
    let tries = $('.tries img');
    let arrayNum = lives-1;
    $(tries[arrayNum]).attr('src','images/lostHeart.png');
    lives = lives-1;
    }
    if(phraseLength == $('.show').length) {
      $('.win').css('display','flex');
      restartGame();
    }
  }


let restartGame = () => {
  lives = 5
  $('.tries img').attr('src', 'images/liveHeart.png');
  $('.letter, .space').remove();
  $('.chosen').removeClass('chosen');
  $('#qwerty button').removeAttr('disabled');
}
