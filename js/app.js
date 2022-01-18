const phrasesList = ["How are you this evening",
                    "Treat others the way you want to be treated",
                    "Two wrongs dont make a right",
                    "Comparison is the theif of joy",
                    "Shoot for the stars"];

let phrase = "";

$('#start-btn').click(() => {
  $('#overlay').css('display', 'none');
  $('#banner, #phrase, #qwerty, #scoreboard').css('display', 'initial');
  let phraseSplit = getPhrase();
  for (let i = 0; i < phraseSplit.length; i++) {
    if (phraseSplit[i] == "") {
      $('#phrase ul').append('<li class="letter"></li>');
    } else{
      $('#phrase ul').append('<li class="letter"></li>');
    }
  }
})

let getPhrase = () => {
  let phrase = phrasesList[Math.floor((Math.random() * 5) + 1)];
  console.log(Math.floor((Math.random() * 5) + 1));
  let phraseSplit = phrase.split('');
  return phraseSplit;
}

$('#qwerty button').click(function(event) {
  // alert($(this).text());
  console.log($(this).text());
});
