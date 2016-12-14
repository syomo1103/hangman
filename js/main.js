$(document).ready(function(){

console.log('JS is working!');

/*--- variables ---*/
var dogBreeds = ['GERMAN SHEPPARD', 'LABORADOR', 'PITBULL TERRIER', 'YORKSHIRE TERRIER', 'ROTTWIELLER', 'SIBERIAN HUSKY'];
var countries = ['BRAZIL', 'ARGENTINA', 'AZERBAIJAN', 'ISRAEL'];
var songTitles = ['I WILL ALWAYS LOVE YOU', 'BABY ONE MORE TIME', 'TAKE MY BREATH AWAY', 'SATISFACTION', 'AMERICAN WOMAN'];
var lettersMatched = [];
var letterClicked = [];
var secretLetters = [];
var wrongLetters = 0;

/*---event listeners ---*/
//1. event listener for letters clicked
$('td').one('click', function(evt) {
  letterClicked.push(this.innerHTML);
  checkMatch(this.innerHTML);
  this.innerHTML = '';
});

//2. event listener for theme picked
$('#pickLink').one('click', function(evt) {
  $('#title').hide();
  $('#subtitle').hide();
  $('.themeLink').show();
});

//3. event listener for once theme has been clicked
$('#dogLink').one('click', function(evt) {
  var randomDog = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];
  $('body').css('background-color', '#7F5B7A');
  $('#title').hide();
  $('.themeLink').hide();
  $('#container').show();
  $('footer').show();
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
  // $(secretLetters).each(function(index) {
  //   if (secretLetters[index] === ' ') {
  //   $('footer').append('<span class="letterLines"></br></span>');
  //   } else {
  //   $('footer').append('<span class="letterLines">_ </span>');
  //   }
  // });
  //click letter//
});

$('#countriesLink').one('click', function(evt) {
  var randomCountry = countries[Math.floor(Math.random() * countries.length)];
  console.log(randomCountry);
  $('body').css('background-color', '#7F5B7A');
  $('#title').hide();
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
  $('body').css('background-color', '#7F5B7A');
  $('#title').hide();
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
  wrongLetters = 0;
  $('#container').hide();
  $('footer').hide();
  $('.themeLink').hide();
};

function checkMatch(x) {
  if (secretLetters.includes(x)) {
    for (var i = 0; i < secretLetters.length; i++) {
    if (secretLetters[i] === x) {
      lettersMatched.splice(i, 1, x);
      console.log(lettersMatched);
    }
  }
} else {
    wrongLetters++;
    addImage();
    console.log(wrongLetters);
  }
};

// function addImage() {
//   if (wrongLetters === 1) {
//   $('#drawing').empty().append('<img id="first" src="https://i.imgur.com/qA5KtEd.png"/>')
//   }
// };

initialize();

});


