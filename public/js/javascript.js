$(function() {

  function Kitten(photo, votes) {
    this.photo = photo;
    this.votes = 0;
  }

  var kittenList = []
  for(i=0; i<14; i++) {
    kittenList.push(new Kitten("images/kitten" + i, 0));
  }

  var randomGenerator = function() {
    var rand = Math.floor(Math.random() * kittenList.length);
    return kittenList[rand];
  }

  function Init() {
    var imgLeft, imgRight, randomA, randomB, winner, targetParent;
    $('.votesDisplay').hide();
    $('.nextButton').hide();

    randomA = randomGenerator();
    do {
      randomB = randomGenerator();
    } while(randomA == randomB);

    imgLeft = randomA;
    imgRight = randomB;
    $('#photoLeft').attr('src', imgLeft.photo);
    $('#photoRight').attr('src', imgRight.photo);

    //Vote listener
    $('.catImage').on('click', function() {
      //target element
      var userTarget = $(this);
      targetParent = userTarget.parent().attr('id');
      //target img source
      var targetSrc = userTarget.attr('src');
      if (targetSrc == imgLeft.photo) {
        imgLeft.votes++
        winner = imgLeft;
        $('#photoRight').addClass('loserOpacity');
      } else {
        imgRight.votes++
        winner = imgRight;
        $('#photoLeft').addClass('loserOpacity');
      }
      //voteCountLeft/Right
      $('#voteCountLeft').text(imgLeft.votes);
      $('#voteCountRight').text(imgRight.votes);
      $('.votesDisplay').show();
      $('.nextButton').show();
    });


    //Next image button
    $('.nextButton').on('click', function() {
      $(this).hide();
      var newRand;
      $('.votesDisplay').hide();

      do {
        newRand = randomGenerator();
      } while(newRand == winner);

      if (targetParent == "catPhotoLeft") {
        imgRight = newRand;
        $('#photoRight').removeClass('loserOpacity');
        $('#photoRight').attr('src', imgRight.photo);
      } else {
        imgLeft = newRand;
        $('#photoLeft').removeClass('loserOpacity');
        $('#photoLeft').attr('src', imgLeft.photo);
      }

    })

  }

  var start = new Init();
});
