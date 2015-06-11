$(function() {
  var kittenList = [];

  function Kitten(photo) {
    this.photo = photo;
    this.votes = 0;
  }


  $.ajax({
    type: "GET",
    url: "https://api.imgur.com/3/album/Vfs6C.json",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Client-ID 8c0750ed57af2d7");
  }
  })
  .done(function(data) {
    populateCats(data);
    var start = new Init();

  })
  .fail(function() {
    $('nav > p').text("I'm sorry, but the kittens you are trying to reach are currently unavailable. Please try again later.");
  });



  var populateCats = function(data) {
    var imgurKittens = data.data;
    for(var i=0; i<imgurKittens.images.length; i++) {
      kittenList.push(new Kitten(imgurKittens.images[i].link));
    }
  }

  var randomGenerator = function() {
    var rand = Math.floor(Math.random() * kittenList.length);
    return kittenList[rand];
  }

  function Init() {
    var imgLeft, imgRight, winner, targetParent;
    $('.votesDisplay').hide();
    $('.nextButton').hide();

    imgLeft = randomGenerator();
    do {
    imgRight = randomGenerator();
    } while(imgLeft == imgRight);

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

});
