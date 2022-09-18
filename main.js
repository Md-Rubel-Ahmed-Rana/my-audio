

const loadAudios = () => {
    const url  = "./audios.json";
    fetch(url)
    .then(res => res.json())
        .then(data => { showAudios(data.audios), displayAudios(data.audios) })
}

// display all the audios to the UI as list item
const displayAudios = (audios) => {
    const totalMusic = document.getElementById("total-music");
    totalMusic.innerText = audios.length;
    const musicContainer = document.getElementById("music-list");
    audios.forEach(audio => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${audio.id}. </span> <span> ${audio.fileName.slice(0, 25)}</span>
        `;
        musicContainer.appendChild(li);

    });
}

const showAudios = (audios) => {
    let fileNumber = 0;
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    const pauseBtn = document.getElementById("pause");
    const audioPath = document.getElementById("audio-file");
    audioPath.src = audios[fileNumber].audioFile;
    const audioName = document.getElementById("audio-name");
    audioName.innerText = audios[fileNumber].fileName;
    
    const developer = document.getElementById("developer")
    developer.innerText = audios[fileNumber].developer;
    
    nextBtn.addEventListener("click", () => {
        if (fileNumber === audios.length - 1) {
            fileNumber = 0;
            audioPath.src = audios[fileNumber].audioFile;
            audioName.innerText = audios[fileNumber].fileName;
            developer.innerText = audios[fileNumber].developer;
        }else{
            fileNumber++
            audioPath.src = audios[fileNumber].audioFile;
            audioName.innerText = audios[fileNumber].fileName;
            developer.innerText = audios[fileNumber].developer;
        }
    })

    prevBtn.addEventListener("click", () => {
        fileNumber--
        if (fileNumber < 0) {
            fileNumber = audios.length - 1;
            console.log(fileNumber);
        }
        audioPath.src = audios[fileNumber].audioFile;
        audioName.innerText = audios[fileNumber].fileName;
        developer.innerText = audios[fileNumber].developer;
    })
    pauseBtn.addEventListener("click", () => {
        const playPausebtn = document.getElementById("play-pause-btn")
        const audioPaused = audioPath.paused
        if (audioPaused && playPausebtn.classList.contains("fa-caret-right")) {
            audioPath.play();
            playPausebtn.classList.add("fa-pause")
            playPausebtn.classList.remove("fa-caret-right")
        }else{
            audioPath.pause();
            playPausebtn.classList.remove("fa-pause")
            playPausebtn.classList.add("fa-caret-right")
        }
    })
};

loadAudios()