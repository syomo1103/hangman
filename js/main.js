$(document).ready(function() {

/*--- variables ---*/
var dogBreeds = ['GERMAN SHEPHERD', 'LABRADOR', 'YORKSHIRE TERRIER', 'ROTTWIELER', 'SIBERIAN HUSKY'];
var countries = ['UNITED STATES', 'ARGENTINA', 'MONTENEGRO', 'ISRAEL', 'THAILAND'];
var songTitles = ['I WILL ALWAYS LOVE YOU', 'WHAT A WONDERFUL WORLD', 'TAKE MY BREATH AWAY', 'SATISFACTION', 'AMERICAN WOMAN'];
var lettersMatched = [];
var letterClicked = [];
var secretLetters = [];
var wrongGuesses = 0;
var dogTheme, countryTheme, songTheme;
var dogObject = {
  'GERMAN SHEPHERD': 'As part of the Herding Group, this breed was developed originally for herding sheep',
  'LABRADOR': 'This breed is frequently trained to aid the blind and act as a therapy dog',
  'YORKSHIRE TERRIER': 'The defining feature of the breed is its max size of 7 pounds, although some may exceed this and grow up to 15 pounds',
  'ROTTWIELER': 'This breed is always, by breed club standards, black with well-defined mahogany or rust-colored markings',
  'SIBERIAN HUSKY': 'This breed originated in north-eastern Russia'
};

var countryObject = {
  'UNITED STATES': 'This is a federal republic composed of 50 states',
  'ARGENTINA': 'This is the largest Spanish-speaking country in Latin America',
  'MONTENEGRO': 'This country borders Croatia, Bosnia and Herzegovina, Serbia, Kosovo,[a] and Albania',
  'ISRAEL': 'This country is 68 years old',
  'THAILAND': 'This country is formerly known as Siam'
};

var songObject = {
  'I WILL ALWAYS LOVE YOU': 'Written and originally recorded in 1973 by Dolly Parton, but made most famous by Whitney Houston in 1992',
  'WHAT A WONDERFUL WORLD': 'This song was first recorded by Louis Armstrong and released as a single in 1967',
  'TAKE MY BREATH AWAY': 'Written for the movie Top Gun and performed by the band Berlin',
  'SATISFACTION': 'The song has become a staple at Rolling Stones shows',
  'SMOOTH OPERATOR': 'This song became the first Top Ten Hit in the US for Sade'
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
  $(this).css('color', 'lightgrey');
});

//listener to pick a theme
$('#pick-link').one('click', function(evt) {
  $('#first-title').hide();
  $('#subtitle').hide();
  $('.theme-link').show();
  $('h1').hide();
});

//listeners for once theme has been clicked
$('#dog-link').one('click', function(evt) {
  dogTheme = true;
  var randomDog = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];
  $('body').css('background', 'white');
  $('#first-title').hide();
  $('.theme-link').hide();
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

$('#countries-link').one('click', function(evt) {
  countryTheme = true;
  var randomCountry = countries[Math.floor(Math.random() * countries.length)];
  $('body').css('background', 'white');
  $('#first-title').hide();
  $('.theme-link').hide();
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

$('#song-link').one('click', function(evt) {
  songTheme = true;
  var randomSong = songTitles[Math.floor(Math.random() * songTitles.length)];
  $('body').css('background', 'white');
  $('#first-title').hide();
  $('.theme-link').hide();
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

$('#hint-link').one('click', function(evt) {
  if (dogTheme === true) {
    checkHint(dogObject);
  } else if (countryTheme === true) {
    checkHint(countryObject);
  } else if (songTheme === true) {
    checkHint(songObject);
  }
});

/*--- functions ---*/
function initialize() {
  letterClicked = [];
  lettersMatched = [];
  secretLetters = [];
  wrongGuesses = 0;
  $('#container').hide();
  $('footer').hide();
  $('.theme-link').hide();
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

function checkHint(zobj) {
  var k = Object.keys(zobj);
  for (var i = 0; i < k.length; i++)
    if (secretLetters.join('') === k[i]) {
    addHint(zobj, i);
  }
};

function addHint(zobj, i) {
  $('#hint-link').empty().append('<div>' + Object.values(zobj)[i] + '</div>');
};

initialize();

});



