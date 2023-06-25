const content = document.querySelector(".content");
const musicList = document.querySelector(".musiclist");
const cartBtn = document.querySelector("#menubtn");
Playimage = content.querySelector(".music-image img"),
musicName = content.querySelector(".music-titles .name"),
musicArtist = content.querySelector(".music-titles .artist"),
Audio = document.querySelector(".main-song"),
playBtn = content.querySelector(".play-pause"),
playBtnIcon = content.querySelector(".play-pause span"),
prevBtn = content.querySelector("#prev"),
nextBtn = content.querySelector("#next"),
progressBar = content.querySelector(".progress-bar"),
progressDetails = content.querySelector(".progress-details"),
repeatBtn = content.querySelector("#repeat"),
Shuffle = content.querySelector("#shuffle"),
music1 = musicList.querySelector("#music1"),
music2 = musicList.querySelector("#music2"),
music3 = musicList.querySelector("#music3"),
music4 = musicList.querySelector("#music4"),
music5 = musicList.querySelector("#music5"),
music6 = musicList.querySelector("#music6"),
music7 = musicList.querySelector("#music7"),
music8 = musicList.querySelector("#music8"),
music9 = musicList.querySelector("#music9"),
music10 = musicList.querySelector("#music10"),
music11 = musicList.querySelector("#music11"),
music12 = musicList.querySelector("#music12"),
music13 = musicList.querySelector("#music13"),
music14 = musicList.querySelector("#music14"),
music15 = musicList.querySelector("#music15"),
music16 = musicList.querySelector("#music16"),
music17 = musicList.querySelector("#music17");

let index = 1;

window.addEventListener("load", ()=>{
    loadData(index);
    Audio.play();
});

function loadData(indexValue){
    musicName.innerHTML = songs[indexValue - 1].name;
    musicArtist.innerHTML = songs[indexValue - 1].artist;
    Playimage.src = "music-images/"+songs[indexValue - 1].img+".jpg";
    Audio.src = "music/"+songs[indexValue - 1].audio+".mp3";
}

// Music List Application Start //

music1.addEventListener("click", ()=>{
    musicName.innerHTML = songs[0].name;
    musicArtist.innerHTML = songs[0].artist;
    Playimage.src = "music-images/img1.jpg";
    Audio.src = "music/music1.mp3";
    Audio.play();
});

music2.addEventListener("click", ()=>{
    musicName.innerHTML = songs[1].name;
    musicArtist.innerHTML = songs[1].artist;
    Playimage.src = "music-images/img2.jpg";
    Audio.src = "music/music2.mp3";
    Audio.play();
});

music3.addEventListener("click", ()=>{
    musicName.innerHTML = songs[2].name;
    musicArtist.innerHTML = songs[2].artist;
    Playimage.src = "music-images/img3.jpg";
    Audio.src = "music/music3.mp3";
    Audio.play();
});

music4.addEventListener("click", ()=>{
    musicName.innerHTML = songs[3].name;
    musicArtist.innerHTML = songs[3].artist;
    Playimage.src = "music-images/img4.jpg";
    Audio.src = "music/music4.mp3";
    Audio.play();
});

music5.addEventListener("click", ()=>{
    musicName.innerHTML = songs[4].name;
    musicArtist.innerHTML = songs[4].artist;
    Playimage.src = "music-images/img5.jpg";
    Audio.src = "music/music5.mp3";
    Audio.play();
});

music6.addEventListener("click", ()=>{
    musicName.innerHTML = songs[5].name;
    musicArtist.innerHTML = songs[5].artist;
    Playimage.src = "music-images/img6.jpg";
    Audio.src = "music/music6.mp3";
    Audio.play();
});

music7.addEventListener("click", ()=>{
    musicName.innerHTML = songs[6].name;
    musicArtist.innerHTML = songs[6].artist;
    Playimage.src = "music-images/img7.jpg";
    Audio.src = "music/music7.mp3";
    Audio.play();
});

music8.addEventListener("click", ()=>{
    musicName.innerHTML = songs[7].name;
    musicArtist.innerHTML = songs[7].artist;
    Playimage.src = "music-images/img8.jpg";
    Audio.src = "music/music8.mp3";
    Audio.play();
});

music9.addEventListener("click", ()=>{
    musicName.innerHTML = songs[8].name;
    musicArtist.innerHTML = songs[8].artist;
    Playimage.src = "music-images/img9.jpg";
    Audio.src = "music/music9.mp3";
    Audio.play();
});

music10.addEventListener("click", ()=>{
    musicName.innerHTML = songs[9].name;
    musicArtist.innerHTML = songs[9].artist;
    Playimage.src = "music-images/img10.jpg";
    Audio.src = "music/music10.mp3";
    Audio.play();
});

