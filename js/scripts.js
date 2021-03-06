// MUSIC-CREATION.HTML ///////////////////////////////

//Changes whats displayed in main section
var recordDiv = document.getElementById("recordDivMain");
var songDiv = document.getElementById("songDivMain");
var musicMakeDiv = document.getElementById("musicMakingDivMain");


function getRecordDiv() {
  //   if (recordDiv.style.display === "none") {
       recordDiv.style.display = "block";
       $(".recordImgDot").css("display", "block");
       $(".makeImgDot").css("display", "none");
       $(".songsImgDot").css("display", "none");
       $("#songDivMain").css("display", "none");
       $("#musicMakingDivMain").css("display", "none");
 
    /* } else {
      recordDiv.style.display = "none";
     } */
   }
 
   function getSongDiv() {
    // if (songDiv.style.display === "none") {
       songDiv.style.display = "block";
       $(".recordImgDot").css("display", "none");
       $(".makeImgDot").css("display", "none");
       $(".songsImgDot").css("display", "block");
       recordDiv.style.display = "none";
       musicMakeDiv.style.display = "none";
    /* } else {
       songDiv.style.display = "none";
     } */
   }
   function getMusicMakingDiv() {
     //if (musicMakeDiv.style.display === "none") {
         musicMakeDiv.style.display = "block";
         $(".recordImgDot").css("display", "none");
         $(".makeImgDot").css("display", "block");
         $(".songsImgDot").css("display", "none");
         songDiv.style.display = "none";
         recordDiv.style.display = "none";
    /* } else {
       songDiv.style.display = "none";
     } */
   }
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


// Take Select Value and Add to Box Button at the Bottom
$( "#sendToBox" )
    .change(function () {
        var str = "";
        $( "select option:selected" ).each(function() {
        str += $( this ).text() + " ";
        });
        $( ".sendToBoxButton" ).text( "Send To " + str );
    })
.change();


// Rotating Song Selector

// VARIABLES
var songs = ["Super Mario 64", "Jingle Bells", "Star Wars", "Happy Birthday", "Clair de Lune"];
var songDivs = ["#songDiv0", "#songDiv1", "#songDiv2", "#songDiv3", "#songDiv4"];
var divClass = ["song0", "song1", "song2", "song3", "song4"];
var songImgCode = ['images/song_plug.png', 'images/song_bass.png', 'images/song_keys.png', 'images/song_party.png', 'images/song_bass.png'];
var songSoundFile = ['sounds/superMarioBros.mp3', 'sounds/jingle_bells.mp3', 'sounds/starWarsMainTheme.mp3',  'sounds/happy_birthday.mp3', 'sounds/clairDeLune.mp3'];
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

// Creates the regular song divs
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

// Creates the middle "focused" song div
function createMiddleSongDiv(i, stationaryDiv) {
  var song = songs[i];
  var theDivClass = divClass[i];
  var songDivIds = songDivs[stationaryDiv];

  $( songDivIds ).empty();
  $( songDivIds ).append( "<img src='" + getSongImage(song) + "'>" );
  $( songDivIds ).append( "<p class='bold'>" + getSongName(song) + "</p>" );

  $( songDivIds ).removeClass();
  $( songDivIds ).addClass( theDivClass );

  updateSongInPlayer(i);

  currentSelectedSong = i;
  console.log(currentSelectedSong);
}

function updateSongInPlayer(i) {
    var song = songSoundFile[i];
    $( "#audioPlayer" ).attr("src", song);
    console.log("replaced song " + song);
}

