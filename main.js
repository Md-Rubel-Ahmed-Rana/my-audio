

const loadAudios = () => {
    const url  = "./audios.json";
    fetch(url)
    .then(res => res.json())
        .then(data => showAudios(data.audios))
}
const showAudios = (audios) => {
    console.log(Array.prototype.lastIndexOf(audios));
    let fileNumber = 0;
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    const audioPath = document.getElementById("audio-file");
    audioPath.src = audios[0].audioFile;
    const audioName = document.getElementById("audio-name");
    audioName.innerText = audios[0].fileName;
    
    const developer = document.getElementById("developer")
    developer.innerText = audios[0].developer;
    
    nextBtn.addEventListener("click", () => {
        if (fileNumber === audios.length - 1) {
            fileNumber = 0;
            audioPath.src = audios[0].audioFile;
            audioName.innerText = audios[0].fileName;
            developer.innerText = audios[0].developer;
        }else{
            fileNumber++
            audioPath.src = audios[fileNumber].audioFile;
            console.log(audioPath.duration);
            audioName.innerText = audios[fileNumber].fileName;
            developer.innerText = audios[fileNumber].developer;
        }
    })

    prevBtn.addEventListener("click", () => {
        fileNumber--
        if (fileNumber < 0) {
            fileNumber = 4;
        }
        audioPath.src = audios[fileNumber].audioFile;
        console.log(audioPath.duration);
        audioName.innerText = audios[fileNumber].fileName;
        developer.innerText = audios[fileNumber].developer;
    })
};

loadAudios()