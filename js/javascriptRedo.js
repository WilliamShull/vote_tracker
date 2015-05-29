var randomPhotoOne, randomPhotoTwo;
var kittenObjectList = [];
//var kittenNamingList = [];

for(i=0; i<14; i++) {
  kittenObjectList.push(new Kitten(i, "images/kitten" + i, 0));
}

function Kitten(kittenIndex, kittenName, kittenVoteCount) {
  this.kittenName = kittenName;
  this.kittenVoteCount = kittenName;
}

var generateRandom = function() {
  return Math.floor(Math.random() * kittenObjectList.length + 1);
}

function altNum(num1, num2, max) {
  var newNum;
  do {
    newNum = Math.floor(Math.random() * max);
  } while(newNum == num1 || newNum == num2);
  return newNum;
}

$(function() {
  randomPhotoOne = generateRandom();
  randomPhotoTwo = generateRandom();
  if(randomPhotoOne === randomPhotoTwo && randomPhotoOne !== 13) {
    randomPhotoOne++;
  } else if (randomPhotoOne === randomPhotoTwo && randomPhotoOne ===13) {
    randomPhotoOne--;
  }
    $('.photoContainer #photoOne').attr('src', kittenObjectList[generateRandom()].kittenName);
    $('.photoContainer #photoTwo').attr('src', kittenObjectList[generateRandom()].kittenName);
});

$('button').on('click', function() {
  var winnerKitten = this.id == 'buttonOne' ? 'buttonOne' : 'buttonTwo';
  console.log(winnerKitten);
  if(winnerKitten == 'buttonOne') {
    $('#photoTwo').attr('src', kittenObjectList[altNum(generateRandom(), generateRandom(), 13)].kittenName);
  } else if(winnerKitten == 'buttonTwo') {
    $('#photoOne').attr('src', kittenObjectList[altNum(generateRandom(), generateRandom(), 13)].kittenName);
  }
})
