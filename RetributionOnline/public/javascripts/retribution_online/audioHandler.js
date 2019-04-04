// audioHandler.j contains variables, functions, and objects for sound effects and music


//TODO catch the fix 304 errors for audio
//  current fix is in the servers app.js line 38ish


function music(sourcePath) {
    this.music = document.createElement("audio");
    this.music.src = sourcePath;
    this.music.setAttribute("preload" , "auto");
    this.music.setAttribute("controls", "none");
    this.music.setAttribute("loop", "true");
    this.music.style.display = "none";
    document.body.appendChild(this.music);
    this.play = function(){
        
        this.music.play();
    }
    this.stop = function(){
        this.music.pause();
   }
}        

function playAudioBGM(songChoice) { 
    switch (songChoice){
        case 0:
        var HINRwaves = new Audio('audio/calm/waves.mp3');
            
            HINRwaves.play();
            break;
        case 1:
        var HINRcalm1 = new Audio("audio/calm/hearts_in_the_rock3calm1.mp3");
            HINRcalm1.play();
            break;
        case 2:
        var HINRcalm2 = new Audio("audio/calm/hearts_in_the_rock3calm2.mp3");
            HINRcalm2.play();
            break;
        case 3:
        var HINRactive1 = new Audio("audio/active/hearts_in_the_rock3active1.mp3");
            HINRactive1.load();
            HINRactive1.loop;
            HINRactive1.play();
            HINRactive1.onerror = function() {
                HINRactive1 = new Audio("audio/active/hearts_in_the_rock3active1.ogg");
                HINRactive1.play();
            }
            break;
        case 4:
        var HINRactive2 = new Audio("audio/active/hearts_in_the_rock3active2.mp3");
            HINRactive2.load();
            HINRactive2.loop;
            HINRactive2.play();
            HINRactive2.onerror = function() {
                HINRactive2 = new Audio("audio/active/hearts_in_the_rock3active2.ogg");
                HINRactive2.play();
            }
            break;
        case 5:
        var HINRactive3 = new Audio("audio/active/hearts_in_the_rock3active3.mp3");
            HINRactive3.load();
            HINRactive3.loop;
            HINRactive3.play();
            HINRactive3.onerror = function() {
                HINRactive3 = new Audio("audio/active/hearts_in_the_rock3active3.ogg");
                HINRactive3.play();
            }
            break;
        case 6:
        var dust_on_the_anchor_3 = new Audio("audio/dust_on_the_anchor_3.mp3");
            dust_on_the_anchor_3.play();
            break;
        case 7:
        var liftedstone2_2 = new Audio('audio/liftedstone2_2.mp3');
            liftedstone2_2.play();
            break;
    }
    
} 
