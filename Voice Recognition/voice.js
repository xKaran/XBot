const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('You can speak now!!!');
}

recognition.onresult = function (event) {
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
}

function read(text) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if (text.includes('time'))
        speech.text = 'It is ' + new Date().getHours() + " " + new Date().getMinutes() + " right now";
    else if (text.includes('date'))
        speech.text = 'It is ' + new Date().getDate() + " " + "November" + " " + new Date().getFullYear() + " today";
    else if (text.includes('my birthday'))
        speech.text = 'Do you think you\'re famous! How the heck would I know your birthday!';
    else if (text.includes('love me'))
        speech.text = 'Of course, not! You piece of junk!';
    else if (text.includes('open Google'))
        window.open("http://www.google.com/")
    else if (text.includes('open YouTube'))
        window.open("http://www.youtube.com/")
    else if (text.includes('open WhatsApp'))
        window.open("http://www.whatsapp.com/")
    else if (text.includes('open Instagram'))
        window.open("http://www.instagram.com/")
    else if (text.includes('open Twitter'))
        window.open("http://www.twitter.com/")
    else if (text.includes('may i know your name'))
        speech.text = 'My name Is XBot';
    else if (text.includes('who created you'))
        speech.text = 'The Coder Created me';
    else if (text.includes('alert'))
        alert("Hello! I am an alert box!!");
    window.speechSynthesis.speak(speech);
}
// function read(text) {
    //     var speech = new SpeechSynthesisUtterance();
    //     speech.text = text;
    //     if (text.includes('time'))
    //         speech.text = 'It is ' + new Date().getHours() + " " + new Date().getMinutes() + " right now";
    //     else if (text.includes('my birthday'))
    //         speech.text = 'Do you think you\'re famous! How the heck would I know your birthday!';
    //     else if (text.includes('love me'))
    //         speech.text = 'Of course, not! You piece of junk!';
//     window.speechSynthesis.speak(speech);
// }
