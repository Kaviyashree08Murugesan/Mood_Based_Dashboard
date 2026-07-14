function changeMood(mood){

    let title=document.getElementById("title");

    let quote=document.getElementById("quote");

    let music=document.getElementById("music");

    let tip=document.getElementById("tip");

    if(mood=="happy"){

        document.body.style.background="linear-gradient(135deg,#FFD93D,#FF8400)";

        title.innerHTML="😊 You are Happy!";

        quote.innerHTML="Keep smiling and spread positivity.";

        music.innerHTML="Pop Music 🎵";

        tip.innerHTML="Start your hardest task first.";

    }

    else if(mood=="tired"){

        document.body.style.background="linear-gradient(135deg,#A1C4FD,#C2E9FB)";

        title.innerHTML="😴 Feeling Tired";

        quote.innerHTML="Take a short break and recharge.";

        music.innerHTML="Lo-Fi Music ☕";

        tip.innerHTML="Drink water and stretch for 5 minutes.";

    }

    else if(mood=="stress"){

        document.body.style.background="linear-gradient(135deg,#F857A6,#FF5858)";

        title.innerHTML="😰 Feeling Stressed";

        quote.innerHTML="Everything will be okay. One step at a time.";

        music.innerHTML="Nature Sounds 🌿";

        tip.innerHTML="Take deep breaths before continuing.";

    }

    else{

        document.body.style.background="linear-gradient(135deg,#56ab2f,#a8e063)";

        title.innerHTML="💪 Stay Motivated";

        quote.innerHTML="Success comes from consistency.";

        music.innerHTML="Motivational Playlist 🎧";

        tip.innerHTML="Finish today's goal before starting another.";

    }

}