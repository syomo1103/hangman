
$( document ).ready(function(){

console.log('Worked!');

/*--- variables ---*/
var dogBreeds = ['German Shepard', 'Laborador', 'Pitbull Terrier', 'Yorkshire Terrier', 'Rottweiler', 'Siberian Husky'];
var countries = ['Brazil', 'Argentina', 'Azerbaijan', 'Israel'];
var songTitles = ['I Will Always Love You', 'Baby One More Time', 'Take My Breath Away'];
var lettersPicked, lettersCorrect, actualLetters, wrongLetters;

/*---event listeners ---*/
lettersPicked = [];

$('td').one('click', function(evt) {
  lettersPicked.push(this.innerHTML);
  this.innerHTML = '';
  //check if letter is a match//
  console.log(lettersPicked);
});

$('#pickLink').one('click', function(evt) {
  $('#title').hide();
  $('#subtitle').hide();
  $('.themeLink').show();
});

$('#dogLink').one('click', function(evt) {
  var randomDog = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];
  console.log(randomDog);
  $('body').css('background-color', '#7F5B7A');
  $('#title').hide();
  $('#themePicker').hide();
  $('.themeLink').hide();
  $('#container').show();
  $('footer').show();
  //convert randomDog into array
  var dogStr = randomDog.split("");
  console.log(dogStr);
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
  var countryStr = randomCountry.split("");
  console.log(countryStr);
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
  var songStr = randomSong.split("");
  console.log(songStr);
});

/*--- functions ---*/
function initialize(){
  lettersPicked = [];
  lettersCorrect = [];
  actualLetters = [];
  wrongLetters = [];
  $('#container').hide();
  $('footer').hide();
  $('.themeLink').hide();
  // click to pick a theme//

  // var $pickTheme = $('<a>', {text: 'Pick a Theme', href: '#'});
  // $pickTheme.appendTo('main');
};

function matchMade() {
};

initialize();
});
