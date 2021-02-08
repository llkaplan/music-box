// MUSIC-CREATION.HTML ///////////////////////////////

// const { selectors } = require("sizzle");

// Hover Image Change for the Sound Options Section

$(function(){
    $("#record_selected").on({
     mouseenter: function(){
      $(this).attr('src','images/record_selected.png');
    },
    mouseleave: function(){
      $(this).attr('src','images/record_unselected.png');
    }
    });
  });

  $(function(){
    $("#make_selected").on({
     mouseenter: function(){
      $(this).attr('src','images/make_selected.png');
    },
    mouseleave: function(){
      $(this).attr('src','images/make_unselected.png');
    }
    });
  });

  $(function(){
    $("#songs_selected").on({
     mouseenter: function(){
      $(this).attr('src','images/songs_selected.png');
    },
    mouseleave: function(){
      $(this).attr('src','images/songs_unselected.png');
    }
    });
  });

// Hover Image Change for the Review Submit Section

$(function(){
    $("#backToBeginning").on({
     mouseenter: function(){
      $(this).attr('src','images/backToBeginningYellow.png');
    },
    mouseleave: function(){
      $(this).attr('src','images/backToBeginning.png');
    }
    });
  });

  $(function(){
    $("#playLarge").on({
     mouseenter: function(){
      $(this).attr('src','images/playLargeYellow.png');
    },
    mouseleave: function(){
      $(this).attr('src','images/playLarge.png');
    }
    });
  });

  $(function(){
    $("#pauseLarge").on({
     mouseenter: function(){
      $(this).attr('src','images/pauseLargeYellow.png');
    },
    mouseleave: function(){
      $(this).attr('src','images/pauseLarge.png');
    }
    });
  });


// Take Select Value and Add to Box

$( "#sendToBox" )
    .change(function () {
        var str = "";
        $( "select option:selected" ).each(function() {
        str += $( this ).text() + " ";
        });
        $( "#sendToBoxButton" ).text( "Send To " + str );
    })
.change();


// Rotating Song Selector

// VARIABLES
var songs = ["Super Mario 64", "Jingle Bells", "Star Wars", "Happy Birthday", "Clair de Lune"];
var songDivs = ["#songDiv0", "#songDiv1", "#songDiv2", "#songDiv3", "#songDiv4"];
var divClass = ["song0", "song1", "song2", "song3", "song4"];
var songImgCode = ['images/song_plug.png', 'images/song_bass.png', 'images/song_keys.png', 'images/song_party.png', 'images/song_bass.png'];
var songSoundFile = ['sounds/clairDeLune.mp3', 'sounds/starWarsMainTheme.mp3', 'sounds/superMarioBros.mp3', 'sounds/starWarsMainTheme.mp3', 'sounds/superMarioBros.mp3'];
var currentSelectedSong = 2;

function getSongName(song) {
    if (song == songs[0]) {
        return songs[0];
    } else if (song == songs[1]) {
        return songs[1];
    } else if (song == songs[2]) {
        return songs[2];
    } else if (song == songs[3]) {
        return songs[3];
    } else if (song == songs[4]) {
        return songs[4];
    }
}

getSongName(songs[0]);

function getSongImage(song) {
    if (song === songs[0]) {
        return songImgCode[0];
    } else if  (song === songs[1]) {
        return songImgCode[1];
    } else if  (song === songs[2]) {
        return songImgCode[2];
    } else if  (song === songs[3]) {
        return songImgCode[3];
    } else if  (song === songs[4]) {
        return songImgCode[4];
    }
}

function createARegularSongDiv(i, stationaryDiv) {
  var song = songs[i];
  var theDivClass = divClass[i];
  var songDivIds = songDivs[stationaryDiv];

  $( songDivIds ).empty();
  $( songDivIds ).append( "<img src='" + getSongImage(song) + "'>" );
  $( songDivIds ).append( "<p>" + getSongName(song) + "</p>" );

  $( songDivIds ).removeClass();
  $( songDivIds ).addClass( theDivClass );
}

