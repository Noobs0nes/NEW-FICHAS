const vidaDiv = document.getElementById("vida");
const iniciativaDiv = document.getElementById("iniciativa");
const spellSlotsDiv = document.getElementById("spellSlots");
const notasDiv = document.getElementById("notas");
const fullDiv = document.getElementById("full");

function modo(pointer) {
    let classe
    switch (pointer) {
        case 'vida':
            classe = vidaDiv;
            break
        case 'iniciativa':
            classe = iniciativaDiv;
            break
        case 'spellSlots':
            classe = spellSlotsDiv;
            break
        case 'notas':
            classe = notasDiv;
            break
        case 'full':
            classe = fullDiv;
            break
        default:
            return;
    }
    vidaDiv.style.display ="none";
    iniciativaDiv.style.display ="none";
    spellSlotsDiv.style.display ="none";
    notasDiv.style.display ="none";
    fullDiv.style.display ="none";
    classe.style.display="block";
}