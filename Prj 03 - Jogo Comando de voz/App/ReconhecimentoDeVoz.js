window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const elementoChute = document.getElementById('chute');

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e)
{
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaValidadeDoChute(chute);
}

function exibeChuteNaTela(chute)
{
    elementoChute.innerHTML =
        `
            <div>Você disse</div>
            <span class="box">${chute}</span>
        `
}

recognition.addEventListener('end', () =>
{
    recognition.start();
})
