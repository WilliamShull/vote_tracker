function Kittens(catName, catVotes) {
  this.catName = catName;
  this.catVotes = catVotes;
}

var kittenList = [];
var kittenFileNaming = [];
for(var i=0; i<14; i++) {
  kittenFileNaming.push("images/kitten" + i);
  kittenList.push(new Kittens(kittenFileNaming[i], 0));
}

var generateRandom = function() {
  return Math.floor(Math.random() * kittenList.length + 1);
}

//generate and render two random cat pictures on page load
$(function() {
  var randomPhotoOne = generateRandom();
  var randomPhotoTwo = generateRandom();
  if(randomPhotoOne === randomPhotoTwo) {

  }




  if(randomPhotoTwo !== randomPhotoOne) {
  $('#catPhotoOne img').attr('src', kittenList[randomPhotoOne].catName);
  $('#catPhotoTwo img').attr('src', kittenList[randomPhotoTwo].catName);
} else if(randomPhotoTwo === 14) {
  randomPhotoTwo--
  $('#catPhotoOne img').attr('src', kittenList[randomPhotoOne].catName);
  $('#catPhotoTwo img').attr('src', kittenList[randomPhotoTwo].catName);
} else {
  randomPhotoTwo++
  $('#catPhotoOne img').attr('src', kittenList[randomPhotoOne].catName);
  $('#catPhotoTwo img').attr('src', kittenList[randomPhotoTwo].catName);
}

});

$('button').on('click', function() {
  var loserKitten = ((this.id == 'buttonOne') ? 'buttonTwo' : 'buttonOne');
  console.log(this.id);

});
