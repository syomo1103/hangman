$(document).ready(function(){

console.log('JS is working!');

/*--- variables ---*/
var dogBreeds = ['GERMAN SHEPPARD', 'LABORADOR', 'PITBULL TERRIER', 'YORKSHIRE TERRIER', 'ROTTWIELLER', 'SIBERIAN HUSKY'];
var countries = ['BRAZIL', 'ARGENTINA', 'AZERBAIJAN', 'ISRAEL'];
var songTitles = ['I WILL ALWAYS LOVE YOU', 'BABY ONE MORE TIME', 'TAKE MY BREATH AWAY', 'SATISFACTION', 'AMERICAN WOMAN'];
var lettersMatched = [];
var letterClicked = [];
var secretLetters = [];
var wrongGuesses = 0;

/*---event listeners ---*/
$('.reset').on('click', function(evt) {
  location.reload();
});

$('td').one('click', function(evt) {
  letterClicked.push(this.innerHTML);
  checkMatch(this.innerHTML);
  gameOver();
  $(this).css('color', 'lightgrey');
});

//event listener to enter and pick a theme
$('#pickLink').one('click', function(evt) {
  $('#first-title').hide();
  $('#subtitle').hide();
  $('.themeLink').show();
  $('h1').hide();
});

//event listeners for once theme has been clicked
$('#dogLink').one('click', function(evt) {
  var randomDog = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];
  $('body').css('background', 'white');
  $('#first-title').hide();
  $('.themeLink').hide();
  $('#container').show();
  $('footer').show();
  $('h1').show();
  //converts randomDog into array
  var dogStr = randomDog.split('');
  secretLetters = dogStr;
  //creates empty array for letterClicked
  lettersMatched = [];
  secretLetters.forEach(dummy => lettersMatched.push(' '));
  // console.log(lettersMatched);
  console.log(secretLetters);
  // checkMatch(secretLetters, letterClicked);
  //>>> handleclick for letters <<<//

  //add lines for number of letters
  $(secretLetters).each(function(index) {
    if (secretLetters[index] === ' ') {
    $('footer').append('<span class="letterLines"></br></span>');
    } else {
    $('footer').append('<span class="letterLines">_ </span>');
    }
  });
});

$('#countriesLink').one('click', function(evt) {
  var randomCountry = countries[Math.floor(Math.random() * countries.length)];
  console.log(randomCountry);
  $('body').css('background-color', 'white');
  $('#first-title').hide();
  $('#themePicker').hide();
  $('.themeLink').hide();
  $('#container').show();
  $('footer').show();
  var countryStr = randomCountry.split('');
  secretLetters = countryStr;
  var letterClicked = [];
  secretLetters.forEach(dummy => letterClicked.push(' '));
  console.log(letterClicked);
  console.log(secretLetters);
  //>>> handleclick for letters <<<//

  // $(secretLetters).each(function(index) {
  //   if (secretLetters[index] === ' ') {
  //   $('footer').append('<span class="letterLines"></br></span>');
  //   } else {
  //   $('footer').append('<span class="letterLines">_ </span>');
  //   }
  // });
});

$('#songLink').one('click', function(evt) {
  var randomSong = songTitles[Math.floor(Math.random() * songTitles.length)];
  console.log(randomSong);
  $('body').css('background-color', 'white');
  $('#first-title').hide();
  $('#themePicker').hide();
  $('.themeLink').hide();
  $('#container').show();
  $('footer').show();
  var songStr = randomSong.split('');
  secretLetters = songStr;
  var letterClicked = [];
  secretLetters.forEach(dummy => letterClicked.push(' '));
  console.log(letterClicked);
  console.log(secretLetters);
  //>>> handleclick for letters <<<//

// $(secretLetters).each(function(index) {
//     if (secretLetters[index] === ' ') {
//     $('footer').append('<span class="space">&nbsp</span>');
//     } else {
//     // $('footer').append('<span class="letterSlots"></span><br/><span class="letterLines">_ </span>');
//     $('footer').append('<span class="letterLines">_ </span>');
//     }
//   });
// //add break to second space (countries only)
// $('span.space:eq(1)').append('<span class="letterLines"></br></span>');
});

/*--- functions ---*/
function initialize()/*reset*/{
  letterClicked = [];
  lettersMatched = [];
  secretLetters = [];
  wrongGuesses = 0;
  $('#container').hide();
  $('footer').hide();
  $('.themeLink').hide();
  $('h1').hide();
  $('.reset').hide();
};

function checkMatch(x) {
  if (secretLetters.includes(x)) {
    for (var i = 0; i < secretLetters.length; i++) {
      if (secretLetters[i] === x) {
        lettersMatched.splice(i, 1, x);
        updateDisplay(x, i);
        console.log(lettersMatched);
      }
    }
  } else {
    wrongGuesses++;
    addImage(wrongGuesses);
    console.log(wrongGuesses);
  }
};

function gameOver() {
if (wrongGuesses === 7) {
  $('td').off('click');
  $('#letters').empty().append('<div id="lose-message">Gaaah...<br>Game Over!</div>');
  $('#lose-link').show();
} else if (lettersMatched.toString() === secretLetters.toString()) {
  $('td').off('click');
  $('#letters').empty().append('<div id="win-message">Woot, woot!<br>Nice one!</div>');
  $('#win-link').show();
  }
};

function updateDisplay(x, index) {
  var html = $.parseHTML('<b>' + x + '</b>')[0];
  console.log(html);
  $('.letterLines')[index].prepend(html);
};

function addImage(wrongGuesses) {
  switch (wrongGuesses) {
    case 1:
      $('#drawing').empty().append('<img id="first" src="http://i.imgur.com/qA5KtEd.png"/>');
      break;
    case 2:
      $('#drawing').empty().append('<img id="second" src="http://i.imgur.com/6onT8JR.png"/>');
      break;
    case 3:
      $('#drawing').empty().append('<img id="third" src="http://i.imgur.com/FPoLRjZ.png"/>');
      break;
    case 4:
      $('#drawing').empty().append('<img id="fourth" src="http://i.imgur.com/3TjnxlZ.png"/>');
      break;
    case 5:
      $('#drawing').empty().append('<img id="fifth" src="http://i.imgur.com/d8K6sub.png"/>');
      break;
    case 6:
      $('#drawing').empty().append('<img id="sixth" src="http://i.imgur.com/j58Cs5e.png"/>');
      break;
    case 7:
      $('#drawing').empty().append('<img id="seventh" src="http://i.imgur.com/NH3WN1i.png"/>');
      break;
  }
};

initialize();

});