function createMiddleSongDiv(i, stationaryDiv) {
  var song = songs[i];
  var theDivClass = divClass[i];
  var songDivIds = songDivs[stationaryDiv];

  $( songDivIds ).empty();
  $( songDivIds ).append( "<img src='" + getSongImage(song) + "'>" );
  $( songDivIds ).append( "<p class='bold'>" + getSongName(song) + "</p>" );

  $( songDivIds ).removeClass();
  $( songDivIds ).addClass( theDivClass );

  currentSelectedSong = i;
  console.log(currentSelectedSong);

// REMOVE EVENT LISTENERS

// ADD EVENT LISTENERS BACK IN.

}

function updateSongInPlayer(soundFile) {
    $( "#audioPlayer" ).attr("src", soundFile);
    console.log("replaced song" + soundFile);
}

// function updateSongInPlayer( songSoundFile[0] );
function updateSongSelectorPerm0() {
  console.log("Called perm0");
// position 0
    createARegularSongDiv(3, 0);
// position 1
    createARegularSongDiv(4, 1);
// position 2 - main position
    createMiddleSongDiv(0, 2);
// position 3
    createARegularSongDiv(1, 3);
// position 4
    createARegularSongDiv(2, 4);
}
function updateSongSelectorPerm1() {
// position 0
    createARegularSongDiv(4, 0);
// position 1
    createARegularSongDiv(0, 1);
// position 2 - main position
    createMiddleSongDiv(1, 2);
// position 3
    createARegularSongDiv(2, 3);
// position 4
    createARegularSongDiv(3, 4);
}
function updateSongSelectorPerm2() {
// position 0
    createARegularSongDiv(0, 0);
// position 1
    createARegularSongDiv(1, 1);
// position 2 - main position
    createMiddleSongDiv(2, 2);
// position 3
    createARegularSongDiv(3, 3);
// position 4
    createARegularSongDiv(4, 4);
}
function updateSongSelectorPerm3() {
// position 0
    createARegularSongDiv(1, 0);
// position 1
    createARegularSongDiv(2, 1);
// position 2 - main position
    createMiddleSongDiv(3, 2);
// position 3
    createARegularSongDiv(4, 3);
// position 4
    createARegularSongDiv(0, 4);
}
function updateSongSelectorPerm4() {
// position 0
    createARegularSongDiv(2, 0);
// position 1
    createARegularSongDiv(3, 1);
// position 2 - main position
    createMiddleSongDiv(4, 2);
// position 3
    createARegularSongDiv(0, 3);
// position 4
    createARegularSongDiv(1, 4);
}

$( ".song0" ).click(function() {
  updateSongSelectorPerm0();
});
$( ".song1" ).click(function() {
  updateSongSelectorPerm1();
});
$( ".song2" ).click(function() {
  updateSongSelectorPerm2();
});
$( ".song3" ).click(function() {
  updateSongSelectorPerm3();
});
$( ".song4" ).click(function() {
  updateSongSelectorPerm4();
});


// updateSongSelectorPerm0();
// updateSongSelectorPerm1();
// updateSongSelectorPerm2();
// updateSongSelectorPerm3();
// updateSongSelectorPerm4();







// TRASH ////////////////////////////////

// createMiddleSongDiv(songs[4]);

    // var theDiv = $("#songDivMain");
    // var classes = "songsUnselected center";
    // var textClass = "";

    // for (i = 0; i < songs.length; ++i) {
    //     classes = "songSelected center flexCenter";
    //     textClass = "bold largerText";
    // }

    // var songDiv = $('<div></div>');
    // songDiv.addClass(classes);
    // var innerDiv = $('<div></div>');
    // innerDiv.append( getSongImage(song) );
    // innerDiv.append("<p>" + getSongName(song) + "</p>");





// $( ".container" ).append( $( "h2" ) );

//     var thediv = $(“#songDivMain”); // get the parent div
//     thediv.empty(); // remove all children
//     var classes = "songsUnselected center"; // default classes
//     var textClass = "";
  
//     for (int i=0; i<songs.length; ++i) {
//       var song = songs[i];
//       if (i === 2) {
//           classes = "songSelected center flexCenter";
//           textClass = "bold largerText";
//       }
      
//       // Create a div
//       var songDiv = $('<div></div>');
//       songDiv.appendClass(classes);
//       var innerDiv = $('<div></div>');
//       innerDiv.append("<img src=" + getSongImage(song) + "/>");
//       innerDiv.append("<p
  
  
//     }
  
//   }