music11.addEventListener("click", ()=>{
    musicName.innerHTML = songs[10].name;
    musicArtist.innerHTML = songs[10].artist;
    Playimage.src = "music-images/img11.jpg";
    Audio.src = "music/music11.mp3";
    Audio.play();
});

music12.addEventListener("click", ()=>{
    musicName.innerHTML = songs[11].name;
    musicArtist.innerHTML = songs[11].artist;
    Playimage.src = "music-images/img12.jpg";
    Audio.src = "music/music12.mp3";
    Audio.play();
});

music13.addEventListener("click", ()=>{
    musicName.innerHTML = songs[12].name;
    musicArtist.innerHTML = songs[12].artist;
    Playimage.src = "music-images/img13.jpg";
    Audio.src = "music/music13.mp3";
    Audio.play();
});

music14.addEventListener("click", ()=>{
    musicName.innerHTML = songs[13].name;
    musicArtist.innerHTML = songs[13].artist;
    Playimage.src = "music-images/img14.jpg";
    Audio.src = "music/music14.mp3";
    Audio.play();
});

music15.addEventListener("click", ()=>{
    musicName.innerHTML = songs[14].name;
    musicArtist.innerHTML = songs[14].artist;
    Playimage.src = "music-images/img15.jpg";
    Audio.src = "music/music15.mp3";
    Audio.play();
});

music16.addEventListener("click", ()=>{
    musicName.innerHTML = songs[15].name;
    musicArtist.innerHTML = songs[15].artist;
    Playimage.src = "music-images/img16.jpg";
    Audio.src = "music/music16.mp3";
    Audio.play();
});

music17.addEventListener("click", ()=>{
    musicName.innerHTML = songs[16].name;
    musicArtist.innerHTML = songs[16].artist;
    Playimage.src = "music-images/img17.jpg";
    Audio.src = "music/music17.mp3";
    Audio.play();
});

// Music List Application End //

playBtn.addEventListener("click", ()=>{
    const isMusicPaused = content.classList.contains
    ("paused");
    if(isMusicPaused){
        pauseSong();
    }
    else{
        playSong();
    }
});

function playSong(){
    content.classList.add("paused");
    playBtnIcon.innerHTML = "pause";
    Audio.play();
}

function pauseSong(){
    content.classList.remove("paused");
    playBtnIcon.innerHTML = "play_arrow";
    Audio.pause();
}

nextBtn.addEventListener("click", ()=>{
    nextSong();
});

prevBtn.addEventListener("click", ()=>{
    prevSong();
});

function nextSong(){
    index++;
    if(index > songs.length){
        index = 1;
    }
    else{
        index = index;
    }
    loadData(index);
    playSong();
}

function prevSong(){
    index--;
    if(index <= 0){
        index = songs.length;
    }
    else{
        index = index;
    }
    loadData(index);
    playSong();
}

Audio.addEventListener("timeupdate", (e)=>{
    const initialTime = e.target.currentTime; // Get current  music time
    const finalTime = e.target.duration; // Get music duration
    let BarWidth = (initialTime / finalTime) * 100;
    progressBar.style.width = BarWidth+"%";

    progressDetails.addEventListener("click", (e)=>{
        let progressValue = progressDetails.clientWidth; // Get width of Progress Bar
        let clickedOffsetX = e.offsetX; // Get offset x value
        let MusicDuration = Audio.duration; // Get total music duration

        Audio.currentTime = (clickedOffsetX / progressValue) * MusicDuration;
    });

    // Timer Logic
    Audio.addEventListener("loadeddata", ()=>{
        let finalTimeData = content.querySelector(".final");

        // Update finalDuration
        let AudioDuration = Audio.duration;
        let finalMinutes = Math.floor(AudioDuration / 60);
        let finalSeconds = Math.floor(AudioDuration % 60);
        if(finalSeconds< 10){
            finalSeconds = "0"+finalSeconds;
        }
        finalTimeData.innerText = finalMinutes+":"+finalSeconds;
    });

    //Update Current Duration
    let currentTimeData = content.querySelector(".current");
    let currentTime = Audio.currentTime;
    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if(currentSeconds < 10){
        currentSeconds = "0"+currentSeconds;
    }
    currentTimeData.innerText = currentMinutes+":"+currentSeconds;

    // repeat button logic
    repeatBtn.addEventListener("click", ()=>{
        Audio.currentTime = 0;
    })
});

// Shuffle Logic
Shuffle.addEventListener("click", ()=>{
    var randIndex = Math.floor(Math.random() * songs.length) + 1; // Select Random Betwn 1 And Song Array Length
    loadData(randIndex);
    playSong();
});

Audio.addEventListener("ended", ()=>{
    index++;
    if(index > songs.lengt){
        index = 1;
    }
    loadData(index);
    playSong();
});

cartBtn.addEventListener("click", function () {
    musicList.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(cartBtn) && !e.composedPath
            ().includes(musicList)
        ) {
            musicList.classList.remove("active");
        }
    });
});