// Puts DIVs in their Positions
function updateSongSelectorPerm0() {
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

// Listens for Click Events and runs the functions
$( "#songDivMain" ).on("click", ".song0", function() {
  console.log("0 clicked");
  updateSongSelectorPerm0();
});
$( "#songDivMain" ).on("click", ".song1",  function() {
  updateSongSelectorPerm1();
});
$( "#songDivMain" ).on("click", ".song2",  function() {
  updateSongSelectorPerm2();
});
$( "#songDivMain" ).on("click", ".song3",  function() {
  updateSongSelectorPerm3();
});
$( "#songDivMain" ).on("click", ".song4",  function() {
  updateSongSelectorPerm4();
});

// Adds Functionality to Right and Left arrows
function rightArrowSelectSong() {
  console.log(currentSelectedSong);
  if (currentSelectedSong === 0) {
      updateSongSelectorPerm1();
      currentSelectedSong = 1;
  } else if (currentSelectedSong === 1) {
      updateSongSelectorPerm2();
      currentSelectedSong = 2;
  } else if (currentSelectedSong === 2) {
      updateSongSelectorPerm3();
      currentSelectedSong = 3;
  } else if (currentSelectedSong === 3) {
      updateSongSelectorPerm4();
      currentSelectedSong = 4;
  } else if (currentSelectedSong === 4) {
      updateSongSelectorPerm0();
      currentSelectedSong = 0;
  }
}

function leftArrowSelectSong() {
  console.log(currentSelectedSong);
  if (currentSelectedSong === 0) {
      updateSongSelectorPerm4();
      currentSelectedSong = 4;
  } else if (currentSelectedSong === 1) {
      updateSongSelectorPerm0();
      currentSelectedSong = 0;
  } else if (currentSelectedSong === 2) {
      updateSongSelectorPerm1();
      currentSelectedSong = 1;
  } else if (currentSelectedSong === 3) {
      updateSongSelectorPerm2();
      currentSelectedSong = 2;
  } else if (currentSelectedSong === 4) {
      updateSongSelectorPerm3();
      currentSelectedSong = 3;
  }
}

// Calls the arrow functions on click
$( "#songDivMain" ).on("click", ".rightSongArrow", function() {
  rightArrowSelectSong();
});
$( "#songDivMain" ).on("click", ".leftSongArrow", function() {
  leftArrowSelectSong();
});


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



//adding in color changing to keyboard and sounds
//NEED TO GET ANOTHER 2ND C NOTE IT"S WRONG
let parentClass;
let noteAudio;

let newSong = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'];
//Changes colors of buttons and selects sound

$(".keyboard-button").click(function(){

    let parentClass = this.closest("div").className;
    let firstLetter = parentClass.charAt(0); // alerts 's'
    let isSelected = $(this).hasClass( "selected" );

//an ugly and huge chunk of code that makes sure that current button is the only one in its row selected

    if (($(this).hasClass('first') == true) && ($(".first").hasClass('selected') == true)) {
        $(".first").removeClass('selected');
        $(".first").css("background-color","rgba(255, 255, 255, 0.3)");
    } else if (($(this).hasClass('second') == true) && ($(".second").hasClass('selected') == true)){
        $(".second").removeClass('selected');
        $(".second").css("background-color","rgba(255, 255, 255, 0.3)");
    } else if (($(this).hasClass('third') == true) && ($(".third").hasClass('selected') == true)){
        $(".third").removeClass('selected');
        $(".third").css("background-color","rgba(255, 255, 255, 0.3)");
    } else if (($(this).hasClass('fourth') == true) && ($(".fourth").hasClass('selected') == true)){
        $(".fourth").removeClass('selected');
        $(".fourth").css("background-color","rgba(255, 255, 255, 0.3)");
    } else if (($(this).hasClass('fifth') == true) && ($(".fifth").hasClass('selected') == true)){
        $(".fifth").removeClass('selected');
        $(".fifth").css("background-color","rgba(255, 255, 255, 0.3)");
    } else if (($(this).hasClass('sixth') == true) && ($(".sixth").hasClass('selected') == true)){
        $(".sixth").removeClass('selected');
        $(".sixth").css("background-color","rgba(255, 255, 255, 0.3)");
    } else if (($(this).hasClass('seventh') == true) && ($(".seventh").hasClass('selected') == true)){
        $(".seventh").removeClass('selected');
        $(".seventh").css("background-color","rgba(255, 255, 255, 0.3)");
    } else if (($(this).hasClass('eighth') == true) && ($(".eighth").hasClass('selected') == true)){
        $(".eighth").removeClass('selected');
        $(".eighth").css("background-color","rgba(255, 255, 255, 0.3)");
    }
    
    if(isSelected == true) {
      $(this).removeClass("selected");
      this.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }  else if (parentClass == "C-scale") {
        this.style.backgroundColor = "#266DD3";
        var noteAudio = document.getElementById("cNote");
        // TODO: Pass in real note
        playNote('C4');
        $(this).addClass("selected");
    } else if (parentClass == "D-scale") {
        this.style.backgroundColor = "#C5DCA0";
        var noteAudio = document.getElementById("dNote");
        playNote('D4');
        //noteAudio.play();
        $(this).addClass("selected");
    } else if (parentClass == "E-scale") {
        this.style.backgroundColor = "#F5F2B8";
        var noteAudio = document.getElementById("eNote");
        //noteAudio.play();
        playNote('E4');
        $(this).addClass("selected");
    } else if (parentClass == "F-scale") {
        this.style.backgroundColor = "#EF6F6C";
        var noteAudio = document.getElementById("fNote");
        //noteAudio.play();
        playNote('F4');
        $(this).addClass("selected");
    } else if (parentClass == "G-scale") {
        this.style.backgroundColor = "#FFA770";
        var noteAudio = document.getElementById("gNote");
        //noteAudio.play();
        playNote('G4');
        $(this).addClass("selected");
    } else if (parentClass == "A-scale") {
        this.style.backgroundColor = "#820263";
        var noteAudio = document.getElementById("aNote");
        //noteAudio.play();
        playNote('A4');
        $(this).addClass("selected");
    } else if (parentClass == "B-scale") {
        this.style.backgroundColor = "#FFAFD8";
        var noteAudio = document.getElementById("bNote");
       // noteAudio.play();
        playNote('B4');
        $(this).addClass("selected");
    } else if (parentClass == "C-scale-2nd") {
        this.style.backgroundColor = "#06BEE1";
        var noteAudio = document.getElementById("cNote");
       // noteAudio.play();
        playNote('C5');
        $(this).addClass("selected");
    };

    //function that checks if box is selected and updates the song array with result
    let isDeselected = (space, note) => {
        console.log(this);
        if(isSelected == true) {
            newSong.splice(space, 1, "blank");
        } else {
            if (this.classList.contains('2ndC')){
                newSong.splice(space, 1, note + '5');
            } else {
                newSong.splice(space, 1, note + '4');
            }
        }
    }

  if ( $(this).hasClass( "first" ) == true ) {
  //  newSong.splice(0, 1, 'C4');
   isDeselected(0, firstLetter);
    } else if ( $(this).hasClass( "second" ) == true ) {
    //    newSong.splice(1, 1, 'D4');
    isDeselected(1, firstLetter);
    } else if ( $(this).hasClass( "third" ) == true ) {
    //    newSong.splice(2, 1, 'E4');
    isDeselected(2, firstLetter);
    } else if ( $(this).hasClass( "fourth" ) == true ) {
    //   newSong.splice(3, 1, 'F4');
    isDeselected(3, firstLetter);
    } else if ( $(this).hasClass( "fifth" ) == true ) {
        //newSong.splice(4, 1, 'G4');
    isDeselected(4, firstLetter);
    } else if ( $(this).hasClass( "sixth" ) == true ) {
    //    newSong.splice(5, 1, 'A4');
    isDeselected(5, firstLetter);
    } else if ( $(this).hasClass( "seventh" ) == true ) {
   //    newSong.splice(6, 1, 'B4');
    isDeselected(6, firstLetter);
    } else if ( $(this).hasClass( "eighth" ) == true ) {
   //   newSong.splice(7, 1, 'C5');
    isDeselected(7, firstLetter);
    }
  });



// SEND TO BOX BUTTON SCRIPTS
$("#sendToBoxButtonMake").click(function() {
  firebase.database().ref('song').set({
    notes: newSong,
  });
});

// send to box button for record
function recSuccessCelebration() {
    document.getElementById("recDiv0").style.opacity = "0";
    document.getElementById("recDiv1").style.opacity = "0";
    document.getElementById("sendToBoxButtonRec").style.opacity = "0";
    $(".recordDivMain").css("background-image", "url('images/successImage.png')");
    $(".recordDivMain").css("background-position", "center");
    $(".recordDivMain").css("background-repeat", "no-repeat");
    $(".recordDivMain").css("background-size", "initial");
};

$("#sendToBoxButtonRec").click(function() {
    recSuccessCelebration();
});

// Send to box button for songs
function recSuccessCelebrationSong() {
    document.getElementById("songSucDiv0").style.opacity = "0";
    document.getElementById("songSucDiv1").style.opacity = "0";
    document.getElementById("songSucDiv2").style.opacity = "0";
    document.getElementById("sendToBoxButtonSong").style.opacity = "0";
    $("#songDivMain").css("background-image", "url('images/successImgSong.png')");
    $("#songDivMain").css("background-position", "center");
    $("#songDivMain").css("background-repeat", "no-repeat");
    $("#songDivMain").css("background-size", "initial");
};

$("#sendToBoxButtonSong").click(function() {
    recSuccessCelebrationSong();
});


// Button for Make / Keyboard Success
function makeSuccessButton() {
    $("#makeButtonText").replaceWith("<span style='color:white;'>Song has been sent!</span>");
    $( "#sendToBoxButtonMake" ).text("Song has been sent!");
    $("#sendToBoxButtonMake").css("background", "#8ED000");
};

$("#sendToBoxButtonMake").click(function() {
    makeSuccessButton();
});

