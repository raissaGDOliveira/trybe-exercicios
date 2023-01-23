const notaCandidato = 61;

if (notaCandidato >= 80) {
    console.log("Parabéns, você faz parte de grupo das pessoas aprovadas!");
} else if (notaCandidato < 80 && notaCandidato >= 60) {
    console.log("Você está na nossa lista de espera.");
} else if (notaCandidato < 60) {
    console.log("Infelizmente você foi reprovado.");
}