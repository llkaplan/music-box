// MUSIC-CREATION.HTML ///////////////////////////////

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

let parentClass;

//Changes colors of buttons

$(".keyboard-button").click(function(){

    let parentClass = this.closest("div").className;

    if (parentClass == "c-scale") {
        this.style.backgroundColor = "#266DD3";
    } else if (parentClass == "d-scale") {
        this.style.backgroundColor = "#C5DCA0";
    } else if (parentClass == "e-scale") {
        this.style.backgroundColor = "#F5F2B8";
    } else if (parentClass == "f-scale") {
        this.style.backgroundColor = "#EF6F6C";
    } else if (parentClass == "g-scale") {
        this.style.backgroundColor = "#FFA770";
    } else if (parentClass == "a-scale") {
        this.style.backgroundColor = "#820263";
    } else if (parentClass == "b-scale") {
        this.style.backgroundColor = "#FFAFD8";
    } else if (parentClass == "c-scale-2nd") {
        this.style.backgroundColor = "#06BEE1";
    };


   console.log(parentClass);

  });