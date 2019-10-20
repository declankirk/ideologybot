global.fetch = require('node-fetch');


function genId() {
    var fs = require('fs');
    var text = fs.readFileSync('./ideologies.txt');
    var base = text.toString().split('\r\n');
    text = fs.readFileSync('./modifiers.txt');
    var modifiers = text.toString().split('\r\n');
    return modifiers[Math.floor(Math.random()*modifiers.length)] + base[Math.floor(Math.random()*base.length)];
}

function vowel(str) {
    let fstLetter = str.charAt(0).toLowerCase();
    if (fstLetter=='a' || fstLetter=='e'|| fstLetter=='i' || fstLetter=='o' || fstLetter=='u') {
        return true;
    }
    return false;
}

async function genImg() {
    let srcImg = await fetch('https://www.shitpostbot.com/api/randsource')
    .then(function(res) {
        return res.json();
    });

    let name = srcImg.sub.name;
    let id = genId();
    var mid;

    if (vowel(id)) mid = "is an";
    else mid = "is a";

    console.log(name + " " + mid + " " + id);
}

genImg();