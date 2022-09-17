

const loadAudios = () => {
    const url  = "./audios.json";
    fetch(url)
    .then(res => res.json())
        .then(data => showAudios(data.audios))
}
const showAudios = (audios) => {
    let fileNumber = 0;
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
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
};

loadAudios()