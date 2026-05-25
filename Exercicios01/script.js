function mostrarHora() {
var hora = document.querySelector("#horadia");
var data = new Date();
var horas = data.getHours();

hora.innerHTML = `Agora são: ${horas} horas.`;


if (horas < 12 && horas >= 4) {
    document.querySelector("#msg").innerHTML = "Bom dia!";
} else if (horas < 18 && horas >= 12) {
    document.querySelector("#msg").innerHTML = "Boa tarde!";
} else {
    document.querySelector("#msg").innerHTML = "Boa noite!";
}

}