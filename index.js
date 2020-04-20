var btns = document.querySelectorAll(".btn").length;
for(var i=0;i<btns;i++){

    document.querySelectorAll(".btn")[i].addEventListener("click",function() {

       

        var buttenInnerHtml = this.innerHTML;
        
        switch ( buttenInnerHtml) {
            case "D":
                var audio = new Audio("song/dhaiwat.mp3");
                audio.play();
            break;
            

            case "H":
                var audio = new Audio("song/harsh.mp3");
                audio.play();
            break;


            case "S":
                var audio = new Audio("song/satya.mp3");
                audio.play();
            break;


            case "N":
                var audio = new Audio("song/naziih.mp3");
                audio.play();
            break;


            case "M":
                var audio = new Audio("song/miral.mp3");
                audio.play();
            break;


            case "A":
                var audio = new Audio("song/anis.mp3");
                audio.play();
            break;


            case "MO":
                var audio = new Audio("song/moiz.mp3");
                audio.play();
            break;


            case "DE":
                var audio = new Audio("song/dev.mp3");
                audio.play();
            break;


            case "R":
                var audio = new Audio("song/rana.mp3");
                audio.play();
            break;


            case "P":
                var audio = new Audio("song/priyank.mp3");
                audio.play();
            break;


            default:
                break;
        }


        
        
        //WHEN BTN CLICK----
    });

}




//
