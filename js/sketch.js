let mic, recorder, soundFile;

let state = 0; // mousePress will increment from Record, to Stop, to Play

function setup() {

  // create an audio in
  mic = new p5.AudioIn();
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // create an empty sound file that we will use to playback the recording
  soundFile = new p5.SoundFile();
}


// CREATES THE RECORD FUNCTION
function recRecordButton() {
    if (state === 0) {
        recorder.record(soundFile);
        console.log("pressed record button");
        console.log(state);
        $("#rec_recordButton").attr("src", "images/smStopButton.png");
        state = 1;
    } else if (state === 1) {
        recorder.stop();
        console.log(state);
        console.log("pressed stop recording button");
        $("#rec_clearRecording").attr("src", "images/trashButton.png");
        $("#rec_playButton").attr("src", "images/smPlayButton.png");
        $("#rec_recordButton").attr("src", "images/recordButton50percent.png");
        $("#rec_stopButton").attr("src", "images/smStopButton.png");
        state = 2;
    }
};

// Record function on click
$( "#rec_recordButton" ).on("click", function() {
    recRecordButton();
});
    
// CREATES THE PLAY FUNCTION
function recPlayButton() {
    if (state === 2) {
        soundFile.play();
        state = 2;
        console.log("pressed play");
    } else {
        console.log ("error play function");
    }
};

// Play funtion on Click
$( "#rec_playButton" ).on("click", function() {
    recPlayButton();
});

// CREATES STOP THE PLAY FUNCTION
function recPlayStopButton() {
    if (state === 2) {
        soundFile.stop();
        state = 2;
        console.log("pressed stop");
    } else {
        console.log ("error stop function");
    }
};

// Stop the Play function on Click
$( "#rec_stopButton" ).on("click", function() {
    recPlayStopButton();
});


// CLEARS THE RECORDING FOR A NEW ONE
function recClearButton() {
    if (state === 2 && 3) {
        state = 0;
        console.log ("pressed clear");
        $("#rec_clearRecording").attr("src", "images/trashButton50percent.png");
        $("#rec_playButton").attr("src", "images/smallPlayButton50percent.png");
        $("#rec_recordButton").attr("src", "images/recordButton.png");
        $("#rec_stopButton").attr("src", "images/smStopButton50percent.png");
    } else {
        console.log ("error recClear");
    }
}

// Clear function on Click
$( "#rec_clearRecording" ).on("click", function() {
    recClearButton();
})