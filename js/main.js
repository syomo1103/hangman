$(document).ready(function() {

/*--- variables ---*/
var dogBreeds = ['GERMAN SHEPHERD', 'LABORADOR', 'YORKSHIRE TERRIER', 'ROTTWIELER', 'SIBERIAN HUSKY'];
var countries = ['UNITED STATES', 'ARGENTINA', 'AZERBAIJAN', 'ISRAEL', 'MALAYSIA'];
var songTitles = ['I WILL ALWAYS LOVE YOU', 'WHAT A WONDERFUL WORLD', 'TAKE MY BREATH AWAY', 'SATISFACTION', 'AMERICAN WOMAN'];
var lettersMatched = [];
var letterClicked = [];
var secretLetters = [];
var wrongGuesses = 0;
var dogObject = {
  'GERMAN SHEPHERD': 'test',
  'LABORADOR': 'test',
  'YORKSHIRE TERRIER': 'test',
  'ROTTWIELER': 'test',
  'SIBERIAN HUSKY': 'test'
};

var countryObject = {
  'UNITED STATES': 'test',
  'ARGENTINA': 'test',
  'AZERBAIJAN': 'test',
  'ISRAEL': 'test',
  'MALAYSIA': 'test'
};

var songObject = {
  'I WILL ALWAYS LOVE YOU': 'test',
  'WHAT A WONDERFUL WORLD': 'test',
  'TAKE MY BREATH AWAY': 'test',
  'SATISFACTION': 'test',
  'AMERICAN WOMAN': 'test'
};

/*---event listeners ---*/
$('.reset').on('click', function(evt) {
  location.reload();
});

//listener for clicking letters in table
$('td').one('click', function(evt) {
  letterClicked.push(this.innerHTML);
  checkMatch(this.innerHTML);
  gameOver();
  // isHintNeeded();
  $(this).css('color', 'lightgrey');
});

//listener to pick a theme
$('#pickLink').one('click', function(evt) {
  $('#first-title').hide();
  $('#subtitle').hide();
  $('.themeLink').show();
  $('h1').hide();
});

$('#hint-link').one('click', function(evt) {
  console.log('hello');
  // addHint();
});

//listeners for once theme has been clicked
$('#dogLink').one('click', function(evt) {
  var randomDog = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];
  $('body').css('background', 'white');
  $('#first-title').hide();
  $('.themeLink').hide();
  $('#container').show();
  $('footer').show();
  $('h1').show();
  $('#hint-link').hide();
  //converts randomDog into array
  var dogStr = randomDog.split('');
  secretLetters = dogStr;
  //creates empty array for letterMatched
  lettersMatched = [];
  secretLetters.forEach(dummy => lettersMatched.push(' '));
  //display dashes for each letter
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
  $('body').css('background', 'white');
  $('#first-title').hide();
  $('.themeLink').hide();
  $('#container').show();
  $('footer').show();
  $('h1').show();
  $('#hint-link').hide();
  var countryStr = randomCountry.split('');
  secretLetters = countryStr;
  lettersMatched = [];
  secretLetters.forEach(dummy => lettersMatched.push(' '));
  $(secretLetters).each(function(index) {
    if (secretLetters[index] === ' ') {
      $('footer').append('<span class="letterLines"></br></span>');
    } else {
      $('footer').append('<span class="letterLines">_ </span>');
    }
  });
});

$('#songLink').one('click', function(evt) {
  var randomSong = songTitles[Math.floor(Math.random() * songTitles.length)];
  $('body').css('background', 'white');
  $('#first-title').hide();
  $('.themeLink').hide();
  $('#container').show();
  $('footer').show();
  $('h1').show();
  $('#hint-link').hide();
  var songStr = randomSong.split('');
  secretLetters = songStr;
  letterMatched = [];
  secretLetters.forEach(dummy => lettersMatched.push(' '));
  $(secretLetters).each(function(index) {
    if (secretLetters[index] === ' ') {
      $('footer').append('<span class="letterLines space">&nbsp</span>');
      $('span.space:eq(1)').empty().append('</br>');
    } else {
      $('footer').append('<span class="letterLines">_ </span>');
    }
  });
});

/*--- functions ---*/
function initialize() {
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
      }
    }
  } else {
    wrongGuesses++;
    addImage(wrongGuesses);
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
  $('.letterLines')[index].prepend(html);
};

function addImage(wrongGuesses) {
  switch (wrongGuesses) {
    case 1:
      $('#drawing').html('<img src="http://i.imgur.com/qA5KtEd.png"/>');
      break;
    case 2:
      $('#drawing img').attr('src', 'http://i.imgur.com/6onT8JR.png');
      break;
    case 3:
      $('#drawing img')[0].src = 'http://i.imgur.com/FPoLRjZ.png';
      break;
    case 4:
      $('#drawing img').attr('src', 'http://i.imgur.com/3TjnxlZ.png');
      $('#hint-link').show();
      break;
    case 5:
      $('#drawing img').attr('src', 'http://i.imgur.com/d8K6sub.png');
      break;
    case 6:
      $('#drawing img').attr('src', 'http://i.imgur.com/j58Cs5e.png');
      break;
    case 7:
      $('#drawing img').attr('src', 'http://i.imgur.com/NH3WN1i.png');
      break;
  }
};

// function addHint(keys) {
// if (secretLetters.includes(Object.keys(dogObject))) {
//     switch (keys) {
//     case 1:
//       $('#drawing').html('<img src="http://i.imgur.com/qA5KtEd.png"/>');
//       break;
//     case 2:
//       $('#drawing img').attr('src', 'http://i.imgur.com/6onT8JR.png');
//       break;
//     }
//   }
// };

initialize();

});



