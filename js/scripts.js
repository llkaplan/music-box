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

var songs = ["Super Mario 64", "Jingle Bells", "Star Wars", "Happy Birthday", "Clair de Lune"];
var songDivs = ["#songDiv0", "#songDiv1", "#songDiv2", "#songDiv3", "#songDiv4"];
var songImgCode = ['images/song_plug.png', 'images/song_bass.png', 'images/song_keys.png', 'images/song_party.png', 'images/song_bass.png'];
var songSoundFile = ['sounds/clairDeLune.mp3', 'sounds/starWarsMainTheme.mp3', 'sounds/superMarioBros.mp3', 'sounds/starWarsMainTheme.mp3', 'sounds/superMarioBros.mp3'];


function getSongName(song) {
    if (song == songs[0]) {
        console.log(songs[0]);
        return songs[0];
    } else if (song == songs[1]) {
        console.log(songs[1]);
        return songs[1];
    } else if (song == songs[2]) {
        console.log(songs[2]);
        return songs[2];
    } else if (song == songs[3]) {
        console.log(songs[3]);
        return songs[3];
    } else if (song == songs[4]) {
        console.log(songs[4]);
        return songs[4];
    }
}

getSongName(songs[0]);

function getSongImage(song) {
    if (song === songs[0]) {
        console.log(song);
        return songImgCode[0];
    } else if  (song === songs[1]) {
        return songImgCode[1];
    } else if  (song === songs[2]) {
        console.log(song);
        return songImgCode[2];
    } else if  (song === songs[3]) {
        return songImgCode[3];
    } else if  (song === songs[4]) {
        return songImgCode[4];
    }
}

function createARegularSongDiv(song, divNumber) {
    $( divNumber ).empty();
    $( divNumber ).append( "<img src='" + getSongImage(song) + "'>" );
    $( divNumber ).append( "<p>" + getSongName(song) + "</p>" );
}

function createMiddleSongDiv(song) {
    $( songDiv2 ).empty();
    $( songDiv2 ).append( "<img src='" + getSongImage(song) + "'>" );
    $( songDiv2 ).append( "<p class='bold'>" + getSongName(song) + "</p>" );
}

function updateSongInPlayer(songSoundFile) {
    $( "#audioPlayer" ).attr("src", songSoundFile);
}


// createARegularSongDiv(songs[0], songDivs[0]);
// createARegularSongDiv(songs[2], songDivs[1]);
// createARegularSongDiv(songs[4], songDivs[3]);

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

